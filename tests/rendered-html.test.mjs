import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const routes = [
  ["/", /URU VIRTUAL MUSEUM/i],
  ["/lake-poopo", /Lake Poopó/i],
  ["/about", /About the Urus/i],
  ["/impact", /Qotzuñi: People of the Lake/i],
  ["/resources", /Other Documentaries/i],
];

for (const [pathname, expected] of routes) {
  test(`server-renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(await response.text(), expected);
  });
}

test("ships the branded social preview and no starter preview", async () => {
  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});

test("ships the exact Figma display and handwriting fonts", async () => {
  await access(new URL("../public/fonts/felt-tip-woman-w01-bold.ttf", import.meta.url));
  await access(new URL("../public/fonts/felt-tip-woman-regular.ttf", import.meta.url));

  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /font-family: "FeltTipWomanW01-Bold"/);
  assert.match(css, /font-family: "Felt Tip Woman"/);
  assert.doesNotMatch(css, /Kalam/i);
});

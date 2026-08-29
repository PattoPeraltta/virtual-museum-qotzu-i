import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));
const port = 30_000 + (process.pid % 10_000);
const baseUrl = `http://127.0.0.1:${port}`;
const serverLogs = [];
let serverProcess;

test.before(async () => {
  serverProcess = spawn(process.execPath, [nextBin, "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    cwd: projectRoot,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  });

  for (const stream of [serverProcess.stdout, serverProcess.stderr]) {
    stream.on("data", (chunk) => serverLogs.push(chunk.toString()));
  }

  for (let attempt = 0; attempt < 100; attempt += 1) {
    if (serverProcess.exitCode !== null) {
      throw new Error(`Next.js server exited early:\n${serverLogs.join("")}`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch (error) {
      if (!(error instanceof TypeError)) throw error;
    }

    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  throw new Error(`Next.js server did not become ready:\n${serverLogs.join("")}`);
});

test.after(async () => {
  if (!serverProcess || serverProcess.exitCode !== null) return;
  serverProcess.kill("SIGTERM");
  await Promise.race([
    once(serverProcess, "exit"),
    new Promise((resolve) => setTimeout(resolve, 5_000)),
  ]);
  if (serverProcess.exitCode === null) serverProcess.kill("SIGKILL");
});

async function render(pathname = "/") {
  return fetch(`${baseUrl}${pathname}`, { headers: { accept: "text/html" } });
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
  await access(new URL("../public/fonts/montserrat-latin-variable.woff2", import.meta.url));
  await access(new URL("../public/fonts/wendy-one-latin-400.woff2", import.meta.url));
  await access(new URL("../public/fonts/felt-tip-woman-w01-bold.ttf", import.meta.url));
  await access(new URL("../public/fonts/felt-tip-woman-regular.ttf", import.meta.url));

  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  assert.match(css, /font-family: "Montserrat"/);
  assert.match(css, /font-family: "Wendy One"/);
  assert.match(css, /font-family: "FeltTipWomanW01-Bold"/);
  assert.match(css, /font-family: "Felt Tip Woman"/);
  assert.match(layout, /montserrat-latin-variable\.woff2/);
  assert.match(layout, /wendy-one-latin-400\.woff2/);
  assert.doesNotMatch(layout, /next\/font\/google/);
  assert.match(css, /\.global-lakes \.metric-grid span \{[^}]*var\(--font-accent\)/);
  assert.match(css, /\.ramsar \.metric-grid strong \{[^}]*var\(--font-accent\)/);
  assert.doesNotMatch(css, /Kalam/i);
});

test("keeps the full source width visible through the tall opening stage", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const heroStart = source.indexOf('<section className="home-hero"');
  const lakeIntro = source.indexOf('<section className="lake-intro"');
  const comparisonStory = source.indexOf('<section className="comparison-story"');

  assert.ok(heroStart >= 0);
  assert.ok(lakeIntro > heroStart);
  assert.ok(comparisonStory > lakeIntro);

  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.home-hero \{[^}]*119\.1667vw/);
  assert.match(css, /\.home-hero \.cover-image \{[^}]*object-fit: fill/);
  assert.match(css, /\.lake-intro \{[^}]*position: absolute[^}]*background: transparent/);
});

test("matches the unmarked Lake Poopó preface and omits scroll controls", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.overline--cream \{[^}]*text-decoration: none/);
  assert.match(css, /\.overline--cream::before \{[^}]*display: none[^}]*content: none/);
  assert.doesNotMatch(css, /\.scroll-cue\b|\.floating-top\b/);

  for (const [pathname] of routes) {
    const response = await render(pathname);
    const html = await response.text();
    assert.doesNotMatch(html, /Scroll to keep reading|Scroll to top/i);
  }
});

test("scales the Lake Poopó introduction from the 1920px Figma composition", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.lake-intro \{[^}]*17\.708vw[^}]*3\.333vw/);
  assert.match(css, /\.overline--cream \{[^}]*1\.615vw/);
  assert.match(css, /\.lake-intro h2 \{[^}]*11vw/);
  assert.match(css, /\.lake-intro__copy > p:last-child \{[^}]*1\.302vw/);
  assert.match(css, /\.stat-stack strong \{[^}]*white-space: nowrap/);
});

test("crops the comparison images past the dry asset's dark top row", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.image-compare > img \{[^}]*top: -1px[^}]*height: calc\(100% \+ 2px\)/);
});

test("matches the Figma mission image framing and compact three-line title", async () => {
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.doesNotMatch(source, /mission__wash/);
  assert.match(source, /what was lost,<br \/>what continues &amp;<br \/>How can we help/);
  assert.match(source, />Watch the film</);
  assert.match(css, /\.mission \{[^}]*59\.5833vw/);
  assert.match(css, /\.mission > img \{[^}]*object-position: left center/);
  assert.match(css, /\.mission__content \{[^}]*max-width: 1000px/);
  assert.match(css, /\.mission h2 \{[^}]*5vw[^}]*78px/);
  assert.doesNotMatch(css, /\.mission__wash/);
});

test("uses compact unlined Montserrat labels throughout the site", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.overline, \.section-label \{[^}]*font-family: var\(--font-body\)[^}]*text-decoration: none[^}]*font-size: 10px[^}]*font-weight: 600[^}]*letter-spacing: \.22em/);
});

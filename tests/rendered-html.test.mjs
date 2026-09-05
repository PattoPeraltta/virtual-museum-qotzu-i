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
  assert.match(css, /\.impact-owens figcaption h3 \{[^}]*var\(--font-accent\)[^}]*font-weight: 400/);
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

test("matches the unmarked Lake Poopó preface and prototype scroll controls", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.overline--cream \{[^}]*text-decoration: none/);
  assert.match(css, /\.overline--cream::before \{[^}]*display: none[^}]*content: none/);
  assert.match(css, /\.scroll-cue \{[^}]*position: absolute[^}]*left: 50%[^}]*border-radius: 99px/);
  assert.doesNotMatch(css, /\.floating-top\b/);

  const home = await render("/");
  const homeHtml = await home.text();
  assert.doesNotMatch(homeHtml, /Scroll to keep reading/i);
  assert.match(homeHtml, /Scroll to Top/i);

  for (const pathname of ["/lake-poopo", "/about", "/impact", "/resources"]) {
    const response = await render(pathname);
    const html = await response.text();
    assert.match(html, /Scroll to keep reading/i);
    assert.match(html, /Scroll to Top/i);
  }
});

test("keeps the Impact narrative and static initiative cards in Figma order", async () => {
  const source = await readFile(new URL("../app/impact/page.tsx", import.meta.url), "utf8");
  const interactive = await readFile(new URL("../app/components/Interactive.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  const documentary = source.indexOf('className="impact-documentary"');
  const ethics = source.indexOf('className="impact-ethics"');
  const initiatives = source.indexOf('className="impact-initiatives"');
  const global = source.indexOf('className="impact-global"');
  const support = source.indexOf('className="impact-support"');
  assert.ok(documentary >= 0 && documentary < ethics && ethics < initiatives && initiatives < global && global < support);
  assert.doesNotMatch(interactive, /openIndex|Read more|aria-expanded/);
  assert.match(interactive, /className="partner-card__detail"/);
  assert.match(css, /\.impact-metrics \{[^}]*grid-template-columns: repeat\(4, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.impact-support \{[^}]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.impact-owens \{[^}]*overflow: hidden/);
});

test("restores the seven-case Global Parallels carousel from the Figma prototype", async () => {
  const source = await readFile(new URL("../app/impact/page.tsx", import.meta.url), "utf8");
  const interactive = await readFile(new URL("../app/components/Interactive.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(source, /<GlobalParallelsCarousel \/>/);
  for (const title of ["Owens Lake", "Great Salt Lake", "Salton Sea", "Lake Urmia", "The Aral Sea", "Lake Chad", "Río Loa & The Atacama"]) {
    assert.match(interactive, new RegExp(`title: "${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
  }
  assert.match(interactive, /aria-roledescription="carousel"/);
  assert.match(interactive, /aria-label="Choose a case study"/);
  assert.match(interactive, /Previous case study/);
  assert.match(interactive, /Next case study/);
  assert.match(css, /@keyframes impact-carousel-image-in/);
  assert.match(css, /\.impact-carousel__dots button\.is-active::before/);
});

test("uses the seven supplied Global Parallels photographs", async () => {
  const assets = await readFile(new URL("../src/assets.ts", import.meta.url), "utf8");

  for (const image of [
    "owens-lake.jpg",
    "great-salt-lake.jpg",
    "salton-sea.jpg",
    "lake-urmia.jpg",
    "the-aral-sea.jpg",
    "lake-chad.jpg",
    "rio-loa-&-the-atacama.jpg",
  ]) {
    assert.match(assets, new RegExp(`"/assets/figma/${image.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&")}"`));
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

test("uses the full-resolution mining image instead of its preview export", async () => {
  const source = await readFile(new URL("../src/assets.ts", import.meta.url), "utf8");
  assert.match(source, /"lake_imgDji01722": "\/assets\/figma\/lake-dji01722\.jpg"/);
});

test("uses optimized high-resolution photographs for the home and Resources heroes", async () => {
  const source = await readFile(new URL("../src/assets.ts", import.meta.url), "utf8");
  assert.match(source, /"home_imgDsc034391": "\/assets\/figma\/home-dsc034391-high-res\.jpg"/);
  assert.match(source, /"resources_imgDsc029081": "\/assets\/figma\/resources-dsc029081-high-res\.jpg"/);
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

test("uses one hover-and-focus submenu pattern across every museum page", async () => {
  const chrome = await readFile(new URL("../app/components/SiteChrome.tsx", import.meta.url), "utf8");
  const lake = await readFile(new URL("../app/lake-poopo/page.tsx", import.meta.url), "utf8");
  const about = await readFile(new URL("../app/about/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  for (const label of ["Lake Poopó", "About the Urus", "Impact", "Resources"]) {
    assert.match(chrome, new RegExp(`label: "${label}"`));
  }
  assert.match(chrome, /className="site-nav-submenu"/);
  assert.doesNotMatch(lake, /lake-subnav/);
  assert.doesNotMatch(about, /about-subnav/);
  assert.match(css, /\.site-header nav \{[^}]*position: absolute[^}]*left: min\(25\.055vw, 452px\)/);
  assert.match(css, /\.site-nav-submenu \{[^}]*visibility: hidden[^}]*opacity: 0[^}]*pointer-events: none/);
  assert.match(css, /\.site-nav-item:hover \.site-nav-submenu, \.site-nav-item:focus-within \.site-nav-submenu \{[^}]*visibility: visible[^}]*opacity: 1/);
  assert.match(css, /\.site-nav-item:hover > \.site-nav-link::after/);
  assert.doesNotMatch(css, /\.site-nav-item:last-child \.site-nav-submenu/);
});

test("keeps museum canvases and Lake feature cards contained responsively", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  for (const pageClass of ["lake-page", "about-page", "impact-page", "resources-page"]) {
    assert.match(css, new RegExp(`\\.${pageClass} \\{[^}]*width: min\\(100%, 1804px\\)[^}]*margin-inline: auto[^}]*overflow: hidden`));
  }
  assert.match(css, /\.about-hero > img \{[^}]*translateX\(max\(-4\.96vw, -89px\)\) scale\(1\.24, 1\.205\)/);
  assert.match(css, /\.about-language \{[^}]*background: var\(--sand\)/);
  assert.match(css, /\.lake-page \{[^}]*--lake-gutter: min\(4\.66vw, 84px\)/);
  assert.match(css, /\.lake-metals \{[^}]*left: var\(--lake-gutter\)[^}]*width: min\(34\.2vw, 617px\)[^}]*height: min\(34\.76vw, 627px\)/);
  assert.match(css, /\.lake-keyfacts__layout \{[^}]*grid-template-columns: min\(20\.68vw, 373px\) minmax\(0, 1fr\)/);
  assert.match(css, /\.resources-page \{[^}]*--resources-gutter: min\(4\.66vw, 84px\)/);
  assert.match(css, /\.resources-documentary-grid \{[^}]*grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)[^}]*gap: min\(2\.55vw, 46px\)/);
  assert.match(css, /\.resources-documentary-grid article > div > p:not\(\.resource-label\)/);
  assert.match(css, /\.resources-gallery \.gallery__slide--current \{[^}]*width: min\(43\.65vw, 787px\)[^}]*height: min\(34\.8vw, 628px\)/);
  assert.match(css, /\.resources-gallery \.gallery__slide--previous,[\s\S]*?width: min\(21\.35vw, 385px\)[^}]*height: min\(11vw, 198px\)/);
  assert.match(css, /\.resources-thesis,[\s\S]*?resources-dsc0353411\.jpg/);
  assert.match(css, /\.resources-project--language \{[^}]*grid-template-columns: minmax\(0, 342fr\) minmax\(0, 1200fr\)/);
  assert.match(css, /\.resources-ramsar-stats \{[^}]*grid-template-columns: repeat\(4, minmax\(0, 1fr\)\)/);
  assert.doesNotMatch(css, /\.resources-documentaries[^\n{]*\{[^}]*width: 1804px/);
  assert.match(css, /@media \(max-width: 1050px\) \{[\s\S]*?\.lake-metals \{[^}]*position: static[^}]*width: auto[^}]*height: auto/);
});

test("fades only the image-led sections that use a Figma transition", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  for (const section of ["lake-hero", "lake-timeline", "about-hero", "impact-hero", "resources-hero", "about-craft", "about-resilience"]) {
    assert.match(css, new RegExp(`\\.${section}::after`));
  }
  assert.doesNotMatch(css, /\.home-hero::after|\.mission::after/);
  assert.match(css, /\.about-craft \{ --section-fade-rgb: 10 11 10; \}/);
  assert.match(css, /height: clamp\(170px, 16\.6vw, 300px\)/);
  assert.match(css, /rgb\(var\(--section-fade-rgb\) \/ \.94\) 90%/);
});

test("softens the seam between the depth chart and Lake Poopó timeline", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /\.lake-facts-science \{[^}]*--lake-timeline-sky: 174 200 206/);
  assert.match(css, /\.lake-facts-science::after \{[^}]*bottom: calc\(-1 \* clamp\(90px, 8\.3vw, 150px\)\)[^}]*height: clamp\(180px, 16\.6vw, 300px\)/);
  assert.match(css, /\.lake-facts-science::after \{[^}]*background: linear-gradient\(180deg,[^}]*rgb\(var\(--lake-timeline-sky\) \/ \.9\) 50%/);
  assert.match(css, /\.lake-facts-science::after \{[^}]*-webkit-backdrop-filter: blur\(clamp\(12px, 1\.2vw, 22px\)\)[^}]*backdrop-filter: blur\(clamp\(12px, 1\.2vw, 22px\)\)/);
  assert.match(css, /\.lake-facts-science::after \{[^}]*mask-image: linear-gradient\(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%\)/);
  assert.match(css, /\.lake-science__band \{[^}]*rgb\(var\(--lake-timeline-sky\)\) 100%/);
  assert.match(css, /@media \(max-width: 1050px\) \{[\s\S]*?\.lake-facts-science \{ --lake-timeline-sky: 133 179 200; \}/);
});

test("aligns the Lake Poopó timeline axis with the mountain horizon", async () => {
  const source = await readFile(new URL("../app/lake-poopo/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(source, /const timelineAxisY = 5630/);
  assert.match(source, /"--stem-span" as string/);
  assert.match(css, /\.lake-timeline__axis \{[^}]*right: 0; left: 0; height: 3px/);
  assert.match(css, /\.lake-timeline-card--top \.lake-timeline-card__stem \{[^}]*calc\(var\(--stem-span\) - 100%/);
  assert.match(css, /\.lake-timeline-card--bottom \.lake-timeline-card__stem \{[^}]*height: var\(--stem-span\)/);
  assert.match(css, /@media \(min-width: 1051px\) \{[\s\S]*?\.lake-timeline-card--top \{[^}]*--timeline-card-shift/);
});

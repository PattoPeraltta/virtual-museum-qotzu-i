"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { assets } from "../../src/assets";

export function ImageCompare() {
  const [position, setPosition] = useState(50);
  return (
    <figure className="image-compare" style={{ "--reveal": `${position}%` } as CSSProperties}>
      <img className="image-compare__after" src={assets.home_imgGeminiGeneratedImageVg7Pmnvg7Pmnvg7P1} alt="The dry bed of Lake Poopó" />
      <img className="image-compare__before" src={assets.home_imgGeminiGeneratedImage9J2Nmo9J2Nmo9J2N11} alt="Lake Poopó when it held water" />
      <div className="image-compare__line" aria-hidden="true"><span>↔</span></div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        aria-label="Compare Lake Poopó before and after it dried"
        onChange={(event) => setPosition(Number(event.target.value))}
      />
      <figcaption>Drag to compare the living lake with the dry lakebed.</figcaption>
    </figure>
  );
}

const partnerCards = [
  { eyebrow: "Environmental rights · Oruro", title: "Fundación de Pueblos de Montaña", detail: <>Dedicated to <strong>environmental rights and the protection of mountain communities,</strong> working closely with Indigenous peoples affected by environmental change.</> },
  { eyebrow: "Based in Oruro, Bolivia", title: "CEPA", detail: <>The Centro de Ecología y Pueblos Andinos has been instrumental in <strong>protecting the Uru people from discrimination</strong> and advocating for their rights in the face of environmental disaster.</> },
  { eyebrow: "Climate × creativity", title: "Earth Alliance", detail: <>Works at the intersection of climate and creativity to inspire action, collaborating with <strong>diverse networks of people and organizations</strong> to accelerate solutions to the climate crisis.</> },
  { eyebrow: "Global conservation", title: "Re:wild", detail: <>A global conservation organization dedicated to <strong>protecting and restoring biodiversity,</strong> working with over <strong>500 partners in more than 80 countries.</strong></> },
  { eyebrow: "Schmidt Family Foundation", title: "The 11th Hour Project", detail: <>A US-based initiative dedicated to bringing <strong>community-based environmental solutions</strong> to disenfranchised indigenous communities <strong>across the Americas.</strong></> },
  { eyebrow: "Public engagement · 2025", title: "Photography Contest", detail: <>As part of its broader public engagement, the campaign also ran the <strong>“We Are All People of the Same Lake” 2025 Photography Contest,</strong> extending the project’s visual documentation of the crisis through <strong>internationally exhibited submissions.</strong></> },
];

export function PartnerGrid() {
  return (
    <div className="partner-grid">
      {partnerCards.map((partner) => (
        <article className="partner-card" key={partner.title}>
          <p>{partner.eyebrow}</p>
          <h3>{partner.title}</h3>
          <div className="partner-card__detail"><p>{partner.detail}</p></div>
        </article>
      ))}
    </div>
  );
}

const globalParallels = [
  {
    eyebrow: "Payahuunadü · California, USA",
    title: "Owens Lake",
    coordinates: [-117.95, 36.43],
    body: "In the Owens Valley of California, known to the Paiute people as Payahuunadü, “the land of the flowing water,” a thriving lake once covered 500 square kilometers. In 1913, the city of Los Angeles completed an aqueduct that diverted the valley’s water southward, and within 13 years Owens Lake had been drained entirely. What remains is now the largest single source of dust pollution in the United States, generating toxic particulate matter that has caused chronic respiratory illness in surrounding communities for over a century. The cost of dust mitigation has long since surpassed the economic value of the water that was diverted.",
    src: assets.impact_imgOwensLakeCalifornia1,
    alt: "The exposed bed of Owens Lake in California",
    position: "center",
  },
  {
    eyebrow: "Shoshone Lands · Utah, USA",
    title: "Great Salt Lake",
    coordinates: [-112.5, 41.17],
    body: "The Great Salt Lake in Utah, the largest salt lake in the Western Hemisphere, has shrunk by two-thirds since the 1980s, driven by agricultural water diversion, primarily for alfalfa, and accelerated by climate change. The Shoshone and other Indigenous peoples of the Intermountain West have harvested salt, plants, waterfowl, and other resources from the lake for millennia, practices largely absent from mainstream conservation conversations. As the lakebed dries, it releases toxic dust containing arsenic and heavy metals that disproportionately affects communities of color and low-income neighborhoods along the Wasatch Front. Scientists have warned the lake could disappear entirely within years if current trends continue.",
    src: assets.impact_imgGreatSaltLake,
    alt: "Salt formations and the exposed bed of the Great Salt Lake in Utah",
    position: "center 58%",
  },
  {
    eyebrow: "Coachella & Imperial Valleys · California, USA",
    title: "Salton Sea",
    coordinates: [-115.84, 33.3],
    body: "California’s Salton Sea, the state’s largest lake by surface area, has been shrinking rapidly as agricultural water agreements redirect inflows elsewhere. As the lake recedes, it exposes a lakebed laden with pesticides, heavy metals, and selenium. Toxic dust storms from the exposed playa have been directly linked to elevated rates of childhood asthma among the predominantly Latino communities of the Coachella and Imperial Valleys. Each foot of decline in lake elevation is associated with a measurable increase in harmful particulate matter in surrounding counties.",
    src: assets.impact_imgSaltonSea,
    alt: "A person walking along the exposed shoreline of the Salton Sea in California",
    position: "center",
  },
  {
    eyebrow: "Northwestern Iran",
    title: "Lake Urmia",
    coordinates: [45.32, 37.7],
    body: "Lake Urmia, formerly the largest lake in the Middle East and the sixth-largest saltwater lake in the world, has lost over 90 percent of its water since the mid-1990s. The causes are a combination of climate change, dam construction on feeder rivers, and decades of politically motivated agricultural expansion. By September 2025, satellite imagery showed the lake had nearly entirely dried up. The crisis has exacerbated ethnic tensions between the local Azerbaijani population and the Iranian central government, who are accused of negligence and resource mismanagement. Salt and dust storms from the exposed lakebed now carry toxic heavy metals toward the cities of Tabriz and Urmia, threatening the health of millions, and the lake’s decline has triggered a “silent evacuation”, a mass migration from farming communities that once depended on its waters.",
    src: assets.impact_imgLakeUrmia,
    alt: "A stranded ship on the salt-covered bed of Lake Urmia in Iran",
    position: "center 54%",
  },
  {
    eyebrow: "Karakalpakstan · Uzbekistan & Kazakhstan",
    title: "The Aral Sea",
    coordinates: [59.5, 45],
    body: "The Aral Sea, once the fourth-largest lake in the world at 68,000 square kilometers, began shrinking in the 1960s when Soviet irrigation projects diverted its two feeder rivers, the Amu Darya and Syr Darya, to grow cotton in the surrounding desert. By 2007 it had lost over 90 percent of its area. The Karakalpak people of the autonomous region of Karakalpakstan in Uzbekistan bore the worst of the consequences: fisheries that once employed 40,000 to 60,000 people collapsed entirely, arable land salinized, and toxic dust storms carrying pesticide residue spread across the region. The storms caused severe respiratory illness, elevated infant mortality, and the mass displacement of an estimated 100,000 to 700,000 people. Kazakhstan has partially revived the Northern Aral Sea with a dam and World Bank assistance; the southern portion in Uzbekistan remains a desert, as the government pursues oil and gas extraction from the former lakebed.",
    src: assets.impact_imgAralSea,
    alt: "Abandoned fishing boats on the exposed bed of the Aral Sea",
    position: "center 58%",
  },
  {
    eyebrow: "Sahel · Cameroon, Chad, Niger & Nigeria",
    title: "Lake Chad",
    coordinates: [14.5, 13],
    body: "Lake Chad, once one of Africa’s largest lakes, shrank by approximately 90 percent between the 1960s and 1990s due to drought and increasing agricultural demand, before partially stabilizing. More than 30 million people across Cameroon, Chad, Niger, and Nigeria depend on the lake for food, water, and economic activity. The Mbororo pastoralists and dozens of other indigenous and farming communities have seen their livelihoods destroyed, their lands desertified, and their communities displaced, with over 5 million people uprooted across the broader Lake Chad Basin. Researchers have linked climate-driven resource scarcity around the lake to rising intercommunal conflict and the conditions that facilitated the rise of armed extremist groups in the Sahel.",
    src: assets.impact_imgLakeChad,
    alt: "The exposed dry bed of Lake Chad in the Sahel",
    position: "center 44%",
  },
  {
    eyebrow: "Atacameño & Quechua Lands · Atacama Desert",
    title: "Río Loa & The Atacama",
    coordinates: [-69.2, -22],
    body: "In the Atacama Desert, the driest non-polar desert on Earth, fragile water systems including the Río Loa, Bolivia’s longest river, are under severe pressure from mining operations extracting lithium, copper, and other minerals for global technology supply chains. Indigenous Atacameño and Quechua communities, whose agricultural and pastoral practices depend on the region’s rivers, wetlands, and salt flats, have documented the drying of water sources, the contamination of soil, and the destruction of ancient irrigation systems. The Río Loa, which once sustained communities from the Andes to the Pacific, is increasingly diverted and contaminated by industrial use.",
    src: assets.impact_imgAtacamaRiver,
    alt: "A river valley crossing the arid Atacama Desert in northern Chile",
    position: "center 35%",
  },
] as const;

type LonLat = readonly [number, number];

const lakePoopo: LonLat = [-67.08, -18.75];
const mapTop = 84;
const mapSize = { width: 360, height: 142 };
const locatorView = { width: 120, height: 75 };

const toMap = ([lon, lat]: LonLat) => ({ x: lon + 180, y: mapTop - lat });
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const formatCoordinates = ([lon, lat]: LonLat) =>
  `${Math.abs(lat).toFixed(1)}° ${lat >= 0 ? "N" : "S"} · ${Math.abs(lon).toFixed(1)}° ${lon >= 0 ? "E" : "W"}`;

function LakeLocator({ index }: { index: number }) {
  const slide = globalParallels[index];
  const lake = toMap(slide.coordinates);
  const home = toMap(lakePoopo);
  const offset = {
    x: clamp(lake.x - locatorView.width / 2, 0, mapSize.width - locatorView.width),
    y: clamp(lake.y - locatorView.height / 2, 0, mapSize.height - locatorView.height),
  };
  const lift = Math.hypot(lake.x - home.x, lake.y - home.y) * 0.22;
  const arc = `M${home.x} ${home.y}Q${(home.x + lake.x) / 2} ${(home.y + lake.y) / 2 - lift} ${lake.x} ${lake.y}`;

  return (
    <div className="impact-locator">
      <p className="impact-locator__label" key={`coords-${slide.title}`}>{formatCoordinates(slide.coordinates)}</p>
      <div className="impact-locator__map">
        <svg viewBox={`0 0 ${locatorView.width} ${locatorView.height}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g className="impact-locator__pan" style={{ transform: `translate(${-offset.x}px, ${-offset.y}px)` }}>
            <g className="impact-locator__graticule">
              {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((x) => <line key={`lon-${x}`} x1={x} x2={x} y1={0} y2={mapSize.height} />)}
              {[24, 54, 84, 114].map((y) => <line key={`lat-${y}`} x1={0} x2={mapSize.width} y1={y} y2={y} />)}
            </g>
            <image href="/assets/maps/world-dots.svg" width={mapSize.width} height={mapSize.height} />
            {globalParallels.map((item, itemIndex) => {
              if (itemIndex === index) return null;
              const point = toMap(item.coordinates);
              return <circle className="impact-locator__site" key={item.title} cx={point.x} cy={point.y} r={0.9} />;
            })}
            <path className="impact-locator__arc" key={`arc-${slide.title}`} d={arc} />
            <g className="impact-locator__home">
              <circle cx={home.x} cy={home.y} r={1.5} />
              <text x={home.x + 2.6} y={home.y + 1}>Lake Poopó</text>
            </g>
            <g className="impact-locator__pin" key={`pin-${slide.title}`}>
              <circle className="impact-locator__pulse" cx={lake.x} cy={lake.y} r={1.4} />
              <circle cx={lake.x} cy={lake.y} r={1.4} />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function GlobalParallelsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const slide = globalParallels[index];

  useEffect(() => {
    for (const adjacentIndex of [index - 1, index + 1]) {
      const image = new Image();
      image.src = globalParallels[(adjacentIndex + globalParallels.length) % globalParallels.length].src;
    }
  }, [index]);

  const show = (nextIndex: number, nextDirection: "next" | "previous") => {
    setDirection(nextDirection);
    setIndex((nextIndex + globalParallels.length) % globalParallels.length);
  };

  const previous = () => {
    setDirection("previous");
    setIndex((current) => (current - 1 + globalParallels.length) % globalParallels.length);
  };
  const next = () => {
    setDirection("next");
    setIndex((current) => (current + 1) % globalParallels.length);
  };

  return (
    <figure
      className="impact-owens impact-carousel"
      data-direction={direction}
      aria-label="Global pattern of vanishing lakes"
      aria-roledescription="carousel"
    >
      <img
        className="impact-carousel__image"
        key={`image-${slide.title}`}
        src={slide.src}
        alt={slide.alt}
        style={{ objectPosition: slide.position }}
      />
      <button
        className="impact-carousel__advance"
        type="button"
        onClick={next}
        aria-label={`Next case study: ${globalParallels[(index + 1) % globalParallels.length].title}`}
      />
      <figcaption key={`caption-${slide.title}`}>
        <p>{slide.eyebrow}</p>
        <h3>{slide.title}</h3>
        <p>{slide.body}</p>
      </figcaption>
      <LakeLocator index={index} />
      <div className="impact-carousel__dots" role="group" aria-label="Choose a case study">
        {globalParallels.map((item, dotIndex) => (
          <button
            type="button"
            key={item.title}
            className={dotIndex === index ? "is-active" : undefined}
            onClick={() => show(dotIndex, dotIndex < index ? "previous" : "next")}
            aria-label={`Show ${item.title}, ${dotIndex + 1} of ${globalParallels.length}`}
            aria-current={dotIndex === index ? "true" : undefined}
          />
        ))}
      </div>
      <div className="impact-carousel__controls">
        <button type="button" onClick={previous} aria-label="Previous case study">←</button>
        <span aria-hidden="true">{String(index + 1).padStart(2, "0")} / {String(globalParallels.length).padStart(2, "0")}</span>
        <button type="button" onClick={next} aria-label="Next case study">→</button>
      </div>
      <span className="visually-hidden" aria-live="polite">{slide.title}, case study {index + 1} of {globalParallels.length}</span>
    </figure>
  );
}

const gallery = [
  { src: assets.resources_imgDsc030861, caption: "Fieldwork on the dry lakebed" },
  { src: assets.resources_imgRectangle166, caption: "Qotzuñi community archive" },
  { src: assets.resources_imgDsc037601, caption: "Portrait from Lake Poopó" },
  { src: assets.resources_imgDsc037892, caption: "Life after the lake" },
  { src: assets.resources_imgDsc032701, caption: "The Altiplano landscape" },
];

export function ResourceGallery() {
  const [index, setIndex] = useState(3);
  const previous = () => setIndex((current) => (current - 1 + gallery.length) % gallery.length);
  const next = () => setIndex((current) => (current + 1) % gallery.length);
  const previousIndex = (index - 1 + gallery.length) % gallery.length;
  const nextIndex = (index + 1) % gallery.length;

  return (
    <div className="gallery">
      <button type="button" onClick={previous} aria-label="Previous photograph">←</button>
      <figure className="gallery__slide gallery__slide--previous" aria-hidden="true">
        <img src={gallery[previousIndex].src} alt="" />
      </figure>
      <figure className="gallery__slide gallery__slide--current">
        <img src={gallery[index].src} alt={gallery[index].caption} />
        <figcaption className="visually-hidden" aria-live="polite">{String(index + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")} · {gallery[index].caption}</figcaption>
      </figure>
      <figure className="gallery__slide gallery__slide--next" aria-hidden="true">
        <img src={gallery[nextIndex].src} alt="" />
      </figure>
      <button type="button" onClick={next} aria-label="Next photograph">→</button>
    </div>
  );
}

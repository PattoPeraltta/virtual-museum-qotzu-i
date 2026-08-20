import type { Metadata } from "next";
import { ImageCompare } from "./components/Interactive";
import { SiteChrome, SiteFooter } from "./components/SiteChrome";
import { assets } from "../src/assets";

export const metadata: Metadata = {
  title: "Uru Virtual Museum | Qotzuñi",
  description: "Explore Lake Poopó, the Uru Indigenous Nation, and the story of a lake that disappeared.",
};

const causes = [
  {
    number: "01",
    eyebrow: "Cause 01",
    title: "Mining contamination",
    image: assets.home_imgDji01113,
    alt: "Mining operations in the Bolivian highlands",
    body: <>Decades of tin and silver extraction bled <strong>heavy metals and toxic tailings</strong> into the rivers that fed the lake. Runoff poisoned the water years before the water vanished.</>,
  },
  {
    number: "02",
    eyebrow: "Cause 02",
    title: "Water diversion",
    image: assets.home_imgReasonImg,
    alt: "An aerial view of diverted water channels in the Altiplano",
    body: <>Upstream mines and expanding agriculture <strong>diverted the Desaguadero River</strong> and its tributaries, starving Lake Poopó of the inflow that had sustained it for millennia.</>,
  },
  {
    number: "03",
    eyebrow: "Cause 03",
    title: "Climate change",
    image: assets.home_imgReasonImg1,
    alt: "The cracked and dry bed of Lake Poopó",
    body: <>Intensifying droughts and record heat across the Altiplano <strong>accelerated evaporation</strong> on a shallow lake already pushed to its edge. By the end of 2015, the lakebed remained dry throughout the year.</>,
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero" id="top">
        <img className="cover-image" src={assets.home_imgDsc034391} alt="An Uru child standing on the dry bed of Lake Poopó" />
        <div className="home-hero__wash" />
        <SiteChrome light />
        <div className="home-hero__content">
          <p className="location-line"><strong>The Bolivian Altiplano</strong><span>·</span> 3,700 meters above sea level</p>
          <h1>URU VIRTUAL MUSEUM</h1>
        </div>
        <a className="scroll-cue" href="#lake"><span>↓</span> Scroll to keep reading</a>
      </section>

      <section className="lake-intro" id="lake">
        <div className="lake-intro__copy">
          <p className="overline overline--cream">Here once stood the <strong>second largest lake in Bolivia.</strong></p>
          <h2>Lake Poopó</h2>
          <p>A body of water that had existed for thousands of years, Lake Poopó was the lifeblood of the Bolivian highlands, fed by the Río Desaguadero and mountain streams.</p>
        </div>
        <div className="stat-stack" aria-label="Lake Poopó statistics">
          <article><span>Surface area</span><strong>3,000 km²</strong></article>
          <article><span>Existed for</span><strong>10,000+ yrs</strong></article>
        </div>
      </section>

      <section className="comparison-story" id="story">
        <div className="comparison-story__intro">
          <p className="handwritten handwritten--regular">The Uru Indigenous Nation of Lake Poopó built their communities on the lake.</p>
          <p>Their culture, language, sustenance, and identity were <strong>derived from the water.</strong></p>
        </div>
        <ImageCompare />
        <h2>By 2015, it was completely dry.</h2>
      </section>

      <section className="causes" id="causes">
        <p className="handwritten causes__title">What happened to Lake Poopó?</p>
        {causes.map((cause, index) => (
          <article className="cause-card" data-reverse={index % 2 === 1} key={cause.number}>
            <div className="cause-card__image">
              <img src={cause.image} alt={cause.alt} />
              <span>{cause.number}</span>
            </div>
            <div className="cause-card__copy">
              <p className="overline">{cause.eyebrow}</p>
              <h2>{cause.title}</h2>
              <p>{cause.body}</p>
            </div>
          </article>
        ))}
        <p className="accountability handwritten">No single actor was held responsible.</p>
        <div className="orange-rule" />
      </section>

      <section className="remain">
        <p className="accent-word">But...</p>
        <h2>THE URUS REMAIN</h2>
        <div className="remain__portraits">
          <figure><img src={assets.home_imgUruQotzuniElder} alt="An Uru elder" /></figure>
          <figure><img src={assets.home_imgUruQotzuniWomanByAnAdobeWall} alt="An Uru woman standing beside an adobe wall" /></figure>
          <figure><img src={assets.home_imgUruQotzuniChildInTheVillage} alt="An Uru child in the village" /></figure>
        </div>
        <p>In the face of displacement, assimilation, and environmental injustice, <strong>their communities persist</strong> and adapt their distinct culture to a landscape in which <strong>Lake Poopó is no longer present.</strong></p>
      </section>

      <section className="mission">
        <img src={assets.home_imgTwoPeopleCrouching} alt="Two Uru people working together on the dry lakebed" />
        <div className="mission__wash" />
        <div className="mission__content">
          <p>This platform exists to document</p>
          <h2>what was lost,<br />what continues &amp;<br />how we can help</h2>
          <div className="button-row">
            <a className="button button--orange" href="/resources">Enter the archive <span>→</span></a>
            <a className="button button--outline-light" href="/impact#film">Discover the film</a>
          </div>
        </div>
      </section>

      <nav className="museum-index" id="archive" aria-label="Explore the platform">
        <p className="overline">Explore the platform</p>
        {[
          ["01", "Lake Poopó", "/lake-poopo"],
          ["02", "About the Urus", "/about"],
          ["03", "Qotzuñi Impact Project", "/impact"],
          ["04", "Resources", "/resources"],
          ["05", "Interactive basin story", "/lake-poopo#basin"],
        ].map(([number, label, href]) => (
          <a key={number} href={href}><span>{number}</span><strong>{label}</strong><b aria-hidden="true">↗</b></a>
        ))}
      </nav>
      <SiteFooter />
    </main>
  );
}

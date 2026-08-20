import type { Metadata } from "next";
import { SiteChrome, SiteFooter } from "../components/SiteChrome";
import { assets } from "../../src/assets";

export const metadata: Metadata = {
  title: "Lake Poopó | Uru Virtual Museum",
  description: "The ecological, historical, and human story of Lake Poopó in the Bolivian Altiplano.",
};

const timeline = [
  ["1589", "First documented drought", "Lake Poopó’s tendency to evaporate during dry periods is first recorded by Spanish colonizers."],
  ["1980", "Quinoa baseline", "38,000 hectares of quinoa are cultivated across the Altiplano."],
  ["1983", "El Niño", "Severe drought drastically reduces water levels. The lake recovers, but the ecosystem is weakened."],
  ["1997–98", "El Niño", "A second intense cycle lowers water levels. Each event leaves the lake more fragile."],
  ["2001", "Quinoa boom", "Global demand drives a dramatic expansion of cultivation and irrigation."],
  ["2011", "Quinoa peak", "Cultivation reaches 70,000 hectares and water diversion measurably increases."],
  ["2014–16", "Record El Niño", "Extreme heat combines with decades of agricultural diversion and mining contamination."],
  ["2015", "Complete desiccation", "Lake Poopó is declared disappeared; Uru communities lose their primary subsistence base."],
];

const glossary = [
  ["Uru Murato", "People of Lake Poopó whose identity, language, and lifeways formed around the lake."],
  ["Puñaca Tinta María", "One of the three Uru communities that remain on the former lakeshore."],
  ["Vilañeque", "A lakeside Uru community navigating displacement after the water disappeared."],
  ["Llapallapani", "The third community of the Tres Comunidades Uru, historically subject to dual marginalization."],
  ["Qotamama", "Mother Lake — the spiritual center of Uru cosmology and source of life, identity, and ritual."],
  ["Aymarization", "The long process of adopting Aymara language and culture under political and social pressure."],
  ["Jalsuris", "Sacred whirlpools venerated through rituals that seek permission from Qotamama."],
];

export default function LakePoopoPage() {
  return (
    <main className="inner-page">
      <section className="page-hero page-hero--lake" id="top">
        <img src={assets.lake_imgDsc029631} alt="The dry Lake Poopó landscape" />
        <div className="page-hero__wash" />
        <SiteChrome active="lake" light />
        <div className="page-hero__content">
          <p>Section 1</p>
          <h1>Lake Poopó</h1>
          <p>The largest lake entirely contained within Bolivia once sustained the Uru people for over 10,000 years. It disappeared in December 2015.</p>
        </div>
        <a className="scroll-cue" href="#lifeblood">↓ Scroll to keep reading</a>
      </section>

      <section className="content-section" id="lifeblood">
        <p className="section-label">1A · Lake Poopó’s role in the region</p>
        <h2>The Lifeblood of the Altiplano</h2>
        <div className="two-column prose">
          <p>The <strong>Desaguadero River</strong> has historically been Lake Poopó’s primary water source. Additional inflows come from the Juchusuma, Pazña, and Huanuni Rivers, originating in the mineral-rich Cordillera Central. These highly seasonal rivers flow primarily between November and April.</p>
          <p><strong>For over 10,000 years, the Titicaca–Desaguadero–Poopó–Salares basin sustained human life</strong> in the high Andes. Its waters supported early agropastoralist communities and later Tiwanaku and Inca societies.</p>
        </div>
        <figure className="wide-figure" id="basin">
          <img src={assets.lake_imgChatGptImageJun262026070010Pm1} alt="Map of the Titicaca, Desaguadero, Poopó, and Salares basin" />
          <figcaption>The TDPS hydrological axis links Lake Titicaca, the Desaguadero River, Lake Poopó, and the salares.</figcaption>
        </figure>
      </section>

      <section className="science-band">
        <div className="content-section">
          <p className="section-label section-label--light">1B · Scientific overview</p>
          <div className="science-band__intro">
            <h2>Hydrology &amp; Ecosystem Data</h2>
            <div className="metric-grid">
              <article><span>Maximum area</span><strong>3,000 km²</strong></article>
              <article><span>Average depth</span><strong>1.5 m</strong></article>
              <article><span>Elevation</span><strong>3,686 m</strong></article>
              <article><span>Desiccation</span><strong>2015</strong></article>
            </div>
          </div>
          <img className="science-band__image" src={assets.lake_imgDsc031014} alt="The exposed bed of Lake Poopó" />
          <div className="timeline" aria-label="Lake Poopó timeline">
            {timeline.map(([year, title, description]) => (
              <article key={year}>
                <span>{year}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section tin-belt">
        <p className="section-label">1C · Mining contamination</p>
        <h2>The Bolivian Tin Belt</h2>
        <div className="two-column prose">
          <p>The Azanaques Mountains east of Lake Poopó have been <strong>mined since pre-Columbian times.</strong> Tin, silver, zinc, and complejo are extracted by state-owned, private, and largely unregulated cooperative operations.</p>
          <p><strong>Arsenic concentrations far above health limits</strong> have been found in tributaries, the lake basin, and groundwater. With aquatic resources gone, mining is now one of the few economic opportunities remaining for many Uru families.</p>
        </div>
        <figure className="photo-overlay">
          <img src={assets.lake_imgDji01722} alt="A mining operation in the Bolivian Tin Belt" />
          <figcaption><span>Mining contamination</span><strong>Streams diverted, tailings exposed, oversight absent.</strong></figcaption>
        </figure>
      </section>

      <section className="content-section people-section">
        <p className="section-label">1D · Nación Originaria Uru</p>
        <h2>People of the Altiplano Lake</h2>
        <div className="people-section__grid">
          <div className="prose">
            <p>The Uru are among the oldest Indigenous peoples of the Andes. Their communities developed a distinct lake-based culture alongside — but never identical to — Aymara and Quechua societies.</p>
            <p>When the lake disappeared, fishing, hunting, ritual, and collective memory lost their physical center. The communities remain, adapting their identity to a landscape transformed into dust.</p>
          </div>
          <img src={assets.lake_imgDsc029491} alt="Members of an Uru community walking across the Altiplano" />
        </div>
        <div className="glossary-grid">
          {glossary.map(([term, definition]) => <article key={term}><p className="overline">Uru glossary</p><h3>{term}</h3><p>{definition}</p></article>)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}


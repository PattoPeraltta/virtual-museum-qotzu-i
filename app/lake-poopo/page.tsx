import type { Metadata } from "next";
import { ScrollCue, SiteChrome, SiteFooter } from "../components/SiteChrome";
import { assets } from "../../src/assets";

export const metadata: Metadata = {
  title: "Lake Poopó | Uru Virtual Museum",
  description: "The ecological, historical, and human story of Lake Poopó in the Bolivian Altiplano.",
};

const keyFacts = [
  ["Surface area at peak", "3,000 km²"],
  ["Year of desiccation", "2015"],
  ["Years of human habitation", "10,000+"],
  ["Mining operations", "400+"],
];

const mapOverlayCards = [
  { label: "First water source", value: "Lake Titicaca", sub: null, variant: "glass" as const, left: 3.06, top: 11.02, width: 22.8 },
  { label: "Primary inflow", value: "Desaguadero", sub: "River from Lake Titicaca", variant: "glass" as const, left: 3.06, top: 45.07, width: 22.8 },
  { label: "Salinity level riser", value: "Salares", sub: null, variant: "glass" as const, left: 3.06, top: 82.71, width: 22.8 },
  { label: "Basin name", value: "TDPS", sub: "Titicaca · Desaguadero · Poopó · Salares", variant: "glass" as const, large: true, left: 60.21, top: 3.9, width: 36.61 },
  { label: "Seasonal flow", value: "Nov–Apr", sub: "Mountain streams highly seasonal", variant: "glass" as const, left: 78.3, top: 25.86, width: 18.53 },
  { label: "Civilizations sustained", value: "Tiwanaku · Inca", sub: "Complex irrigation systems engineered", variant: "glass" as const, left: 78.3, top: 40.02, width: 18.52 },
];

const timeline = [
  { year: "1589", title: "First Documented Drought", body: "Lake Poopó's tendency to evaporate during dry periods first recorded by Spanish colonizers.", x: 68, y: 5473, w: 310, anchor: "top" as const },
  { year: "1983", title: "El Niño", body: "Severe drought drastically reduces water levels. The lake recovers, but the ecosystem is weakened.", x: 508, y: 5473, w: 271, anchor: "top" as const },
  { year: "2001", title: "El Quinoa Boom", body: "Surging global demand drives dramatic expansion of cultivation and irrigation across the TDPS basin.", x: 927, y: 5473, w: 271, anchor: "top" as const },
  { year: "2014–16", title: "El Niño", body: "The most severe El Niño on record combines with decades of agricultural diversion and mining contamination.", x: 1347, y: 5473, w: 285, anchor: "top" as const },
  { year: "1980", title: "Quinoa Baseline", body: "38,000 ha of quinoa cultivated across the altiplano. The reference point for what follows.", x: 186, y: 5808, w: 271, anchor: "bottom" as const },
  { year: "1997–98", title: "El Niño", body: "A second intense El Niño cycle lowers water levels. Each event leaves the lake more fragile.", x: 607, y: 5808, w: 271, anchor: "bottom" as const },
  { year: "2011", title: "Quinoa Peak", body: "Cultivation reaches 70,000 hectares, nearly double the 1980 figure. Water diversion measurably increases.", x: 1028, y: 5808, w: 271, anchor: "bottom" as const },
  { year: "2015", title: "Complete Desiccation", body: "Lake Poopó is declared disappeared. The Uru communities lose their primary source of subsistence.", x: 1415, y: 5808, w: 331, anchor: "bottom" as const, accent: true },
];

const timelineOriginY = 4823;
const timelineHeight = 1460;
const timelineAxisY = 5630;

const communities = [
  ["Language: Chholo (extinct) + Spanish", "Puñaka Tinta María", "The community most reliant on lake resources. Now facing displacement and economic collapse following the 2015 desiccation."],
  ["Identity: Uru-Murato (self-classified)", "Vilañeque", "One of the three Tres Comunidades Uru del Lago Poopó. Practices small-scale agriculture alongside lake subsistence."],
  ["Distinct from: Aymara & Quechua", "Llapallapani", "Third community of the Tres Comunidades Uru. Subject to dual marginalization within both colonial and indigenous power structures."],
];

const concepts = [
  ["Mother Lake", "Qotamama", "The spiritual center of Uru cosmology. As Pachamama is Mother Earth to Andean peoples, Qotamama is the sacred lake: source of life, identity, and ritual."],
  ["Cultural assimilation", "Aymarization", "The process of adopting Aymara language and culture, imposed on Urus by pre-colonial empires and intensified by the Spanish. Began pre-Columbian, accelerated through the 20th century."],
  ["Sacred whirlpools", "Jalsuris", "Whirlpools forming on the lake surface are venerated phenomena. Rituals performed before entering the lake seek permission from Qotamama and reaffirm collective Uru identity."],
];

const metals: [string, string, number][] = [
  ["Lead (Pb)", "Critical", 0.93],
  ["Arsenic (As)", "Critical", 0.91],
  ["Cadmium (Cd)", "High", 0.75],
  ["Mercury (Hg)", "High", 0.69],
  ["Zinc (Zn)", "Elevated", 0.51],
];

function DepthChart() {
  return (
    <div className="lake-chart" aria-label="Lake Poopó depth by year">
      <p className="lake-chart__title">Depth by Years</p>
      <div className="lake-chart__plot">
        <div className="lake-chart__y-axis" aria-hidden="true">
          <span>3.0</span>
          <span>2.0</span>
          <span>1.0</span>
          <span>0.5</span>
        </div>
        <div className="lake-chart__canvas">
          <svg viewBox="0 0 1235 198" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="198" x2="1235" y2="198" stroke="rgb(36 63 89 / .12)" strokeWidth="1" />
            <line x1="0" y1="144" x2="1235" y2="144" stroke="rgb(36 63 89 / .08)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="99" x2="1235" y2="99" stroke="rgb(36 63 89 / .08)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="54" x2="1235" y2="54" stroke="rgb(36 63 89 / .08)" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="9" x2="1235" y2="9" stroke="rgb(36 63 89 / .08)" strokeWidth="1" strokeDasharray="3 3" />
            <polyline
              fill="none"
              stroke="#243f59"
              strokeWidth="3.2"
              strokeLinejoin="round"
              strokeLinecap="round"
              points="0,115 20,143 41,149 55,85 70,63 84,103 102,123 121,139 138,155 157,168 176,168 194,162 214,169 234,154 253,149 272,149 290,119 307,96 330,79 367,59 380,151 388,160 405,104 420,67 435,50 450,55 465,70 483,84 500,95 520,87 539,62 557,84 574,114 585,143 601,164 617,173 630,128 647,106 660,162 676,126 690,177 702,179 715,64 735,88 756,105 775,118 794,137 813,127 830,142 848,121 866,136 884,112 899,148 916,166 934,178 951,184 963,198 1007,198 1025,193 1042,198 1058,191 1074,198 1091,194 1110,198 1230,198"
            />
            <line x1="963" y1="-2" x2="963" y2="198" stroke="#f23400" strokeWidth="3" strokeDasharray="6 4" />
          </svg>
          <p className="lake-chart__marker">Dec. 2015 - Lake dries</p>
        </div>
        <div className="lake-chart__x-axis" aria-hidden="true">
          {["1960", "1970", "1980", "1990", "2000", "2010", "2024"].map((year) => (
            <span key={year}>{year}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LakePoopoPage() {
  return (
    <main className="lake-page inner-page">
      <section className="lake-hero" id="top">
        <img src={assets.lake_imgDsc029631} alt="The dry Lake Poopó landscape" />
        <SiteChrome active="lake" light />
        <div className="lake-hero__content">
          <p className="lake-hero__label"><span aria-hidden="true" />Section 1</p>
          <h1>LAKE POOPÓ</h1>
          <p className="lake-hero__deck">
            The largest lake entirely contained within Bolivia, once 3,000 km² of shallow brackish water sustaining the Uru people for over 10,000 years. It disappeared in December 2015.
          </p>
        </div>
        <ScrollCue href="#lifeblood" />
      </section>

      <section className="lake-section lake-section--1a" id="lifeblood">
        <p className="lake-label lake-label--dark"><span aria-hidden="true" />1A · Lake Poopó&apos;s role in the region</p>
        <h2>The Lifeblood of the Altiplano</h2>
        <div className="lake-columns prose">
          <p>
            The <strong>Desaguadero River</strong> has historically been Lake Poopó&apos;s primary water source. Additional inflows come from the Juchusuma, Pazña, and Huanuni Rivers, originating in the mineral-rich Cordillera Central, an area heavily exploited for tin, silver, and other metals. <strong>These rivers are highly seasonal</strong>, flowing primarily between November and April.
          </p>
          <p>
            <strong>For over 10,000 years, the Titicaca–Desaguadero–Poopó–Salares (TDPS) basin has sustained human life</strong> in the high Andes. The waters of Lake Titicaca and the Desaguadero River supported early agropastoralist communities and later served as a foundation for Tiwanaku and Inca Empire societies, who engineered sophisticated irrigation systems to ensure agricultural productivity across the arid altiplano.
          </p>
        </div>
        <figure className="lake-map" id="basin">
          <img src={assets.lake_imgChatGptImageJun262026070010Pm1} alt="Map of the Titicaca, Desaguadero, Poopó, and Salares basin" />
          <div className="lake-map__overlays">
            {mapOverlayCards.map((card) => (
              <article
                key={card.label}
                className={`lake-map-card lake-map-card--${card.variant}${card.large ? " lake-map-card--wide" : ""}`}
                style={{
                  left: `${card.left}%`,
                  top: `${card.top}%`,
                  width: `${card.width}%`,
                }}
              >
                <p className="lake-map-card__label"><span aria-hidden="true" />{card.label}</p>
                <strong>{card.value}</strong>
                {card.sub ? <p>{card.sub}</p> : null}
              </article>
            ))}
          </div>
        </figure>
      </section>

      <section className="lake-facts-science" id="key-facts">
        <div className="lake-keyfacts__layout">
          <div className="lake-stat-stack">
            <p className="lake-label lake-label--light"><span aria-hidden="true" />Key facts</p>
            {keyFacts.map(([label, value]) => (
              <article key={label}>
                <p className="lake-stat-stack__label"><span aria-hidden="true" />{label}</p>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
          <img className="lake-keyfacts__photo" src={assets.lake_imgDsc029491} alt="A broken boat on the dry bed of Lake Poopó" />
        </div>

        <div className="lake-science__band" id="scientific">
          <p className="lake-label lake-label--light"><span aria-hidden="true" />1B · Scientific overview</p>
          <h2>Hydrology &amp; Ecosystem Data</h2>
          <div className="lake-columns lake-science-copy prose prose--light">
            <div>
              <p>
                Lake Poopó, a partially saline body of water in the Department of Oruro, formed the southernmost basin of the TDPS system. <strong>An enclosed hydrological network that has shaped the Andean landscape</strong> for millennia.
              </p>
              <p>
                The lake&apos;s shallow depth, averaging just 1.5 meters, made it <strong>highly sensitive to both seasonal precipitation and long-term climatic trends</strong>, but was deep enough to support several species of fish, including the introduced pejerrey, and 35 species of birds, including Andean flamingos. Beginning in the early 2000s, surging global demand for quinoa as a health food, particularly in North American and European markets, drove a dramatic expansion of quinoa cultivation across the Bolivian and Peruvian altiplano.
              </p>
            </div>
            <div>
              <p>
                The price of quinoa nearly quadrupled, and the area dedicated to its cultivation grew from 38,000 hectares in 1980 to 70,000 hectares by 2011. By 2013, Peru and Bolivia together accounted for more than 95% of global quinoa supply. This agricultural intensification brought with it significant hydrological consequences.
              </p>
              <p>
                <strong>The conversion of native vegetation to cultivated land</strong>, combined with mechanization, shorter fallow periods, and inefficient irrigation practices, increased evapotranspiration across the altiplano, drawing down the region&apos;s total water storage. Remote sensing data shows a significant increase in quinoa cultivation from 2001 corresponding directly with a measurable decline in regional vegetation health and water availability. Researchers have specifically identified agricultural activity as a contributing factor in the complete desiccation of Lake Poopó in December 2015, alongside climate variability and mining-related contamination and diversion.
              </p>
            </div>
          </div>
          <DepthChart />
        </div>
      </section>

      <section
        className="lake-timeline"
        aria-label="Lake Poopó timeline"
        style={{
          ["--lake-timeline-axis" as string]: `${((timelineAxisY - timelineOriginY) / timelineHeight) * 100}%`,
        }}
      >
        <img src={assets.lake_imgDsc031014} alt="" aria-hidden="true" />
        <div className="lake-timeline__axis" aria-hidden="true" />
        <div className="lake-timeline__cards">
          {timeline.map((entry) => (
            <article
              key={entry.year}
              className={`lake-timeline-card lake-timeline-card--${entry.anchor}${entry.accent ? " lake-timeline-card--accent" : ""}`}
              style={{
                left: `${(entry.x / 1804) * 100}%`,
                top: `${((entry.y - timelineOriginY) / timelineHeight) * 100}%`,
                width: `${(entry.w / 1804) * 100}%`,
                ["--stem-span" as string]: `min(${(Math.abs(entry.y - timelineAxisY) / 1804) * 100}vw, ${Math.abs(entry.y - timelineAxisY)}px)`,
              }}
            >
              <span className="lake-timeline-card__stem" aria-hidden="true" />
              <div className="lake-timeline-card__head">
                <span>{entry.year}</span>
                <h3>{entry.title}</h3>
              </div>
              <p>{entry.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lake-section lake-section--1c" id="mining">
        <p className="lake-label lake-label--dark"><span aria-hidden="true" />1C · Mining contamination</p>
        <h2>The Bolivian Tin Belt</h2>
        <div className="lake-columns lake-mining-copy prose">
          <div>
            <p>
              The Azanaques Mountains, bordering Lake Poopó to the east, part of the Andean Cordillera Central, have been <strong>mined since pre-Columbian times.</strong> The main minerals extracted are <strong>tin, silver, zinc, and complejo (a mixture of various rare earth metals).</strong>
            </p>
            <p>
              Known as the Bolivian Tin Belt, this region hosts three types of operations: state-owned (Huanuni Tin Mine), private (Inti Raymi Corporation), and unregulated cooperatives. The refinement process heavily diverts and contaminates the streams that flow into the lake.
            </p>
          </div>
          <div>
            <p>
              <strong>Arsenic concentrations far exceeding WHO limits have been found in both tributary rivers and the lake basin.</strong> Even groundwater, once thought immune, has been contaminated. Sadly, with the loss of the lake&apos;s aquatic resources, <strong>mining is now one of the only economic opportunities remaining for the Uru communities.</strong> Many members have no choice but to work in unregulated cooperative mines where labor, safety, and contamination oversight is nearly absent.
            </p>
          </div>
        </div>
        <div className="lake-mining-visual">
          <img src={assets.lake_imgDji01722} alt="A mining operation in the Bolivian Tin Belt" />
          <div className="lake-metals">
            <div className="lake-metals__intro">
              <p className="lake-metals__label"><span aria-hidden="true" />Found in Lake Poopó basin</p>
              <h3>Heavy metal contamination</h3>
            </div>
            <div className="lake-metals__bars">
              {metals.map(([name, level, amount]) => (
                <article key={name}>
                  <div className="lake-metals__meta">
                    <span>{name}</span>
                    <span>{level}</span>
                  </div>
                  <div className="lake-metals__track" aria-hidden="true">
                    <span className="lake-metals__fill" style={{ width: `${amount * 100}%` }} />
                    <span className="lake-metals__empty" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lake-section lake-section--1d" id="people">
        <p className="lake-label lake-label--dark"><span aria-hidden="true" />1D · Nación Originaria Uru: overview</p>
        <h2>People of the Altiplano Lakes</h2>
        <div className="lake-people-grid">
          <div className="prose">
            <p>
              The Nación Originaria Uru is an officially recognized indigenous nation in the Republic of Bolivia, and its communities are native to the water-locked altiplano plateau that stretches across southern Peru, western Bolivia, and northeastern Chile. Historically, the Urus lived on artificial islands of totora reeds in the lakes and rivers that make up the TDPS basin. In the modern day, the Urus are settled in <strong>three primary zones:</strong> on the southern and western coasts of Lake Titicaca, in the Bolivian municipality of Chipaya north of the Coipasa Salt Flat, and on the eastern banks of Lake Poopó and the Desaguadero River.
            </p>
            <p>
              The communities of Lake Poopó, who used to identify as Uru-Muratos, now self-classify as the <strong>Tres Comunidades Uru del Lago Poopó</strong> (&ldquo;the three Uru communities of Lake Poopó&rdquo;), encompassing the villages of <strong>Puñaka Tinta María, Vilañeque, and Llapallapani.</strong> These three locations are the only remaining subset of the Uru nation that had continued to rely predominantly on the hydrological resources of Lake Poopó for subsistence into the twenty-first century.
            </p>
            <p>
              Crucially, Urus have always constituted a separate ethnic group than other indigenous peoples of Bolivia — <strong>they are neither Aymara nor Quechua.</strong> The earliest available documentation of the pre-Columbian empires made this distinction, with the predecessors to the Inca placing <strong>&ldquo;water-dwelling Uros&rdquo;</strong> into distinct tribute categories and marginalizing them due to their subsistence on the lake. Spanish conquistadors subsequently continued this view of the Uru people, creating a <strong>dual-marginalization paradigm</strong> wherein the Europeans subjugated the indigenous world of the altiplano, and Urus were <strong>further disenfranchised by other indigenous groups within that world.</strong>
            </p>
          </div>
          <img src={assets.lake_imgDsc033071} alt="Members of an Uru community on the Altiplano" />
        </div>
        <div className="lake-community-grid">
          {communities.map(([label, title, body]) => (
            <article key={title}>
              <p className="lake-community-grid__label"><span aria-hidden="true" />{label}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lake-section lake-section--1e" id="qotzuni">
        <p className="lake-label lake-label--dark"><span aria-hidden="true" />1E · Qotzuñi: people of the lake</p>
        <h2>Qotzuñi</h2>
        <p className="lake-etymology"><strong>Qot (lake) + zuñ (person) = People of the Lake.</strong><br />From Chholo, the now-extinct language of the Urus of Lake Poopó.</p>
        <div className="lake-qotzuni-grid">
          <img src={assets.lake_imgDsc033481} alt="Uru community members near the former lakeshore" />
          <div className="prose">
            <p>
              In times of abundant water, Uru-Qotzuñi communities spent weeks at a time on <strong>floating islands of totora</strong>, subsisting off the lake&apos;s water, fish, aquatic plants, and fowl. Their <strong>water-based culture</strong> made them a target of <strong>pre-Columbian discrimination</strong>, as they did not contribute to Inca tribute or corvée labor demands and were considered idle. They were at times forcefully removed from the lake and <strong>coerced to assimilate.</strong>
            </p>
            <p>
              As other Andean cultures speak of Pachamama (Mother Earth), the Urus of Lake Poopó honor <strong>Qotamama, Mother Lake</strong>, as the sacred center of their world. Before entering the lake, community members perform rituals seeking permission and reaffirming collective identity. Among the most venerated phenomena are the jalsuris (whirlpools that form on the lake&apos;s surface), considered <strong>sacred gateways.</strong>
            </p>
            <p>
              The pressures of colonial government and the Bolivian state led to the Uru transition <strong>&ldquo;al seco&rdquo;</strong> (to dry land) around the early 20th century. They formed fishing cooperatives, but after a <strong>mass pejerrey die-off</strong> and the <strong>drying of the lake</strong>, fishing is no longer viable. While two of the three communities practice small-scale agriculture, <strong>food insecurity and economic hardship persist across all three.</strong>
            </p>
          </div>
        </div>
        <div className="lake-concept-grid">
          {concepts.map(([label, title, body]) => (
            <article key={title}>
              <p className="lake-concept-grid__label"><span aria-hidden="true" />{label}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

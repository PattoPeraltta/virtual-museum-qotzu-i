import type { Metadata } from "next";
import { ResourceGallery } from "../components/Interactive";
import { ScrollCue, SiteChrome, SiteFooter } from "../components/SiteChrome";
import { assets } from "../../src/assets";

export const metadata: Metadata = {
  title: "Resources | Uru Virtual Museum",
  description: "Films, photography, oral history, and academic research about Lake Poopó and the Uru communities.",
};

const documentaries = [
  {
    year: "2008",
    director: "Aaron I. Naar",
    title: "Los Hombres del Lago",
    image: assets.resources_imgLosHombrsDelLago1,
    body: <>This American documentary focuses on the community of <strong>Puñaca Tinta María,</strong> recounting their history, customs, and challenges — including poverty, lack of land and political representation, contamination, and climate change. Narrated by Uru authority <strong>Daniel Mauricio Choque,</strong> the same figure who later led the language revival project. The film premiered at <strong>Hot Docs 2008</strong> and screened at several hundred venues across South America as part of the international environmental education series <strong>Planet.Move.</strong></>,
    links: [["IMDB", "https://www.imdb.com/"]],
  },
  {
    year: "2022",
    director: "Ivan Molina",
    title: "La Illa",
    image: assets.resources_imgLaIlla1,
    body: <>Directed by <strong>Iván Molina Velásquez,</strong> this Bolivian documentary follows the community of Puñaca Tinta María on the shores of the extinct Lake Poopó, holding onto memories tied to the lake. Facing climate change and loss of their territory, they must reinvent their bonds — <strong>within the community and with the neighboring Aymara</strong> — to preserve an identity they hold with pride, as tourism emerges as a path forward. <strong>The film premiered in 2022, filmed in Quechua and Uru.</strong></>,
    links: [["RETINA LATINA", "https://www.retinalatina.org/"]],
  },
  {
    year: "2023",
    director: "Sara Aliaga Ticona",
    title: "Urus, del agua vengo",
    image: assets.resources_imgPlaceholderVideoPlaceholder,
    body: <>A short documentary by Bolivian artist, journalist, and <strong>National Geographic Explorer Sara Aliaga Ticona,</strong> produced in collaboration with the community of <strong>Puñaca Tinta María.</strong> The film depicts the worldview, struggle, and resilience of the Urus del Lago Poopó, and accompanied a <strong>photographic exhibition</strong> by the same artist. Supported by the <strong>National Geographic Society, the Pulitzer Center, and Pro Helvetia South America.</strong></>,
    links: [["INSTAGRAM", "https://www.instagram.com/"], ["EQUAL TIMES", "https://www.equaltimes.org/"]],
  },
] as const;

const bibliography = [
  {
    category: "Science · 11 sources",
    items: [
      ["El Niño and La Niña Years", "psl.noaa.gov"],
      ["Past ENSO Events", "psl.noaa.gov"],
      ["Agroclimatic Constraints for Rainfed Agriculture in the Bolivian Altiplano", "doi.org/10.1016/j.jaridenv.2007.02.005"],
      ["Dynamics of Reference Evapotranspiration in the Bolivian Highlands", "doi.org/10.1016/j.agrformet.2004.03.005"],
      ["Interannual Rainfall Variability over the South American Altiplano", "doi.org/10.1175/1520-0442(2001)014"],
      ["Unraveling the Impacts of Droughts and Agricultural Intensification on the Altiplano Water Resources", "doi.org/10.1016/j.agrformet.2019.107710"],
      ["Mechanisms of Summertime Precipitation Variability in the Bolivian Altiplano", "doi.org/10.1002/joc.2424"],
      ["Precipitation Trends over the Southern Andean Altiplano from 1981 to 2018", "doi.org/10.1016/j.jhydrol.2020.125485"],
      ["Long-Term and Extreme Water Level Variations of the Shallow Lake Poopó, Bolivia", "doi.org/10.1623/hysj.51.1.98"],
      ["Endorheic Basins", "doi.org/10.1002/9781444347166.ch31"],
      ["A Terminal Case? Shrinking Inland Seas Expose Salty Particulates and More", "doi.org/10.1289/EHP12835"],
    ],
  },
  {
    category: "Colonial History · 12 sources",
    items: [
      ["El peso del Archivo: Notables daños de no guardar a los indios sus fueros (1571)", "doi.org/10.5195/CT/2017.225"],
      ["Coronica moralizada del Orden de San Augustin en el Peru", "archive.org"],
      ["Natural and Moral History of the Indies, Book II", "doi.org/10.2307/j.ctv11cw7z1.12"],
      ["Documentos Coloniales: Visita hecha a la Provincia de Chucuito por Garci Diez de San Miguel (1567)", "lalibreria.de"],
      ["Geografía y Descripción Universal de Las Indias", "bdh.bne.es"],
      ["Recopilación de leyes de los reynos de las Indias", "boe.es"],
      ["Requerimiento 1510", "nationalhumanitiescenter.org"],
      ["Juan Polo de Ondegardo — Real Academia de La Historia", "dbe.rah.es"],
      ["Encomienda, Hacienda and Corregimiento in Spanish America", "doi.org/10.1215/00182168-51.3.431"],
      ["Fields of Conflict", "doi.org/10.1016/j.jas.2017.06.001"],
      ["Political Ecology", "doi.org/10.1016/B978-008044910-4.00580-0"],
      ["State Evasion, State Prevention", "doi.org/10.12987/9780300156522-007"],
    ],
  },
  {
    category: "Uru · 11 sources",
    items: [
      ["Cuentos de los Urus del lago Poopó", "funproeibandes.org"],
      ["Presidente Entregará Título de Nación Originaria “Uru”", "noticiasfides.com"],
      ["Desaparición del Lago Poopó — Periódico La Patria", "impresa.lapatria.bo"],
      ["Climate Change Claims a Lake, and an Identity — The New York Times", "nytimes.com"],
      ["Los Urus del lago Poopó en el Censo 2012", "cepaoruro.org"],
      ["Prosigue la marcha de los Urus del lago Poopó", "cepaoruro.org"],
      ["COP27: A Dried up Lake and an Indigenous Community on the Precipice in Bolivia — WFP", "wfp.org"],
      ["Uchumataqu: The Lost Language of the Urus of Bolivia", "repository.ubn.ru.nl"],
      ["The Uru of the Rio Desaguadero", "doi.org/10.1525/aa.1941.43.4.02a00020"],
      ["Symbolic and Material Boundaries", "urn.kb.se"],
      ["Hommes d’eau: Le Problème Uru", "doi.org/10.3406/ahess.1978.294005"],
    ],
  },
] as const;

function ResourceLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`resource-label${light ? " resource-label--light" : ""}`}><span />{children}</p>;
}

export default function ResourcesPage() {
  return (
    <main className="resources-page">
      <section className="resources-hero" id="top">
        <img src={assets.resources_imgDsc029081} alt="An Uru community member crossing the dry Lake Poopó landscape near a family and motorcycle" />
        <div className="resources-hero__wash" />
        <SiteChrome active="resources" light />
        <div className="resources-hero__content">
          <ResourceLabel light>Section 4</ResourceLabel>
          <h1>Resources</h1>
          <p>The documentation behind Qotzuñi: <strong>films, photography, and academic research</strong> on the Urus del Lago Poopó.</p>
        </div>
        <ScrollCue href="#documentaries" />
      </section>

      <section className="resources-documentaries" id="documentaries">
        <ResourceLabel>4A&nbsp;&nbsp; Documentary</ResourceLabel>
        <h2>Other Documentaries on the Urus del Lago Poopó</h2>
        <div className="resources-documentary-grid">
          {documentaries.map((film) => (
            <article key={film.title}>
              <img src={film.image} alt="" />
              <div>
                <ResourceLabel>{film.year}&nbsp;&nbsp; · &nbsp;&nbsp;Dir. {film.director}</ResourceLabel>
                <h3>{film.title}</h3>
                <p>{film.body}</p>
                <div className="resources-link-row">
                  {film.links.map(([label, href]) => <a href={href} key={label}>{label} <span>↗</span></a>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-gallery" id="photographic-archive">
        <ResourceLabel light>4B&nbsp;&nbsp; Photography</ResourceLabel>
        <h2>Gaston Zilberman’s Lens</h2>
        <p>Gasti’s photographs from the field — a visual archive of the project.</p>
        <ResourceGallery />
      </section>

      <section className="resources-thesis" id="academic">
        <ResourceLabel>4C&nbsp;&nbsp; Thesis</ResourceLabel>
        <h2>Fluid Identities: Political Hydrohistory of the Urus of Lake Poopó</h2>
        <p className="resources-thesis__author"><strong>Michael Salama</strong>&nbsp; · Princeton University, Department of History &amp; Program in Latin American Studies</p>
        <div className="resources-thesis__layout">
          <div className="resources-thesis__abstract">
            <h3>Abstract</h3>
            <p>The <strong>Nación Originaria Uru</strong> encompasses the indigenous communities of the Titicaca / Desaguadero / Poopó / Salares aquatic axis of the Bolivian altiplano. The Uru communities of Lake Poopó traditionally lived on <strong>floating islands of totora reeds,</strong> their way of life deeply intertwined with the hydrological resources of the lake, upon which they historically relied for subsistence fishing and hunting. However, various hydrological factors contribute to the <strong>intermittent drying of Lake Poopó,</strong> resulting in ecological degradation, loss of livelihoods for the Uru communities, and ultimately acculturation. Despite international attention to their plight, media coverage often oversimplifies the complex historical and environmental contexts of these crises, the most severe of which has been occurring <strong>since 2015.</strong></p>
            <p>This study explores the sociopolitical status of the Uru people, who have been <strong>marginalized and excluded from political and cultural hegemony since well before the Spanish conquest,</strong> by combining close examination of <strong>colonial records and Uru oral traditions.</strong> Through investigation of Uru exclusion from pre-Hispanic tribute systems, forced assimilation through conversion in the colonial era, and a land-use regime shaped by political and hydrological power structures, this paper argues that <strong>environmental determinism was not as substantial a contributing factor to modern Uru vulnerabilities as were material socioeconomic impositions by ruling hegemonies.</strong></p>
          </div>
          <img src={assets.resources_imgDsc030861} alt="A stranded boat on the dry bed of Lake Poopó" />
          <aside>
            <div className="resources-thesis__awards">
              <ResourceLabel>Awarded</ResourceLabel>
              <ul><li>Barbara Stein Prize</li><li>Stone / Davis History Prize</li><li>Stanley Stein Senior Thesis Prize</li><li>Sigmund Scholars Award</li></ul>
            </div>
            <p>For inquiries, contact the author at <strong>michaelsalama19@gmail.com</strong></p>
            <a className="button button--dark" href="mailto:michaelsalama19@gmail.com?subject=Fluid%20Identities%20research">Read the Full Text <span>→</span></a>
          </aside>
        </div>
      </section>

      <section className="resources-bibliography" id="bibliography">
        <ResourceLabel>4D&nbsp;&nbsp; Bibliography &amp; Publications</ResourceLabel>
        <h2>Sources &amp; Further Reading</h2>
        <div className="resources-source-grid">
          {bibliography.map((group) => (
            <article key={group.category}>
              <ResourceLabel>{group.category}</ResourceLabel>
              <ol>
                {group.items.map(([title, domain]) => (
                  <li key={title}><span>{title}</span><a href={`https://${domain}`}>{domain} ↗</a></li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-projects" id="other-projects">
        <article className="resources-project resources-project--language">
          <div>
            <ResourceLabel>4E.i&nbsp;&nbsp; Language Project</ResourceLabel>
            <h2>Reviving Pukina: The <br />Chipaya-Uru Language <br />Cooperative</h2>
            <p>The Chipaya educational cooperative, developed by Uru authority Daniel Mauricio Choque, brings Pukina language teachers from Chipaya to the Uru communities of Lake Poopó to teach the language to young students.</p>
          </div>
          <img src={assets.resources_imgDsc037601} alt="An Uru community member" />
        </article>
        <article className="resources-project resources-project--artisan">
          <img src={assets.resources_imgDsc037892} alt="Members of the Uru women’s artisan cooperative" />
          <div>
            <ResourceLabel>4E.ii&nbsp;&nbsp; World Food Programme</ResourceLabel>
            <h2>Weaving Resilience: The Uru Women’s Artisan Cooperative</h2>
            <p>In 2017, the U.N. World Food Programme provided a grant that enabled Uru women to form the Cooperativa de Artesanías, centralizing craftmaking as a collective economic strategy in response to the loss of the lake.</p>
          </div>
        </article>
        <article className="resources-project resources-project--ramsar">
          <ResourceLabel>4E.iii&nbsp;&nbsp; Ramsar Protection</ResourceLabel>
          <h2>A Wetland of International Importance: The Ramsar Designation</h2>
          <div className="resources-ramsar-copy">
            <p>Lakes Poopó and Uru Uru were designated a Ramsar Wetland of International Importance in 2002 and form one of the most significant ecological basins of the Bolivian Altiplano. The wetlands support extraordinary biodiversity, including 75 recorded bird species, 36 of them aquatic. Three of the world’s six flamingo species breed here — the Chilean, Andean, and James’s flamingos — sometimes gathering in vast numbers; aerial surveys in 1997 and 1999 counted 120,000 and 75,000 birds respectively, the largest concentrations in the region.</p>
            <p>The basin also contains endemic fish such as the genus Orestias and diverse plant life, while threatened species including the Andean condor, suri, horned coot, Titicaca grebe, vicuña, and quirquincho armadillo inhabit the surrounding landscape. Despite its ecological importance and designation as a national heritage site under Bolivia’s Law No. 2097 (2000), the wetland has remained outside the country’s protected areas system and has been classified in a critical state of conservation.</p>
          </div>
          <div className="resources-ramsar-stats">
            <span><b>Ramsar Designation</b><strong>2002</strong><small>Lakes Poopó &amp; Uru Uru, one of the Altiplano’s key basins.</small></span>
            <span><b>Recorded Bird Species</b><strong>75</strong><small>36 of them aquatic; three of the world’s six flamingo species.</small></span>
            <span><b>Birds Counted · 1997</b><strong>120,000</strong><small>Largest concentration recorded in the region.</small></span>
            <span><b>Conservation State</b><strong>Critical</strong><small>Outside Bolivia’s protected areas system despite Law No. 2097.</small></span>
          </div>
          <img src={assets.resources_imgImage8} alt="Flamingos gathering in the Lake Poopó wetland" />
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}

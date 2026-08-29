import type { Metadata } from "next";
import { ResourceGallery } from "../components/Interactive";
import { SiteChrome, SiteFooter } from "../components/SiteChrome";
import { assets } from "../../src/assets";

export const metadata: Metadata = {
  title: "Resources | Uru Virtual Museum",
  description: "Films, photography, oral history, and academic research about Lake Poopó and the Uru communities.",
};

const documentaries = [
  { title: "Los Hombres del Lago", by: "Puñaca Tinta María · Daniel Mauricio Choque", image: assets.resources_imgLosHombrsDelLago1, body: "A community-rooted documentary presented at Hot Docs in 2008, documenting the people of Lake Poopó from within Uru life." },
  { title: "La Illa", by: "Iván Molina Velásquez", image: assets.resources_imgLaIlla1, body: "A film about relationships within the community and with neighboring Aymara people, filmed in Quechua and Uru and premiered in 2022." },
  { title: "Urus, del agua vengo", by: "Sara Aliaga Ticona", image: assets.resources_imgPlaceholderVideoPlaceholder, body: "A National Geographic Explorer project developed with Puñaca Tinta María through photography, research, and community collaboration." },
];

export default function ResourcesPage() {
  return (
    <main className="inner-page">
      <section className="page-hero page-hero--resources" id="top">
        <img src={assets.resources_imgDsc0353411} alt="Two people crossing the dry Lake Poopó landscape" />
        <div className="page-hero__wash" />
        <SiteChrome active="resources" light />
        <div className="page-hero__content">
          <p>Section 4</p>
          <h1>Resources</h1>
          <p>Films, photography, oral history, and academic research on the Uru and Lake Poopó.</p>
        </div>
      </section>

      <section className="content-section" id="documentaries">
        <p className="section-label">4A · Watch &amp; listen</p>
        <h2>Other Documentaries on the Urus del Lago Poopó</h2>
        <div className="documentary-grid">
          {documentaries.map((film) => (
            <details key={film.title}>
              <summary>
                <img src={film.image} alt="" />
                <span>{film.by}</span>
                <strong>{film.title}</strong>
                <b aria-hidden="true">+</b>
              </summary>
              <p>{film.body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="content-section">
          <p className="section-label section-label--light">4B · Photographic archive</p>
          <h2>Gastón Zilberman’s Lens</h2>
          <p className="section-intro">Photographs from the field — a visual archive of the Qotzuñi project.</p>
          <ResourceGallery />
        </div>
      </section>

      <section className="content-section" id="academic">
        <p className="section-label">4C · Academic research</p>
        <h2>Fluid Identities: Political Hydrohistory of the Urus of Lake Poopó</h2>
        <div className="research-feature">
          <div className="prose">
            <p><strong>Michael Salama</strong></p>
            <p>The research follows the Nación Originaria Uru through colonial records, oral traditions, and the intermittent drying of Lake Poopó. It considers how a people associated with floating islands of totora reeds have been marginalized since long before the Spanish conquest.</p>
            <p>Recognized with the Barbara Stein Prize, Stone / Davis History Prize, Stanley Stein Senior Thesis Prize, and Sigmund Scholars Award.</p>
            <a className="button button--dark" href="mailto:michaelsalama19@gmail.com?subject=Fluid%20Identities%20research">Request the full text →</a>
          </div>
          <img src={assets.resources_imgDsc037601} alt="Portrait of an Uru community member" />
        </div>
      </section>

      <section className="resource-notes">
        <div className="content-section">
          <article>
            <p className="section-label">Language</p>
            <h3>Reviving Pukina</h3>
            <p>Daniel Mauricio Choque works with Pukina language teachers from Chipaya to create materials for young students and reconnect communities across the Uru language family.</p>
          </article>
          <article>
            <p className="section-label">Community knowledge</p>
            <h3>Weaving Resilience</h3>
            <p>The Uru women’s artisan cooperative, established in 2017 with support from the U.N. World Food Programme, sustains income and intergenerational craft knowledge.</p>
          </article>
        </div>
      </section>

      <section className="content-section ramsar">
        <p className="section-label">4D · Ecology</p>
        <h2>A Wetland of International Importance</h2>
        <div className="two-column prose">
          <p>Lake Poopó received Ramsar designation in 2002. The wetland held 75 recorded bird species — 36 aquatic — including Chilean, Andean, and James’s flamingos, plus endemic fish and threatened Altiplano wildlife.</p>
          <p>Despite Bolivia’s Law No. 2097, the lake remained outside the national protected areas system. Its conservation state is now critical.</p>
        </div>
        <div className="metric-grid metric-grid--four">
          <article><span>Ramsar designation</span><strong>2002</strong></article>
          <article><span>Recorded bird species</span><strong>75</strong></article>
          <article><span>Birds counted · 1997</span><strong>120,000</strong></article>
          <article><span>Conservation state</span><strong>Critical</strong></article>
        </div>
        <img className="wide-figure__image" src={assets.resources_imgImage8} alt="Flamingos gathering in the Lake Poopó wetland" />
      </section>
      <SiteFooter />
    </main>
  );
}

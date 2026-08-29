import type { Metadata } from "next";
import { SiteChrome, SiteFooter } from "../components/SiteChrome";
import { assets } from "../../src/assets";

export const metadata: Metadata = {
  title: "About the Urus | Uru Virtual Museum",
  description: "Language, craft, leadership, and contemporary life among the Uru communities of Lake Poopó.",
};

export default function AboutPage() {
  return (
    <main className="inner-page">
      <section className="page-hero page-hero--about" id="top">
        <img src={assets.about_imgDsc037461} alt="Uru community members standing in a boat on the dry lakebed" />
        <div className="page-hero__wash" />
        <SiteChrome active="about" light />
        <div className="page-hero__content">
          <p>Section 2</p>
          <h1>About the Urus</h1>
          <p>Lake dwellers, artisans, and knowledge keepers adapting a distinct culture to a landscape without its lake.</p>
        </div>
      </section>

      <section className="content-section" id="language">
        <p className="section-label section-label--black">2A · Language</p>
        <h2>Language of the Lake</h2>
        <div className="editorial-grid">
          <div className="prose">
            <p>The Uru language spoken around Lake Poopó belonged to the <strong>Uchumataqu family</strong>. Known locally as <strong>Chholo</strong>, it carried the vocabulary of fishing, reeds, weather, ritual, and the lake itself. The word <em>Qotzuñi</em> comes from this language.</p>
            <p>Decades of discrimination and cultural pressure drove a shift to Aymara, Quechua, and Spanish. By the mid-20th century, Chholo was no longer transmitted naturally between generations.</p>
          </div>
          <img src={assets.about_imgDsc033371} alt="Portrait of an Uru elder" />
          <img src={assets.about_imgRectangle160} alt="An Uru woman in traditional clothing" />
          <div className="prose">
            <h3>Revival</h3>
            <p>Daniel Mauricio Choque and educators from Puñaca Tinta María and Chipaya have developed teaching materials that reconnect young people with Uru linguistic heritage. The work does not claim to restore a language unchanged; it builds a living bridge through related Pukina and Chipaya knowledge.</p>
          </div>
        </div>
      </section>

      <section className="full-bleed-story">
        <img src={assets.about_imgDsc033911} alt="Hands weaving an Uru craft" />
        <div className="full-bleed-story__wash" />
        <div className="full-bleed-story__copy">
          <p className="section-label section-label--light">2B · Artisan knowledge</p>
          <h2>Woven by Hand</h2>
          <p>Artisan clothing, tools, structures, and spiritual items are made by hand. In a place where the lake no longer provides food, this knowledge has become an economic lifeline.</p>
        </div>
      </section>

      <section className="dark-section">
        <div className="content-section">
          <p className="section-label section-label--light">2C · Community life</p>
          <h2>Leadership, Dignity &amp; Gender</h2>
          <div className="dark-feature">
            <div className="prose prose--light">
              <p>Women lead much of the artisan economy and increasingly hold equal voice in collective decisions. They occupy liaison positions with the Bolivian government and represent their communities beyond the former lakeshore.</p>
              <p>The <strong>Cooperativa de Artesanías</strong>, established in 2017 with support from the U.N. World Food Programme, strengthened women as primary economic drivers of their households.</p>
            </div>
            <img src={assets.about_imgDsc33912} alt="Uru women displaying handmade clothing and crafts" />
          </div>
        </div>
      </section>

      <section className="craft-economy">
        <div className="craft-economy__copy">
          <p className="section-label">2D · Adaptation</p>
          <h2>Selling crafts when the lake sells nothing</h2>
          <p>During serious drought, families travel to ferias in Oruro, La Paz, Cochabamba, and Santa Cruz. Selling artisan goods provides income while keeping techniques, stories, and community ties in circulation.</p>
        </div>
        <img src={assets.about_imgDsc036931} alt="An Uru artisan seated on the dry lakebed with handmade work" />
      </section>

      <section className="content-section">
        <p className="section-label">2E · Rights &amp; territory</p>
        <h2>Mining, land, and a right rarely honored</h2>
        <div className="two-column prose">
          <p>Bolivia’s mining sector operates through state-owned, private, and cooperative models. Cooperative mines are often the least accountable and most ecologically damaging. Hundreds of concessions surround Lake Poopó, releasing arsenic, heavy metals, and chemical leachate.</p>
          <p>The 2009 Constitution recognizes Indigenous peoples’ right to prior consultation. For the Urus — who hold no agricultural or mineral land titles — that right has rarely been meaningfully enforced.</p>
        </div>
        <div className="photo-pair">
          <img src={assets.about_imgDsc033581} alt="An Uru community member sitting beside the lakebed" />
          <img src={assets.about_imgDsc037861} alt="Homes near the former Lake Poopó shoreline" />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

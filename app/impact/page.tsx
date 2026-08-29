import type { Metadata } from "next";
import { PartnerGrid } from "../components/Interactive";
import { SiteChrome, SiteFooter } from "../components/SiteChrome";
import { assets } from "../../src/assets";

export const metadata: Metadata = {
  title: "Impact | Qotzuñi",
  description: "The Qotzuñi documentary, community partnerships, and campaign for material change.",
};

export default function ImpactPage() {
  return (
    <main className="inner-page">
      <section className="page-hero page-hero--impact" id="top">
        <img src={assets.impact_imgDsc036421} alt="Aerial view of an Uru village beside the dry Lake Poopó basin" />
        <div className="page-hero__wash" />
        <SiteChrome active="impact" light />
        <div className="page-hero__content">
          <p>Section 3</p>
          <h1>Impact</h1>
          <p>A campaign translating the documentary’s reach into material change on the ground.</p>
        </div>
      </section>

      <section className="content-section" id="film">
        <p className="section-label">3A · Documentary short film</p>
        <h2>Qotzuñi: People of the Lake</h2>
        <div className="film-grid">
          <div className="prose">
            <p>The Oscar-qualified documentary short follows the Uru Indigenous Nation of Bolivia after Lake Poopó disappeared completely. As a fishing and hunting community, the Urus lost their sole source of food and livelihood.</p>
            <p><strong>“Qotzuñi,” or “People of the Lake,”</strong> is part of a broader impact campaign combining film, an internationally exhibited photographic series, and academic research.</p>
          </div>
          <img src={assets.impact_imgDsc0353412} alt="An Uru community member working on the dry lakebed" />
          <img src={assets.impact_imgRectangle169} alt="A scene from the Qotzuñi documentary" />
          <div className="prose">
            <h3>Director’s Statement</h3>
            <p>Gastón Zilberman and Michael Salama began with research into the effects of mining on rural and Indigenous communities. In explicit collaboration with the community and Uru authority Florencio Inocente Aguilar, film became a way to carry the story to a global audience.</p>
          </div>
        </div>
      </section>

      <section className="partnerships">
        <div className="content-section">
          <p className="section-label">3B · Working together</p>
          <h2>Partnerships &amp; On-the-ground Support</h2>
          <p className="section-intro">The campaign connects environmental rights, conservation, cultural work, and public engagement. Select a partner to learn how each contributes.</p>
          <PartnerGrid />
        </div>
      </section>

      <section className="content-section global-lakes">
        <p className="section-label">3C · A shared crisis</p>
        <h2>A Global Pattern of Vanishing Lakes</h2>
        <p className="section-intro">Lake Poopó is not an isolated event. Around the world, identities, livelihoods, and cultures inseparable from water are threatened by climate change, diversion, contamination, and political neglect.</p>
        <figure className="photo-overlay photo-overlay--glass">
          <img src={assets.impact_imgOwensLakeCalifornia1} alt="The exposed bed of Owens Lake in California" />
          <figcaption><span>Payahuunadü · California, USA</span><strong>Owens Lake</strong><p>After the 1913 Los Angeles aqueduct, 500 square kilometers of lake disappeared within 13 years.</p></figcaption>
        </figure>
        <div className="metric-grid metric-grid--four">
          <article><span>Owens Lake · USA</span><strong>13 years</strong><p>To drain entirely.</p></article>
          <article><span>Aral Sea · Uzbekistan</span><strong>−90%</strong><p>Of its area lost by 2007.</p></article>
          <article><span>Lake Urmia · Iran</span><strong>−90%</strong><p>Of its water lost since the 1990s.</p></article>
          <article><span>Lake Chad · Sahel</span><strong>30M</strong><p>People depend on its waters.</p></article>
        </div>
      </section>

      <section className="support-section">
        <div>
          <p className="section-label">3D · Material change</p>
          <h2>Support the Community</h2>
          <p>Support is directed toward the Uru communities through the project’s on-the-ground partners. Explore the documented work, share the story, and connect with the campaign.</p>
          <div className="button-row">
            <a className="button button--dark" href="/resources">Explore the archive</a>
            <a className="button button--outline-dark" href="/resources#academic">Read project resources</a>
          </div>
        </div>
        <img src={assets.impact_imgDsc03788} alt="Uru women gathered outside a traditional building" />
      </section>
      <SiteFooter />
    </main>
  );
}

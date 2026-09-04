import type { Metadata } from "next";
import { GlobalParallelsCarousel, PartnerGrid } from "../components/Interactive";
import { ScrollCue, SiteChrome, SiteFooter } from "../components/SiteChrome";
import { assets } from "../../src/assets";

export const metadata: Metadata = {
  title: "Impact | Qotzuñi",
  description: "The Qotzuñi documentary, community partnerships, and campaign for material change.",
};

function ImpactLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`impact-label${light ? " impact-label--light" : ""}`}><span />{children}</p>;
}

export default function ImpactPage() {
  return (
    <main className="impact-page">
      <section className="impact-hero" id="top">
        <img src={assets.impact_imgDsc036421} alt="Aerial view of an Uru village beside the dry Lake Poopó basin" />
        <div className="impact-hero__wash" />
        <SiteChrome active="impact" light />
        <div className="impact-hero__content">
          <ImpactLabel light>Section 3</ImpactLabel>
          <h1>Impact</h1>
          <p>An impact campaign that transfers the documentary’s success into material change on the ground, spreading the universal message that we are all people of the same lake.</p>
        </div>
        <ScrollCue href="#documentary" />
      </section>

      <section className="impact-documentary" id="documentary">
        <ImpactLabel>3A&nbsp;&nbsp; Documentary Project</ImpactLabel>
        <h2>Documentary Short Film</h2>
        <div className="impact-documentary__opening">
          <div className="impact-prose">
            <p><strong>Qotzuñi: People of the Lake</strong> is an <strong>Oscar-qualified documentary short film</strong> produced in collaboration with the <strong>Uru Indigenous Nation of Bolivia.</strong> For centuries, the community lived off the waters of <strong>Lake Poopó,</strong> Bolivia’s second-largest lake, until <strong>mining operations diverted and contaminated its headwaters</strong> and an intense drought struck the region, causing the lake to <strong>disappear completely.</strong> As a fishing and hunting community, the Urus have lost their sole source of food and livelihood.</p>
            <p>The film portrays the community’s struggle to adapt to this loss, as well as the cultural challenge of retaining the identity of <strong>“Qotzuñi,” or “People of the Lake,”</strong> when the lake itself ceases to exist.</p>
            <p>The project is accompanied by an <strong>impact campaign</strong> that aims to transfer the documentary’s success into material change on the ground, spreading the universal message that we are all people of the same lake. It also includes an internationally exhibited photographic series and academic research.</p>
          </div>
          <img src={assets.impact_imgDsc029082} alt="An Uru artisan working beside an adobe wall" />
        </div>

        <div className="impact-directors">
          <img src={assets.impact_imgDsc03274} alt="A child in an Uru village" />
          <div className="impact-directors__copy">
            <h3>Director’s Statement</h3>
            <div className="impact-prose">
              <p><strong>Gastón Zilberman and Michael Salama</strong> arrived in the altiplano to conduct research on the effects of mining on rural and indigenous communities in Bolivia. They first came into contact with the Uru authorities through two local advocacy groups devoted to environmental justice and combating illegal mining operations: <strong>Fundación Pueblos de Montaña</strong> and <strong>Centro de Ecología y Pueblos Andinos.</strong></p>
              <p>After meeting with the Uru authorities, the team determined together that a documentary film would be the best way to communicate the story to a global audience and, hopefully, attract aid from the international community. Every stage of the filmmaking process has been carried out in explicit collaboration with the community and guided by <strong>Florencio Inocente Aguilar,</strong> an Uru authority and Qotzuñi’s associate producer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-ethics">
        <div>
          <h2>Ethics &amp; Reciprocity</h2>
          <div className="impact-prose">
            <p>The Qotzuñi project was approved by <strong>unanimous consensus among the Uru authorities and heads of household</strong> of the three communities of Lake Poopó. From the outset, the filmmaking team entered into <strong>signed contracts of reciprocity</strong> with the community, establishing a legal and ethical framework that <strong>explicitly rejected an extractivist model of documentary filmmaking.</strong> The intention of material change within the community was <strong>embedded into the project’s foundation, not added as an afterthought.</strong></p>
            <p>Every phase of the project, from production and editing to impact development and implementation, has been carried out collaboratively, through constant contact with community members, associate producer and Uru authority <strong>Florencio Inocente Aguilar,</strong> and on-the-ground liaisons at the <strong>Fundación de Pueblos de Montaña y Derechos Ambientales,</strong> a foundation dedicated to environmental rights and the protection of mountain communities, based in Oruro. This ongoing relationship ensures that the community remains <strong>an active participant in, rather than a subject of,</strong> the work being done in their name.</p>
          </div>
        </div>
        <img src={assets.impact_imgDsc03300} alt="Uru community members on the dry lakebed" />
      </section>

      <section className="impact-initiatives" id="initiatives">
        <ImpactLabel>3B&nbsp;&nbsp; Impact Initiatives</ImpactLabel>
        <h2>Partnerships and On-the-ground Support</h2>
        <div className="impact-initiatives__intro impact-prose">
          <p>The Qotzuñi impact campaign is documented through a dedicated impact report and an accompanying archive of photographs from the project’s work in the field. Together, these materials track the campaign’s progress in translating the documentary’s reach into tangible support for the Uru communities.</p>
          <p>The campaign is carried out in partnership with a coalition of environmental and human rights organizations.</p>
        </div>
        <PartnerGrid />
      </section>

      <section className="impact-global" id="global-parallels">
        <ImpactLabel>3C&nbsp;&nbsp; Global Parallels</ImpactLabel>
        <h2>A Global Pattern of Vanishing Lakes</h2>
        <p className="impact-global__intro">The crisis facing the Urus of Lake Poopó is not an isolated event. Across the world, indigenous and marginalized communities whose identities, livelihoods, and cultures are inseparable from bodies of water are confronting the same convergence of forces: climate change, upstream water diversion, industrial contamination, and political neglect. The following cases illustrate the global dimensions of this crisis.</p>

        <GlobalParallelsCarousel />

        <div className="impact-metrics">
          <article><p>Owens Lake &middot; USA</p><strong>13 years</strong><span>To drain entirely after the 1913 Los Angeles aqueduct.</span></article>
          <article><p>Aral Sea &middot; Uzbekistan</p><strong>−90%</strong><span>Of its 68,000 km² lost by 2007 after Soviet river diversion.</span></article>
          <article><p>Lake Urmia &middot; Iran</p><strong>−90%</strong><span>Of its water lost since the mid-1990s; nearly dry by 2025.</span></article>
          <article><p>Lake Chad &middot; Sahel</p><strong>30M</strong><span>People depend on its waters; 5M+ already uprooted.</span></article>
        </div>
      </section>

      <section className="impact-support" id="help">
        <div className="impact-support__copy">
          <ImpactLabel>3D&nbsp;&nbsp; How to Help</ImpactLabel>
          <h2>Support the Community</h2>
          <p>Contributions to the Qotzuñi impact campaign go <strong>directly toward material change for the Uru communities.</strong> The campaign is partnering with local initiatives to <strong>build food security infrastructure</strong> for communities that have lost their reliable sources of <strong>food, water, and work.</strong></p>
          <p><strong>100 percent of donations go directly to community initiatives,</strong> and support can be given through the <strong>campaign’s donation platform.</strong></p>
          <div className="impact-approval">
            <p>Community Approval</p>
            <strong>3 / 3</strong>
            <span>Unanimous consensus across the three Uru communities of Lake Poopó, secured by signed contracts of reciprocity.</span>
          </div>
          <a className="button button--dark" href="mailto:contact@qotzuni.com">Support the Campaign <span aria-hidden="true">→</span></a>
        </div>
        <img src={assets.impact_imgDsc03788} alt="Uru families gathered outside a traditional building" />
      </section>

      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import { ScrollCue, SiteChrome, SiteFooter } from "../components/SiteChrome";
import { assets } from "../../src/assets";

export const metadata: Metadata = {
  title: "About the Urus | Uru Virtual Museum",
  description: "Language, craft, leadership, and contemporary life among the Uru communities of Lake Poopó.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" id="top">
        <img src={assets.about_imgDsc033911} alt="Uru community members standing in a boat on the dry lakebed" />
        <div className="about-hero__wash" />
        <SiteChrome active="about" light />
        <div className="about-hero__content">
          <p className="about-label about-label--light">Section 2</p>
          <h1>About the Urus</h1>
          <p>
            For centuries, the Urus lived on the water itself: floating islands of totora reed, their cultural
            traditions born from the lake. As drought and mining push that lake toward collapse, the Uru communities
            adapt still, reviving their language and reshaping their leadership.
          </p>
        </div>
        <ScrollCue href="#language" />
      </section>

      <section className="about-language" id="language">
        <p className="about-label">2A · Language</p>
        <h2>Language of the Lake</h2>
        <div className="about-language__grid">
          <div className="about-prose">
            <p>
              The Uru nation, having established numerous pockets of communities in different parts of the <strong>TDPS
              hydrological axis</strong> over the span of centuries, developed various distinct languages and dialects
              belonging to the <strong>Uchumataqu family.</strong> The Urus of Lake Poopó historically spoke a now-extinct language
              called <strong>Chholo</strong> until the <strong>mid-20th century.</strong> Like other Andean languages, it lacked gender, and much of what
              is known about it centers on culturally specific vocabulary — particularly words relating to water and
              the lake. <strong>(The word Qotzuñi comes from this language.)</strong> European linguistic anthropologists attempted to
              codify Chholo in the early 20th century, but the shift away from isolated lacustrine life, and the
              subsequent adoption of <strong>Aymara</strong>, caused the language to be lost.
            </p>
            <p>
              As Uru-Muratos transitioned to life on dry land in Aymara territory, they learned Aymara in order to
              participate in the local economy. Modern Uru people often cite <strong>the discrimination and cultural
              oppression</strong> that accompanied this linguistic assimilation. Today, due to changing demographics in
              the Poopó region, many Urus grow up speaking <strong>Quechua alongside Spanish and Aymara, and are
              trilingual.</strong>
            </p>
          </div>
          <img className="about-language__elder" src={assets.about_imgDsc036931} alt="An Uru elder seated beside an adobe wall" />
          <div className="about-language__portrait">
            <img src={assets.about_imgDsc036331} alt="An Uru woman wearing traditional clothing" />
          </div>
          <div className="about-prose about-language__revival">
            <h3>Revival</h3>
            <p>
              In the late 20th and early 21st century, Uru authority <strong>Daniel Mauricio Choque</strong> set out to revive the
              traditional Uru language. Although <strong>Chholo had gone entirely extinct</strong>, a related Uru language, <strong>Pukina</strong>,
              continued to thrive in <strong>Chipaya</strong>, a large community of non-Qotzuñi Urus. Some scholars compare the
              relationship between Chholo and Pukina to that of Spanish and French, though others believe the two were
              much closer. Choque, traveling frequently between <strong>Puñaca Tinta María and Chipaya</strong>, developed the
              <strong>educational cooperative</strong> that brings Uru-language <strong>teachers from Chipaya to the Uru communities of Lake
              Poopó</strong> to teach Pukina to young students. <strong>Students in these communities continue to learn basic Pukina to
              this day.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="about-craft" id="ways-of-life">
        <img src={assets.about_imgDsc037461} alt="Hands weaving an Uru craft" />
        <div className="about-craft__wash" />
        <div className="about-craft__copy">
          <p className="about-label about-label--light">2B · Ways of Life</p>
          <h2>Woven by Hand</h2>
          <p>
            The Urus have practiced craftsmanship for as long as they have had their lacustrine way of life, as the
            weaving of totora reeds and other aquatic straw-like flora was necessary for building the rafts on which
            they lived and traveled. Generations of Urus have created <strong>artisan clothing, accessories, tools,
            structures, and spiritual items by hand.</strong>
          </p>
        </div>
      </section>

      <section className="about-leadership">
        <div className="about-leadership__copy">
          <h2>Leadership, Structure &amp; Gender</h2>
          <p>
            The increasing importance of artisan sales — an effort <strong>led chiefly by women</strong> — has
            explicitly elevated the position of women more broadly in Uru society. In authority meetings, <strong>women
            now have equal say to that of the men</strong>, and some women now hold <strong>official liaison positions
            to the Bolivian government.</strong>
          </p>
          <p>
            The formation of the <strong>Cooperativa de Artesanías in 2017</strong>, funded by a <strong>U.N. World Food
            Programme grant</strong>, centralized craftmaking under female leadership. As women became <strong>the
            primary economic drivers of their households</strong> — attending weekly ferias in nearby towns and
            traveling to cities including <strong>Oruro, La Paz, Cochabamba, and Santa Cruz</strong> — their authority
            within the community grew correspondingly.
          </p>
        </div>
        <img src={assets.about_imgDsc037861} alt="Uru women gathered in a community room" />
      </section>

      <section className="about-resilience" id="resilience">
        <img src={assets.about_imgDsc033371} alt="An Uru artisan kneeling beside handmade work on the dry lakebed" />
        <div className="about-resilience__copy">
          <p className="about-label">2C · Resilience</p>
          <h2>Selling crafts when the lake sells nothing</h2>
          <p>
            As a result of <strong>serious drought — like the one faced over the past decade</strong> — Uru families
            have turned to <strong>selling their artisan goods</strong> to neighboring communities as a <strong>source
            of income.</strong> Female heads of household generally attend <strong>ferias</strong>, or street fairs, in
            nearby towns once a week, and occasionally visit larger cities like <strong>Oruro, La Paz, Cochabamba, and
            Santa Cruz</strong> to sell their crafts. <strong>Since 2017</strong>, with a grant from the U.N. World Food
            Programme, Uru women have formed an artisan cooperative to centralize craftmaking.
          </p>
        </div>
      </section>

      <section className="about-legal" id="political-context">
        <p className="about-label">2D · Political and Legal Context</p>
        <h2>Mining, land, and a right rarely honored</h2>
        <div className="about-legal__grid">
          <div className="about-prose">
            <p>
              Bolivia&apos;s mining industry operates under <strong>three distinct models — state-owned, private, and
              cooperative</strong> — and the balance of power between them has shifted significantly with the
              country&apos;s recent political transition.
            </p>
            <p>
              For nearly two decades, the <strong>Movimiento al Socialismo (MAS)</strong> party, founded by <strong>Evo
              Morales</strong> and continued under <strong>President Luis Arce (2020–2025)</strong>, governed Bolivia
              under a resource-nationalist model that prioritized state ownership of extractive industries. Under
              this framework, state enterprises like the <strong>Huanuni Tin Mine</strong> dominated the tin belt of
              the <strong>Cordillera Central</strong> — the same mountain range whose rivers feed directly into Lake
              Poopó. MAS-era policy was generally hostile to private foreign investment and skeptical of cooperative
              mines, which operate outside formal labor and environmental regulation.
            </p>
            <p>
              In <strong>November 2025</strong>, following a severe economic crisis marked by <strong>inflation exceeding
              20%</strong>, fuel shortages, and the collapse of the boliviano, Bolivian voters ended two decades of MAS
              governance. Center-right President <strong>Rodrigo Paz</strong> took office, backed by a pro-market
              supermajority in the legislature. The new administration has moved swiftly to attract foreign private
              investment into the mining sector, signaling a dramatic shift in Bolivia&apos;s extractive economy. Former
              president <strong>Arce was arrested on corruption</strong> charges the following month; former president
              <strong>Morales remains in his rural stronghold</strong>, facing separate legal proceedings.
            </p>
          </div>
          <img src={assets.about_imgDsc036491} alt="Homes beside the former Lake Poopó shoreline" />
          <img src={assets.about_imgDsc033581} alt="An Uru community member sitting on the dry lakebed" />
          <div className="about-prose">
            <p>
              The Paz government&apos;s embrace of private mining capital — particularly in tin, silver, zinc, and
              <strong>lithium</strong> — has been celebrated by international investors but raises serious concerns for
              communities like the Urus del Lago Poopó. Private mining operations in Bolivia have historically been
              <strong>less accountable than state ones</strong>, and the new administration has shown little indication
              that environmental regulation and indigenous community consultation will be prioritized alongside
              investment incentives.
            </p>
            <p>
              Cooperative mines — collectively owned and operated, and <strong>largely unregulated</strong> — represent
              a third category, and are among the <strong>most ecologically damaging operations</strong> in the Cordillera
              Central. With <strong>437 mining concessions registered around Lake Poopó</strong> alone, cooperative mines
              are a primary source of the <strong>arsenic, heavy metals, and chemical leachate</strong> that have
              contaminated the lake&apos;s feeder streams for decades. With the loss of the lake and its fisheries, mining
              cooperatives have paradoxically also become <strong>one of the only remaining sources of employment</strong>
              for Uru community members — a cruel dynamic in which the communities most harmed by mining are also most
              dependent on it.
            </p>
            <p>
              Bolivia&apos;s <strong>2009 Constitution</strong>, passed under Morales, enshrines the rights of indigenous
              peoples to <strong>prior consultation</strong> (consulta previa) before extractive activities are undertaken
              on or near their lands. In practice, this right has <strong>rarely been meaningfully enforced</strong> for
              the Urus of Lake Poopó. Their communities <strong>hold no agricultural or mineral land titles</strong>, a
              legacy of the colonial and post-colonial periods during which Uru land rights were never formally
              recognized. This legal vulnerability means that mining expansion in the Cordillera Central — regardless
              of which political party oversees it — has historically proceeded without adequate consideration of its
              downstream consequences for the Uru communities.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

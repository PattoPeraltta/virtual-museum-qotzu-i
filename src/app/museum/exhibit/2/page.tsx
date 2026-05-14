import Link from 'next/link';
import CallToAction from '@/components/museum/CallToAction';
import Footer from '@/components/museum/Footer';
import Gallery from '@/components/museum/Gallery';
import Hero from '@/components/museum/Hero';
import ImpactStats from '@/components/museum/ImpactStats';
import Navigation from '@/components/museum/Navigation';
import StorySection from '@/components/museum/StorySection';
import Timeline from '@/components/museum/Timeline';
import { getExhibitData } from '../exhibit-data';

export default async function Exhibit2Page() {
  let data: Awaited<ReturnType<typeof getExhibitData>> = null;

  try {
    data = await getExhibitData(2);
  } catch (error) {
    return (
      <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <p className="text-gold/60 tracking-[0.3em] uppercase text-sm">Exhibit Data Unavailable</p>
        <h1 className="text-4xl md:text-5xl font-light text-gold-gradient mt-4 mb-6">Unable to Load Exhibit</h1>
        <p className="text-gray-400 max-w-xl text-center mb-8">
          The exhibit content could not be loaded. Please return to the museum map and try again.
        </p>
        <Link
          href="/museum"
          className="btn-mystical px-6 py-3 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 tracking-widest text-xs uppercase"
        >
          Back to Museum
        </Link>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <p className="text-gold/60 tracking-[0.3em] uppercase text-sm">Exhibit Not Found</p>
        <h1 className="text-4xl md:text-5xl font-light text-gold-gradient mt-4 mb-6">Unknown Exhibit</h1>
        <p className="text-gray-400 max-w-xl text-center mb-8">
          We could not locate that exhibit. Please return to the museum map to continue exploring.
        </p>
        <Link
          href="/museum"
          className="btn-mystical px-6 py-3 border border-gold/40 text-gold hover:bg-gold/10 transition-all duration-300 tracking-widest text-xs uppercase"
        >
          Back to Museum
        </Link>
      </main>
    );
  }

  const { exhibit, heroDescription, storySections, timelineEvents, stats, galleryItems } = data;

  const navItems = [
    { label: 'Return', href: '/museum' },
    { label: 'Story', href: '#story' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Impact', href: '#impact' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Act', href: '#action' },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navigation logoHref="/museum" logoLabel="Qotzuñi" navItems={navItems} />
      <Hero
        title={exhibit.title}
        subtitle="Virtual Museum"
        eyebrow={`Exhibit ${String(exhibit.id).padStart(2, '0')}`}
        description={heroDescription}
      />

      <div id="story">
        {storySections.map((section, index) => (
          <StorySection
            key={`${exhibit.id}-section-${index}`}
            index={index}
            title={section.title}
            subtitle={section.subtitle}
            contentHtml={section.contentHtml}
            imageUrl={section.imageUrl}
            imagePosition={section.imagePosition}
            deeperContent={section.deeperContent}
          />
        ))}
      </div>

      <div id="timeline">
        <Timeline
          heading={`${exhibit.title} - Key Threads`}
          subheading="Exhibit Timeline"
          events={timelineEvents}
        />
      </div>
      <div id="gallery">
        <Gallery
          heading={`Archive of ${exhibit.title}`}
          subheading="Visual Archive"
          description="Images and artifacts directly connected to this exhibit's research."
          items={galleryItems}
        />
      </div>

      <div id="action">
        <CallToAction
          title="Continue the Journey"
          description="Every exhibit is one thread in the story of Lake Poopo. Return to the map to explore another, or share this research with someone who should see it."
          primaryLabel="Return to Museum Map"
          primaryHref="/museum"
          secondaryLabel="Share This Exhibit"
        />
      </div>

      <Footer />
    </main>
  );
}

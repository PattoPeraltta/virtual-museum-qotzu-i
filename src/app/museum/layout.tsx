import type { Metadata } from 'next';
import MuseumNav from '@/components/museum/MuseumNav';
import '../museum/exhibit/exhibit.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://qotzunifilm.com'),
  title: {
    template: '%s | Qotzuñi Virtual Museum',
    default: 'Qotzuñi Virtual Museum | Lake Poopó',
  },
  description:
    'An immersive journey through the story of Lake Poopó, the Uru communities of Bolivia, and the intersection of environmental crisis and indigenous identity.',
  keywords: [
    'Lake Poopó',
    'Bolivia',
    'Uru',
    'virtual museum',
    'environmental',
    'climate change',
    'indigenous',
    'conservation',
  ],
  authors: [{ name: 'Qotzuñi' }],
  openGraph: {
    title: 'Qotzuñi Virtual Museum',
    description:
      'Explore the story of the Uru communities of Lake Poopó — a testament to resilience in the face of environmental crisis.',
    type: 'website',
    url: '/museum',
    images: [{ url: '/images/museum_background-2.gif' }],
  },
};

export default function MuseumLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="museum-exhibit noise-overlay min-h-screen bg-black text-white">
      <MuseumNav />
      <main className="lg:ml-64 min-h-screen pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  );
}

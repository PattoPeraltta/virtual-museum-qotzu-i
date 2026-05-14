'use client';

import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(
  () => import('@/components/museum/map/InteractiveMap'),
  { ssr: false, loading: () => (
    <div className="h-[calc(100vh-3.5rem)] lg:h-screen flex items-center justify-center bg-black">
      <p className="text-gray-500 text-sm tracking-wider">Loading map...</p>
    </div>
  )}
);

export default function InteractiveMapPage() {
  return <InteractiveMap />;
}

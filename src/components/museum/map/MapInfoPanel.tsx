'use client';

import Link from 'next/link';

interface MapInfoPanelProps {
  feature: {
    name: string;
    description: string;
    properties: Record<string, unknown>;
  };
  onClose: () => void;
}

export default function MapInfoPanel({ feature, onClose }: MapInfoPanelProps) {
  const sectionLink = feature.properties.sectionLink as string | undefined;

  return (
    <div className="absolute top-4 right-4 z-10 w-80 max-w-[calc(100vw-2rem)]">
      <div className="bg-black/90 backdrop-blur-md rounded-lg border border-white/10 p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-light text-[#d4af37]">{feature.name}</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>

        {'population' in feature.properties && feature.properties.population != null && (
          <p className="mt-2 text-xs text-gray-500">
            Population: {String(feature.properties.population)}
          </p>
        )}

        {'areaKm2' in feature.properties && feature.properties.areaKm2 != null && (
          <p className="mt-2 text-xs text-gray-500">
            Area: {String(feature.properties.areaKm2)} km²
          </p>
        )}

        {sectionLink && (
          <Link
            href={sectionLink}
            className="inline-block mt-4 text-xs text-[#d4af37] hover:text-white transition-colors underline underline-offset-4 decoration-[#d4af37]/40"
          >
            Read more in museum →
          </Link>
        )}
      </div>
    </div>
  );
}

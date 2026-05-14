'use client';

type MapMode = 'communities' | 'city-overlap' | 'timeline' | 'biodiversity' | 'lake-shrinking';

interface MapControlsProps {
  mode: MapMode;
  onModeChange: (mode: MapMode) => void;
}

const modes: { id: MapMode; label: string; icon: string }[] = [
  { id: 'communities', label: 'Communities & POIs', icon: '📍' },
  { id: 'city-overlap', label: 'City Size Comparison', icon: '🏙' },
  { id: 'timeline', label: 'Timeline', icon: '📅' },
  { id: 'biodiversity', label: 'Biodiversity Loss', icon: '🦩' },
  { id: 'lake-shrinking', label: 'Lake Shrinking', icon: '💧' },
];

export default function MapControls({ mode, onModeChange }: MapControlsProps) {
  return (
    <div className="bg-black/90 backdrop-blur-md border-b border-white/5 px-4 py-3 z-10">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => onModeChange(m.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-md text-sm transition-all whitespace-nowrap ${
              mode === m.id
                ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <span className="mr-2">{m.icon}</span>
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}

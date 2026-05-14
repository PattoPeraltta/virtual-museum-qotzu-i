'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapControls from './MapControls';
import MapInfoPanel from './MapInfoPanel';

import communitiesData from '@/data/map/communities.json';
import poiData from '@/data/map/poi.json';
import cityOverlapData from '@/data/map/city-overlap.json';
import lakeShrinkingData from '@/data/map/lake-shrinking-timeseries.json';
import biodiversityData from '@/data/map/biodiversity-timeseries.json';
import timelineEvents from '@/data/map/timeline-events.json';

type MapMode = 'communities' | 'city-overlap' | 'timeline' | 'biodiversity' | 'lake-shrinking';

interface SelectedFeature {
  name: string;
  description: string;
  properties: Record<string, unknown>;
}

const LAKE_POOPO_CENTER: [number, number] = [-67.08, -18.55];
const DEFAULT_ZOOM = 8;

export default function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [mode, setMode] = useState<MapMode>('communities');
  const [sliderValue, setSliderValue] = useState(2024);
  const [selectedFeature, setSelectedFeature] = useState<SelectedFeature | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const initMap = useCallback(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '&copy; OpenStreetMap contributors',
          },
        },
        layers: [
          {
            id: 'osm-layer',
            type: 'raster',
            source: 'osm',
            paint: {
              'raster-saturation': -0.6,
              'raster-brightness-max': 0.7,
              'raster-brightness-min': 0.05,
              'raster-contrast': 0.2,
            },
          },
        ],
      },
      center: LAKE_POOPO_CENTER,
      zoom: DEFAULT_ZOOM,
      maxZoom: 14,
      minZoom: 5,
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current.on('error', (event: unknown) => {
      console.warn('MapLibre error', event);
    });

    map.current.on('load', () => {
      if (!map.current) return;

      map.current.addSource('communities', { type: 'geojson', data: communitiesData as GeoJSON.FeatureCollection });
      map.current.addSource('poi', { type: 'geojson', data: poiData as GeoJSON.FeatureCollection });
      map.current.addSource('city-overlap', { type: 'geojson', data: cityOverlapData as GeoJSON.FeatureCollection });

      map.current.addLayer({
        id: 'city-overlap-fill',
        type: 'fill',
        source: 'city-overlap',
        paint: {
          'fill-color': ['get', 'color'],
          'fill-opacity': 0.25,
        },
        layout: { visibility: 'none' },
      });
      map.current.addLayer({
        id: 'city-overlap-outline',
        type: 'line',
        source: 'city-overlap',
        paint: {
          'line-color': ['get', 'color'],
          'line-width': 2,
          'line-opacity': 0.7,
        },
        layout: { visibility: 'none' },
      });

      map.current.addLayer({
        id: 'communities-layer',
        type: 'circle',
        source: 'communities',
        paint: {
          'circle-radius': 10,
          'circle-color': '#d4af37',
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': 2,
          'circle-opacity': 0.9,
        },
      });

      map.current.addLayer({
        id: 'poi-layer',
        type: 'circle',
        source: 'poi',
        paint: {
          'circle-radius': 6,
          'circle-color': [
            'match', ['get', 'type'],
            'mine', '#e74c3c',
            'city', '#f39c12',
            'lake', '#3498db',
            'hydrology', '#2ecc71',
            'community', '#d4af37',
            '#95a5a6',
          ],
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': 1,
          'circle-opacity': 0.8,
        },
      });

      map.current.addLayer({
        id: 'communities-labels',
        type: 'symbol',
        source: 'communities',
        layout: {
          'text-field': ['get', 'name'],
          'text-size': 12,
          'text-offset': [0, 1.5],
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#d4af37',
          'text-halo-color': '#000000',
          'text-halo-width': 1.5,
        },
      });

      map.current.addLayer({
        id: 'poi-labels',
        type: 'symbol',
        source: 'poi',
        layout: {
          'text-field': ['get', 'name'],
          'text-size': 10,
          'text-offset': [0, 1.2],
          'text-anchor': 'top',
        },
        paint: {
          'text-color': '#cccccc',
          'text-halo-color': '#000000',
          'text-halo-width': 1,
        },
      });

      map.current.addLayer({
        id: 'city-overlap-labels',
        type: 'symbol',
        source: 'city-overlap',
        layout: {
          'text-field': ['get', 'name'],
          'text-size': 11,
          visibility: 'none',
        },
        paint: {
          'text-color': '#ffffff',
          'text-halo-color': '#000000',
          'text-halo-width': 1.5,
        },
      });

      const clickableLayers = ['communities-layer', 'poi-layer', 'city-overlap-fill'];
      for (const layerId of clickableLayers) {
        map.current.on('click', layerId, (e) => {
          const feature = e.features?.[0];
          if (feature?.properties) {
            setSelectedFeature({
              name: String(feature.properties.name ?? ''),
              description: String(feature.properties.description ?? ''),
              properties: feature.properties as Record<string, unknown>,
            });
          }
        });
        map.current.on('mouseenter', layerId, () => {
          if (map.current) map.current.getCanvas().style.cursor = 'pointer';
        });
        map.current.on('mouseleave', layerId, () => {
          if (map.current) map.current.getCanvas().style.cursor = '';
        });
      }

      map.current.resize();
      setMapLoaded(true);
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  useEffect(() => {
    initMap();
  }, [initMap]);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const showCommunities = mode === 'communities';
    const showCityOverlap = mode === 'city-overlap';

    map.current.setLayoutProperty('communities-layer', 'visibility', showCommunities ? 'visible' : 'none');
    map.current.setLayoutProperty('communities-labels', 'visibility', showCommunities ? 'visible' : 'none');
    map.current.setLayoutProperty('poi-layer', 'visibility', showCommunities ? 'visible' : 'none');
    map.current.setLayoutProperty('poi-labels', 'visibility', showCommunities ? 'visible' : 'none');
    map.current.setLayoutProperty('city-overlap-fill', 'visibility', showCityOverlap ? 'visible' : 'none');
    map.current.setLayoutProperty('city-overlap-outline', 'visibility', showCityOverlap ? 'visible' : 'none');
    map.current.setLayoutProperty('city-overlap-labels', 'visibility', showCityOverlap ? 'visible' : 'none');

    setSelectedFeature(null);
  }, [mode, mapLoaded]);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    if (mode !== 'timeline') return;

    const event = timelineEvents.reduce((prev, curr) =>
      Math.abs(curr.year - sliderValue) < Math.abs(prev.year - sliderValue) ? curr : prev
    );

    if (event.coordinates) {
      map.current.flyTo({
        center: event.coordinates as [number, number],
        zoom: event.zoom ?? 9,
        duration: 1500,
      });
    }

    const frame = window.requestAnimationFrame(() => {
      setSelectedFeature({
        name: `${event.year}: ${event.title}`,
        description: event.description,
        properties: { year: event.year },
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [sliderValue, mode, mapLoaded]);

  const getLakeShrinkingInfo = useCallback(() => {
    const closest = lakeShrinkingData.data.reduce((prev, curr) =>
      Math.abs(curr.year - sliderValue) < Math.abs(prev.year - sliderValue) ? curr : prev
    );
    return closest;
  }, [sliderValue]);

  const getBiodiversityInfo = useCallback(() => {
    return biodiversityData.metrics.map((metric) => {
      const closest = metric.data.reduce((prev, curr) =>
        Math.abs(curr.year - sliderValue) < Math.abs(prev.year - sliderValue) ? curr : prev
      );
      return { ...metric, current: closest };
    });
  }, [sliderValue]);

  const sliderMin = mode === 'timeline' ? 1589 : 1970;
  const sliderMax = 2024;

  return (
    <div className="relative h-[calc(100vh-3.5rem)] lg:h-screen flex flex-col">
      <MapControls mode={mode} onModeChange={setMode} />

      <div className="flex-1 relative overflow-hidden">
        <div ref={mapContainer} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }} />

        {(mode === 'timeline' || mode === 'lake-shrinking' || mode === 'biodiversity') && (
          <div className="absolute bottom-6 left-4 right-4 z-10">
            <div className="bg-black/80 backdrop-blur-md rounded-lg border border-white/10 p-4 max-w-xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {mode === 'timeline' ? 'Timeline' : mode === 'lake-shrinking' ? 'Lake Area' : 'Biodiversity'}
                </span>
                <span className="text-lg text-[#d4af37] font-light tabular-nums">{sliderValue}</span>
              </div>
              <input
                type="range"
                min={sliderMin}
                max={sliderMax}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>{sliderMin}</span>
                <span>{sliderMax}</span>
              </div>

              {mode === 'lake-shrinking' && (
                <div className="mt-3 pt-3 border-t border-white/5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl text-[#d4af37] font-light tabular-nums">
                      {getLakeShrinkingInfo().value.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">km²</span>
                  </div>
                  {getLakeShrinkingInfo().description && (
                    <p className="text-xs text-gray-400 mt-1">{getLakeShrinkingInfo().description}</p>
                  )}
                </div>
              )}

              {mode === 'biodiversity' && (
                <div className="mt-3 pt-3 border-t border-white/5 space-y-2">
                  {getBiodiversityInfo().map((metric) => (
                    <div key={metric.id} className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{metric.label}</span>
                      <span className="text-sm text-[#d4af37] tabular-nums">{metric.current.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {selectedFeature && (
          <MapInfoPanel feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { GeoVisualsCarousel } from './GeoVisualsCarousel';
import { MAPS, STORYMAPS, DASHBOARDS } from '../../data/geovisuals';

type TabType = 'maps' | 'storymaps' | 'dashboards';

export function GeoVisuals() {
  const [activeTab, setActiveTab] = useState<TabType>('maps');

  const tabs: { id: TabType; label: string; count: number }[] = [
    { id: 'maps', label: 'Maps', count: MAPS.length },
    { id: 'storymaps', label: 'StoryMaps', count: STORYMAPS.length },
    { id: 'dashboards', label: 'Dashboards', count: DASHBOARDS.length }
  ];

  const getActiveData = () => {
    switch (activeTab) {
      case 'maps':
        return MAPS;
      case 'storymaps':
        return STORYMAPS;
      case 'dashboards':
        return DASHBOARDS;
      default:
        return MAPS;
    }
  };

  const getActiveLabel = () => {
    return tabs.find(t => t.id === activeTab)?.label || 'Maps';
  };

  return (
    <section id="geovisuals" className="py-10 bg-gradient-to-b from-white/80 to-green-50/30">
      <div className="page-container">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">GeoVisuals</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Explore spatial analyses and interactive storytelling showcasing geospatial outputs, research, forest landscape restoration, and climate adaptation strategies across Rwanda.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              aria-selected={activeTab === tab.id}
              aria-label={`View ${tab.label} (${tab.count} items)`}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 ${
                activeTab === tab.id
                  ? 'bg-green-700 text-white shadow-lg'
                  : 'bg-white text-green-700 border-2 border-gray-300 hover:border-green-400'
              }`}
            >
              {tab.label}
              <span className="ml-2 text-sm opacity-75">({tab.count})</span>
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
          <GeoVisualsCarousel 
            items={getActiveData()} 
            tabName={getActiveLabel()}
          />
        </div>
      </div>
    </section>
  );
}

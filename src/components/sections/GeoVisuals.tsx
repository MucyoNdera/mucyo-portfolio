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
    <section id="geovisuals" className="py-12 bg-gradient-to-b from-white/80 to-green-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">GeoVisuals</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Explore spatial analyses and interactive storytelling showcasing geospatial research, environmental insights, and climate adaptation strategies across Rwanda.
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
                  : 'bg-white text-green-700 border-2 border-green-200 hover:border-green-400'
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

        {/* Info Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="text-2xl font-bold text-green-700 mb-1">{MAPS.length}</div>
            <p className="text-sm text-gray-700 font-medium">Thematic Maps</p>
            <p className="text-xs text-gray-600 mt-1.5">Spatial analyses of agriculture, ecosystems, and land use</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="text-2xl font-bold text-blue-700 mb-1">{STORYMAPS.length}</div>
            <p className="text-sm text-gray-700 font-medium">Interactive Stories</p>
            <p className="text-xs text-gray-600 mt-1.5">Narrative-driven experiences with embedded maps</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <div className="text-2xl font-bold text-amber-700 mb-1">{DASHBOARDS.length}</div>
            <p className="text-sm text-gray-700 font-medium">Live Dashboards</p>
            <p className="text-xs text-gray-600 mt-1.5">Real-time monitoring and indicator tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
}
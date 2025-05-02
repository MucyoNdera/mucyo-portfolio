import React from 'react';
import { MapCard } from '../cards/MapCard';
import { StoryMapCard } from '../cards/StoryMapCard';

export function GeoVisuals() {
  const maps = [
    {
      title: "Maize Suitability",
      image: "/images/image5.jpg",
      link: "/images/image5.jpg"
    },
    {
      title: "Wetland Health Index (WHI)",
      image: "/images/Wetland Health Index.jpg",
      link: "/images/Wetland Health Index.jpg"
    },
    {
      title: "Land Use and Land Cover Classification",
      image: "/images/Current land use land cover.jpg",
      link: "/images/Current land use land cover.jpg"
    },
    {
      title: "Vegetation Cover in Volcanoes National Park of Rwanda",
      image: "/images/Landcove types.jpg",
      link: "/images/Landcove types.jpg"
    }
  ];

  const storyMaps = [
    {
      title: "Climate Change Adaptation in Rwanda",
      image: "/images/GanzAfrica_Workshop.png",
      link: "https://storymaps.arcgis.com/stories/d15dd9b68d9f4cd595b300fa5edbe0b8"
    },
    {
      title: "Roots of Success: Rwanda's Journey to a Greener Future",
      image: "/images/Nyungwe NPK road.jpg",
      link: "https://storymaps.arcgis.com/stories/59ec67e48507448a82e5339be2ebb78c"
    }
  ];

  return (
    <section id="geovisuals" className="py-16 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">GeoVisuals</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">Maps Gallery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maps.map((map, index) => (
              <div key={index}>
                <MapCard {...map} />
                <a 
                  href={map.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block mt-2 text-sm text-center"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6 text-blue-600 hover:text-blue-800 mx-auto"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h6.75a2.25 2.25 0 002.25-2.25V15M9 12h12m0 0l-3-3m3 3l-3 3" 
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">StoryMaps</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {storyMaps.map((storyMap, index) => (
              <StoryMapCard key={index} {...storyMap} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-green-800 mb-6">Interactive Dashboards</h3>
            <div className="grid md:grid-cols-2 gap-8">
            <StoryMapCard
              title="Land Cover Change in Kirehe District"
              image="/images/Kirehe District.jpg"
              link="https://www.arcgis.com/apps/dashboards/355deb62df1848f38fc1528fc7ba896e"
              type="dashboard"
            />
            <StoryMapCard
              title="The Effectiveness of Forest Landscape Restoration, Social-Economic aspects"
              image="/images/Picture on the field.jpeg"
              link="https://lookerstudio.google.com/embed/reporting/8bc7dad7-1272-4dfb-abff-ec832cf079d5/page/pkA7D"
              type="dashboard"
            />
            </div>
        </div>
      </div>
    </section>
  );
}
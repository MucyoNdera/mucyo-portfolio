export interface GeoVisualItem {
  id: string;
  title: string;
  description: string;
  keyTakeaway: string;
  tags: string[];
  image: string;
  link: string;
  type: 'image' | 'iframe';
}

export const MAPS: GeoVisualItem[] = [
  {
    id: 'map-1',
    title: 'Maize Suitability Assessment',
    description: 'Spatial analysis identifying optimal zones for maize cultivation based on climate, soil, and terrain variables.',
    keyTakeaway: 'High-suitability areas concentrated in central and western highlands',
    tags: ['Agriculture', 'Suitability', 'Crop Planning'],
    image: './images/image5.jpg',
    link: '/images/image5.jpg',
    type: 'image'
  },
  {
    id: 'map-2',
    title: 'Wetland Health Index (WHI)',
    description: 'Comprehensive assessment of wetland ecosystem health using remote sensing and field validation data.',
    keyTakeaway: 'Wetland degradation concentrated near urban centers and intensive agricultural zones',
    tags: ['Wetlands', 'Ecosystem Health', 'Conservation'],
    image: './images/Wetland Health Index.jpg',
    link: '/images/Wetland Health Index.jpg',
    type: 'image'
  },
  {
    id: 'map-3',
    title: 'Land Use and Land Cover Classification',
    description: 'Multi-spectral classification showing current land cover types including forests, agriculture, urban areas, and water bodies.',
    keyTakeaway: '48% of study area under agricultural use; forest cover declining at 2.3% annually',
    tags: ['LULC', 'Land Cover', 'Monitoring'],
    image: './images/Current land use land cover.jpg',
    link: '/images/Current land use land cover.jpg',
    type: 'image'
  },
  {
    id: 'map-4',
    title: 'Vegetation Cover in Volcanoes National Park',
    description: 'Vegetation mapping and classification within Rwanda\'s premier conservation area, tracking forest health and biodiversity hotspots.',
    keyTakeaway: 'Dense forest cover maintained in protected core; edge-to-interior gradient detected',
    tags: ['Protected Areas', 'Vegetation', 'Biodiversity'],
    image: './images/Landcove types.jpg',
    link: '/images/Landcove types.jpg',
    type: 'image'
  }
];

export const STORYMAPS: GeoVisualItem[] = [
  {
    id: 'story-1',
    title: 'Climate Change Adaptation in Rwanda',
    description: 'Interactive narrative exploring climate adaptation strategies, community resilience, and nature-based solutions across Rwanda\'s diverse agroecological zones.',
    keyTakeaway: 'Community-led adaptation integrating traditional knowledge with modern climate science',
    tags: ['Climate Change', 'Adaptation', 'Community'],
    image: './images/GanzAfrica_Workshop.png',
    link: 'https://storymaps.arcgis.com/stories/d15dd9b68d9f4cd595b300fa5edbe0b8',
    type: 'iframe'
  },
  {
    id: 'story-2',
    title: 'Roots of Success: Rwanda\'s Journey to a Greener Future',
    description: 'Documentary-style storymap showcasing forest landscape restoration initiatives, their ecological impact, and contributions to Rwanda\'s "Green Nation" vision.',
    keyTakeaway: 'Restoration efforts increasing forest cover and supporting livelihoods in post-conflict recovery',
    tags: ['Restoration', 'Conservation', 'Sustainability'],
    image: './images/Nyungwe NPK road.jpg',
    link: 'https://storymaps.arcgis.com/stories/59ec67e48507448a82e5339be2ebb78c',
    type: 'iframe'
  }
];

export const DASHBOARDS: GeoVisualItem[] = [
  {
    id: 'dash-1',
    title: 'Environmental Monitoring Dashboard',
    description: 'Real-time monitoring platform tracking key environmental indicators including forest cover, water quality, and land degradation metrics.',
    keyTakeaway: 'Dashboard-based approach enables rapid decision-making for resource management',
    tags: ['Monitoring', 'Dashboard', 'Real-time'],
    image: './images/adaptationteam.jpeg',
    link: 'https://example.com/dashboard-1',
    type: 'iframe'
  },
  {
    id: 'dash-2',
    title: 'Climate Adaptation Indicators',
    description: 'Interactive dashboard presenting key climate vulnerability and adaptation indicators at district and community levels.',
    keyTakeaway: 'Multi-scale analysis reveals adaptation capacity gaps and prioritizes interventions',
    tags: ['Climate', 'Vulnerability', 'Planning'],
    image: './images/MucyoNderaTuyizere_CARN.jpg',
    link: 'https://example.com/dashboard-2',
    type: 'iframe'
  }
];

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
    description: 'Spatial multi-criteria analysis identifying optimal zones for maize cultivation based on environmental, climatic, soil, and topographic variables.',
    keyTakeaway: 'High-suitability areas concentrated in central and western highlands',
    tags: ['Agriculture', 'Suitability', 'Crop Planning'],
    image: './images/image5.jpg',
    link: '/images/image5.jpg',
    type: 'image'
  },
  {
    id: 'map-2',
    title: 'Wetland Health Index (WHI)',
    description: 'Spatial multi-criteria assessment of wetland ecosystem health, combining environmental, socio-economic, climatic, and soil factors.',
    keyTakeaway: 'Wetland degradation concentrated near urban centers, Bareland and agricultural zones',
    tags: ['Wetlands', 'Ecosystem Health', 'Conservation'],
    image: './images/Wetland Health Index.jpg',
    link: '/images/Wetland Health Index.jpg',
    type: 'image'
  },
  {
    id: 'map-3',
    title: 'Land Use and Land Cover Classification',
    description: 'Multi-spectral classification showing current land cover types including forests, agriculture, urban areas, barren land, grassland, and water bodies.',
    keyTakeaway: '48% of study area under agricultural use',
    tags: ['LULC', 'Land Cover', 'Monitoring'],
    image: './images/Current land use land cover.jpg',
    link: '/images/Current land use land cover.jpg',
    type: 'image'
  },
  {
    id: 'map-4',
    title: 'Vegetation Cover in Volcanoes National Park',
    description: 'Vegetation mapping and classification using Sentinel-2A imagery with a maximum likelihood classification method in ArcGIS Pro.',
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
    description: 'Interactive narrative exploring climate adaptation strategies, community resilience, and nature-based solutions in Musanze District.',
    keyTakeaway: 'Community-led adaptation integrating traditional knowledge with modern farming practices',
    tags: ['Climate Change', 'Adaptation', 'Community'],
    image: './images/GanzAfrica_Workshop.png',
    link: 'https://storymaps.arcgis.com/stories/d15dd9b68d9f4cd595b300fa5edbe0b8',
    type: 'iframe'
  },
  {
    id: 'story-2',
    title: 'Roots of Success: Rwanda\'s Journey to a Greener Future',
    description: 'Documentary-style storymap about forest landscape restoration in Rwanda, highlighting forest landscape restoration principles, ecological benefits, community engagement, contributions to Rwanda\'s "Green Nation" vision.',
    keyTakeaway: 'Restoration efforts increasing forest cover and supporting sustainable livelihoods in the Congo-Nile Crest, Rwanda',
    tags: ['Restoration', 'Conservation', 'Sustainability'],
    image: './images/Nyungwe NPK road.jpg',
    link: 'https://storymaps.arcgis.com/stories/59ec67e48507448a82e5339be2ebb78c',
    type: 'iframe'
  }
];

export const DASHBOARDS: GeoVisualItem[] = [
  {
    id: 'dash-1',
    title: 'Kirehe LULC Analysis',
    description: 'Land use and land cover change analysis for Kirehe district showing temporal dynamics from 2010-2035, including predictive modeling of future urban expansion and agricultural patterns performed in ArcGIS Pro and QGIS.',
    keyTakeaway: 'Historical trend analysis reveals rapid agricultural expansion and urbanization; future projections provided insights about city area growth in 2035',
    tags: ['Land Cover', 'Change Detection', 'Urban Growth', 'Prediction'],
    image: './images/Kirehe_LULC_Dashboard.png',
    link: 'https://ur-cgis.maps.arcgis.com/apps/dashboards/355deb62df1848f38fc1528fc7ba896e',
    type: 'iframe'
  },
  {
    id: 'dash-2',
    title: 'Rwanda Infrastructure Dashboard',
    description: 'Interactive dashboard displaying some of Rwanda\'s infrastructure development across provinces, featuring settlement distribution, health facility coverage',
    keyTakeaway: '3.3k health facilities across provinces; rural settlements dominate (3.2k) while rapid secondary city development underway',
    tags: ['Infrastructure', 'Health Facilities', 'Settlement', 'Urban Planning'],
    image: './images/Rwanda_Infrastructure_Dashboard.png',
    link: 'https://ur-cgis.maps.arcgis.com/apps/dashboards/40e029365e5a49c6822ca57bedc437a3',
    type: 'iframe'
  }
];

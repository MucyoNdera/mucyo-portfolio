import React from 'react';
import { SkillCard } from '../cards/SkillCard';

export function Skills() {
  const skills = {
    gisTools: [
      { name: 'ArcGIS Pro', proficiency: 95 },
      { name: 'QGIS', proficiency: 90 },
      { name: 'ArcGIS Online', proficiency: 85 }
    ],
    programming: [
      { name: 'Python', proficiency: 60 },
      { name: 'R', proficiency: 50 },
      { name: 'SQL', proficiency: 50 }
    ],
    webMapping: [
      { name: 'Leaflet.js', proficiency: 60 },
      { name: 'MapBox', proficiency: 30 },
      { name: 'OpenLayers', proficiency: 75 }
    ],
    remoteSensing: [
      { name: 'ILWIS Imagine', proficiency: 70 },
      { name: 'Deep Learning', proficiency: 40 },
      { name: 'Google Earth Engine', proficiency: 50 },
      { name: 'Machine Learning', proficiency: 30 }
    ]
  };

  return (
    <section id="skills" className="py-24 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard title="GIS Tools" skills={skills.gisTools} />
          <SkillCard title="Programming & Data Analysis" skills={skills.programming} />
          <SkillCard title="Web Mapping" skills={skills.webMapping} />
          <SkillCard title="Remote Sensing" skills={skills.remoteSensing} />
        </div>
      </div>
    </section>
  );
}
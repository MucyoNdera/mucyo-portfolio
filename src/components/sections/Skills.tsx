import React from 'react';
import { SkillCard } from '../cards/SkillCard';

export function Skills() {
  const skills = {
    gisTools: [
      { name: 'ArcGIS Pro', proficiency: 85 },
      { name: 'QGIS', proficiency: 80 },
      { name: 'ArcGIS Online', proficiency: 75 }
    ],
    programming: [
      { name: 'Python', proficiency: 50 },
      { name: 'R', proficiency: 40 },
      { name: 'SQL', proficiency: 30 }
    ],
    webMapping: [
      { name: 'Leaflet.js', proficiency: 50 },
      { name: 'OpenLayers', proficiency: 50 }
    ],
    remoteSensing: [
      { name: 'ILWIS Imagine', proficiency: 60 },
      { name: 'Google Earth Engine', proficiency: 50 },
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
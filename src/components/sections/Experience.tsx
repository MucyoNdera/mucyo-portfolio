import React from 'react';
import { ExperienceCard } from '../cards/ExperienceCard';

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Working Experience</h2>
        <div className="space-y-8">
          <ExperienceCard 
            title="Climate Change Adaptation Fellow"
            company="GanzAfrica Organization"
            description="Bridging cutting-edge technologies with community-driven solutions to advance climate change adaptation, sustainable agriculture, and food security."
            link="https://ganzafrica.org"
          />
          <ExperienceCard 
            title="Research Assistant"
            company="University of Rwanda"
            description="Led research on environmental planning and forest landscape restoration, leveraging GIS and remote sensing for data analysis, training, and impactful reporting."
            link="https://ur.ac.rw"
          />
        </div>
      </div>
    </section>
  );
}
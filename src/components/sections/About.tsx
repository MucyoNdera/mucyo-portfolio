import React from 'react';

export function About() {
  return (
    <section id="about" className="py-12 bg-white/80">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-forest mb-4">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="leading-relaxed space-y-4">
            <p className="text-sm md:text-base text-gray-900">
              I am an environmental planning professional with over three years of applied experience in climate adaptation, natural resource management, forest landscape restoration, and spatial analysis.
            </p>
            <p className="text-sm md:text-base text-gray-900">
              My work spans research, consulting, and community-driven implementation. I work closely with communities, local leaders, and diverse stakeholders, applying GIS, remote sensing, and Earth observation tools to support evidence-based planning, ecosystem restoration, and climate resilience initiatives in Rwanda. I have led and supported spatial data collection, land suitability assessments, restoration effectiveness studies, and geospatial analysis and visualization for research institutions, NGOs, and local companies.
            </p>
            <p className="text-sm md:text-base text-gray-900">
              I hold a Bachelor of Science (Honours) in Geography, with a specialization in Environmental Planning, from the University of Rwanda. Professionally, I spent two years as a Climate Change Adaptation Fellow at GanzAfrica Organization, supporting community-based, nature-based solutions and climate adaptation initiatives, and one year as a Research Assistant at the University of Rwanda's Centre for Geographic Information Systems and Remote Sensing, where I contributed to applied geospatial research, training, and data analysis.
            </p>
            <p className="text-sm md:text-base text-gray-900">
              I have contributed to peer-reviewed research on forest landscape restoration, renewable energy siting, and land-use dynamics, and I am particularly interested in bridging science, policy, and local implementation to support sustainable land and natural resource management.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="./images/Mucyo Profile.jpg"
              alt="Mucyo Ndera Tuyizere profile picture"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

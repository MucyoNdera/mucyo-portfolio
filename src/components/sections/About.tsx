import React from 'react';

export function About() {
  return (
    <section id="about" className="py-16 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-900">
              My name is Mucyo Ndera Tuyizere.
              I am currently a Climate Adaptation Fellow at GanzAfrica Organization,
              where I help design and implement community-driven,
              nature-based solutions using data-driven approaches to strengthen local climate adaptation efforts.
              Previously, I worked as a Research Assistant at the University of Rwanda’s Centre for Geographic Information Systems and Remote Sensing,
              contributing to projects that apply geospatial technologies for environmental planning, monitoring, and management.
            </p>
            <p className="text-lg text-gray-900">
              I hold a Bachelor of Science (Honors) degree in Geography with a specialization in Environmental Planning from the University of Rwanda.
              My work is driven by a deep commitment to sustainable environmental practices, with a strong focus on natural resource management, 
              sustainable agriculture, climate adaptation, ecosystem restoration, and community empowerment.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
          <img 
  src={`${import.meta.env.PUBLIC_URL || ''}/images/mucyoganzafrica.jpeg`}
  alt="Environmental Researcher in Nature"
  className="w-full h-full object-cover"
/>
          </div>
        </div>
      </div>
    </section>
  );
}
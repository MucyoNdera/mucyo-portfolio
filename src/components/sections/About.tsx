import React from 'react';

export function About() {
  return (
    <section id="about" className="py-6 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-4">About Me</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-base md:text-lg leading-relaxed space-y-4">
            <p className="text-gray-900">
              I am an environmental planning professional with three years of experience in climate adaptation, natural resource management, and applied geospatial analysis. My work has included supporting community-driven, nature-based solutions in Musanze District through data-driven approaches to strengthen local climate adaptation, as well as contributing to geospatial research on forest landscape restoration, spatial health, and natural resources management at the University of Rwanda's Centre for Geographic Information Systems and Remote Sensing.
            </p>
            <p className="text-gray-900">
              I hold a Bachelor of Science (Honours) degree in Geography with a specialization in Environmental Planning from the University of Rwanda, and my professional interests focus on sustainable natural resources management, climate adaptation, ecosystem restoration, and community empowerment.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="./images/Mucyo Profile.jpg"
              alt="Mucyo Ndera Tuyizere profile picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
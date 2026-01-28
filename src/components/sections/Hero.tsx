import React from 'react';
import { MapPin } from 'lucide-react';


export function Hero() {
  return (
    <section 
      id="hero"
      className="pt-24 pb-16 relative"
      style={{
      backgroundImage: "url('./images/mucyogishwatia.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40" />
      <div className="page-container relative z-10">
      <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 transition-all">
      Mucyo Ndera Tuyizere
      </h1>
      <p className="text-xl md:text-2xl text-white mb-4">
      Environmental Planner, GIS and Remote Sensing Scientist
      </p>
      <div className="flex items-center justify-center text-amber-300 mb-8">
      <MapPin className="h-5 w-5 mr-2" />
      <a href="https://orcid.org/0009-0005-4249-201X" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200 transition-colors duration-150">
        0009-0005-4249-201X
      </a>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black/30 transition-all duration-150"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black/30 transition-all duration-150"
        >
          Contact Me
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
      {[
        "Science",
        "Research",
        "Data",
        "Action",
        "Sustainability"
      ].map((keyword, index) => (
        <span 
        key={index}
        className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-150"
        >
        {keyword}
        </span>
      ))}
      </div>
      </div>
      </div>
    </section>
  );
}

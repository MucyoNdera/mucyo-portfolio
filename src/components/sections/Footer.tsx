import React from 'react';

export function Footer() {
  return (
    <footer className="bg-forest text-white py-8">
      <div className="page-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Mucyo Ndera Tuyizere</h3>
            <p className="text-sm text-[#dfe5dd]">
              Environmental Planning | GIS Analysis | Remote Sensing
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li><a href="#about" className="text-[#dfe5dd] hover:text-white transition-colors duration-150">About</a></li>
              <li><a href="#projects" className="text-[#dfe5dd] hover:text-white transition-colors duration-150">Projects</a></li>
              <li><a href="#geovisuals" className="text-[#dfe5dd] hover:text-white transition-colors duration-150">GeoVisuals</a></li>
              <li><a href="#contact" className="text-[#dfe5dd] hover:text-white transition-colors duration-150">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Expertise</h3>
            <ul className="space-y-1.5 text-sm text-[#dfe5dd]">
            <li>GIS & Remote Sensing</li>
            <li>Data Analysis</li>
              <li>Environmental Planning</li>
              <li>Conservation Agriculture</li>
              <li>Natural Resource Management</li>
              <li>Climate Change Adaptation</li>
              <li>Community Engagement and Capacity Building</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#2a4b39] text-center text-[#dfe5dd]">
          <p>&copy; {new Date().getFullYear()} Mucyo Ndera Tuyizere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

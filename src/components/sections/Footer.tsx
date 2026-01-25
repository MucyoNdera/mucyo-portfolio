import React from 'react';

export function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Mucyo Ndera Tuyizere</h3>
            <p className="text-sm text-green-100">
              Environmental Planning | GIS Analysis | Remote Sensing
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li><a href="#about" className="text-green-100 hover:text-white transition-colors duration-150">About</a></li>
              <li><a href="#projects" className="text-green-100 hover:text-white transition-colors duration-150">Projects</a></li>
              <li><a href="#geovisuals" className="text-green-100 hover:text-white transition-colors duration-150">GeoVisuals</a></li>
              <li><a href="#contact" className="text-green-100 hover:text-white transition-colors duration-150">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Expertise</h3>
            <ul className="space-y-1.5 text-sm text-green-100">
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
        <div className="mt-12 pt-8 border-t border-green-800 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} Mucyo Ndera Tuyizere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
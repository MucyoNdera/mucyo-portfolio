import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Education</h2>
        <div className="bg-white/80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <GraduationCap className="h-8 w-8 text-green-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-green-900">Bachelor of Science in Geography (Environmental Planning)</h3>
              <p className="text-lg text-green-800 mt-2">University of Rwanda – College of Science and Technology</p>
              <a 
                href="https://ur.ac.rw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-amber-700 hover:text-amber-800 mt-4 transition-colors duration-150"
              >
                Visit University Website
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
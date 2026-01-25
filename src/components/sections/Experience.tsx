import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      id: 'exp-1',
      title: 'Climate Change Adaptation Fellow',
      company: 'GanzAfrica Organization',
      description: 'Bridging science with community-driven solutions to advance climate change adaptation, sustainable agriculture, and food security.',
      link: 'https://ganzafrica.org'
    },
    {
      id: 'exp-2',
      title: 'Research Assistant',
      company: 'University of Rwanda',
      description: 'Led research on environmental planning and forest landscape restoration, leveraging GIS and remote sensing for data analysis, training, and impactful reporting.',
      link: 'https://ur.ac.rw'
    }
  ];

  return (
    <section id="experience" className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Working Experience</h2>
        
        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-green-600 to-emerald-500 hidden sm:block" />
          
          {/* Timeline items */}
          <div className="space-y-3 sm:space-y-4 sm:ml-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:-left-9 top-2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-md hidden sm:block" />
                
                {/* Card */}
                <div className="bg-white/80 rounded-lg p-3 sm:p-4 shadow hover:shadow-md transition-shadow duration-300">
                  <div className="flex gap-3">
                    <Briefcase className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5 hidden sm:block" />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-green-900">{exp.title}</h3>
                      <p className="text-xs text-green-800 font-medium">{exp.company}</p>
                      <p className="text-xs text-gray-700 mt-1.5 leading-relaxed">{exp.description}</p>
                      <a 
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 text-sm mt-2 transition-colors duration-150"
                      >
                        Learn more
                        <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
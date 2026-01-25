import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { PUBLICATIONS } from '../../data/publications';

export function Publications() {
  return (
    <section id="publications" className="py-16 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Publications</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {PUBLICATIONS.map((pub) => (
            <div 
              key={pub.id} 
              className="bg-white/90 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
            >
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-green-700 flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-sm font-medium text-gray-900 flex-1">
                      {pub.title}
                    </h3>
                    <span className="text-xs text-green-700 font-medium whitespace-nowrap">
                      {pub.year}
                    </span>
                  </div>
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-amber-700 hover:text-amber-800 text-xs transition-colors duration-150"
                  >
                    View Publication
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
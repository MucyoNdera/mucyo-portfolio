import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PUBLICATIONS } from '../../data/publications';

export function Publications() {
  return (
    <section id="publications" className="py-6 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Publications</h2>
        <div className="space-y-2">
          {PUBLICATIONS.map((pub) => (
            <div 
              key={pub.id} 
              className="flex items-start justify-between gap-3 px-4 py-2.5 hover:bg-green-50 rounded transition-colors group"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-green-900 transition-colors">
                  {pub.title}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 whitespace-nowrap">
                  {pub.year}
                </span>
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-1.5 text-amber-700 hover:text-amber-800 hover:bg-amber-50 rounded transition-colors"
                  aria-label={`View publication: ${pub.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { PUBLICATIONS } from '../../data/publications';

export function Publications() {
  return (
    <section id="publications" className="py-6 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Publications</h2>
        <div className="space-y-2">
          {PUBLICATIONS.map((pub, index) => (
            <a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-green-100 bg-white/50 hover:bg-green-50 hover:border-green-300 transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              {/* Left side - Publication info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 group-hover:text-green-900 transition-colors line-clamp-2">
                  {pub.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {/* Optional: Add publication type or journal info here */}
                  Research Publication
                </p>
              </div>

              {/* Right side - Year badge and button */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 ring-1 ring-green-300 whitespace-nowrap">
                  {pub.year}
                </span>
                <button
                  className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-green-700 hover:bg-green-800 group-hover:shadow-md transition-all duration-200 active:scale-95"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(pub.link, '_blank');
                  }}
                  aria-label={`View publication: ${pub.title}`}
                >
                  View
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
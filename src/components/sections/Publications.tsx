import React from 'react';
import { PUBLICATIONS } from '../../data/publications';

export function Publications() {
  return (
    <section id="publications" className="py-6 bg-white/80">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Publications</h2>
        <div className="space-y-1.5">
          {PUBLICATIONS.map((pub, index) => (
            <a
              key={pub.id}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-gray-200 bg-white/50 hover:bg-amber-50 hover:border-amber-300 transition-all duration-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              {/* Left side - Publication info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black group-hover:text-black transition-colors line-clamp-2">
                  {pub.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {/* Optional: Add publication type or journal info here */}
                  Research Publication
                </p>
              </div>

              {/* Right side - Year badge and button */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 ring-1 ring-amber-300 whitespace-nowrap">
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

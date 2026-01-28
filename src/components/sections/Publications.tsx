import React from 'react';
import { PUBLICATIONS } from '../../data/publications';

export function Publications() {
  return (
    <section id="publications" className="py-12 bg-white/80">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-forest mb-4">Publications</h2>
        <div className="space-y-1.5">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="group flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-gray-200 bg-white/50 hover:bg-fog hover:border-sand transition-all duration-300 hover:shadow-md"
            >
              {/* Left side - Publication info */}
              <div className="flex-1 min-w-0">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-slate group-hover:text-forest transition-colors line-clamp-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6a4d] focus-visible:ring-offset-2"
                >
                  {pub.title}
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  {/* Optional: Add publication type or journal info here */}
                  Research Publication
                </p>
              </div>

              {/* Right side - Year badge and button */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-sand/40 text-slate ring-1 ring-sand whitespace-nowrap">
                  {pub.year}
                </span>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-forest hover:bg-pine group-hover:shadow-md transition-all duration-200 active:scale-95"
                  aria-label={`View publication: ${pub.title}`}
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

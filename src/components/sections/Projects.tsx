import React, { useState, useMemo, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Search, Map } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const targetScroll = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-16">
      <div className="page-container">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Projects</h2>
        
        {/* Search Input */}
        <div className="mb-8 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Project with keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative group">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4 sm:ml-0 bg-white/90 hover:bg-green-50 text-green-700 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-label="Scroll gallery left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-80 snap-center bg-white/90 rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:border-green-300 hover:shadow-md"
              >
                {/* Image Area */}
                <div className="h-48 overflow-hidden bg-gray-200 rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-3">
                  {/* Title */}
                  <h3 className="text-base font-semibold text-green-900 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description.substring(0, 120)}...
                  </p>

                  {/* Tag */}
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-700 ring-1 ring-amber-200 w-fit">
                      Case Study
                    </span>
                  </div>

                  {/* Compact Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-max inline-flex items-center justify-center gap-1 px-3 py-2 rounded text-sm font-semibold bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 transition-all duration-200 shadow-sm hover:shadow"
                      title="View Project"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Project</span>
                    </a>
                    {project.storymapLink && (
                      <a
                        href={project.storymapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-max inline-flex items-center justify-center gap-1 px-3 py-2 rounded text-sm font-semibold bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 transition-all duration-200 shadow-sm hover:shadow"
                        title="View Story Map"
                      >
                        <Map className="h-4 w-4" />
                        <span>View Story Map</span>
                      </a>
                    )}
                  </div>

                  {/* Details Button */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="w-full px-3 py-2 rounded text-sm font-semibold bg-gray-50 text-green-700 hover:bg-green-50 border border-gray-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    {expandedId === project.id ? 'Hide Details' : 'Show Details'}
                  </button>
                </div>

                {/* Expandable Details */}
                {expandedId === project.id && (
                  <div className="border-t border-gray-200 px-4 py-4 bg-gray-50/30 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4 sm:mr-0 bg-white/90 hover:bg-green-50 text-green-700 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-label="Scroll gallery right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}

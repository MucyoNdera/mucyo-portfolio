import React, { useState, useMemo } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Search, Map, Database } from 'lucide-react';
import { PROJECTS } from '../../data/projects';

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-8">Projects</h2>
        
        {/* Search Input */}
        <div className="mb-8 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Project with keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Compact Media List */}
        <div className="space-y-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/90 rounded-lg border border-green-100 overflow-hidden transition-all duration-300 hover:border-green-300 hover:shadow-md"
            >
              {/* Project Media Row */}
              <button
                onClick={() => toggleExpand(project.id)}
                className="w-full px-4 py-3 flex items-stretch gap-4 hover:bg-green-50/50 transition-colors duration-200 text-left group"
              >
                {/* Thumbnail - Square, 76px */}
                <div className="flex-shrink-0 w-[76px] h-[76px] rounded-md overflow-hidden bg-gray-200 ring-1 ring-green-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Center Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <h3 className="text-sm font-semibold text-green-900 group-hover:text-green-700 transition-colors line-clamp-1 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 ring-1 ring-green-200 w-fit">
                      Case Study
                    </span>
                  </div>
                </div>

                {/* Right Actions - Compact on Desktop, Stack on Mobile */}
                <div className="hidden sm:flex flex-shrink-0 items-center gap-2">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-1 transition-all duration-200 shadow-sm hover:shadow"
                    title="View Project"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span className="hidden md:inline">View</span>
                  </a>
                  {project.storymapLink && (
                    <a
                      href={project.storymapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-1 transition-all duration-200 shadow-sm hover:shadow"
                      title="View StoryMap"
                    >
                      <Map className="h-3.5 w-3.5" />
                      <span className="hidden md:inline">Map</span>
                    </a>
                  )}
                  {project.datasetLink && (
                    <a
                      href={project.datasetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-1 transition-all duration-200 shadow-sm hover:shadow"
                      title="View Dataset"
                    >
                      <Database className="h-3.5 w-3.5" />
                      <span className="hidden md:inline">Data</span>
                    </a>
                  )}
                </div>

                {/* Expand Indicator */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  {expandedId === project.id ? (
                    <ChevronUp className="h-5 w-5 text-green-700 transition-transform" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600 transition-transform" />
                  )}
                </div>
              </button>

              {/* Mobile Action Buttons - Show on smaller screens */}
              {!expandedId && (
                <div className="sm:hidden px-4 py-2 bg-green-50/30 border-t border-green-100 flex gap-2">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-semibold bg-green-700 text-white hover:bg-green-800 transition-all duration-200"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View
                  </a>
                  {project.storymapLink && (
                    <a
                      href={project.storymapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200"
                    >
                      <Map className="h-3 w-3" />
                      Map
                    </a>
                  )}
                  {project.datasetLink && (
                    <a
                      href={project.datasetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-all duration-200"
                    >
                      <Database className="h-3 w-3" />
                      Data
                    </a>
                  )}
                </div>
              )}

              {/* Expanded Details Panel */}
              {expandedId === project.id && (
                <div className="border-t border-green-100 px-4 py-4 bg-green-50/30 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                    {project.storymapLink && (
                      <a
                        href={project.storymapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        <Map className="h-4 w-4" />
                        Story Map
                      </a>
                    )}
                    {project.datasetLink && (
                      <a
                        href={project.datasetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        <Database className="h-4 w-4" />
                        Dataset
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
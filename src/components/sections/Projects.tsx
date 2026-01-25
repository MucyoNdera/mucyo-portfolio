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
    <section id="projects" className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Projects</h2>
        
        {/* Search Input */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search Project with keywords"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>

        {/* Modern Project List */}
        <div className="space-y-2.5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/90 rounded-lg border border-green-100 overflow-hidden transition-all duration-300 hover:border-green-300 hover:shadow-lg"
            >
              {/* Project Row */}
              <button
                onClick={() => toggleExpand(project.id)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-green-50/70 transition-colors group"
              >
                {/* Thumbnail - Larger and more prominent */}
                <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-gray-300 ring-2 ring-green-100 group-hover:ring-green-300 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-left min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-green-900 group-hover:text-green-700 transition-colors">{project.title}</h3>
                    {expandedId === project.id ? (
                      <ChevronUp className="h-5 w-5 text-green-700 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-green-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-1 mb-2">
                    {project.description.substring(0, 110)}...
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 ring-1 ring-green-200">
                      Case Study
                    </span>
                  </div>
                </div>
              </button>

              {/* Expanded Details Panel */}
              {expandedId === project.id && (
                <div className="border-t border-green-100 px-4 py-4 bg-green-50/30 space-y-4 animate-in fade-in slide-in-from-top-2">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-semibold bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </a>
                    {project.storymapLink && (
                      <a
                        href={project.storymapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        <Map className="h-4 w-4" />
                        Story Map
                      </a>
                    )}
                    {project.datasetLink && (
                      <a
                        href={project.datasetLink}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
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
          <div className="text-center py-8">
            <p className="text-gray-600">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
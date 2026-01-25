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
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>

        {/* Compact Project List */}
        <div className="space-y-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/90 rounded-lg border border-green-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Collapsed View */}
              <button
                onClick={() => toggleExpand(project.id)}
                className="w-full px-4 py-3 flex items-start gap-4 hover:bg-green-50/50 transition-colors"
              >
                {/* Thumbnail */}
                <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-left min-w-0">
                  <h3 className="text-base font-semibold text-green-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-700 line-clamp-1 mb-2">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Case Study
                    </span>
                  </div>
                </div>

                {/* Toggle Icon */}
                <div className="flex-shrink-0">
                  {expandedId === project.id ? (
                    <ChevronUp className="h-5 w-5 text-green-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-700" />
                  )}
                </div>
              </button>

              {/* Expanded Details */}
              {expandedId === project.id && (
                <div className="border-t border-green-100 px-4 py-4 bg-white space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Action Links */}
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-green-700 text-white hover:bg-green-800 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      View Project
                    </a>
                    {project.storymapLink && (
                      <a
                        href={project.storymapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        <Map className="h-3.5 w-3.5" />
                        Story Map
                      </a>
                    )}
                    {project.datasetLink && (
                      <a
                        href={project.datasetLink}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                      >
                        <Database className="h-3.5 w-3.5" />
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
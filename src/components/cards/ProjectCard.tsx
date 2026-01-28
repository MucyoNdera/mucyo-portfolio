import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Map, Database } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectLink: string;
  storymapLink?: string;
  datasetLink?: string;
}

export function ProjectCard({ title, description, image, projectLink, storymapLink, datasetLink }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/90 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-xl font-semibold text-white p-4">{title}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h4 className="text-sm font-medium text-green-900">Project Description</h4>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-green-700" />
          ) : (
            <ChevronDown className="h-4 w-4 text-green-700" />
          )}
        </div>
        
        <div 
          className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-sm text-gray-900 whitespace-pre-wrap leading-relaxed">{description}</p>
        </div>
        
        <div className="mt-4 flex items-center gap-4 flex-wrap">
          <a 
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-700 hover:text-amber-800 flex items-center transition-colors duration-150 text-sm"
          >
            View Project
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
          {storymapLink && (
            <a 
              href={storymapLink}
              className="text-green-700 hover:text-green-800 flex items-center transition-colors duration-150 text-sm"
            >
              View Story Map
              <Map className="h-3 w-3 ml-1" />
            </a>
          )}
          {datasetLink && (
            <a 
              href={datasetLink}
              className="text-amber-700 hover:text-amber-800 flex items-center transition-colors duration-150 text-sm"
            >
              View Dataset
              <Database className="h-3 w-3 ml-1" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  description: string;
  link: string;
}

export function ExperienceCard({ title, company, description, link }: ExperienceCardProps) {
  return (
    <div className="bg-white/90 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4">
        <Briefcase className="h-7 w-7 text-green-700 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-semibold text-green-900">{title}</h3>
          <p className="text-lg text-green-800 mt-1">{company}</p>
          <p className="text-gray-900 mt-4">{description}</p>
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-700 hover:text-amber-800 mt-4 transition-colors duration-150"
          >
            Visit Organization
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
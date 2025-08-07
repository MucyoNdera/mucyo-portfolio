import React from 'react';
import { Database } from 'lucide-react';

interface DatasetCardProps {
  title: string;
  description: string;
  link: string;
}

export function DatasetCard({ title, description, link }: DatasetCardProps) {
  return (
    <div className="bg-white/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-xl font-semibold text-green-900 mb-2">{title}</h3>
      <p className="text-gray-900 mb-4">{description}</p>
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-amber-700 hover:text-amber-800 transition-colors duration-150"
      >
        Download Dataset
        <Database className="h-4 w-4 ml-2" />
      </a>
    </div>
  );
}
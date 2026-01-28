import React from 'react';
import { ExternalLink } from 'lucide-react';

interface StoryMapCardProps {
  title: string;
  image: string;
  link: string;
  type?: 'storymap' | 'dashboard';
}

export function StoryMapCard({ title, image, link, type = 'storymap' }: StoryMapCardProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/90 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <span className="inline-flex items-center text-white/90 text-sm">
              {type === 'dashboard' ? 'View Dashboard' : 'View Story Map'}
              <ExternalLink className="h-4 w-4 ml-2" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

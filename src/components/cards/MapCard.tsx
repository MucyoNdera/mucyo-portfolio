import React from 'react';

interface MapCardProps {
  title: string;
  image: string;
  link: string;
}

export function MapCard({ title, image, link }: MapCardProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/90 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-sm font-medium text-white p-3">{title}</h3>
        </div>
      </div>
    </a>
  );
}
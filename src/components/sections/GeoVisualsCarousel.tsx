import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GeoVisualItem } from '../../data/geovisuals';

interface GeoVisualsCarouselProps {
  items: GeoVisualItem[];
  tabName: string;
}

export function GeoVisualsCarousel({ items, tabName }: GeoVisualsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  const goToNext = () => {
    if (items.length === 0) {
      return;
    }
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    if (items.length === 0) {
      return;
    }
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToItem = (index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  if (!currentItem) {
    return <div className="text-center text-gray-500 py-12">No items available</div>;
  }

  return (
    <div
      className="w-full"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`GeoVisuals carousel for ${tabName}`}
    >
      {/* Main carousel container - split screen */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-center min-h-96">
        {/* Left side (40%) - Text content */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          {/* Title */}
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-forest mb-2 leading-tight">
              {currentItem.title}
            </h3>
            <div className="h-1 w-12 bg-moss rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            {currentItem.description}
          </p>

          {/* Key Takeaway */}
          <div className="bg-fog border-l-4 border-moss p-4 mb-6 rounded">
            <p className="text-xs text-moss font-semibold uppercase tracking-wider mb-1">
              Key Takeaway
            </p>
            <p className="text-sm md:text-base text-slate font-medium">
              {currentItem.keyTakeaway}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {currentItem.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-sand/40 text-slate text-xs px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={currentItem.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${currentItem.title} in full`}
            className="inline-flex items-center justify-center bg-forest hover:bg-pine text-white font-medium py-3 px-6 rounded-lg transition-colors duration-150 w-full md:w-auto mb-6 md:mb-0"
          >
            View Full {currentItem.type === 'iframe' ? 'StoryMap' : 'Image'}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Right side (60%) - Image/Iframe */}
        <div className="lg:col-span-3">
          <div className="relative w-full bg-gray-100 rounded-xl overflow-hidden shadow-xl">
            {currentItem.type === 'image' ? (
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-auto object-cover aspect-square md:aspect-auto md:min-h-96"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src={currentItem.link}
                  title={currentItem.title}
                  className="absolute inset-0 w-full h-full border-0 rounded-xl"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
        {/* Previous/Next Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={goToPrevious}
            aria-label={`View previous ${tabName}`}
            title="Previous (left arrow key)"
            className="p-2 hover:bg-fog rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#4c7a5a] focus:ring-offset-2"
          >
            <ChevronLeft className="h-6 w-6 text-moss hover:text-forest" />
          </button>

          <button
            onClick={goToNext}
            aria-label={`View next ${tabName}`}
            title="Next (right arrow key)"
            className="p-2 hover:bg-fog rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#4c7a5a] focus:ring-offset-2"
          >
            <ChevronRight className="h-6 w-6 text-moss hover:text-forest" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="text-center md:text-left flex items-center gap-4">
          <span className="text-sm font-medium text-gray-600">
            {currentIndex + 1} / {items.length}
          </span>

          {/* Mini progress dots */}
          <div className="flex gap-1.5">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToItem(index)}
                aria-label={`Go to ${tabName} ${index + 1}`}
                aria-current={index === currentIndex}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4c7a5a] ${
                  index === currentIndex
                    ? 'bg-forest w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info text */}
        <div className="text-xs text-gray-500">
          Use left/right arrow keys to navigate
        </div>
      </div>
    </div>
  );
}

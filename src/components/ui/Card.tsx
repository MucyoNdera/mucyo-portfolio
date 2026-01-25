import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/90 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

import React from 'react';

interface NavLinkProps {
  icon: React.ReactNode;
  text: string;
}

export function NavLink({ icon, text }: NavLinkProps) {
  return (
    <a
      href={`#${text.toLowerCase()}`}
      aria-label={text}
      className="flex items-center text-forest hover:text-pine hover:bg-fog rounded-md px-2 py-1.5 text-xs font-medium transition-colors duration-150"
    >
      {icon}
      <span className="ml-1">{text}</span>
    </a>
  );
}

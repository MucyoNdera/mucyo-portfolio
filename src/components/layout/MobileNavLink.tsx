import React from 'react';

interface MobileNavLinkProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export function MobileNavLink({ icon, text, onClick }: MobileNavLinkProps) {
  return (
    <a
      href={`#${text.toLowerCase()}`}
      onClick={onClick}
      aria-label={text}
      className="flex items-center text-green-800 hover:text-green-900 hover:bg-green-50 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150"
    >
      {icon}
      <span className="ml-3">{text}</span>
    </a>
  );
}
import React from 'react';

interface MobileNavLinkProps {
  icon: React.ReactNode;
  text: string;
}

export function MobileNavLink({ icon, text }: MobileNavLinkProps) {
  return (
    <a
      href={`#${text.toLowerCase()}`}
      className="flex items-center text-green-800 hover:text-green-900 hover:bg-green-50 rounded-md px-3 py-2 text-base font-medium transition-colors duration-150"
    >
      {icon}
      <span className="ml-3">{text}</span>
    </a>
  );
}
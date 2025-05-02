import React, { useState, useEffect } from 'react';
import { Menu, Home, User, GraduationCap, Wrench, Briefcase, BookOpen, Map, Mail, Library } from 'lucide-react';
import { NavLink } from '../layout/NavLink';
import { MobileNavLink } from '../layout/MobileNavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full ${isScrolled ? 'bg-white/95' : 'bg-white/90'} backdrop-blur-sm shadow-sm z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" onClick={scrollToTop} className="text-green-800 font-semibold text-lg">
              Mucyo Ndera
            </a>
          </div>
          
          <div className="flex items-center space-x-2 lg:space-x-4">
            <a
              href="#"
              onClick={scrollToTop}
              className="flex items-center text-green-800 hover:text-green-900 hover:bg-green-50 rounded-md px-2 py-1.5 text-xs font-medium transition-colors duration-150"
            >
              <Home className="h-3.5 w-3.5" />
            </a>
            <NavLink icon={<User className="h-3.5 w-3.5" />} text="About" />
            <NavLink icon={<GraduationCap className="h-3.5 w-3.5" />} text="Education" />
            <NavLink icon={<Wrench className="h-3.5 w-3.5" />} text="Skills" />
            <NavLink icon={<Briefcase className="h-3.5 w-3.5" />} text="Experience" />
            <NavLink icon={<BookOpen className="h-3.5 w-3.5" />} text="Projects" />
            <NavLink icon={<Library className="h-3.5 w-3.5" />} text="Publications" />
            <NavLink icon={<Map className="h-3.5 w-3.5" />} text="GeoVisuals" />
            <NavLink icon={<Mail className="h-3.5 w-3.5" />} text="Contact" />
          </div>
        </div>
      </div>
    </nav>
  );
}
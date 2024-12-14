"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto max-w-4xl px-4 py-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={`
                text-sm uppercase tracking-wider font-medium transition-all duration-300
                ${activeSection === item.id 
                  ? 'text-black border-b-2 border-black' 
                  : 'text-gray-500 hover:text-black'}
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
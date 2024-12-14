"use client";

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsMenuOpen(false); // Close menu on mobile after clicking

    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth',
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Add offset for better accuracy

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white to-gray-100 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="container mx-auto max-w-5xl px-6 py-3 flex justify-between items-center">
        <div className="text-lg font-bold">Reddish</div>
        {isMobile ? (
          <button
            className="text-gray-800 focus:outline-none absolute right-6 top-3"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        ) : (
          <div className="flex justify-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`
                  text-sm uppercase tracking-wide font-semibold transition-all duration-300 relative
                  ${activeSection === item.id 
                    ? 'text-gray-800 after:w-full after:opacity-100' 
                    : 'text-gray-500 hover:text-gray-800 after:opacity-0 hover:after:opacity-100'}
                  after:content-[''] after:block after:h-1 after:bg-black after:transition-all after:duration-300 after:mx-auto after:w-0
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 w-full bg-white shadow-lg">
            <div className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-gray-800 text-base font-medium hover:text-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
  
};

export default Navbar;

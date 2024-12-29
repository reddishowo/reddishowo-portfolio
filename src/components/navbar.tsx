"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun, Palette, Menu, X } from "lucide-react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Available themes
  const themes = [
    { name: 'light', icon: <Sun className="w-5 h-5" /> },
    { name: 'dark', icon: <Moon className="w-5 h-5" /> },
    { name: 'cupcake', icon: <Palette className="w-5 h-5" /> },
    { name: 'bumblebee', icon: <Palette className="w-5 h-5" /> },
    { name: 'emerald', icon: <Palette className="w-5 h-5" /> },
    { name: 'corporate', icon: <Palette className="w-5 h-5" /> },
    { name: 'synthwave', icon: <Palette className="w-5 h-5" /> },
    { name: 'retro', icon: <Palette className="w-5 h-5" /> },
    { name: 'cyberpunk', icon: <Palette className="w-5 h-5" /> },
    { name: 'valentine', icon: <Palette className="w-5 h-5" /> },
    { name: 'halloween', icon: <Palette className="w-5 h-5" /> },
    { name: 'garden', icon: <Palette className="w-5 h-5" /> },
    { name: 'forest', icon: <Palette className="w-5 h-5" /> },
    { name: 'aqua', icon: <Palette className="w-5 h-5" /> },
    { name: 'lofi', icon: <Palette className="w-5 h-5" /> },
    { name: 'pastel', icon: <Palette className="w-5 h-5" /> },
    { name: 'fantasy', icon: <Palette className="w-5 h-5" /> },
    { name: 'wireframe', icon: <Palette className="w-5 h-5" /> },
    { name: 'black', icon: <Palette className="w-5 h-5" /> },
    { name: 'luxury', icon: <Palette className="w-5 h-5" /> },
    { name: 'dracula', icon: <Palette className="w-5 h-5" /> },
    { name: 'cmyk', icon: <Palette className="w-5 h-5" /> },
    { name: 'autumn', icon: <Palette className="w-5 h-5" /> },
    { name: 'business', icon: <Palette className="w-5 h-5" /> },
    { name: 'acid', icon: <Palette className="w-5 h-5" /> },
    { name: 'lemonade', icon: <Palette className="w-5 h-5" /> },
    { name: 'night', icon: <Palette className="w-5 h-5" /> },
    { name: 'coffee', icon: <Palette className="w-5 h-5" /> },
    { name: 'winter', icon: <Palette className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const changeTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    document.documentElement.setAttribute('data-theme', selectedTheme);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="btn btn-ghost btn-circle"
      >
        {theme === 'dark' ? <Moon /> : <Sun />}
      </button>
      {isDropdownOpen && (
        <div
          className="absolute left-0 top-full mt-2 w-64 max-h-96 overflow-y-auto 
          bg-base-100 border border-base-300 rounded-box shadow-lg z-50"
        >
          <div className="flex flex-col gap-2 p-2">
            {themes.map((themeOption) => (
              <button
                key={themeOption.name}
                onClick={() => changeTheme(themeOption.name)}
                className={`btn btn-sm ${
                  theme === themeOption.name
                    ? 'btn-primary'
                    : 'btn-ghost'
                } flex items-center justify-start gap-2 capitalize`}
              >
                {themeOption.icon}
                <span>{themeOption.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base-100 backdrop-blur-md border-b border-base-300 shadow-lg">
      <div className="container mx-auto max-w-5xl px-6 py-3 flex justify-between items-center relative">
        <div className="text-lg font-bold text-base-content">Reddish</div>
        
        {isMobile ? (
          <div className="flex items-center space-x-2">
            <ThemeSwitcher />
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-16 right-0 w-full bg-base-100 shadow-lg">
                <div className="flex flex-col items-end space-y-4 py-4 pr-6">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`
                        text-base-content text-base font-medium
                        ${activeSection === item.id ? 'text-primary' : 'hover:text-primary'}
                      `}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`
                  text-sm uppercase tracking-wide font-semibold transition-all duration-300 relative
                  ${
                    activeSection === item.id
                      ? "text-primary after:w-full after:opacity-100"
                      : "text-base-content opacity-70 hover:text-primary after:opacity-0 hover:after:opacity-100"
                  }
                  after:content-[''] after:block after:h-1 after:bg-primary after:transition-all after:duration-300 after:mx-auto after:w-0
                `}
              >
                {item.label}
              </a>
            ))}
            <ThemeSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
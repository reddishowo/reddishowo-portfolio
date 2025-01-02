"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if ('scrollBehavior' in document.documentElement.style) {
      // Browser mendukung animasi scroll smooth
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      // Fallback untuk browser lama
      const interval = setInterval(() => {
        const scrollStep = Math.max(window.pageYOffset / 10, 10);
        if (window.pageYOffset === 0) {
          clearInterval(interval);
        } else {
          window.scrollBy(0, -scrollStep);
        }
      }, 16); // Setiap frame ~16ms untuk 60fps
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`
            btn btn-circle btn-primary
            fixed bottom-6 right-6
            shadow-lg
            transition-all duration-300
            hover:scale-110
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            z-50
          `}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;

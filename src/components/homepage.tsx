"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './navbar';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
}

const HomePage = () => {
  const texts = ['Software Engineer', 'Web Developer', 'Tech Enthusiast'];
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = texts[textIndex];

    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (currentText.length === 0) {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isTyping, textIndex, texts]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <Image 
              src="/images/me.jpg" 
              alt="Profile" 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-6 shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Farriel Arrianta
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            {currentText}
            <span className="blinking-cursor">|</span>
          </p>
          
          <div className="flex justify-center space-x-6">
            <SocialLink 
              href="https://github.com/reddishowo" 
              icon={<Github className="w-6 h-6" />} 
            />
            <SocialLink 
              href="https://linkedin.com" 
              icon={<Linkedin className="w-6 h-6" />} 
            />
            <SocialLink 
              href="https://instagram.com/_farriel_" 
              icon={<Instagram className="w-6 h-6" />} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-black transition-colors"
  >
    {icon}
  </a>
);

export default HomePage;
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./navbar";
import { Github, Instagram, Linkedin } from "lucide-react";
import AOS from "aos";

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
}

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const texts = [
    "Cyber Security",
    "Software Engineer",
    "Web Developer",
    "Tech Enthusiast",
    "Game Developer",
    "Linux Enthusiast",
    "Gamer",
  ];
  const [currentText, setCurrentText] = useState("");
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
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 
                 flex flex-col relative overflow-hidden mt-5 sm:mt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gray-400 rounded-full filter blur-2xl"></div>
      </div>

      <Navbar />

      <div className="container mx-auto max-w-5xl px-4 flex-grow flex items-center justify-center relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div
            className="flex justify-center mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="w-64 h-64 relative">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-gray-800 to-gray-400 
                              rounded-full blur-xl opacity-50 animate-pulse"
              ></div>
              <div className="relative z-10 w-full h-full bg-white p-2 rounded-full shadow-2xl">
                <Image
                  src="/images/me.jpg"
                  alt="Profile"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
            </div>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-5xl font-bold mb-6 text-gray-800 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-gray-700 to-gray-500"
          >
            Farriel Arrianta
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            className="text-xl text-gray-600 mb-8"
          >
            {currentText}
            <span className="blinking-cursor text-blue-600">|</span>
          </p>

          {/* New About Me Section */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="max-w-xl mx-auto text-gray-700 mb-8 px-4"
          >
            Passionate about technology and innovation, I craft digital solutions 
            that bridge creativity with functionality. Always learning, always exploring 
            the evolving landscape of tech.
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            className="flex justify-center space-x-6"
          >
            <SocialLink
              href="https://github.com/reddishowo"
              icon={<Github className="w-6 h-6" />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/farriel-arrianta/"
              icon={<Linkedin className="w-6 h-6" />}
            />
            <SocialLink
              href="https://instagram.com/_farriel_"
              icon={<Instagram className="w-6 h-6" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};



const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 transition-colors"
    data-aos="zoom-in"
    data-aos-duration="800"
  >
    {icon}
  </a>
);

export default HomePage;

"use client";
import React from "react";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content">
      {/* Main Footer Content */}
      <div className="footer p-10 max-w-7xl mx-auto">
        {/* About Section */}
        <div>
          <span className="footer-title text-lg opacity-100">About Me</span>
          <p className="max-w-md mt-2">
            Hi! I'm Farriel Arrianta, a passionate developer focused on creating innovative web solutions 
            and delivering exceptional user experiences.
          </p>
          {/* Contact Info */}
          <div className="mt-4 space-y-2">
            <a className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} />
              <span>farrielarrianta@gmail.com</span>
            </a>
            <a className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={16} />
              <span>+62 881 601 5821</span>
            </a>
            <a className="flex items-center gap-2 hover:text-primary transition-colors">
              <MapPin size={16} />
              <span>Malang, Indonesia</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <span className="footer-title text-lg opacity-100">Quick Links</span>
          <a className="link link-hover">Portfolio</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact</a>
        </div>

        {/* Social Links */}
        <div>
          <span className="footer-title text-lg opacity-100">Connect With Me</span>
          <div className="flex gap-4">
            <a 
              href="https://github.com/reddishowo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-square btn-outline"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/farriel-arrianta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-square btn-outline"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/_farriel_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-square btn-outline"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer footer-center p-4 bg-base-300 border-t border-base-content/10">
        <div className="prose">
          <p>Copyright &apos; {new Date().getFullYear()} - All rights reserved by Farriel Arrianta</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
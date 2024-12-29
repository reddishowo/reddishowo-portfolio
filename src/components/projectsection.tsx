"use client";

import React, { useEffect, useState } from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import AOS from "aos";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={`${index * 200}`}
      data-aos-duration="600"
      className="group card bg-base-100 shadow-lg hover:shadow-2xl 
      transition-all duration-300 transform hover:-translate-y-3 
      border border-base-content/10 rounded-2xl 
      dark:border-base-content/20 
      dark:hover:border-base-content/30
      hover:border-base-content/20
      dark:bg-gray-800/50 dark:backdrop-blur-sm"
    >
      <div className="h-56 overflow-hidden relative rounded-t-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-content/10 z-10"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="card-body p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="card-title text-xl font-bold text-base-content 
          dark:text-white/90 transition-colors">
            {project.title}
          </h3>
          <div className="flex space-x-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 dark:text-white/60 
                transition-all duration-300 
                hover:scale-110 hover:text-primary 
                dark:hover:text-primary"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base-content/70 dark:text-white/60 
                transition-all duration-300 
                hover:scale-110 hover:text-secondary 
                dark:hover:text-secondary"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <p className="text-base-content/70 dark:text-white/70 
        leading-relaxed mb-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary text-primary-content 
    text-xs px-3 py-1 rounded-full flex items-center gap-1 
    shadow-md hover:shadow-lg transition-shadow"
            >
              <Code size={12} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [theme] = useState('light');


  useEffect(() => {
    // Initial theme setup
    document.documentElement.setAttribute('data-theme', theme);

    // AOS initialization
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      githubLink: "https://github.com/reddishowo/reddishowo-portfolio",
      liveLink: "https://reddishowo.vercel.app/",
      image: "/images/portfolio_webpage.png",
    },
    {
      title: "Tailor",
      description:
        "Full-stack e-commerce application to create and watch product (clothing) listing real-time.",
      technologies: ["Vue", "Laravel", "MySQL", "Tailwind CSS"],
      githubLink: "https://github.com/reddishowo/tailor-web",
      image: "/images/tailor_webpage.png",
    },
    {
      title: "Evenity (on progress)",
      description: "Eventify - Simplify Your Event Management",
      technologies: ["Next.js", "React", "Tailwind CSS", "Laravel", "Axios", "MySQL"],
      githubLink: "https://github.com/reddishowo/event-management-web",
      image: "/images/eventmanagementweb.png",
    },
    {
      title: "Dressmaker-App (on progress)",
      description:
        "Boutique Application that can be used to order any dress that we want.",
      technologies: ["Flutter", "Dart", "Firebase", "Android"],
      githubLink: "https://github.com/reddishowo/dressmaker-app",
      image: "/images/dressmaker.png",
    },
    {
      title: "Reparin Mobile / Website",
      description:
        "Mobile Application that focuses on services for fixing gadgets",
      technologies: ["Flutter", "Dart", "Firebase", "Android"],
      githubLink: "https://github.com/hisyam/reparin-mobile",
      liveLink: "https://reparin.xyz/en",
      image: "/images/reparinlogo.png",
    },
    {
      title: "Ngawitify",
      description: "a discord-bot for playing music (from youtube link) ",
      technologies: ["Python", "FFmpeg", "Discord API"],
      githubLink: "https://github.com/reddishowo/ngawitify",
      image: "/images/ngawitify.png",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-base-100 text-base-content 
                 py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gray-400 rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-5xl bg-primary text-primary-content font-bold text-center mb-16
           bg-clip-text text-transparent"
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

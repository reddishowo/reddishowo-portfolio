"use client";

import React, { useEffect } from "react";
import { Github, ExternalLink, Code } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      className="bg-white rounded-2xl overflow-hidden 
                 shadow-lg hover:shadow-2xl transition-all duration-300 
                 transform hover:-translate-y-2 border border-gray-100"
    >
      <div className="h-52 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3
            className="text-2xl font-bold text-gray-800 
               bg-clip-text text-transparent 
               bg-gradient-to-r from-gray-700 to-gray-500"
          >
            {project.title}
          </h3>
          <div className="flex space-x-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 
                           transition-colors duration-300 
                           hover:scale-110 hover:text-blue-600"
              >
                <Github className="w-6 h-6" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 
                           transition-colors duration-300 
                           hover:scale-110 hover:text-green-600"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: techIndex * 0.1,
                type: "spring",
                stiffness: 300,
              }}
              className="bg-gradient-to-r from-gray-100 to-gray-200 
              text-gray-800 text-xs px-3 py-1 
              rounded-full flex items-center gap-1 
              shadow-md hover:shadow-lg transition-shadow"
            >
              <Code size={12} className="mr-1" />
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  useEffect(() => {
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
  }, []);

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
      title: "Dressmaker-App",
      description:
        "Boutique Application that can be used to order any dress that we want (on progress).",
      technologies: ["Flutter", "Dart", "Firebase", "Android"],
      githubLink: "https://github.com/reddishowo/dressmaker-app",
      image: "/images/dressmaker.png",
    },
    {
      title: "Reparin-Mobile",
      description:
        "Mobile Application that focuses on services for fixing gadgets",
      technologies: ["Flutter", "Dart", "Firebase", "Android"],
      githubLink: "https://github.com/hisyam/reparin-mobile",
      image: "/images/reparinmobile.png",
    },
    {
      title: "Reparin-Website",
      description: "Reparin website version.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      liveLink: "https://reparin.xyz/en",
      image: "/images/reparinlogo.png",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 
                 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gray-400 rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 text-gray-800 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-gray-700 to-gray-500"
        >
          Projects
        </motion.h2>
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

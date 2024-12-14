"use client";

import React, { useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
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

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120, // Adjust offset to trigger animations
      easing: "ease-in-out", // Optional: smoother animation
    });

    // Function to trigger AOS refresh
    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger the animation on initial load
    AOS.refresh();

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
        "Boutique Application that can be used to order any dress that we want",
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
        description:
          "Reparin website version.",
        technologies: ["Next.js", "React", "Tailwind CSS"],
        liveLink: "https://reparin.xyz/en",
        image: "/images/reparinlogo.png",
      },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={192}
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      data-aos="zoom-in"
                      data-aos-delay={`${techIndex * 100}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

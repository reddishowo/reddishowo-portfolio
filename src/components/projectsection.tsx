import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "React", "Tailwind CSS"],
      githubLink: "https://github.com/reddishowo/reddishowo-portfolio",
      liveLink: "https://yourportfolio.com",
      image: "/images/portfolio_webpage.png"
    },
    {
      title: "Tailor-Website",
      description: "Full-stack e-commerce application to create and watch product (clothing) listing real-time.",
      technologies: ["Vue", "Laravel", "MySQL", "Tailwind CSS"],
      githubLink: "https://github.com/reddishowo/tailor-web",
      image: "/images/tailor_webpage.png"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
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
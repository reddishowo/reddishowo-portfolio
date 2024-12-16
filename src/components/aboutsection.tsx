"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import { Star, Code, Globe } from "lucide-react";

const SkillBadge = ({ skill, delay }: { skill: string; delay: number }) => (
  <span
    data-aos="fade-up"
    data-aos-delay={delay}
    data-aos-duration="500"
    className="bg-primary text-primary-content 
    text-xs px-3 py-1 rounded-full flex items-center gap-1 
    shadow-md hover:shadow-lg transition-shadow"
  >
    <Code size={12} className="mr-1" />
    {skill}
  </span>
);

const AboutSection = () => {
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Vue",
    "Java",
    "Flutter",
    "Python",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Animate skills one by one
    const animateSkills = () => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => [...prev, skill]);
        }, index * 300); // 300ms delay between each skill
      });
    };
    animateSkills();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-base-100 text-base-content 
                 flex items-center py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-neutral rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-neutral-focus rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="text-content"
          >
            <h2 className="text-5xl font-bold mb-6 text-primary">
              About Me
            </h2>
            <p className="text-base-content mb-6 leading-relaxed text-lg">
              <Star className="inline-block mr-2 text-warning" />
              I&#39;m a passionate software engineer from University of
              Muhammadiyah Malang, dedicated to crafting elegant and minimalist
              web experiences. My expertise spans full-stack development, with a
              keen eye for creating responsive and user-friendly applications.
            </p>

            <div className="mt-8">
              <h3
                className="text-2xl font-semibold mb-4 text-primary 
                            flex items-center"
              >
                <Globe className="mr-2 text-info" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {animatedSkills.map((skill, index) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    delay={(index + 1) * 300}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex justify-center"
          >
            <div className="w-80 h-80 relative">
              <div
                className="absolute -inset-4 bg-neutral-focus 
                              rounded-xl blur-xl opacity-50 animate-pulse"
              ></div>
              <div className="relative z-10 w-full h-full bg-base-100 p-2 rounded-xl shadow-2xl">
                <Image
                  src="/images/me2.jpg"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

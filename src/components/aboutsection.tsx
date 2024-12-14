"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import { motion } from "framer-motion";
import { Star, Code, Globe } from "lucide-react";

const SkillBadge = ({ skill, delay }: { skill: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay: delay / 1000,
      type: "spring",
      stiffness: 300,
    }}
    className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 
    text-xs px-3 py-1 rounded-full flex items-center gap-1 
    shadow-md hover:shadow-lg transition-shadow"
  >
    <Code size={12} className="mr-1" />
    {skill}
  </motion.span>
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
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 
                 flex items-center py-16 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gray-400 rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl font-bold mb-6 text-gray-800 
               bg-clip-text text-transparent 
               bg-gradient-to-r from-gray-700 to-gray-500"
            >
              About Me
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              <Star className="inline-block mr-2 text-yellow-500" />
              I&#39;m a passionate software engineer from University of
              Muhammadiyah Malang, dedicated to crafting elegant and minimalist
              web experiences. My expertise spans full-stack development, with a
              keen eye for creating responsive and user-friendly applications.
            </p>

            <div className="mt-8">
              <h3
                className="text-2xl font-semibold mb-4 text-gray-800 
                            flex items-center"
              >
                <Globe className="mr-2 text-blue-500" />
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
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-80 h-80 relative">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-gray-800 to-gray-600 
                              rounded-xl blur-xl opacity-50 animate-pulse"
              ></div>
              <div className="relative z-10 w-full h-full bg-white p-2 rounded-xl shadow-2xl">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

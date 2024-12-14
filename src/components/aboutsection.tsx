"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';

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
    "Python"
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Animate skills one by one
    const animateSkills = () => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => [...prev, skill]);
        }, index * 300); // 300ms delay between each skill
      });
    };

    animateSkills();
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-white flex items-center py-16"
      data-aos="fade-up"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Me</h2>
            <p className="text-gray-600 mb-4 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              I&#39;m a student from University of Muhammadiyah Malang, and a
              passionate software engineer with a love for creating simple and
              minimalist web. With a strong background in full-stack
              development, I specialize in building responsive and user-friendly
              applications.
            </p>
            <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {animatedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/me2.jpg"
                alt="Profile"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

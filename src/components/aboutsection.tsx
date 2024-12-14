import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-white flex items-center py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About Me
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a student from University of Muhammadiyah Malang, and a passionate software engineer with a love for creating simple and minimalist web. 
              With a strong background in full-stack development, I specialize in building 
              responsive and user-friendly applications.
            </p>
            <p className="text-gray-600 leading-relaxed">
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vue'].map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/me2.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
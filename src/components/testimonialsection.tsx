"use client";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  content: string;
}

const TestimonialSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      name: "Windah Basudara",
      content: "Farriel's work is exceptional. He truly understands the needs of his clients and delivers outstanding results.",
    },
    {
      name: "Joko Widodo",
      content: "I was impressed by Farriel's attention to detail and his ability to solve complex problems efficiently.",
    },
    {
      name: "Sandiaga Uno",
      content: "Working with Farriel was a great experience. His innovative approach and technical expertise helped us achieve our goals faster than expected.",
    },
    {
      name: "Erick Thohir",
      content: "Farriel demonstrated excellent project management skills and delivered high-quality work consistently throughout our collaboration.",
    },
    {
      name: "Prabowo Subianto",
      content: "His strategic thinking and problem-solving abilities make him stand out. Farriel is definitely someone you want on your team.",
    },
    {
      name: "Ridwan Kamil",
      content: "The level of professionalism and creativity Farriel brings to each project is remarkable. He exceeded our expectations in every way.",
    },
    {
      name: "Ganjar Pranowo",
      content: "Farriel's technical knowledge combined with his excellent communication skills made our project implementation seamless.",
    },
    {
      name: "Anies Baswedan",
      content: "I highly recommend Farriel for any complex development projects. His expertise and dedication are truly commendable.",
    },
    {
      name: "Nadiem Makarim",
      content: "As a tech leader, I can say that Farriel's coding standards and architectural decisions are top-notch. He's a valuable asset to any development team.",
    },
    {
      name: "William Tanuwijaya",
      content: "Farriel brings both technical excellence and business understanding to the table. His solutions are always well-thought-out and future-proof."
    }
]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const dragThreshold = 100;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials, isDragging]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const offset = clientX - startX;
    setDragOffset(offset);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > dragThreshold) {
      if (dragOffset > 0) {
        setDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      } else {
        setDirection('next');
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }
    setDragOffset(0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.content) {
      emailjs
        .send(
          "service_5ctv05b",
          "template_ltifq6e",
          {
            from_name: formData.name,
            message: formData.content,
            email: "farrielarrianta@gmail.com",
          },
          "XTHB-yaTFnW9PtGm4"
        )
        .then((response) => {
          console.log("Testimonial sent successfully", response);
          setTestimonials((prev) => [...prev, { name: formData.name, content: formData.content }]);
          setFormData({ name: "", content: "" });
          alert("Thank you for your testimonial!");
        })
        .catch((error) => {
          console.error("Error sending testimonial:", error);
          alert("Failed to send testimonial. Please try again later.");
        });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="testimonials" className="bg-base-100 py-16 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-primary mb-2">Testimonials</h2>
          <p className="text-base-content/70">What people say about my work</p>
        </div>
        
        <div className="relative w-full h-[300px] mb-12">
          <div 
            ref={containerRef}
            className="relative w-full h-full perspective px-4 cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {testimonials.map((testimonial, index) => {
              let position = 'translate-x-full opacity-0 scale-75';
              if (index === currentIndex) {
                position = `translate-x-[${dragOffset}px] opacity-100 scale-100`;
              } else if (
                (direction === 'next' && index === (currentIndex - 1 + testimonials.length) % testimonials.length) ||
                (direction === 'prev' && index === (currentIndex + 1) % testimonials.length)
              ) {
                position = direction === 'next' ? '-translate-x-full opacity-0 scale-75' : 'translate-x-full opacity-0 scale-75';
              }

              return (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out transform ${position}`}
                  style={{
                    transform: index === currentIndex ? `translateX(${dragOffset}px)` : '',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="card bg-base-200 shadow-xl h-full group hover:shadow-2xl transition-all duration-300">
                    <div className="card-body relative p-8">
                      <div className="absolute -top-6 left-8">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Quote className="w-6 h-6 text-primary-content" />
                        </div>
                      </div>
                      <div className="pt-6">
                        <p className="text-base-content text-lg leading-relaxed mb-6">
                          {testimonial.content}
                        </p>
                        <div className="flex items-center">
                          <div className="avatar placeholder mr-4">
                            <div className="bg-primary text-primary-content rounded-full w-12">
                              <span className="text-xl">{testimonial.name.charAt(0)}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-base-content">{testimonial.name}</h3>
                            <p className="text-sm text-base-content/70">Verified Client</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'next' : 'prev');
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="card bg-base-200 shadow-lg max-w-2xl mx-auto">
          <div className="card-body">
            <h3 className="card-title text-primary justify-center mb-6">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Testimonial</span>
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="textarea textarea-bordered h-24"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
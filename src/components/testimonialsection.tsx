"use client";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

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
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const dragThreshold = 100; // Minimum drag distance to trigger slide change
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
        // Dragged right - go to previous
        setDirection('prev');
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      } else {
        // Dragged left - go to next
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
        <h2 className="text-5xl font-bold text-center mb-12 text-primary">
          Testimonials
        </h2>
        
        <div className="relative w-full h-[300px] mb-12">
          {/* Drag Hint */}
          <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-between px-4 opacity-30">
            <div className="text-4xl">←</div>
            <div className="text-4xl">→</div>
          </div>

          {/* Testimonial Cards */}
          <div 
            ref={containerRef}
            className="relative w-full h-full perspective px-12 cursor-grab active:cursor-grabbing"
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
                  <div className="card bg-base-200 shadow-xl h-full hover:shadow-2xl transition-shadow duration-300">
                    <div className="card-body relative overflow-hidden flex flex-col items-center justify-center text-center px-8">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-75"></div>
                      <q className="text-base-content text-lg leading-relaxed mb-6 italic">
                        {testimonial.content}
                      </q>
                      <div className="card-actions">
                        <div className="badge badge-primary badge-outline text-base py-3 px-4">{testimonial.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'next' : 'prev');
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-base-100 p-8 rounded-lg shadow-md border border-base-300 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Leave Your Testimonial</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base-content mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base-content bg-base-100"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-base-content mb-2 font-medium">
                Your Testimonial
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base-content bg-base-100"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-content py-3 rounded-md hover:bg-secondary transition-colors focus:ring-2 focus:ring-primary"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
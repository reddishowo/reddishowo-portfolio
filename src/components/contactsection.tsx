"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_5ctv05b',    // Your EmailJS service ID
      'template_ltifq6e',   // Your EmailJS template ID
      {
        from_name: formData.from_name, // Sender's name
        to_name: 'Farriel Arianta',    // Your name
        message: formData.message,
        email: formData.email,         // Sender's email
      },
      'XTHB-yaTFnW9PtGm4'             // Your EmailJS user ID
    )
      .then((response) => {
        console.log('Message sent successfully', response);
        alert('Your message has been sent!');
        setFormData({ from_name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-base-100 py-16 relative overflow-hidden"
    >
      {/* Removed the gradient and blur background */}
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <h2 
          data-aos="fade-up" 
          data-aos-duration="800" 
          className="text-5xl font-bold text-center mb-12 text-primary"
        >
          Contact Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div 
            data-aos="fade-right" 
            data-aos-duration="800" 
            data-aos-delay="200"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center text-base-content hover:text-primary transition-colors">
                  <Mail className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-base-content">farrielarrianta@gmail.com</span>
                </div>
                <div className="flex items-center text-base-content hover:text-primary transition-colors">
                  <Phone className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-base-content">+62 881 601 5821</span>
                </div>
                <div className="flex items-center text-base-content hover:text-primary transition-colors">
                  <MapPin className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-base-content">Malang, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div 
            data-aos="fade-left" 
            data-aos-duration="800" 
            data-aos-delay="400"
          >
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6 bg-base-100 p-8 rounded-lg shadow-md border border-base-300"
            >
              <div>
                <label 
                  htmlFor="from_name" 
                  className="block text-base-content mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base-content bg-base-100"
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-base-content mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-base-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-base-content bg-base-100"
                  required
                />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-base-content mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
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
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

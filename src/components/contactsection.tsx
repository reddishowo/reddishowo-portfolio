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
    <section id="contact" className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gray-300 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-gray-400 rounded-full filter blur-2xl"></div>
      </div>
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <h2 
          data-aos="fade-up" 
          data-aos-duration="800" 
          className="text-5xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            data-aos="fade-right" 
            data-aos-duration="800" 
            data-aos-delay="200">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <Mail className="w-6 h-6 mr-3 text-gray-800" />
                  <span>farrielarrianta@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <Phone className="w-6 h-6 mr-3 text-gray-800" />
                  <span>+62 881 601 5821</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <MapPin className="w-6 h-6 mr-3 text-gray-800" />
                  <span>Malang, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
          <div 
            data-aos="fade-left" 
            data-aos-duration="800" 
            data-aos-delay="400">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label htmlFor="from_name" className="block text-gray-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-gray-600"
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

import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-bounce">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6 animate-pulse">
                  Let's Connect
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just 
                  want to say hello, I'd love to hear from you. Feel free to reach 
                  out through any of the channels below.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-red-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">bhuvaneshmaker@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-red-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-400">+91 63800 66531</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-red-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">Dharmapuri, TamilNadu, India - 636 701</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Bhuvaneshmaker"
                    className="w-10 h-10 bg-slate-700 hover:bg-red-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:transform hover:scale-110"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nbhuvanesh5475"
                    className="w-10 h-10 bg-slate-700 hover:bg-red-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:transform hover:scale-110"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-700 hover:bg-red-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:transform hover:scale-110"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-700  hover:bg-red-800  rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:transform hover:scale-110"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-200 resize-vertical"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

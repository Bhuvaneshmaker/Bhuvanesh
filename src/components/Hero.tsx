import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full-Stack Developer...";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" >
            <span className="text-white">Hi, I'm </span>
            <span className="text-red-700 animate-pulse">Bhuvanesh</span>
          </h1>
           
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            <span className="inline-block">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional, and user-friendly digital experiences 
            with modern technologies and creative problem-solving.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16 ">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 animate-pulse hover:transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="#" className="text-gray-400  hover:text-red-400 transition-colors duration-200  hover:transform hover:scale-110 animate-pulse">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-400  hover:text-red-400 transition-colors duration-200 animate-pulse hover:transform hover:scale-110">
              <Mail size={28} />
            </a>
            <a href="#" className="text-gray-400  hover:text-red-400 transition-colors duration-200  hover:transform hover:scale-110 animate-pulse">
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-red-400 transition-colors duration-200 animate-pulse"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
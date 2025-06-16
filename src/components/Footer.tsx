import React from 'react';
import { Heart } from 'lucide-react';
import {  Mail, Github, Linkedin, Instagram } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center">
              © {currentYear} Bhuvanesh Web Developer. Made with 
              <Heart size={16} className="text-red-900 mx-1 animate-pulse" />
              and lots of coffee.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 hover:transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 hover:transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 hover:transform hover:scale-110">
              <Mail size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-200 hover:transform hover:scale-110">
              <Instagram size={28} />
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>Built with Bootstrap, React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
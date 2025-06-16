import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-bounce">
              About Me
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer eager to kick-start my career by building digital solutions that 
              make a real impact. I enjoy turning complex problems into clean, user-friendly designs and efficient code. 
              I'm enthusiastic about learning, growing, and contributing to meaningful projects.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development started with a curiosity about how things work 
                on the internet. Today, I specialize in React, Node.js, and modern web 
                technologies, always staying updated with the latest trends and best practices.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                  ReactJS
                </span>
                <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                  Full-Stack
                </span>
                <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium">
                  UI/UX Focused
                </span>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <Code className="text-red-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Clean Code</h3>
                </div>
                <p className="text-gray-400">
                  I write clean, maintainable code following best practices and 
                  industry standards for scalable applications.
                </p>
              </div>
              
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <Palette className="text-red-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Design Focused</h3>
                </div>
                <p className="text-gray-400">
                  I believe great code should be paired with great design. 
                  I focus on creating intuitive user experiences.
                </p>
              </div>
              
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center mb-4">
                  <Zap className="text-red-400 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-white">Performance</h3>
                </div>
                <p className="text-gray-400">
                  I optimize applications for speed and efficiency, ensuring 
                  the best possible user experience across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
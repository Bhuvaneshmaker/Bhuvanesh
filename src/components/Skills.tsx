import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React', level: 75, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 60, color: 'bg-blue-600' },
    { name: 'Node.js', level: 70, color: 'bg-green-500' },
    { name: 'Python', level: 75, color: 'bg-yellow-500' },
    { name: 'MySQL', level: 72, color: 'bg-blue-700' },
    { name: 'HTML', level: 80, color: 'bg-orange-500' },
    { name: 'CSS', level: 76, color: 'bg-blue-400' },
    { name: 'JavaScript', level: 75, color: 'bg-pink-500' },
  ];

  const tools = [
    'React', 'Next.js','Flask',
    'Node.js', 'FastAPI', 'Django',
    'MySQL', 'MongoDB', 'Redis', 'Firebase',
    'Git', 'Figma', 'Tailwind CSS', 'Material-UI'
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-bounce">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 animate-pulse">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 animate-pulse">Technologies & Tools</h3>
              <div className="grid grid-cols-2 gap-4 ">
                {tools.map((tool, index) => (
                  <div
                    key={tool}
                    className={`bg-slate-800 p-4 rounded-lg text-center text-gray-300 font-medium border border-slate-700 hover:border-red-500 hover:text-red-400 transition-all duration-200 hover:transform hover:scale-105 ${
                      isVisible ? 'animate-fadeInUp' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and payment processing.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MySQL', 'Stripe'],
      github: 'https://github.com/Bhuvaneshmaker/',
      live: 'https://bhuvidevo-ecom.netlify.app/',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      github: 'https://github.com/Bhuvaneshmaker',
      live: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive charts, and responsive design.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Vue.js', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com/Bhuvaneshmaker',
      live: '#',
      featured: false
    },
    {
      title: 'Portfolio CMS',
      description: 'Custom content management system for portfolios with drag-and-drop page builder and SEO optimization.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Next.js', 'Prisma', 'TailwindCSS'],
      github: 'https://github.com/Bhuvaneshmaker/Bhuvanesh',
      live: 'https://bhuvidevo-portfolio.netlify.app',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and automated reporting features.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['Python', 'Django', 'Chart.js', 'PostgreSQL'],
      github: 'https://github.com/Bhuvaneshmaker',
      live: '#',
      featured: false
    },
    {
      title: 'Real Estate Platform',
      description: 'Modern real estate platform with property listings, virtual tours, and advanced search functionality.',
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Express', 'MongoDB', 'Mapbox'],
      github: 'https://github.com/Bhuvaneshmaker',
      live: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-bounce">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group bg-slate-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-slate-700 hover:border-red-500/50 ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="bg-slate-800/80 p-2 rounded-full text-white hover:text-red-400 transition-colors duration-200"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="bg-slate-800/80 p-2 rounded-full text-white hover:text-red-400 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold transition-colors duration-200"
            >
              View All Projects
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

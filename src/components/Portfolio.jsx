import React from 'react';
import InterviewAI from '../assets/InterviewAI.png';
import RefStack from '../assets/RefStack.png';
import ResultHub from '../assets/ResultHub.png';
import { FiExternalLink } from 'react-icons/fi';

const Portfolio = () => {
  const projects = [
    {
      title: "RefStack",
      description: "A personal catalog project to manage companies and employees, along with their social media details. Helps organize connections for future referral opportunities.",
      image: RefStack,
      theme: {
        bg: "bg-gradient-to-br from-emerald-500 to-teal-600",
        text: "text-white",
        button: "bg-emerald-700 hover:bg-emerald-800"
      },
      link: "https://example.com/project-one",
      tags: ["Organization", "Networking", "Productivity"]
    },
    {
      title: "InterviewAI",
      description: "AI-powered interview assistant that helps you practice and prepare for job interviews.",
      image: InterviewAI,
      theme: {
        bg: "bg-gradient-to-br from-blue-700 to-indigo-900",
        text: "text-white",
        button: "bg-indigo-700 hover:bg-indigo-800"
      },
      link: "https://example.com/project-two",
      tags: ["AI", "Interview Prep", "Career"]
    },
    {
      title: "ResultHub",
      description: "A platform to view, analyze, and share exam or competition results in one place.",
      image: ResultHub,
      theme: {
        bg: "bg-gradient-to-br from-teal-500 to-cyan-600",
        text: "text-white",
        button: "bg-cyan-700 hover:bg-cyan-800"
      },
      link: "https://example.com/project-three",
      tags: ["Education", "Analytics", "Dashboard"]
    }
  ];

  return (
    <section className="py-5 px-4 border border-white/10 bg-[rgb(27,37,50)] rounded-2xl mx-auto">
      {/* Section Header */}
      <div className="text-start mb-12">
        <h2 className="text-2xl font-bold text-white mb-3">My Projects</h2>
        <div className="w-15 h-1 bg-amber-400 rounded-full"></div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Here are some of my featured projects. Each one was built to solve specific problems and deliver value.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`${project.theme.bg} rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group`}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className=" object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className={`text-xl font-bold ${project.theme.text}`}>{project.title}</h3>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${project.theme.button} text-white p-2 rounded-lg transition-colors`}
                >
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <p className={`${project.theme.text} opacity-90 mb-4`}>{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${project.theme.text} bg-white/20`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

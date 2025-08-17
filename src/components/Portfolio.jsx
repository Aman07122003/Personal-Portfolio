import React from 'react';
import InterviewAI from '../assets/InterviewAI.png';
import RefStack from '../assets/RefStack.png';
import ResultHub from '../assets/ResultHub.png';

const Portfolio = () => {
    const project = [
        {
            title: "Project One",
            description: "A brief description of project one.",
            image: InterviewAI,
            link: "https://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "A brief description of project two.",
            image: RefStack,
            link: "https://example.com/project-two"
        },
        {
            title: "Project Three",
            description: "A brief description of project three.",
            image: ResultHub,
            link: "https://example.com/project-three"
        }
    ];
    
    const links = (link) => {
        window.open(link, "_blank");
    }

  return (
    <div className='mt-5 p-5 bg-white/10 backdrop-blur-md border border-white/20 gap-y-3 flex flex-col rounded-2xl'>
        <h2 className='text-2xl font-bold text-gray-50'>Portfolio</h2>
        <div className='h-1 w-13 bg-[rgb(251,191,94)] rounded-3xl'></div>
        {project.map((proj, index) => (
            <button onClick={() => links(proj.link)} key={index} className='bg-gray-800/30 backdrop-blur-md border border-white/10 cursor-pointer rounded-2xl mb-4'>
                <div className="rounded-2xl  overflow-hidden">
                    <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 rounded-2xl p-2 ease-in-out hover:scale-105"
                    />
                </div>

                <h3 className='text-lg font-bold text-amber-400 mt-2 pl-2'>{proj.title}</h3>
                <p className='text-gray-300 mb-2 p-2'>{proj.description}</p>
            </button>
        ))}

    </div>
  )
}

export default Portfolio
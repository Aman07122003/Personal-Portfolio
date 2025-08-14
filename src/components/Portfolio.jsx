import React from 'react'

const Portfolio = () => {
    const project = [
        {
            title: "Project One",
            description: "A brief description of project one.",
            image: "path/to/image1.jpg",
            link: "https://example.com/project-one"
        },
        {
            title: "Project Two",
            description: "A brief description of project two.",
            image: "path/to/image2.jpg",
            link: "https://example.com/project-two"
        },
        {
            title: "Project Three",
            description: "A brief description of project three.",
            image: "path/to/image3.jpg",
            link: "https://example.com/project-three"
        }
    ];
  return (
    <div className='mt-5 p-5 bg-white/10 backdrop-blur-md border border-white/20 gap-y-3 flex flex-col rounded-2xl'>
        <h2 className='text-2xl font-bold text-gray-50'>Portfolio</h2>
        <div className='h-1 w-13 bg-[rgb(251,191,94)] rounded-3xl'></div>
        {project.map((proj, index) => (
            <div key={index} className='bg-gray-800/30 backdrop-blur-md p-4 rounded-xl mb-4'>
                <div className="rounded-lg h-55 bg-amber-600 hover:bg-amber-500 hover:scale-110  overflow-hidden">
                    <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                    />
                </div>

                <h3 className='text-lg font-semibold text-white mt-5'>{proj.title}</h3>
                <p className='text-gray-300'>{proj.description}</p>
            </div>
        ))}

    </div>
  )
}

export default Portfolio
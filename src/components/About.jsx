import React from 'react'
import LeetCodeStats from './Stats/LeetCodeStats.jsx';
import AI from '../assets/AI.png'
import Flutter from '../assets/Flutter.png'
import amitSharma from '../assets/amitSharma.jpg';
import devops from '../assets/devops.png';


const About = () => {

    const what_im_working_on = [
        {
          id: 1,
          icon: devops,
          name: "DevOps",
          input: "Implementing CI/CD pipelines and automation",
          textStyle: "text-green-200 text-[11px]",
          theam: "from-green-700 to-green-400",
        },
        {
          id: 2,
          icon: AI, // replace with your AI icon/image
          name: "Artificial Intelligence",
          input: "Building intelligent systems with ML & NLP",
          textStyle: "text-purple-200 text-[11px]",
          theam: "from-purple-400 to-purple-700",
        },
        {
          id: 3,
          icon: Flutter,
          name: "Flutter",
          input: "Mobile development with cross-platform apps",
          textStyle: "text-sky-200 text-[11px]",
          theam: "from-blue-400 to-blue-700",
        }
      ];

  return (
       <div className='mt-5 p-5 bg-[rgb(28,39,55)] backdrop-blur-md border border-white/20 rounded-2xl flex flex-col gap-y-5'>
              <div>
                <h2 className='text-2xl font-bold text-gray-100'>About Me</h2> 
                <div className='w-10 h-1 bg-amber-300 mt-2 rounded-l-3xl'></div>
                <p className='text-gray-300 text-[14px] font-light tracking-wide mt-4 font-sans'>Hello! I'm a passionate web developer with a keen interest in creating dynamic and responsive web applications. I have experience in various technologies including React, Node.js, and MongoDB. My goal is to build user-friendly interfaces that provide seamless experiences across devices.
                </p>

                <p className='text-gray-300 text-[14px] font-light tracking-wide mt-4 font-sans'>I enjoy problem-solving and continuously learning new skills to enhance my development toolkit. In my free time, I like to contribute to open-source projects and explore the latest trends in web development.</p>
              </div>
              <div className='mt-5'>
                <h2 className='text-2xl font-bold text-gray-100'>LeetCode Stats</h2>
                <div className='w-10 h-1 bg-amber-300 mt-2 rounded-l-3xl'></div>
                <div className='mt-5'>
                  <LeetCodeStats username="Aman07122003" />
                </div>
              </div>
              <div className='text-gray-100 font-bold text-xl'>What I'm Working On</div>
              {what_im_working_on.map((item) => (
                <div className={`h-50 p-5 rounded-2xl gap-y-3 bg-gradient-to-r ${item.theam} backdrop-blur-md border border-white/20 flex flex-col justify-center items-center`}>
                  <div className='w-40 h-20 flex justify-center'>
                    <img src={item.icon} alt={item.name} className='h-full object-cover rounded-2xl' />
                  </div>
                  <div className='flex justify-center flex-col items-center gap-y-2'>
                    <h2 className='text-xl font-bold text-gray-100'>{item.name}</h2>
                    <p className={`${item.textStyle} text-center"`}>{item.input}</p>
                  </div>
                </div>
              ))}
              <div className='text-gray-100 font-bold text-xl'>Testimonials</div>
                <div className='flex justify-center items-center'> 
                
                  <div className="relative p-6 bg-[rgb(22,30,46)] backdrop-blur-md border border-white/20 rounded-2xl mt-10">
                    {/* Profile Pic Container */}
                    <div className="absolute -top-10 left-5">
                      <div className="h-20 w-18 rounded-2xl bg-[rgb(56,56,56)] border border-white/20 overflow-hidden">
                        <img
                          src={amitSharma}
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-300 text-sm italic mt-8">
                      "I strongly recommend Mr. Aman Pratap Singh for internship opportunities or any role requiring a technically competent and motivated candidate. I am confident he will be an asset to any organization he joins."
                    </p>
                    <h4 className="mt-4 text-amber-400 font-semibold">Dr. Amit Sharma</h4>
                    <span className="text-gray-400 text-xs">Branch Coordinator, Computer Science</span>
                  </div>
              </div>

            </div >
  )
}

export default About
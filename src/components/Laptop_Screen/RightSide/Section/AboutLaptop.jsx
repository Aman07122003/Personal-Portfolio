import React from 'react'
import { motion } from 'framer-motion'
import GitHubStats from '../../../Stats/GitHubStats'
import LeetCodeStats from '../../../Stats/LeetCodeStats'
import AI from '../../../../assets/AI.png'
import Flutter from '../../../../assets/Flutter.png'
import amitSharma from '../../../../assets/amitSharma.jpg';
import devops from '../../../../assets/devops.png';

const AboutLaptop = () => {
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
          icon: AI,
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div 
            className='flex flex-col gap-y-6 p-4'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* About Me Section */}
            <motion.div variants={itemVariants}>
                <div className='text-3xl font-bold text-white'>About Me</div>
                <div className='h-1 w-12 bg-amber-400 rounded-3xl mb-4'></div>
                <div className='text-gray-300 space-y-4'>
                    <p>
                        Hello! I'm a passionate web developer with a keen interest in creating dynamic and responsive web applications. 
                        I have experience in various technologies including React, Node.js, and MongoDB. My goal is to build 
                        user-friendly interfaces that provide seamless experiences across devices.
                    </p>
                    <p>
                        I enjoy problem-solving and continuously learning new skills to enhance my development toolkit. 
                        In my free time, I like to contribute to open-source projects and explore the latest trends in web development.
                    </p>
                </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
                className='mt-5 flex justify-between'
                variants={itemVariants}
            >
                <GitHubStats />
                <LeetCodeStats username="Aman07122003" />
            </motion.div>

            {/* Current Work Section */}
            <motion.div variants={itemVariants}>
                <div className='text-white font-bold text-xl mb-4'>What I'm Working On</div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {what_im_working_on.map((item) => (
                        <motion.div 
                            key={item.id}
                            className={`h-full p-5 rounded-2xl gap-y-3 bg-gradient-to-r ${item.theam} backdrop-blur-md border border-white/20 flex flex-col items-center transition-all duration-300 hover:scale-[1.03] hover:shadow-lg`}
                            whileHover={{ y: -5 }}
                        >
                            <div className='w-32 h-32 flex justify-center mb-4'>
                                <img 
                                    src={item.icon} 
                                    alt={item.name} 
                                    className='h-full w-full object-contain rounded-2xl' 
                                />
                            </div>
                            <div className='flex flex-col items-center gap-y-2 text-center'>
                                <h2 className='text-xl font-bold text-white'>{item.name}</h2>
                                <p className={`${item.textStyle}`}>{item.input}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Testimonials Section */}
            <div className='text-gray-100 font-bold text-xl'>Testimonials</div>
                <div className='flex justify-center items-center'> 
                
                  <div className="relative p-6 bg-[rgb(22,30,46)] backdrop-blur-md border border-white/20 rounded-2xl mt-10">
                    {/* Profile Pic Container */}
                    <div className="absolute -top-13 left-5">
                      <div className="h-23 w-20 rounded-2xl bg-[rgb(56,56,56)] border border-white/20 overflow-hidden">
                        <img
                          src={amitSharma}
                          alt="Profile"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-gray-300 text italic mt-8">
                      "I strongly recommend Mr. Aman Pratap Singh for internship opportunities or any role requiring a technically competent and motivated candidate. I am confident he will be an asset to any organization he joins."
                    </p>
                    <h4 className="mt-4 text-amber-400 font-semibold">Dr. Amit Sharma</h4>
                    <span className="text-gray-400 text-xs">Branch Coordinator, Computer Science</span>
                  </div>
              </div>
        </motion.div>
    )
}

export default AboutLaptop
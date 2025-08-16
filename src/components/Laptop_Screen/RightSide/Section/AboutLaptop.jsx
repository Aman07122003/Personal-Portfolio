import React from 'react'
import Stats from '../../../Stats/Stats'
import LeetCodeStats from '../../../Stats/LeetCodeStats'

const AboutLaptop = () => {
  return (
    <div className='flex flex-col gap-y-3'>
        <div className='text-3xl font-bold '>About Me</div>
        <div className='h-1 w-12 bg-amber-400 rounded-3xl mb-4'></div>
        <div>
            <p>
                Hello! I'm a passionate web developer with a keen interest in creating dynamic and responsive web applications. I have experience in various technologies including React, Node.js, and MongoDB. My goal is to build user-friendly interfaces that provide seamless experiences across devices.
            </p>
            <p className='mt-6'>
                I enjoy problem-solving and continuously learning new skills to enhance my development toolkit. In my free time, I like to contribute to open-source projects and explore the latest trends in web development.
            </p>
        </div>
        <div className='mt-5'>
            <Stats />
            <LeetCodeStats username="Aman07122003" />
        </div>
    </div>
  )
}

export default AboutLaptop
import React, { useState } from 'react'
import AboutLaptop from './Section/AboutLaptop'
import ResumeLaptop from './Section/ResumeLaptop'
import PortfolioLaptop from './Section/PortfolioLaptop'
import ContactLaptop from './Section/ContactLaptop'

const Content = () => {
  const [activeSection, setActiveSection] = useState("about") // Default to section 1

  return (
    <div className='w-[85%] h-auto flex justify-end pr-20 mt-10'>
      <div className='w-[80%] p-5 flex flex-col bg-white/5 relative border border-white/20 rounded-2xl'>

        {/* Top Right Buttons Bar */}
        <div className='h-12 flex gap-2 px-3 items-center bg-white/5 absolute top-0 right-0 rounded-bl-2xl'>
          <button onClick={() => setActiveSection("about")} className={`h-10 w-20 text-sm cursor-pointer ${
              activeSection === "about"
                ? "text-[rgb(252,219,112)]"
                : "text-gray-100"
            }`}>About</button>
          <button onClick={() => setActiveSection("resume")} className={`h-10 w-20 text-sm cursor-pointer ${
            activeSection === "resume"
              ? "text-[rgb(252,219,112)]"
              : "text-gray-100"
          }`}>Resume</button>
          <button onClick={() => setActiveSection("portfolio")} className={`h-10 w-20 text-sm cursor-pointer ${
            activeSection === "portfolio"
              ? "text-[rgb(252,219,112)]"
              : "text-gray-100"
          }`}>Portfolio</button>
          <button onClick={() => {
            setActiveSection("contact");
          }} className={`h-10 w-20 text-sm cursor-pointer ${
            activeSection === "contact"
              ? "text-[rgb(252,219,112)]"
              : "text-gray-100"
          }`}>Contact</button>
        </div>

        {/* Sections */}
        <div className='h-full'>
          {activeSection === "about" && (
            <div className='h-full p-4 rounded text-white'>
              <AboutLaptop />
            </div>
          )}
          {activeSection === "resume" && (
            <div className='h-full p-4 rounded text-white'>
                <ResumeLaptop />
            </div>
          )}
          {activeSection === "portfolio" && (
            <PortfolioLaptop />
          )}
          {activeSection === "contact" && (
            <div className='h-full p-4 rounded text-white'>
                <ContactLaptop />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Content

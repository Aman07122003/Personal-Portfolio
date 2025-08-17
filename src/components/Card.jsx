import React, { useState, useEffect } from 'react';
import avatar from '../assets/my-avatar.png';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Vcard from './Laptop_Screen/Vcard.jsx';
import amitSharma from '../assets/amitSharma.jpg';
import { 
  FaLinkedin, FaGithub, FaTwitter, FaInstagram, 
  FaPhoneAlt, FaBirthdayCake, FaMapMarkerAlt 
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import LeetCodeStats from './Stats/LeetCodeStats.jsx';



const Card = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [activeTab, setActiveTab] = useState('about');
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const personalInfo = [
    { id: 1, icon: MdEmail, name: "EMAIL", input: "samanpratap219@gmail.com" },
    { id: 2, icon: FaPhoneAlt, name: "PHONE", input: "+91 9351873908" },
    { id: 3, icon: FaBirthdayCake, name: "BIRTHDAY", input: "December 07, 2003" },
    { id: 4, icon: FaMapMarkerAlt, name: "LOCATION", input: "New Delhi, India" }
  ];  

  const what_im_working_on = [
    {
      id: 1,
      icon: "",
      name: "React",
      input: "Building responsive web applications",
    },
    {
      id: 2,
      icon: "",
      name: "Node.js",
      input: "Developing RESTful APIs",
    },
    {
      id: 3,
      icon: "",
      name: "MongoDB",
      input: "Database management and integration",
    },
    {
      id: 4,
      icon: "",
      name: "Tailwind CSS",
      input: "Styling web applications with utility-first CSS Styling web applications with",
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (screenSize.width < 700) {
    return (
      <div className='h-auto w-full'>
        <div className='relative rounded-2xl p-3 bg-[rgb(30,30,32)] backdrop-blur-md border border-white/20 flex flex-col gap-y-0 '>
          
          <div className='flex gap-x-4'>
            <div className='bg-[rgb(30,30,32)] backdrop-blur-md border border-white/20 w-20 h-20 rounded-2xl flex justify-center items-center'>
              <div className='flex justify-center items-center h-full w-full'>
                <img src={avatar} alt="avatar" className='overflow-hidden h-15 rounded-2xl w-15'/>
              </div>
            </div>
        
            <div className='w-[55%] flex flex-col justify-around'>
              <h1 className='font-bold text-white'>Aman Pratap Singh</h1>
              <div className='h-8 w-32 p-2 rounded-2xl bg-white/5 text-[10px] border border-white/5 flex items-center justify-center'>
                <p className='text-gray-300 tracking-wide'>FullStack Developer</p>
              </div>
            </div>
        
            <button onClick={() => setToggle((prev) => !prev) } className='absolute top-2 right-2 h-8 w-8 bg-gray-300 rounded-md'>
              {toggle ? 'X' : '☰'}
            </button>
          </div>
          
          <div className={`overflow-hidden flex flex-col gap-y-3 transition-all duration-700 ease-in-out ${
          toggle ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}>
            <div className='mt-3 bg-white/5 h-1'></div>

            <div className='flex flex-col gap-y-5'>
            {personalInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div className='h-[62px] w-full flex items-center gap-x-4' key={item.id}>
                  <div className='w-[20%] flex justify-center items-center'>
                    <Icon className='text-yellow-400 text-xl' />
                  </div>
                  <div className='flex flex-col text-sm'>
                    <h1 className='text-gray-400'>{item.name}</h1>
                    <p className='text-white'>{item.input}</p>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
      
        </div>

        {/* Section Content */}
        <div className='mb-20'>
          {activeTab === 'about' && (
            <div className='mt-5 p-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl flex flex-col gap-y-5'>
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
                <div className='h-44 p-5 rounded-2xl gap-y-3 bg-white/5 backdrop-blur-md border border-white/20 flex flex-col justify-center items-center'>
                  <div className='w-[10%] h-10 bg-amber-100'></div>
                  <div className='flex justify-center flex-col items-center gap-y-2'>
                    <h2 className='text-xl font-bold text-gray-100'>{item.name}</h2>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-300 text-sm text-center">{item.input}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className='text-gray-100 font-bold text-xl'>Testimonials</div>
                <div className='flex justify-center items-center'> 
                
                  <div className="relative p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl mt-10">
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
                    <h4 className="mt-4 text-gray-100 font-semibold">Dr. Amit Sharma</h4>
                    <span className="text-gray-400 text-xs">Branch Coordinator, Computer Science</span>
                  </div>
              </div>

            </div >

          )}

          {activeTab === 'resume' && (
            <div className='mt-5'>
              <Resume />
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className='mt-5'>
                <Portfolio />
            </div>
          )}

          {activeTab === 'contact' && (
            <div>
                <Contact />
            </div>
          )}
        </div>

        <div className='h-16 mt-20 w-full  bg-white/10 backdrop-blur-md  border-t-2 border-white/20 rounded-t-3xl bottom-0 left-0 r fixed flex items-center justify-center gap-x-2'>
          <button onClick={() => setActiveTab("about")} className={`h-10 w-20 text-sm cursor-pointer ${
              activeTab === "about"
                ? "text-[rgb(252,219,112)]"
                : "text-gray-100"
            }`}>About</button>
          <button onClick={() => setActiveTab("resume")} className={`h-10 w-20 text-sm cursor-pointer ${
            activeTab === "resume"
              ? "text-[rgb(252,219,112)]"
              : "text-gray-100"
          }`}>Resume</button>
          <button onClick={() => setActiveTab("portfolio")} className={`h-10 w-20 text-sm cursor-pointer ${
            activeTab === "portfolio"
              ? "text-[rgb(252,219,112)]"
              : "text-gray-100"
          }`}>Portfolio</button>
          <button onClick={() => {
            setActiveTab("contact");
          }} className={`h-10 w-20 text-sm cursor-pointer ${
            activeTab === "contact"
              ? "text-[rgb(252,219,112)]"
              : "text-gray-100"
          }`}>Contact</button>
        </div>
     </div>
    
    );
  }

  return (
    <div className="intro-card">
      <Vcard />
    </div>
  );
};

export default Card;

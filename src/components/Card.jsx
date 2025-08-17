import React, { useState, useEffect } from 'react';
import avatar from '../assets/my-avatar.png';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import Contact from './Contact.jsx';
import Vcard from './Laptop_Screen/Vcard.jsx';
import { 
  FaLinkedin, FaGithub, FaTwitter, FaInstagram, 
  FaPhoneAlt, FaBirthdayCake, FaMapMarkerAlt,
  FaTimes, FaBars 
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import About from './About.jsx';
import { motion, AnimatePresence } from 'framer-motion';

const Card = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [activeTab, setActiveTab] = useState('portfolio');
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const personalInfo = [
    { id: 1, icon: MdEmail, name: "EMAIL", input: "samanpratap219@gmail.com" },
    { id: 2, icon: FaPhoneAlt, name: "PHONE", input: "+91 9351873908" },
    { id: 3, icon: FaBirthdayCake, name: "BIRTHDAY", input: "December 07, 2003" },
    { id: 4, icon: FaMapMarkerAlt, name: "LOCATION", input: "New Delhi, India" }
  ];

  const socialLinks = [
    { id: 1, icon: FaLinkedin, name: "LinkedIn", link: "www.linkedin.com/in/aman-pratap-singh-5349531aa" },
    { id: 2, icon: FaGithub, name: "GitHub", link: "https://github.com/Aman07122003" },
    { id: 3, icon: FaTwitter, name: "Twitter", link: "https://x.com/amanpra99478508" },
    { id: 4, icon: FaInstagram, name: "Instagram", link: "https://instagram.com/beeinghumbl" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (screenSize.width < 700) {
    return (
      <div className='min-h-screen w-full pb-20'>
        {/* Header Card */}
        <motion.div 
          className='relative rounded-2xl p-4 m-4 bg-gray-800/80 backdrop-blur-md border border-gray-700 shadow-lg'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex gap-x-4 items-center'>
            <motion.img 
              src={avatar} 
              alt="avatar" 
              className='h-20 w-20 rounded-full border-2 p-2 border-white/10 object-cover shadow-md'
              whileHover={{ scale: 1.05 }}
            />
            
            <div className='flex-1 flex flex-col justify-center'>
              <h1 className='font-bold text-white text-lg'>Aman Pratap Singh</h1>
              <div className='mt-1 px-3 py-1 rounded-full bg-gray-700/50 border border-gray-600 w-fit'>
                <p className='text-gray-300 text-xs tracking-wide'>FullStack Developer</p>
              </div>
              
              {/* Social Icons */}
              <div className='mt-auto'>
                <div className='flex gap-x-3 mt-2 ml-2'>
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a 
                        href={link.link} 
                        key={link.id} 
                        target='_blank' 
                        rel='noopener noreferrer'
                        className='flex items-center justify-center w-5 h-5 bg-yellow-500 rounded-full hover:scale-110 transition-transform duration-300'
                      >
                        <Icon className='text-black text-sm' />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
        
            <button 
              onClick={handleToggle}
              className='h-9 w-9 flex items-center justify-center bg-gray-700/50 rounded-full border border-gray-600 text-gray-300 hover:text-amber-400 transition-colors'
            >
              {toggle ? <FaTimes size={14} /> : <FaBars size={14} />}
            </button>
          </div>
          
          {/* Personal Info Dropdown */}
          <AnimatePresence>
            {toggle && (
              <motion.div 
                className='mt-4 pt-4 border-t border-gray-700'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className='flex flex-col gap-y-4'>
                  {personalInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className='flex items-center gap-x-4' key={item.id}>
                        <div className='p-2 bg-gray-700/50 rounded-full'>
                          <Icon className='text-amber-400 text-lg' />
                        </div>
                        <div className='flex-1'>
                          <h1 className='text-gray-400 text-xs'>{item.name}</h1>
                          <p className='text-white text-sm mt-1'>{item.input}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Section Content */}
        <div className='px-4'>
          {activeTab === 'about' && <About />}
          {activeTab === 'resume' && <Resume />}
          {activeTab === 'portfolio' && <Portfolio />}
          {activeTab === 'contact' && <Contact />}
        </div>

        {/* Bottom Navigation */}
        <motion.div 
          className={`h-16 mt-20 w-full  bg-white/5 backdrop-blur-md  border-t-2 border-white/20 rounded-t-3xl bottom-0 left-0 r fixed flex items-center justify-center gap-x-8 ${
            isScrolled ? 'shadow-lg' : ''
          }`}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {['about', 'resume', 'portfolio', 'contact'].map((tab) => (
            <button 
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center h-full px-2 transition-colors ${
                activeTab === tab ? 'text-amber-400' : 'text-white hover:text-gray-200'
              }`}
            >
              <span className='text-xs capitalize'>{tab}</span>
              {activeTab === tab && (
                <motion.div 
                  className='h-1 w-6 bg-amber-400 rounded-full mt-1'
                  layoutId='navIndicator'
                />
              )}
            </button>
          ))}
        </motion.div>
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
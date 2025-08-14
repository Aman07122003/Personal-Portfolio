import React, { useState, useEffect } from 'react';
import avatar from '../public/my-avatar.png';

const IntroCard = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const personalInfo = [
    {
      id: 1,
      icon: "",
      name: "EMAIL",
      input: "samanpratap219@gmail.com",
    },
    {
      id: 2,
      icon: "",
      name: "PHONE",
      input: "+91 9351873908",
    },
    {
      id: 3,
      icon: "",
      name: "BIRTHDAY",
      input: "December 07, 2003",
    },
    {
      id: 4,
      icon: "",
      name: "LOCATION",
      input: "New Delhi, India",
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

  if (screenSize.width < 550) {
    return (
      <div className='h-auto w-full'>
        <div className='relative rounded-2xl p-5 bg-white/10 backdrop-blur-md border border-white/20 flex flex-col gap-y-0 '>
          
          <div className='flex gap-x-3'>
            <div className='bg-white/20 backdrop-blur-md border border-white/20 w-[27%] rounded-2xl flex justify-center items-center'>
              <div className='flex justify-center items-center h-full w-full'>
                <img src={avatar} alt="avatar" className='overflow-hidden h-full w-full'/>
              </div>
            </div>
        
            <div className='w-[55%] flex flex-col justify-around'>
              <h1 className='font-bold text-white'>Aman Pratap Singh</h1>
              <div className='h-8 w-30 p-2 rounded-2xl bg-gray-200 text-[10px] flex items-center justify-center'>
                <p>FullStack Developer</p>
              </div>
            </div>
        
            <button onClick={() => setToggle((prev) => !prev) } className='absolute top-2 right-2 h-8 w-8 bg-gray-300 rounded-md'>
              {toggle ? 'X' : '☰'}
            </button>
          </div>
          
          <div className={`overflow-hidden flex flex-col gap-y-3 transition-all duration-500 ease-in-out ${
          toggle ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}>
            <div className='border mt-3'></div>

            <div className='flex flex-col gap-y-2'>
              {personalInfo.map((Items) => (
                <div className='h-[80px] bg-amber-50 w-full flex gap-x-1.5' key={Items.id}>
                  <div className='w-[20%] bg-amber-600'>{Items.icon}</div>
                  <div className='gap-y-1 justify-center flex flex-col'>
                    <h1>{Items.name}</h1>
                    <p>{Items.input}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
        </div>
    </div>
    
    );
  }

  return (
    <div className="intro-card">
      <h1>Welcome to the Intro Card</h1>
      <p>This is a responsive intro card that adjusts based on screen size.</p>
    </div>
  );
};

export default IntroCard;

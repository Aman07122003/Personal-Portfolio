import React from 'react';
import { 
  FaLinkedin, FaGithub, FaTwitter, FaInstagram, 
  FaPhoneAlt, FaBirthdayCake, FaMapMarkerAlt 
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import avatar from '../../../assets/my-avatar.png'; 

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

const Personal = () => {
  return (
    <div className='h-screen w-[29%] fixed flex justify-end p-2 mt-10'>
      <div className='h-[90%] w-[68%] bg-white/5 border border-white/20 rounded-2xl flex flex-col gap-y-1 p-3'>
        
        {/* Profile Section */}
        <div className='h-[45%] w-full flex flex-col gap-y-5 justify-center items-center'>
          <div className='h-35 w-30 rounded-2xl'>
           <img src={avatar} alt="" className=' rounded-full border-[0.05px] border-white/20 shadow-2xl hover:scale-105 ease-in-out duration-150 h-full w-full'/>
          </div>
          <div className='text-2xl text-white font-bold'>Aman Pratap Singh</div>
          <div className='h-8 w-40 bg-white/10 p-2 flex text-gray-400 items-center justify-center text-sm rounded-2xl'>
            Full Stack Developer
          </div>
        </div>

        {/* Divider */}
        <div className='h-[2px] w-full bg-white/10 rounded-2xl'></div>

        {/* Personal Info */}
        <div className='h-[55%] flex flex-col justify-center'>
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

        {/* Social Links */}
        <div className='mt-auto'>
          <div className='flex gap-x-4 justify-center'>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  href={link.link} 
                  key={link.id} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full hover:scale-110 transition-transform duration-300'
                >
                  <Icon className='text-black text-lg' />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;

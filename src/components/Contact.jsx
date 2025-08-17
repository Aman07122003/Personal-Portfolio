import React from 'react'
import Map from './Map.jsx'
import ContactForm from './ContactForm.jsx';

const Contact = () => {
  return (
    <div className='mt-2 p-4 bg-[rgb(15,21,28)] backdrop-blur-md border border-white/20 rounded-2xl'>
        <h2 className='text-2xl font-bold text-gray-100'>Contact</h2>
        <div className='h-1 w-10 bg-amber-300 rounded-2xl mt-2'></div>
        <div className='mt-5 flex justify-center'>
            <Map />
        </div>
        <div className='mt-5'>
            <ContactForm />
        </div>
    </div>
  )
}

export default Contact
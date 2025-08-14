import React from 'react'
import Map from './Map.jsx'

const Contact = () => {
  return (
    <div className='mt-5 p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl'>
        <h2 className='text-xl font-bold text-gray-100'>Contact</h2>
        <p className='text-gray-300'>I am a FullStack Developer with a passion for building web applications.</p>
        <div>
            <Map />
        </div>
    </div>
  )
}

export default Contact
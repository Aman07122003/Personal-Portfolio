import Map from '../../../Map.jsx'
import ContactForm from '../../../ContactForm.jsx';
import React, { useRef, useEffect } from 'react';
import { FiMail } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const ContactLaptop = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m2sfrxe',     // From EmailJS dashboard
        'template_v4rcjlk',    // From EmailJS dashboard
        formRef.current,
        '57x8M8cGQEorLJ3cM'      // From EmailJS dashboard
      )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error);
        }
      );
  };

  useEffect(() => {
    if (window.google) {
      const location = { 
        lat: 28.6404, // 28°38'25.5"N
        lng: 77.4192  // 77°25'09.2"E
      };

      // Dark map style
      const darkStyle = [
        { elementType: "geometry", stylers: [{ color: "#212121" }] },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#757575" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#212121" }] },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [{ color: "#757575" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#282828" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#383838" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#000000" }],
        }
      ];

      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: location,
        styles: darkStyle,
        disableDefaultUI: false, // enables all default controls
        zoomControl: true,       // ensures zoom buttons show
        streetViewControl: false, // pegman
        fullscreenControl: false, // fullscreen toggle
        mapTypeControl: false,   // hides map/satellite toggle if you don't need it
      });
      

      // Custom marker
      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "My Location",
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Replace with your own icon if desired
          scaledSize: new window.google.maps.Size(40, 40),
        },
        animation: window.google.maps.Animation.DROP,
      });
    }
  }, []);

  return (
    <div className='h-full'>
        <h2 className='text-2xl font-bold text-gray-100'>Contact</h2>
        <div className='h-1 w-10 bg-amber-300 rounded-2xl mt-2'></div>
        <div className='mt-5 flex justify-center'>
            <div
              id="map"
              className="h-90 w-full rounded-2xl overflow-hidden shadow-lg border border-white/20"
            ></div>
        </div>
        <div className='mt-5'>
          <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-y-3"
        >
          <h1 className="text-2xl text-white font-bold mt-3">Contact Form</h1>

          <div className='flex w-full justify-between items-center mt-2'>
          <div className='w-[45%]'>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Full name"
              className="w-full p-3 rounded-2xl text-gray-200 border placeholder:p-0 border-white/20 outline-0 focus:ring-0 focus:border-white/30"
              required
            />
          </div>

          <div className='w-[45%]'>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              className="w-full p-3 text-gray-200 rounded-2xl border placeholder:p-0 border-white/20 outline-0 focus:ring-0 focus:border-white/30"
              required
            />
          </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mt-3">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-2 mt-3 text-gray-200 rounded-2xl border placeholder:p-0 border-white/20 outline-0 focus:ring-0 focus:border-white/30"
              required
            ></textarea>
          </div>

          <div className='w-full flex justify-end mt-4 '>
          <button
            type="submit"
            className="bg-white/10 text-[rgb(252,219,112)] px-4 py-2 w-[30%] flex justify-center items-center border border-white/20 rounded-md font-semi-bold hover:bg-white/5"
          >
            <FiMail className="inline-block mr-2" />
            Send Message
          </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default ContactLaptop
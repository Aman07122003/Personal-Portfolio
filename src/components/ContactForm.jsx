import React, { useRef } from 'react';
import { FiMail } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const ContactForm = () => {
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

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-y-3"
      >
        <h1 className="text-2xl text-white font-bold mt-3">Contact Form</h1>

        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Full name"
            className="w-full p-2 text-gray-200 rounded-md border placeholder:text-sm placeholder:p-3 border-white/20 outline-0 focus:ring-0 focus:border-white/30"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Email address"
            className="w-full p-2 text-gray-200 rounded-md border placeholder:text-sm placeholder:p-3 border-white/20 outline-0 focus:ring-0 focus:border-white/30"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-2 text-gray-200 rounded-md border placeholder:text-sm placeholder:pl-3 border-white/20 outline-0 focus:ring-0 focus:border-white/30"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-white/10 text-[rgb(252,219,112)] px-4 py-2 border border-white/20 rounded-md font-semi-bold hover:bg-white/5"
        >
          <FiMail className="inline-block mr-2" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

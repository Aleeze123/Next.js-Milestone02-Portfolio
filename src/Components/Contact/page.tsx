import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="bg-black text-white py-16 px-4 md:px-8 lg:px-12 relative">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-cyan-400">
        Get in Touch
      </h2>
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0 md:mr-8">
            <span className="text-2xl mr-2">📍</span>
            <p>Karachi, Pakistan</p>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">✉️</span>
            <p>alizey649@gmail.com</p>
          </div>
        </div>
        <form 
          action="https://formspree.io/f/xyzgovov" 
          method="POST" 
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 mt-4 md:mt-0"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="tel"
              name="phone" 
              placeholder="Phone Number"
              className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              name="subject" 
              placeholder="Subject"
              className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 mt-4 md:mt-0"
            />
          </div>
          <textarea
            name="message" 
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-gray-800 border border-cyan-400 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-md cursor-pointer hover:bg-cyan-500 transition-colors"
          />
        </form>
        <div className="mt-12">
          <p className="text-sm text-gray-400 text-center">© 2024 Aleeza | All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
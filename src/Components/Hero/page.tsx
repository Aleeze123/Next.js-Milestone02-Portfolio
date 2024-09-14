import React from 'react';
import Particle from '../Particle';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
     
      <Particle />
    
      <div className="relative w-full max-w-6xl mx-auto py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col md:flex-row items-center md:justify-between">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="relative h-80 w-80 flex justify-center items-center">
            <Image
              src="/aleezaa.jpeg"
              alt="Aleeza&apos;s profile picture"
              layout="fill"
              objectFit="cover"
              className="rounded-full animate-border-color"
            />
          </div>
        </div>
        
        
        <div className="flex-1 mb-12 md:mb-0">
          <div className="relative bg-black text-black p-6 pt-8 rounded-lg shadow-lg animate-fade-up-scale">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
              Greetings, I&apos;m Aleeza
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white font-serif">
              I&apos;m passionate about coding with a solid foundation in HTML, CSS, Tailwind CSS, TypeScript, and JavaScript. Currently, I&apos;m diving into Next.js and cloud tech. My journey includes personal projects and continuous learning.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <div className="bg-black p-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-center space-x-4">
           
                <a href="https://www.linkedin.com/in/aleeza-a-i68735305" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} className="text-cyan-400 hover:text-blue-500 transition-colors transform hover:scale-110" />
                </a>
                <a href="https://www.instagram.com/aleeze__1710/#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} className="text-pink-700 hover:text-purple-600 transition-colors transform hover:scale-110" />
                </a>
                <a href="https://x.com/aleeze1710?s=08" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} className="text-blue-500 hover:text-white transition-colors transform hover:scale-110" />
                </a>
                <a href="https://github.com/Aleeze123#:~:text=Aleeze-,Aleeze123,-%C2%B7%20she/her" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} className="text-white hover:text-white transition-colors transform hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative bg-cyan-400 text-black p-4 rounded-lg max-w-xs mx-auto flex items-center space-x-3 mt-6">
            <MdEmail size={20} className="text-black" />
            <h2 className="text-sm sm:text-base font-normal mb-0 text-black text-center">
              alizey649@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

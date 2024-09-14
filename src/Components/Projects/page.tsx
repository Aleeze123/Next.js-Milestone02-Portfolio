import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-black text-white pt-[4rem] md:pt-[8rem] pb-[1rem] px-4 md:px-8 lg:px-12 relative z-10"
      style={{ marginTop: '100px' }} 
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 sm:mb-10 text-cyan-400">
        Projects
      </h1>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem]">
        {/* Project 1 */}
        <div className="bg-black p-6 rounded-lg border-4 border-white transition-colors duration-300 hover:border-cyan-400">
          <a href="https://aleeze123.github.io/aleeza-portfolio/" target="_blank" rel="noopener noreferrer">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-transform duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/portfolio.png"
                alt="Portfolio"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </a>
        </div>
        {/* Project 2 */}
        <div className="bg-black p-6 rounded-lg border-4 border-white transition-colors duration-300 hover:border-cyan-400">
          <a href="https://aleeze123.github.io/ice-cream-website/" target="_blank" rel="noopener noreferrer">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-transform duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/icecream.png"
                alt="Ice Cream Project"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </a>
        </div>
        {/* Project 3 */}
        <div className="bg-black p-6 rounded-lg border-4 border-white transition-colors duration-300 hover:border-cyan-400">
          <a href="https://github.com/Aleeze123/Student_Management_System.git" target="_blank" rel="noopener noreferrer">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-transform duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/studentmanagement.jpeg"
                alt="Student Management System"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </a>
        </div>
        {/* Project 4 */}
        <div className="bg-black p-6 rounded-lg border-4 border-white transition-colors duration-300 hover:border-cyan-400">
          <a href="https://github.com/Aleeze123/Atm.git" target="_blank" rel="noopener noreferrer">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-transform duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/ATM.jpeg"
                alt="ATM Project"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </a>
        </div>
        {/* Project 5 */}
        <div className="bg-black p-6 rounded-lg border-4 border-white transition-colors duration-300 hover:border-cyan-400">
          <a href="https://github.com/Aleeze123/Cli-number-guessing.git" target="_blank" rel="noopener noreferrer">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-transform duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/numberguessing.jpeg"
                alt="Number Guessing Game"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </a>
        </div>
        {/* Project 6 */}
        <div className="bg-black p-6 rounded-lg border-4 border-white transition-colors duration-300 hover:border-cyan-400">
          <a href="https://github.com/Aleeze123/Countdown-Timer.git" target="_blank" rel="noopener noreferrer">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-transform duration-200 relative w-full h-[200px] md:h-[300px]">
              <Image
                src="/timer.jpeg"
                alt="Countdown Timer"
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/Aleeze123?tab=repositories"
          className="bg-cyan-400 text-black font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
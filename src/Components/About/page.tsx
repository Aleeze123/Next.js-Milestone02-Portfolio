
import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      className="text-white py-8 px-4 md:py-12 md:px-6 lg:py-16 lg:px-8 bg-black relative z-10"
      style={{ marginTop: '100px' }} 
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-4 sm:mb-6 text-cyan-400">
          ABOUT ME
        </h2>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-black p-4 sm:p-6 rounded-lg border border-white transition-colors duration-300 hover:border-custom-orange">
          <img
            src="/Aleeza.jpeg"
            alt="Aleeza"
            className="w-full sm:w-48 md:w-56 lg:w-64 h-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center sm:text-left font-serif">
            Hi there! I’m Aleeza, a 17-year-old passionate web developer and creative enthusiast eager to bring innovative digital solutions to life. Currently, I am a senior student at the Governor Sindh IT Initiative (GIAIC), where I am honing my skills and expanding my knowledge in technology and development.
            <br />
            I’m committed to advancing my skills in web development, having built a strong foundation in HTML, CSS, Tailwind CSS, TypeScript, and JavaScript. I’m also diving into Next.js and exploring cloud technologies to further enhance my expertise.
            <br />
            In addition to web development, I have a diverse set of creative skills. I am an animator and graphic designer, where I enjoy crafting visually engaging content and designs. My passion for calligraphy allows me to blend art and technology in unique ways, and as a video editor, I love bringing stories to life through dynamic visual storytelling.
            <br />
            I’ve been focusing on personal projects, such as a Node.js application that reflects my skills and creativity. Additionally, I’m learning React to broaden my development toolkit.
            <br />
            I’m excited to showcase my journey and the projects I’m passionate about. Dive into my work and discover how I’m making my mark in the world of web development through creativity and innovation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

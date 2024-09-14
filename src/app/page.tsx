"use client"; 

import React, { useState } from 'react';
import Navbar from '@/Components/Navbar/page';
import Hero from '@/Components/Hero/page';
import About from '@/Components/About/page';
import Projects from '@/Components/Projects/page';
import Contact from '@/Components/Contact/page';

export default function Home() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar isNavbarOpen={isNavbarOpen} handleNavbarToggle={handleNavbarToggle} />
      <div className="container mt-24 mx-auto px-12 py-4">
     <Hero/>
        <About />
        <Projects />
      </div>
      <Contact />
    </main>
  );
}
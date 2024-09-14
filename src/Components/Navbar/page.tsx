import React from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

interface NavbarProps {
  isNavbarOpen: boolean; // Updated prop name
  handleNavbarToggle: () => void; // Updated prop name
}

const Navbar: React.FC<NavbarProps> = ({ isNavbarOpen, handleNavbarToggle }) => {
  return (
    <header className="w-full bg-black flex items-center justify-between px-6 py-4 shadow-md border-b border-black fixed top-0 left-0 z-50">
      <div className="text-cyan-400 text-3xl font-bold tracking-wide">
        Aleeza
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={handleNavbarToggle} className="text-cyan-400 text-2xl"> {/* Updated */}
          {isNavbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isNavbarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}
      >
        <nav
          className={`fixed inset-0 bg-black p-6 space-y-6 flex flex-col justify-center items-center transform transition-transform duration-300 ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button onClick={handleNavbarToggle} className="absolute top-6 right-6 text-cyan-400 text-2xl"> {/* Updated */}
            <AiOutlineClose />
          </button>
          <Link href="#home" className="text-white text-2xl font-medium transition-colors duration-300 hover:text-cyan-400" onClick={handleNavbarToggle}> {/* Updated */}
            Home
          </Link>
          <Link href="#about" className="text-white text-2xl font-medium transition-colors duration-300 hover:text-cyan-400" onClick={handleNavbarToggle}> {/* Updated */}
            About
          </Link>
          <Link href="#projects" className="text-white text-2xl font-medium transition-colors duration-300 hover:text-cyan-400" onClick={handleNavbarToggle}> {/* Updated */}
            Projects
          </Link>
          <Link href="#contact" className="text-white text-2xl font-medium transition-colors duration-300 hover:text-cyan-400" onClick={handleNavbarToggle}> {/* Updated */}
            Contact
          </Link>
        </nav>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-white text-base font-medium">
        <Link href="#home" className="relative group">
          <span className="hover:text-cyan-400 transition-colors duration-300">Home</span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link href="#about" className="relative group">
          <span className="hover:text-cyan-400 transition-colors duration-300">About</span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link href="#projects" className="relative group">
          <span className="hover:text-cyan-400 transition-colors duration-300">Projects</span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
        <Link href="#contact" className="relative group">
          <span className="hover:text-cyan-400 transition-colors duration-300">Contact</span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

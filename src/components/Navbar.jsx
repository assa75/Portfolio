import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white/90 backdrop-blur-md shadow-md z-[999]">

      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">

        <h1 className="text-xl sm:text-2xl font-bold text-purple-700">
          ᥫ᭡ Assa
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800 bg-white rounded-md p-2 shadow"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700">
            <li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
            <li><a href="#education" onClick={()=>setMenuOpen(false)}>Education</a></li>
            <li><a href="#certificates" onClick={()=>setMenuOpen(false)}>Certificates</a></li>
            <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}

    </header>
  );
}
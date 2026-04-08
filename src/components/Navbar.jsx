import { useState } from "react";

export default function Navbar() {

const [menuOpen,setMenuOpen] = useState(false);

return (

<header className="fixed top-0 w-full bg-white shadow-md z-50">

<nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

{/* Logo */}

<h1 className="text-2xl font-bold text-purple-700">

ᥫ᭡ Assa

</h1>

{/* Desktop Menu */}

<ul className="hidden md:flex gap-8 font-medium text-gray-700">

<li><a href="#home" className="hover:text-purple-700">Home</a></li>

<li><a href="#about" className="hover:text-purple-700">About</a></li>

<li><a href="#skills" className="hover:text-purple-700">Skills</a></li>

<li><a href="#education" className="hover:text-purple-700">Education</a></li>

<li><a href="#certificates" className="hover:text-purple-700">Certificates</a></li>

<li><a href="#projects" className="hover:text-purple-700">Projects</a></li>

<li><a href="#contact" className="hover:text-purple-700">Contact</a></li>

</ul>

{/* Mobile Menu Button */}

<button
onClick={()=>setMenuOpen(!menuOpen)}
className="md:hidden text-2xl"
>

☰

</button>

</nav>

{/* Mobile Menu */}

{menuOpen && (

<div className="md:hidden bg-white shadow-lg">

<ul className="flex flex-col items-center gap-6 py-6">

<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#education">Education</a></li>
<li><a href="#certificates">Certificates</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#contact">Contact</a></li>

</ul>

</div>

)}

</header>

)

}
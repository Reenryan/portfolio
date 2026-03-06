import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

const [menuOpen,setMenuOpen] = useState(false)

return (

<nav className="fixed top-0 w-full bg-slate-900 shadow-lg z-50">

<div className="max-w-6xl mx-auto flex justify-between items-center p-4">


{/* MOBILE MENU BUTTON */}

<button
className="text-cyan-400 text-2xl md:hidden"
onClick={()=>setMenuOpen(!menuOpen)}
>

{menuOpen ? <FaTimes/> : <FaBars/>}

</button>


{/* LOGO */}

<h1 className="text-xl md:text-2xl font-bold text-cyan-400">

Data Analyst & Software Developer

</h1>


{/* DESKTOP MENU */}

<ul className="hidden md:flex gap-8 text-gray-300">
  <li>
    <a href="#about" className="hover:text-cyan-400 cursor-pointer">About</a>
  </li>
  <li>
    <a href="#skills" className="hover:text-cyan-400 cursor-pointer">Skills</a>
  </li>
  <li>
    <a href="#projects" className="hover:text-cyan-400 cursor-pointer">Projects</a>
  </li>
  <li>
    <a href="#dashboards" className="hover:text-cyan-400 cursor-pointer">Dashboards</a>
  </li>
  <li>
    <a href="#contact" className="hover:text-cyan-400 cursor-pointer">Contact</a>
  </li>
</ul>

</div>


{/* MOBILE MENU */}

{menuOpen && (
  <div className="md:hidden absolute left-0 top-16 w-40 bg-slate-800 px-6 py-6 shadow-lg rounded-r-xl">
    <ul className="flex flex-col gap-4 text-gray-300">
      <li>
        <a href="#about" className="hover:text-cyan-400 cursor-pointer" onClick={() => setMenuOpen(false)}>About</a>
      </li>
      <li>
        <a href="#skills" className="hover:text-cyan-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Skills</a>
      </li>
      <li>
        <a href="#projects" className="hover:text-cyan-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Projects</a>
      </li>
      <li>
        <a href="#dashboards" className="hover:text-cyan-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Dashboards</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-cyan-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</a>
      </li>
    </ul>
  </div>
)}

</nav>

)

}

export default Navbar
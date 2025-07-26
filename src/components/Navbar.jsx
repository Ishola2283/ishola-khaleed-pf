import React, { useState } from "react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { RiHome3Line } from "react-icons/ri";
// import Contact from "../pages/Contact";
import { GrProjects } from "react-icons/gr";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu on click (mobile)
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white  shadow-md backdrop-blur-md"
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "saturate(180%) blur(7px)",
        WebkitBackdropFilter: "saturate(180%) blur(8px)",
        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)",
      }}
    >
      <div className="flex justify-between items-center px-6 py-4 md:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaCode size={30} color="#00D68F" />
          <span className="font-bold text-[25px] text-gray-800">
            Ishola Khaleed
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <button
            onClick={() => scrollTo("home")}
            className="hover:text-emerald-400 flex items-center gap-2"
          >
            <RiHome3Line />
            Home
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-emerald-400 flex items-center gap-2"
          >
            About me
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="hover:text-emerald-400 flex items-center gap-2"
          >
            Skills
          </button>

          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-emerald-400 flex items-center gap-2"
          >
            <GrProjects />
            Projects
          </button>
          <button
            onClick={() => scrollTo("contactme")}
            className="hover:text-emerald-400 flex items-center gap-2"
          >
            Contact me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div
          className="md:hidden bg-white text-gray-800  flex flex-col items-center gap-6 py-4 transition-all"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "saturate(180%) blur(7px)",
            WebkitBackdropFilter: "saturate(180%) blur(8px)",
            boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)",
          }}
        >
          <button
            className="hover:text-emerald-400"
            onClick={() => scrollTo("home")}
          >
            Home
          </button>
          <button
            className="hover:text-emerald-400"
            onClick={() => scrollTo("about")}
          >
            About me
          </button>
          <button
            className="hover:text-emerald-400"
            onClick={() => scrollTo("skills")}
          >
            Skills
          </button>
          <button
            className="hover:text-emerald-400"
            onClick={() => scrollTo("projects")}
          >
            Projects
          </button>
          <button
            className="hover:text-emerald-400"
            onClick={() => scrollTo("contactme")}
          >
            Contact me
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

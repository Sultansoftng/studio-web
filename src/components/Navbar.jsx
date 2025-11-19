import React from "react";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const links = ["Home", "Services", "Studio Gallery", "Bookings", "About", "Contact"];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="text-gray-800 hover:text-red-600 font-medium transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile menu button (optional) */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

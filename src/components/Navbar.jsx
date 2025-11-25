import React, { useState } from "react";
import logo from "../assets/logoo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Services", "Studio Gallery", "Bookings", "About", "Contact"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Links */}
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

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              // Close icon
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            {links.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="text-gray-800 hover:text-red-600 font-medium transition"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import logo from "../assets/logoo.png"; 
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const links = ["Home", "Services", "Studio Gallery", "Bookings", "About", "Contact"];

  return (
    <footer className="bg-white text-red-600 py-12">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12" />

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-7">
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
              className="hover:text-red-600 transition font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a href="#" className="hover:text-red-600 hover:bg-red-500  rounded-xl border-2 p-2 transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-red-600 hover:bg-red-500  rounded-xl border-2 p-2 transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="hover:text-red-600 hover:bg-red-500 rounded-xl border-2 p-2 transition">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-2xl font-bold mt-6">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

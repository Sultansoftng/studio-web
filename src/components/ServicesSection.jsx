import React from "react";
import { FaHeadphones, FaVideo, FaPhotoVideo, FaCalendarAlt } from "react-icons/fa";
import section2 from "../assets/section2.png";

const ServicesSection = () => {
  const cards = [
    {
      icon: <FaHeadphones className="text-4xl transition-colors duration-300 group-hover:text-white" />,
      title: "Podcast Studio",
      desc: "Professional setup with high-quality Microphones and Soundproofing.",
    },
    {
      icon: <FaVideo className="text-4xl transition-colors duration-300 group-hover:text-white" />,
      title: "Video Production",
      desc: "Perfects space for promo, ads and content creation.",
    },
    {
      icon: <FaPhotoVideo className="text-4xl transition-colors duration-300 group-hover:text-white" />,
      title: "Commercial Shoots",
      desc: "A sleek environment for brand ad product commercials",
    },
    {
      icon: <FaCalendarAlt className="text-4xl transition-colors duration-300 group-hover:text-white" />,
      title: "Event/Custom Projects",
      desc: "Flexible setup for workshops, interviews and more.",
    },
  ];

  return (
    <section className="bg-gray-300 py-16">
      <img 
        src={section2} 
        alt="services" 
        className="mx-8 mb-8 rounded-sm max-w-[calc(100%-4rem)]" 
      />

      <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group bg-white rounded-md shadow-md p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-red-600 hover:text-white cursor-pointer"
          >
            <div className="mb-4 text-red-500">{card.icon}</div>
            
            <h3 className="text-xl font-bold text-black group-hover:text-white text-center">
              {card.title}
            </h3>
            
            <p className="font-medium text-sm text-center text-gray-700 group-hover:text-white">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
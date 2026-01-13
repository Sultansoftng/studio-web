import React from "react";
import heroImage from "../assets/hero.jpg"; 

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
          Your Creative Space for Podcast, Videos and Commercials
        </h1>
        
         <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Book a Session
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
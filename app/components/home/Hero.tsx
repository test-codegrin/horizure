"use client";

import React from "react";
import Plasma from "./Plasma";

function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Plasma 
          color="#4000ff" 
          speed={1} 
          direction="forward" 
          opacity={0.5} 
          scale={2} 
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
                       bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 
                       bg-clip-text text-transparent">
          INSPIRE YOUR VISION, SHAPE THE
          <br className="hidden sm:block" />
          NEXT ERA OF INNOVATION.
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
          Crafting Digital Masterpieces for a Limitless Tomorrow.
        </p>
      </div>
    </div>
  );
}

export default Hero;

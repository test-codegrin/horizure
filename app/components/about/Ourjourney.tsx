"use client";

import React from "react";
import Image from "next/image";

export default function Ourjourney() {
  return (
    <section className="relative w-full bg-black text-white py-20 overflow-hidden">
         {/* ---- BACKGROUND IMAGE ---- */}
      <div className="absolute inset-0 ">
        <Image
          src="/aboutus/bg.png"   
          alt="Journey Background"
          fill
          priority
          className="object-cover object-center"  
        />
      </div>


      {/* ---- CONTENT ---- */}
      <div className="relative z-10 text-center mx-4 sm:mx-10 md:mx-20 lg:mx-auto max-w-6xl py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 leading-snug">
          Our Journey{" "}
          <span className="text-[#0ea5e9]">
            Through the Digital Evolution
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Horizure started in 2015 with a simple vision to help businesses thrive in the digital world.
          What began as a small team of creative minds and tech enthusiasts has grown into a trusted
          digital solutions company, serving clients across industries. Over the years, we’ve embraced
          new technologies, expanded our expertise, and delivered innovative projects that make a real
          impact. Today, Horizure is driven by creativity, innovation, and customer-first values — proud
          of our journey and excited for what's next.
        </p>
      </div>
    </section>
  );
}

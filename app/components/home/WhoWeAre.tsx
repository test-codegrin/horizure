"use client";

import Image from "next/image";
import React from "react";

function WhoWeAre() {
  return (
    <section className="w-full bg-black text-white py-24 flex justify-center">
      <div
        className="
          w-full 
          mx-4 
          sm:mx-6
          md:mx-12
          lg:mx-36
          xl:mx-48
          2xl:mx-60
        "
      >
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-light mt-3 leading-snug">
            <span className="text-white">Grand Origins:</span>{" "}
            <span className="text-sky-400">
              Revealing Our Spirit, Shaping Tomorrows with Mastery.
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[65%_35%] grid-cols-1 w-full">

          {/* LEFT SIDE IMAGE */}
          <div className="relative w-full h-[26rem] rounded-l-lg overflow-hidden shadow-xl">
            <Image
              src="/homePage/WhoWeAre.webp"
              alt="Who We Are"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-105 will-change-transform"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="relative bg-gradient-to-b from-[#121212] via-[#0d0d0d] to-transparent p-10 rounded-r-lg shadow-xl space-y-6 overflow-hidden">

            {/* Highlight gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h3 className="text-xl font-light text-white leading-relaxed">
                Empowering Progress:
                <br /> Our Story, Your Journey, Shared Excellence.
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Embark on a journey through our narrative, where innovation meets purpose.
                We dedicate ourselves to creating meaningful experiences that move ideas forward.
              </p>

              <p className="text-gray-300 leading-relaxed">
                From humble beginnings to impactful milestones, our story reflects a
                commitment to innovation, collaboration, and shared growth.
              </p>

              {/* Button */}
              <button className="mt-4 border border-gray-500 hover:border-sky-400 hover:text-sky-400 px-6 py-2 rounded-md transition-all flex items-center space-x-2 w-fit text-sm">
                <span>Who We Are</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default React.memo(WhoWeAre);

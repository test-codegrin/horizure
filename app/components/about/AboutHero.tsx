"use client";

import Image from "next/image";
import React from "react";

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center mt-25">

      {/* Background glow (static, no animation) */}
      <div className="absolute right-0 top-0 w-[650px] h-[650px] bg-[#1e2737] rounded-full blur-[140px] opacity-60"></div>

      {/* Main content */}
      <div className="relative mx-4 sm:mx-10 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-60 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center h-full">

          {/* LEFT TEXT */}
          <div className="text-white space-y-6 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
              Learn More About Us,
              <br />
              <span className="text-[#0ea5e9] font-bold">
                Understand Us Better
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et
              dolor sit morbi odio id. Aliquam ultricies tortor ac.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end h-full pl-2">
            <Image
              src="/aboutus/hero_phone_img.png"
              alt="Phone + Message"
              width={650}
              height={650}
              priority     //  prevents layout shift & improves performance
              className="relative z-20 w-[400px] sm:w-[400px] lg:w-[700px] xl:w-[700px] self-center"
            />

            {/* subtle static circle  */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[300px] h-[300px] bg-[#262626] opacity-30 rounded-full blur-[30px]"></div>
          </div>

        </div>
      </div>

      {/* FLOATING SHAPES  */}
    {/* floating star */}
      <div className="hidden sm:block absolute left-[32%] top-[16%] text-blue-400 text-5xl float-1">★</div>

      {/* Blue bouncing ball(circle) left side*/}
      <div className="animate-down-up-bounce hidden sm:block absolute left-20 top-[35%] w-12 h-12 bg-gradient-to-b from-[#68d1ff] to-[#007edb] 
        rounded-full "></div>
        {/* shadow below the left ball */}
        <div className="hidden sm:block   shadow-bounce w-[140px] h-[18px]  absolute left-10 lg:top-[63%] md:top-[77%] bg-white/40 rounded-full blur-[15px]"></div>

      {/* blue dot on the screen floating */}
      <div className="hidden sm:block absolute left-[24%] top-[55%] w-3 h-3 bg-[#1db3ff] rounded-full float-3"></div>

        {/* Blue bouncing ball(circle) right side*/}
      <div className="animate-down-up-bounce hidden sm:block absolute right-32 top-[20%] w-12 h-12 bg-gradient-to-b from-[#68d1ff] to-[#007edb] 
        rounded-full "></div>
        {/* shadow below the right ball */}
        <div className="hidden sm:block  shadow-bounce w-[140px] h-[18px]  absolute right-19 lg:top-[48%] md:top-[62%] bg-white/40 rounded-full blur-[15px]"></div>

      {/* floating star */}
      <div className="hidden sm:block absolute right-12 bottom-30 text-blue-400 text-5xl float-2">★</div>

    </section>
  );
}

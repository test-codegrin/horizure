"use client";

import Image from "next/image";
import React from "react";

export default function ContactUs() {
  return (
    <section className="w-full bg-black text-white py-20 sm:py-28 relative overflow-hidden mt-10 lg:mt-25 lg:px-15">

      {/* ---- BLUE BACKGROUND CIRCLE ---- */}
      <div className="
  hidden lg:block 
  absolute top-1/2 right-[32%] -translate-y-1/2 
  w-[520px] h-[520px] bg-[#0ea5e9] rounded-full opacity-90
"></div>

      {/* ---- BOTTOM VECTOR UNDER FORM ---- */}
      <Image
        src="/contactus/Vector.png"
        alt="Form Shadow"
        width={200}
        height={200}
        className="
        hidden lg:block 
          absolute 
          right-[25%] 
          bottom-[40px] 
          opacity-50 pointer-events-none
          
        "
      />

      {/* ================== GRID ================== */}
      <div className="
        grid grid-cols-1 lg:grid-cols-2 
        items-start gap-16 lg:gap-20 
        mx-6 sm:mx-10 md:mx-16 lg:mx-32 xl:mx-48 
        relative z-10
      ">

        {/* LEFT SIDE TEXT */}
        <div>

          {/* Cube Vector */}
          <Image
            src="/contactus/box.png"
            alt="Cube Icon"
            width={75}
            height={75}
            className="mb-6 w-[55px] sm:w-[70px] md:w-[80px] lg:w-[90px]"
          />

          <p className="text-sm sm:text-base text-gray-300 mb-3">
            Project stuck on “loading...”? <br />
            Let’s speed things up and get you running at full power.
          </p>

          <h2 className="
            font-bold leading-tight mb-6
            text-4xl sm:text-5xl md:text-6xl
          ">
            WE’RE JUST <br />
            A MESSAGE <br />
            AWAY!
          </h2>

          <p className="text-gray-300 max-w-md text-sm sm:text-base leading-relaxed">
            Let's take your business to the next level together. Reach out to us for 
            service inquiries, collaboration ideas, or guidance on upcoming projects.
          </p>
        </div>

        {/* RIGHT — GLASS FORM */}
        <div className="relative flex justify-end ">

          <div className="
            relative p-6 sm:p-8 md:p-10 
            rounded-2xl 
            bg-white/10 
            backdrop-blur-[18px] 
            border border-white/20 
            shadow-[0_0_60px_rgba(0,0,0,0.6)]
            w-full max-w-2md sm:max-w-2lg
          ">

            {/* Shine */}
            <div className="
              absolute top-0 left-0 w-full h-[80px] sm:h-[120px]
              bg-white/20 opacity-10 
              rounded-t-2xl blur-[40px]
            "></div>

            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Form</h3>

            <p className="text-gray-400 text-sm sm:text-base mb-6">
              Fill out the form below, and our team will get back to you promptly.
              Let's connect and create solutions together.
            </p>

            {/* FORM START */}
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-white/20 border border-white/30 px-4 py-3 rounded-md
                focus:outline-none focus:border-blue-400 placeholder-gray-300"
              />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white/20 border border-white/30 px-4 py-3 rounded-md
                focus:outline-none focus:border-blue-400 placeholder-gray-300"
              />

              {/* Phone */}
              <div className="flex gap-3 flex-col sm:flex-row">
                <select className="
                  w-full sm:w-[90px] 
                  bg-white/20 border border-white/30 px-4 py-3 rounded-md
                ">
                  <option>+91</option>
                </select>

                <input
                  type="text"
                  placeholder="Enter your contact number"
                  className="flex-1 bg-white/20 border border-white/30 px-4 py-3 rounded-md 
                  focus:outline-none focus:border-blue-400 placeholder-gray-300"
                />
              </div>

              {/* Service dropdown */}
              <select className="w-full bg-white/20 border border-white/30 px-4 py-3 rounded-md">
                <option>Select</option>
              </select>

              {/* Message */}
              <textarea
                rows={4}
                placeholder="Enter your message here"
                className="w-full bg-white/20 border border-white/30 px-4 py-3 rounded-md
                focus:outline-none focus:border-blue-400 placeholder-gray-300"
              />

              {/* Submit Button */}
              <button className="
                bg-gradient-to-r from-sky-500 to-blue-600 
                hover:from-sky-400 hover:to-blue-500
                text-white px-6 py-3 rounded-md shadow-md 
                w-full sm:w-auto
                transition flex items-center justify-center gap-2
              ">
                Submit →
              </button>

            </form>

          </div>
        </div>
      </div>

    </section>
  );
}

"use client";
import Image from "next/image";
import React from "react";

function ContactForm() {
  return (
    <section className="relative w-full bg-black mb-10 text-white overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

          {/* LEFT — FORM */}
          <div className="border border-white/20 p-10 rounded-md">

            {/* Heading */}
            <h3 className="text-2xl font-normal leading-snug mb-8">
              Your Vision, Our Mission: <br />
              Let's Shape Success Together.
            </h3>

            {/* FORM */}
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-[#2b2b2b] border border-[#3a3a3a] rounded-md text-sm outline-none"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 bg-[#2b2b2b] border border-[#3a3a3a] rounded-md text-sm outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 bg-[#2b2b2b] border border-[#3a3a3a] rounded-md text-sm outline-none"
              />

              <textarea
                rows={4}
                placeholder="Describe Your Requirement"
                className="w-full p-3 bg-[#2b2b2b] border border-[#3a3a3a] rounded-md text-sm outline-none resize-none"
              />

              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-gray-200 transition"
              >
                Submit →
              </button>
            </form>
          </div>

          {/* RIGHT — Illustration (optimized) */}
          <div className="flex justify-center lg:justify-end">

            {/* FIXED ASPECT RATIO WRAPPER → prevents layout jump */}
            <div className="relative w-full max-w-[450px] aspect-square">
              <Image
                src="/homePage/searching.webp"
                alt="Illustration"
                fill
                className="object-contain"
                loading="lazy"
                sizes="(max-width: 1024px) 300px, 450px"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(ContactForm);

"use client";

import Image from "next/image";
import React from "react";

export default function Mission() {
  return (
    <section className="w-full bg-black text-white lg:py-20 lg:pl-1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mx-4   sm:mx-10 md:mx-12 lg:mx-32 xl:mx-48 2xl:mx-60">

        {/* LEFT TEXT */}
        <div>
          {/* Mission */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
              Our <span className="text-[#0ea5e9]">Mission :</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Our mission is to enable businesses to unlock growth through modern digital
              solutions. By blending creativity with advanced technology, we design experiences
              that engage, inspire, and deliver results. We are committed to helping our clients
              stay ahead in a fast-changing digital world while shaping the future of interaction.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
              Our <span className="text-[#0ea5e9]">Vision :</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We envision a world where businesses connect with their audiences through
              meaningful, intuitive, and powerful digital experiences. By blending design and
              technology, we aim to lead the transformation of the frontend industry and create
              solutions that leave a lasting impact.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE  */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-fit">


            {/* Box Image */}
            <Image
              src="/aboutus/purple_boxes.png"  // <-- your boxes image
              alt="Cubes"
              width={505}
              height={500}
              className="object-contain"  
            />

          </div>
        </div>

      </div>
    </section>
  );
}

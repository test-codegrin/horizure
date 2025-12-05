"use client";

import Image from "next/image";
import { feedbackData } from "@/app/components/constant/Data"

export default function Feedback() {
  return (
    <section className="w-full bg-black text-white py-24 lg:px-12 ">
      {/* ---- HEADER ---- */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
          Real Feedback From Customers <br />
          <span className="text-[#0ea5e9]">Who Trust Our IT Solutions</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mt-4">
          Our mission is to create powerful digital products that fuel our
          client’s success. Discover what our satisfied customers have to say
          about partnering with us.
        </p>
      </div>

      {/* ---- GRID CONTAINER ---- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 sm:mx-10 md:mx-12 lg:mx-32 xl:mx-48">
        {/* ---- CARD COMPONENT ---- */}
        {feedbackData.map((item, index) => (
          <div
            key={index}
            className="border border-white/10 p-8 rounded-lg bg-[#0b0b0b]/40 backdrop-blur-sm"
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Profile + Button */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              {/* Profile */}
              <div className="flex items-center gap-3">
                <Image
                  src={item.avatar}
                  width={40}
                  height={40}
                  alt={item.name}
                  className="rounded-full border border-white/20"
                />
                <div>
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="text-gray-400 text-xs">{item.role}</p>
                </div>
              </div>

              {/* Button */}
              <button
                className="text-sm border border-white/20 px-4 py-2 rounded-md 
                            hover:bg-white/10 transition flex items-center justify-center gap-1 
                            w-full sm:w-auto"
              >
                Open Website →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



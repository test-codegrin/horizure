// "use client";
import React from "react";

//Two Arrays for the Services Names 
const topItems = [
  "Graphic Design",
  "Custom Software Development",
  "JS Development",
  "Ecommerce Development",
  "Blockchain Development",
];

const bottomItems = [
  "UI/UX Design",
  "WordPress Development",
  "CMS Development",
  "Mobile App Development",
];

const allItems = [...topItems, ...bottomItems]; // <- MERGED FOR TABLET VIEW


// Diamond card
const Diamond: React.FC<{ text: string }> = ({ text }) => (
  <div
    className="
      relative flex items-center justify-center
      transition-all duration-300
      hover:scale-105
    "
  >
    {/* Outer dashed border */}
    <div
      className="
        absolute 
        w-[130px] h-[130px]
        sm:w-[125px] sm:h-[125px]
        md:w-[150px] md:h-[150px]
        lg:w-[170px] lg:h-[170px]

        border-[2.5px] border-dashed border-white/40
        rounded-xl rotate-45

        transition-all duration-300

        /* GLOW EFFECT ON HOVER */
        group-hover:border-sky-400
        hover:border-sky-400                /* make dashed border glow */
        hover:shadow-[0_0_22px_8px_rgba(0,200,255,0.55)]
        hover:border-opacity-90
      "
    ></div>

    {/* Inner card */}
    <div
      className="
        w-[110px] h-[110px]
        sm:w-[105px] sm:h-[105px]
        md:w-[130px] md:h-[130px]
        lg:w-[140px] lg:h-[140px]
        rounded-xl
        bg-gradient-to-br from-[#1b1b1b] to-[#0b0b0b]
        shadow-[0px_20px_80px_rgba(0,0,0,0.8)]
        flex items-center justify-center
        relative rotate-45

        transition-all duration-300
        hover:shadow-[0_0_30px_10px_rgba(0,200,255,0.5)]
        hover:bg-gradient-to-br hover:from-[#272727] hover:to-[#0f0f0f]
      "
    >
      {/* Soft inner gloss */}
      <div
        className="
          absolute inset-0 rounded-xl 
          bg-white/5 opacity-20
          transition-all duration-300
          hover:bg-white/10
        "
      ></div>

      <p className="text-white font-light text-sm sm:text-base text-center px-2 rotate-315 transition-all duration-300">
        {text}
      </p>
    </div>
  </div>
);

// arrow grid (24 x 24)
const ArrowDownRight = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    className="text-sky-400"
  >
    <path
      d="M6 6 L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 18 L18 18 L18 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    className="text-sky-400"
  >
    <path
      d="M6 18 L18 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 6 L18 6 L18 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function Services() {
  return (
    <section className="w-full bg-black text-white py-14 flex justify-center">
      <div className="w-full mx-4 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-light mt-3">
            Services <span className="text-sky-400">We Provide</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>

        
        {/* DESKTOP VIEW (LG+) ORIGINAL DESIGN  */}
      
        <div className="hidden lg:block">
          {/* TOP ROW */}
          <div className="grid grid-cols-5 gap-x-10 justify-items-center">
            {topItems.map((t, i) => (
              <Diamond key={i} text={t} />
            ))}
          </div>

          {/* ARROWS */}
          <div className="pointer-events-none relative w-full h-24 mt-4">
            <div className="absolute left-[13%] -top-5">
              <ArrowDownRight />
            </div>
            <div className="absolute left-84 -top-5">
              <ArrowUpRight />
            </div>
            <div className="absolute left-120 -top-5">
              <ArrowDownRight />
            </div>
            <div className="absolute left-158 -top-5">
              <ArrowUpRight />
            </div>
            <div className="absolute left-192 -top-5">
              <ArrowDownRight />
            </div>
            <div className="absolute left-230 -top-5">
              <ArrowUpRight />
            </div>
            <div className="absolute left-265 -top-5">
              <ArrowDownRight />
            </div>
            <div className="absolute left-305 -top-5">
              <ArrowUpRight />
            </div>
          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-4 lg:mx-32 relative -top-25 justify-items-center mt-4">
            {bottomItems.map((t, i) => (
              <Diamond key={i} text={t} />
            ))}
          </div>
        </div>

        {/* TABLET VIEW (md) — MERGED GRID, EXACTLY 3 PER ROW */}

        <div className="hidden md:grid lg:hidden grid-cols-3 gap-y-26 gap-6 justify-items-center">
          {allItems.map((t, i) => (
            <Diamond key={i} text={t} />
          ))}
        </div>

        {/* MOBILE VIEW (sm & below) */}

        <div className="md:hidden grid grid-cols-2 px-8">
          {/* LEFT COLUMN (5 boxes) */}
          <div className="flex flex-col gap-y-20">
            {topItems.map((t, i) => (
              <Diamond key={i} text={t} />
            ))}
          </div>

          {/* RIGHT COLUMN (4 boxes, shifted down) */}
          <div className="flex flex-col gap-y-20 mt-24 ">{/* <-- margin-top for zigzag */}
            {" "}
            
            {bottomItems.map((t, i) => (
              <Diamond key={i} text={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

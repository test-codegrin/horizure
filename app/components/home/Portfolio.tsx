"use client";
import Image from "next/image";

export default function Portfolio() {
  // Images Array 
  const images = [
    "/homePage/p1.png",
    "/homePage/p2.png",
    "/homePage/p3.png",
    "/homePage/p4.png",
    "/homePage/p5.png",
    "/homePage/p6.png",
  ];

  return (
    <section className="w-full bg-black text-white py-24 flex justify-center ">
      <div
        className="
          w-full
          mx-6        /* Mobile */
          sm:mx-6     /* Small screens */
          md:mx-12    /* Tablets */
          lg:mx-36    /* Laptops */
          xl:mx-48    /* Desktops */
          2xl:mx-60   /* Large screens */
        "
      >

        {/* Title Section */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-light mt-3 mx-4">
            Our <span className="text-sky-400">completed projects</span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto px-4">
            Amet minim dolore non proident ullamco nisi sit aliqua esse do
            amet elit. Velit officia consequat irure enim velit dolore.
          </p>
        </div>

        {/* SLIDER 1 — Right -> Left  Start*/}
        <div className="relative w-full mb-2">

          <div className="overflow-hidden w-full">
            <div className="flex gap-4 animate-slide-left whitespace-nowrap">
              {[...images, ...images].map((src, i) => (
                <div key={i} className="w-[350px] h-[220px] relative flex-shrink-0">
                  <Image
                    src={src}
                    alt={`Portfolio ${i}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Overlapping Button */}
          <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 z-[5]">
            <button className="border bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-6 py-3 rounded-md shadow-xl text-sm flex items-center space-x-2">
              <span>View All Projects</span>
              <span className="text-lg">→</span>
            </button>
          </div>

        </div>
        {/* SLIDER 1 — Right -> Left End*/}

        {/* SLIDER 2 — Left -> Right Start*/}
        <div className="overflow-hidden w-full mt-6">
          <div className="flex gap-4 animate-slide-right whitespace-nowrap">
            {[...images, ...images].map((src, i) => (
              <div key={i} className="w-[350px] h-[220px] relative flex-shrink-0">
                <Image
                  src={src}
                  alt={`Portfolio ${i}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        {/* SLIDER 2 — Left -> Right End*/}

      </div>
    </section>
  );
}

"use client";

import { Link, Router } from "lucide-react";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
// Images (imported once – no re-render cost)
const images = [
  "/homePage/p1.webp",
  "/homePage/p2.webp",
  "/homePage/p3.webp",
  "/homePage/p4.webp",
  "/homePage/p5.webp",
  "/homePage/p6.webp",
];

// Duplicate images once (not inside component)
const sliderImages = [...images, ...images];

/* 
   Hook to Detect When Slider is In View
   */
function useInView() {
  const ref = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    const el = ref.current;
    if (!el) return; // ← prevents classList errors

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // extra safety checks
        const node = ref.current;
        if (!node) return;

        if (entry.isIntersecting) {
          node.classList.add("in-view");
        } else {
          node.classList.remove("in-view");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      const node = ref.current;
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  return ref;
}

function Portfolio() {
  const sliderRef = useInView(); // attach observer
  const sliderRef2 = useInView(); // 2nd slider

  const router = useRouter();

  return (
    <section className="w-full bg-black text-white py-24 flex justify-center">
      <div
        className="
          w-full
          mx-6 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60
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
            Amet minim dolore non proident ullamco nisi sit aliqua esse do amet elit.
            Velit officia consequat irure enim velit dolore.
          </p>
        </div>

        {/* SLIDER 1 - Right to Left */}
        <div className="relative w-full mb-2 slider-wrapper" ref={sliderRef}>
          <div className="overflow-hidden w-full">
            <div className="flex gap-4 animate-slide-left whitespace-nowrap">
              {sliderImages.map((src, i) => (
                <div
                  key={`s1-${i}`}
                  className="w-[350px] h-[220px] relative flex-shrink-0"
                >
                  <Image
                    src={src}
                    alt={`Portfolio-${i}`}
                    fill
                    className="object-cover rounded-lg"
                    loading="lazy"
                    sizes="350px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
<div className="absolute left-1/2 -bottom-10 -translate-x-1/2 z-[5]">
      <button
        onClick={() => router.push("/portfolio")}
        className="border bg-gradient-to-r from-sky-500 to-blue-600 
        hover:from-sky-400 hover:to-blue-500 text-white px-6 py-3 
        rounded-md shadow-xl text-sm flex items-center space-x-2"
      >
        <span>View All Projects</span>
        <span className="text-lg">→</span>
      </button>
    </div>
        </div>

        {/* SLIDER 2 - Left to Right */}
        <div className="overflow-hidden w-full mt-6 slider-wrapper" ref={sliderRef2}>
          <div className="flex gap-4 animate-slide-right whitespace-nowrap">
            {sliderImages.map((src, i) => (
              <div
                key={`s2-${i}`}
                className="w-[350px] h-[220px] relative flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`Portfolio-${i}`}
                  fill
                  className="object-cover rounded-lg"
                  loading="lazy"
                  sizes="350px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Portfolio);

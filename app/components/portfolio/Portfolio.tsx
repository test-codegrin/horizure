"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);

    // Smooth scroll when expanding
    if (!expanded) {
      setTimeout(() => {
        const el = document.getElementById("portfolio-details");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  };

  return (
    <section className="w-full bg-black text-white pb-24 mt-25">
      {/* ================= HEADER ================= */}
      <div className="text-center pt-16 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Our <span className="text-[#0ea5e9]">Innovation Gallery</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
          A showcase of code, creativity, and cutting-edge builds that push
          boundaries.
        </p>
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="max-w-[1460px] mx-auto mt-16 px-4 sm:px-6">
        <div className="relative rounded-2xl border border-white/20 overflow-hidden">
          {/* MAIN HERO IMAGE */}
          <Image
            src="/portfolio/codegrin.png"
            alt="Portfolio Showcase"
            width={2000}
            height={1000}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* TITLE + TAGS */}
        <div className="mt-10 px-2">
          <a
            href="https://www.codegrin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold mb-4 inline-block hover:text-[#0ea5e9] transition"
          >
            <u> Codegrin Technology</u>
          </a>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm border rounded-full border-white/20">
              E-commerce
            </span>
            <span className="px-4 py-2 text-sm border rounded-full border-white/20">
              Web Design & Development
            </span>
            <span className="px-4 py-2 text-sm border rounded-full border-white/20">
              Web Design & Development
            </span>
          </div>
        </div>

        {/* ========== SHOW MORE / SHOW LESS BUTTON BELOW IMAGE ========== */}
        <div className="flex justify-end mt-6 px-2">
          <button
            onClick={toggleExpand}
            className="flex items-center gap-3 text-gray-300 hover:text-white transition"
          >
            {expanded ? "Show Less" : "Show More"}

            <div
              className="w-10 h-10 flex items-center justify-center 
              rounded-full bg-gradient-to-b from-[#0ea5e9] to-[#066a75]"
            >
              <svg
                className={`w-4 h-4 text-white transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* ================= EXPANDABLE SECTION ================= */}
      <div
        id="portfolio-details"
        className={`transition-all duration-500 overflow-hidden ${
          expanded ? "max-h-[3500px] opacity-100 mt-14" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-8xl mx-auto lg:px-60 md:px-10 px-4">
          {/* MAIN CONTENT BOX */}
          <div className="bg-[#0c0c0c] border border-white/20 rounded-xl p-8 space-y-10">
            {/* PROJECT DESCRIPTION */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Project Description
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A dynamic e-commerce platform that revolutionized online
                shopping for fashion enthusiasts. The website showcases the
                latest trends, personalized recommendations, and seamless
                checkout options.
              </p>
            </div>

            {/* TECHNOLOGIES USED */}
            <div className="border border-white/10 rounded-xl p-6 lg:flex md:flex ">
              <h4 className="font-medium mt-1 lg:mr-5 md:mr-5">
                Technologies Used
              </h4>
              <div className="flex items-center lg:gap-8 md:gap-8 text-2xl">
                <span>⚛️ </span>
                <span>🧩</span>
                <span>💻</span>
                <span>📦</span>
              </div>
            </div>

            {/* TEAM MEMBERS */}
            <div className="border border-white/10 rounded-xl p-6 space-y-6">
              <h4 className="font-medium">Team Members</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Member 1 */}
                <div className="border border-white/20 rounded-xl p-4">
                  <p className="text-sm font-medium mb-3">Web Developers</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/homePage/teammember1.webp"
                      alt="John"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm">John Smith</p>
                      <p className="text-xs text-gray-400">Emily Johnson</p>
                    </div>
                  </div>
                </div>

                {/* Member 2 */}
                <div className="border border-white/20 rounded-xl p-4">
                  <p className="text-sm font-medium mb-3">UI/UX Designer</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/homePage/teammember1.webp"
                      alt="Jessica"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm">Jessica Lee</p>
                    </div>
                  </div>
                </div>

                {/* Member 3 */}
                <div className="border border-white/20 rounded-xl p-4">
                  <p className="text-sm font-medium mb-3">Project Manager</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/homePage/teammember1.webp"
                      alt="Michael"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm">Michael Williams</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* METHODS USED */}
            <div className="border border-white/10 rounded-xl p-6">
              <h4 className="font-medium mb-4">Methods Used</h4>

              <div className="flex flex-wrap gap-4">
                <div className="border border-white/20 rounded-full px-6 py-2 text-sm">
                  Agile Development
                </div>
                <div className="border border-white/20 rounded-full px-6 py-2 text-sm">
                  User Testing
                </div>
                <div className="border border-white/20 rounded-full px-6 py-2 text-sm">
                  A/B Testing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import React from "react";

export default function BlogPage() {
  return (
    <section className="w-full bg-black text-white mt-25">
      
      {/* ------------------ BLOG HEADER ------------------ */}
      <div className="text-center py-16 px-6">
        <p className="text-gray-400 text-sm tracking-wide uppercase">Blogs</p>

        <h2 className="text-3xl sm:text-4xl font-semibold mt-2">
          Our <span className="text-[#0ea5e9]">Knowledge Hub</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      {/* ------------------ HERO IMAGE WITH HEADING ------------------ */}
      <div className="relative w-full h-[300px] sm:h-[420px] md:h-[500px] lg:h-[580px] overflow-hidden">
        <Image
          src="/blog/blog.png"  // <-- replace with your image
          alt="AI Blog Banner"
          fill
          className="object-cover opacity-80"
        />

        <div className="absolute inset-0 flex items-end justify-center bg-black/40  text-center sm:px-6 md:px-12">
          <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-light max-w-6xl leading-snug mb-15 ">
            “The Rise of Artificial Intelligence: Shaping Tomorrow, Today”
          </h1>
        </div>
      </div>

      {/* ------------------ BLOG CONTENT ------------------ */}
      <div className="px-6 sm:px-6 md:px-12 lg:px-36 xl:px-60 py-20 space-y-14">

        {/* INTRODUCTION */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Introduction</h3>
          <p className="text-gray-300 leading-relaxed">
            Artificial Intelligence (AI) has emerged as a transformative force in the healthcare
            industry, reshaping patient care, diagnostics, and research. In this blog post, we explore
            the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to
            enhancing patient outcomes.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* SECTION: AI */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Artificial Intelligence (AI)</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and
            healthcare is no exception. The integration of AI in healthcare is ushering in a new era
            of medical practice, where machines complement the capabilities of healthcare
            professionals, ultimately improving patient outcomes and the efficiency of the healthcare
            system. In this blog post, we will delve into the diverse applications of AI in healthcare,
            from diagnostic imaging to personalized treatment plans, and address the ethical
            considerations surrounding this revolutionary technology.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and
            healthcare is no exception. The integration of AI in healthcare is ushering in a new era
            of medical practice, where machines complement the capabilities of healthcare
            professionals, ultimately improving patient outcomes and the efficiency of the healthcare
            system. In this blog post, we will delve into the diverse applications of AI in healthcare,
            from diagnostic imaging to personalized treatment plans, and address the ethical
            considerations surrounding this revolutionary technology.
          </p>
        </div>

        <hr className="border-white/10" />

        {/* SECTION: Predictive Analytics */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Predictive Analytics and Disease Prevention</h3>
          <p className="text-gray-300 leading-relaxed">
            One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI
            algorithms have demonstrated remarkable proficiency in interpreting medical images such
            as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be
            overlooked by the human eye. This is particularly valuable in early disease detection. For
            instance, AI can aid radiologists in detecting minute irregularities in mammograms or
            identifying critical findings in chest X-rays, potentially indicative of life-threatening
            conditions.
          </p>
        </div>

      </div>
    </section>
  );
}

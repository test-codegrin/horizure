"use client";

import Image from "next/image";
import React from "react";
import { blogData } from "@/app/components/constant/Data";

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


      {/* ================== LOOP ALL BLOGS =================== */}
      {blogData.map((blog, i) => (
        <div key={i} className="mb-24">

          {/* ------------------ BLOG HERO ------------------ */}
          <div className="relative w-full h-[300px] sm:h-[420px] md:h-[500px] lg:h-[580px] overflow-hidden">
            <Image
              src={blog.heroImage}
              alt={blog.heroTitle}
              fill
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 flex items-end justify-center bg-black/40 text-center sm:px-6 md:px-12">
              <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-light max-w-6xl leading-snug mb-15">
                “{blog.heroTitle}”
              </h1>
            </div>
          </div>


          {/* ------------------ BLOG CONTENT ------------------ */}
          <div className="px-6 sm:px-6 md:px-12 lg:px-36 xl:px-60 py-20 space-y-14">

            {blog.sections.map((sec, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-3">{sec.heading}</h3>

                <p className="text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                  {sec.content}
                </p>

                {sec.content2 && (
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {sec.content2}
                  </p>
                )}

                {index !== blog.sections.length - 1 && (
                  <hr className="border-white/10 my-10" />
                )}
              </div>
            ))}

          </div>

          {/* Divider between blogs */}
          {i !== blogData.length - 1 && (
            <hr className="border-white/10 mb-20" />
          )}
        </div>
      ))}
    </section>
  );
}

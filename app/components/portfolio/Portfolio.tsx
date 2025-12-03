"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/app/components/constant/Data";

export default function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));

    if (expandedIndex !== index) {
      setTimeout(() => {
        const el = document.getElementById(`portfolio-details-${index}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  };

  return (
    <section className="w-full bg-black text-white pb-24 mt-25">
      {/* Page Header */}
      <div className="text-center pt-16 px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Our <span className="text-[#0ea5e9]">Innovation Gallery</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
          A showcase of code, creativity, and cutting-edge builds.
        </p>
      </div>

      {/* Loop all Projects */}
      {portfolioData.map((project, index) => (
        <div key={index} className="max-w-[1460px] mx-auto mt-16 md:px-12 px-4 sm:px-6">
          {/* Hero Image */}
          <div className="relative rounded-2xl border border-white/20 overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={2000}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Title + Tags */}
          <div className="mt-10 px-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold mb-4 inline-block hover:text-[#0ea5e9] transition"
            >
              <u>{project.title}</u>
            </a>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm border rounded-full border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Expand Button */}
          <div className="flex justify-end mt-6 px-2">
            <button
              onClick={() => toggleExpand(index)}
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              {expandedIndex === index ? "Show Less" : "Show More"}

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-[#0ea5e9] to-[#066a75]">
                <svg
                  className={`w-4 h-4 text-white transition-transform ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
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

          {/* Expanded Section */}
          <div
            id={`portfolio-details-${index}`}
            className={`transition-all duration-500 overflow-hidden ${
              expandedIndex === index
                ? "max-h-[3500px] opacity-100 mt-14"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="max-w-[1460px] mx-auto px-4 sm:px-6">
              <div className="bg-[#0c0c0c] border border-white/20 rounded-xl p-8 space-y-10">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Project Description
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="border border-white/10 rounded-xl p-6 lg:flex md:flex">
                  <h4 className="font-medium mt-1 lg:mr-5 md:mr-5">
                    Technologies Used
                  </h4>
                  <div className="flex items-center lg:gap-8 md:gap-8 text-2xl">
                    {project.technologies.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div className="border border-white/10 rounded-xl p-6 space-y-6">
                  <h4 className="font-medium">Team Members</h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {project.team.map((member, i) => (
                      <div
                        key={i}
                        className="border border-white/20 rounded-xl p-4"
                      >
                        <p className="text-sm font-medium mb-3">
                          {member.role}
                        </p>

                        {member.members.map((person, pIndex) => (
                          <div className="flex items-center gap-3" key={pIndex}>
                            <Image
                              src={person.image}
                              alt={person.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <p className="text-sm">{person.name}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methods */}
                <div className="border border-white/10 rounded-xl p-6">
                  <h4 className="font-medium mb-4">Methods Used</h4>
                  <div className="flex flex-wrap gap-4">
                    {project.methods.map((method, i) => (
                      <div
                        key={i}
                        className="border border-white/20 rounded-full px-6 py-2 text-sm"
                      >
                        {method}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

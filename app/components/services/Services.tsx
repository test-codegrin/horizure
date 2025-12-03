"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/app/components/constant/Data";
import { JSX } from "react";
// Lucide Icons
import {
  User,
  Layers,
  Brush,
  PenSquare,
  Smartphone,
  Code,
  Settings,
  Workflow,
} from "lucide-react";

// ICON MAP
const iconMap: Record<string, JSX.Element> = {
  ux: <User className="w-6 h-6 text-blue-400" />,
  workflow: <Workflow className="w-6 h-6 text-blue-400" />,
  layers: <Layers className="w-6 h-6 text-blue-400" />,
  brush: <Brush className="w-6 h-6 text-blue-400" />,
  pen: <PenSquare className="w-6 h-6 text-blue-400" />,
  phone: <Smartphone className="w-6 h-6 text-blue-400" />,
  code: <Code className="w-6 h-6 text-blue-400" />,
  settings: <Settings className="w-6 h-6 text-blue-400" />,
};

export default function Services() {
  return (
    <section className="relative w-full bg-black text-white py-24 md:px-12 lg:px-60 px-4 lg:px-40 mt-5 ">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold mb-4">Our <span className="text-[#0ea5e9]">Services</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our complete range of digital services.
        </p>
      </div>

      {/* ORIGINAL STRUCTURE RESTORED */}
      <div className="space-y-20">
        {/** CATEGORY BLOCKS */}
        {[
          "User Experience (UX) Design",
          "User Interface (UI) Design",
          "Branding and Identity",
          "Web Development",
          "Mobile App Development",
          "Custom Software Development",
        ].map((category, i) => {
          const filtered = servicesData.filter(s => s.category === category);

          return (
            <div key={i} className="space-y-8">
              {/* CATEGORY TITLE */}
              <h3 className="text-2xl font-semibold border-l-4 border-blue-500 pl-4">
                {category}
              </h3>

              {/* SERVICE ITEMS (OLD STYLE) */}
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                {filtered.map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${service.slug}`}
                    className="group flex gap-4 p-6 bg-[#0B0D13] rounded-xl border border-[#1A1D24] 
                               hover:border-blue-500/40 transition duration-300"
                  >
                    {/* ICON */}
                    <div className="flex-shrink-0 mt-1">
                      {iconMap[service.icon]}
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4 className="text-lg font-medium group-hover:text-blue-400 transition">
                        {service.title}
                      </h4>

                      {/* CTA */}
                      <div className="mt-3 text-blue-400 text-sm flex items-center gap-1 opacity-70 group-hover:opacity-100">
                        Learn More →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

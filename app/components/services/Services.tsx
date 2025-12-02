"use client";

import React from "react";
import {
  User,
  Workflow,
  Layers,
  Brush,
  PenSquare,
  Smartphone,
  Code,
  Settings
} from "lucide-react";

/* ICON MAP FOR QUICK MAPPING */
const iconMap = {
  ux: User,
  workflow: Workflow,
  layers: Layers,
  brush: Brush,
  pen: PenSquare,
  phone: Smartphone,
  code: Code,
  settings: Settings,
} as const satisfies Record<string, React.ComponentType<any>>;

/* 
    DYNAMIC SERVICE DATA WITH ICON KEYS
 */
const servicesData = [
  {
    title: "User Experience (UX) Design",
    items: [
      { icon: "ux", text: "User Research and Persona Development" },
      { icon: "workflow", text: "Information Architecture and Wireframing" },
      { icon: "layers", text: "Interactive Prototyping and User Testing" },
      { icon: "brush", text: "UI Design and Visual Branding" },
    ],
  },
  {
    title: "User Interface (UI) Design",
    items: [
      { icon: "brush", text: "Intuitive and Visually Appealing Interface Design" },
      { icon: "pen", text: "Custom Iconography and Illustration" },
      { icon: "layers", text: "Typography and Color Palette Selection" },
      { icon: "workflow", text: "Responsive Design for Various Devices" },
    ],
  },
  {
    title: "Branding and Identity",
    items: [
      { icon: "brush", text: "Logo Design and Visual Identity Development" },
      { icon: "workflow", text: "Brand Strategy and Positioning" },
      { icon: "layers", text: "Brand Guidelines and Style Guides" },
      { icon: "pen", text: "Marketing Collateral Design" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { icon: "code", text: "Front-End Development (HTML, CSS, JavaScript)" },
      { icon: "code", text: "Back-End Development (PHP, Python, Ruby)" },
      { icon: "layers", text: "CMS Development (WordPress, Drupal)" },
      { icon: "workflow", text: "E-Commerce Development (Magento, Shopify)" },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      { icon: "phone", text: "Native iOS and Android App Development" },
      { icon: "phone", text: "Cross-Platform Apps (React Native, Flutter)" },
      { icon: "layers", text: "App Prototyping and UI/UX Design Integration" },
      { icon: "settings", text: "App Testing, Deployment, and Maintenance" },
    ],
  },
  {
    title: "Custom Software Development",
    items: [
      { icon: "settings", text: "Enterprise Software Development" },
      { icon: "code", text: "Custom Web Application Development" },
      { icon: "workflow", text: "Third-Party API Integration" },
      { icon: "layers", text: "Legacy System Modernization & Migration" },
    ],
  },
];

/* ==========================================================
    SERVICES PAGE
========================================================== */
export default function Services() {
  return (
    <section className="w-full bg-black text-white pb-28 pt-16 mt-25">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
          End-to-End Technology Solutions
        </h2>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-1">
          Your <span className="text-[#0ea5e9]">Technology</span>, 
          Our Expertise, Our Capabilities
        </h2>

        <div className="mt-6 inline-flex items-center gap-3 bg-[#0c0c0c] border border-white/20 rounded-full px-6 py-2">
          <span className="text-sm text-gray-300">Our services include:</span>
          <span className="w-3 h-3 bg-[#0ea5e9] rounded-full"></span>
        </div>
      </div>

      {/* ================= SERVICE SECTIONS ================= */}
      <div className="max-w-8xl mx-auto  lg:px-60 md:px-12   px-4 space-y-20 ">

        {servicesData.map((section, i) => (
          <div key={i}>
            {/* SECTION TITLE */}
            <h3 className="text-2xl sm:text-xl font-semibold mb-6 text-gray-300">
              {section.title}
            </h3>

            {/* GRID ITEMS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item, idx) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap]; // Get icon
                return (
                  <div
                    key={idx}
                    className="
                      bg-[#0c0c0c] border border-white/10
                      p-6 rounded-lg flex flex-col items-start
                      hover:border-[#0ea5e9]/40 hover:shadow-[0_0_20px_#0ea5e9]/20 
                      transition
                    "
                  >
                    {/* ICON */}
                    <div className="w-14 h-14 mb-4 flex items-center justify-center">
                      <IconComponent className="text-[#0ea5e9] w-8 h-8" />
                    </div>

                    {/* TEXT */}
                    <p className="text-gray-300 text-md leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

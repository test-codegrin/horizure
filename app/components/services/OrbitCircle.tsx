"use client";

import React from "react";
import Link from "next/link";

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

const iconMap: Record<string, any> = {
  ux: User,
  workflow: Workflow,
  layers: Layers,
  brush: Brush,
  pen: PenSquare,
  phone: Smartphone,
  code: Code,
  settings: Settings,
};

const OUTER_DOTS = 8;
const INNER_DOTS = 5;

export default function OrbitCircle({ iconName }: { iconName: string }) {
  const Icon = iconMap[iconName] ?? Layers;

  return (
    <div className="flex justify-center w-full">
      
      {/* RESPONSIVE SCALE WRAPPER */}
      <div
        className="
          origin-center
          scale-[0.55]       /* MOBILE */
          sm:scale-[0.7]     /* TABLET */
          md:scale-[0.85]    /* BIG TABLET */
          lg:scale-100       /* DESKTOP FULL SIZE */
        "
      >
        {/* ORIGINAL SIZE (unchanged) */}
        <div className="relative w-[480px] h-[480px]">

          {/* OUTER RING + DOTS */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30" />

            {Array.from({ length: OUTER_DOTS }).map((_, i) => {
              const angle = (i / OUTER_DOTS) * 2 * Math.PI;
              const radius = 50;

              return (
                <div
                  key={`outer-${i}`}
                  className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-600 shadow-md"
                  style={{
                    top: `calc(50% - ${radius}% * sin(${angle}))`,
                    left: `calc(50% - ${radius}% * cos(${angle}))`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              );
            })}
          </div>

          {/* INNER RING + DOTS */}
          <div className="absolute inset-16 animate-spin-reverse">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30" />

            {Array.from({ length: INNER_DOTS }).map((_, i) => {
              const angle = (i / INNER_DOTS) * 2 * Math.PI;
              const radius = 50;

              return (
                <div
                  key={`inner-${i}`}
                  className="absolute w-9 h-9 rounded-full bg-gradient-to-br from-blue-300 to-blue-600 shadow-md"
                  style={{
                    top: `calc(50% - ${radius}% * sin(${angle}))`,
                    left: `calc(50% - ${radius}% * cos(${angle}))`,
                    transform: `translate(-50%, -50%)`,
                  }}
                />
              );
            })}
          </div>

          {/* CENTER ICON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/services"
              className="
                w-20 h-20 bg-[#0d0f14] rounded-xl 
                border border-blue-500/30 shadow-lg 
                flex items-center justify-center 
                hover:scale-110 transition-transform
              "
            >
              <Icon size={40} className="text-blue-400" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}

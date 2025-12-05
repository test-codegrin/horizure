"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add class to hide scrollbar visually and via webkit
    document.body.classList.add("hide-scrollbar");

    // main timer for loading (same 3700ms you used)
    const t = setTimeout(() => {
      setIsDone(true);

      // Wait for fade-out duration (700ms) before removing the class so scrollbar doesn't return mid-fade
      const restore = setTimeout(() => {
        document.body.classList.remove("hide-scrollbar");
      }, 700);

      // cleanup for the restore timeout
      return () => clearTimeout(restore);
    }, 3700);

    return () => {
      clearTimeout(t);
      // safety: ensure class removed if component unmounts
      document.body.classList.remove("hide-scrollbar");
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`
        fixed inset-0 bg-black z-[9999]
        flex flex-col items-center justify-center
        transition-opacity duration-700 
        ${isDone ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* Cube Animation */}
      <div className="relative w-[250px] h-[250px]">
        <Cube id="c0" />
        <Cube id="c1" />
        <Cube id="c2" />
        <Cube id="c3" />
        <Cube id="c4" />
        <Cube id="c5" />
        <Cube id="c6" />
        <Cube id="c7" />
        <Cube id="c8" />
      </div>

      {/* Typewriter */}
      <p className="mt-6 text-lg sm:text-xl text-gray-300 mt-10">
        <span className="typewriter">
          Debugging reality <span className="text-[#0ea5e9]">… one moment</span>
        </span>
      </p>

      <style jsx global>{`
        /* Hide scrollbar when body has this class */
        .hide-scrollbar {
          overflow: hidden !important;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .cube {
          position: absolute;
          width: 120px !important;
          height: 120px !important;
          top: 65px;   /* centered */
          left: 65px;  /* centered */
          display: block !important;
          background-image: url(/contactus/box.png);
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          will-change: transform;
          animation: fullFlow 3.5s ease-in-out forwards;
        }

        @keyframes fullFlow {
          0% {
            transform: translate(0px, 0px);
          }
          20% {
            transform: translate(var(--x2), var(--y2));
          }
          40% {
            transform: translate(var(--x3), var(--y3));
          }
          60% {
            transform: translate(var(--x4), var(--y4));
          }
          80% {
            transform: translate(var(--x3), var(--y3));
          }
          90% {
            transform: translate(var(--x2), var(--y2));
          }
          100% {
            transform: translate(0px, 0px);
          }
        }

        /* SAME POSITIONS — UNCHANGED */
        #c4 {
          --x2: 0px;
          --y2: 0px;
          --x3: 0px;
          --y3: 0px;
          --x4: 0px;
          --y4: 0px;
        }
        #c1 {
          --x2: -40px;
          --y2: -40px;
          --x3: -40px;
          --y3: -40px;
          --x4: -40px;
          --y4: -40px;
        }
        #c0 {
          --x2: -40px;
          --y2: -40px;
          --x3: -40px;
          --y3: -70px;
          --x4: -40px;
          --y4: -70px;
        }
        #c2 {
          --x2: -40px;
          --y2: -40px;
          --x3: -40px;
          --y3: -10px;
          --x4: -40px;
          --y4: -10px;
        }

        #c7 {
          --x2: 40px;
          --y2: 40px;
          --x3: 40px;
          --y3: 40px;
          --x4: 40px;
          --y4: 40px;
        }
        #c6 {
          --x2: 40px;
          --y2: 40px;
          --x3: 40px;
          --y3: 70px;
          --x4: 40px;
          --y4: 70px;
        }
        #c8 {
          --x2: 40px;
          --y2: 40px;
          --x3: 40px;
          --y3: 10px;
          --x4: 40px;
          --y4: 10px;
        }

        #c3 {
          --x2: 0px;
          --y2: 0px;
          --x3: 0px;
          --y3: 0px;
          --x4: -20px;
          --y4: 40px;
        }
        #c5 {
          --x2: 0px;
          --y2: 0px;
          --x3: 0px;
          --y3: 0px;
          --x4: 20px;
          --y4: -40px;
        }

        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #0ea5e9;
          animation: typing 1.5s steps(40), blink 0.7s step-end infinite;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
}

function Cube({ id }) {
  return <div id={id} className="cube" />;
}

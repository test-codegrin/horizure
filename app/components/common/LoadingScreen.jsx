"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false); 
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    
    setMounted(true);

    const t = setTimeout(() => {
      setIsDone(true);
    }, 1800);

    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null; 

  return (
    <div
      className={`
        fixed inset-0 bg-black z-[9999]
        flex flex-col items-center justify-center
        transition-opacity duration-800 ease-out
        ${isDone ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* Cube Icon */}
      <div className="animate-spin-cube">
        <Image
          src="/contactus/box.png"
          width={110}
          height={110}
          alt="Loading Cube"
        />
      </div>

      {/* Typewriter */}
      <p className="mt-6 text-lg sm:text-xl text-gray-300">
        <span className="typewriter">
          Debugging reality … one moment
        </span>
      </p>

      <style jsx>{`
        /* Cube spin */
        .animate-spin-cube {
          animation: cubeRotate 3s infinite linear;
        }
        @keyframes cubeRotate {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* Typewriter */
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #0ea5e9;
          animation: typing 1.3s steps(40), blink 0.7s step-end infinite;
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

"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false); //for hamburger menu (tablet and mobile)
  const [scrolled, setScrolled] = useState(false);//to blur navbar after scrooling
  const headerRef = useRef(null);//for referance of scrolling

  // Scroll listener for blur-on-scroll effect
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgCls = scrolled
    ? "bg-black/60 backdrop-blur-md shadow-md"
    : "bg-transparent";

  return (
    <nav
      ref={headerRef}
      className={`w-full ${bgCls} text-white fixed top-0 left-0 z-50 flex justify-center transform transition duration-500 ease-in-out`}
    >
      {/* Main Nav Container */}
      <div
        className="
          w-full py-3 flex justify-between items-center
          mx-4           /* Mobile */
          sm:mx-6        /* Small Screens */
          md:mx-12       /* Tablets */
          lg:mx-36       /* Laptops */
          xl:mx-48       /* Larger Desktops */
          2xl:mx-60      /* Extra Large screens */
        "
      >
        {/* Logo Start*/}
        <div className="flex items-start">
          <Image
            src="/homePage/Horizure 1.png"
            alt="Horizure Logo"
            width={230}
            height={110}
            className="object-contain"
            priority
          />
        </div>
        {/* Logo End*/}

        {/* Desktop Menu Start */}
        <ul className="hidden lg:flex space-x-8 text-sm tracking-wide">
          <li>
            <a
              href="#"
              className="text-blue-400 border-b border-blue-400 pb-1 transition"
            >
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition">
              CONTACT US
            </a>
          </li>
        </ul>
        {/* Desktop Menu End */}

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm px-5 py-2 rounded-md shadow-lg transition flex items-center space-x-1">
            <span>Discuss for your Projects</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-black/90 border-t border-gray-800 overflow-hidden transition-all duration-300 absolute top-full left-0 w-full ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-3 space-y-4">
          <a href="#" className="block text-blue-400">HOME</a>
          <a href="#" className="block hover:text-blue-400">ABOUT US</a>
          <a href="#" className="block hover:text-blue-400">PORTFOLIO</a>
          <a href="#" className="block hover:text-blue-400">SERVICES</a>
          <a href="#" className="block hover:text-blue-400">CONTACT US</a>

          {/* discuss for your projects buttons */}
          <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm px-5 py-2 rounded-md shadow-md transition flex justify-center items-center space-x-1">
            <span>Discuss for your Projects</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

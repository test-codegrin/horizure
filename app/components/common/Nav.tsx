"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

// ---- Memoized Link List (prevents whole nav re-render) ----
interface NavLinksProps {
  pathname: string;
}

const NavLinks = React.memo(function NavLinks({ pathname }: NavLinksProps) {
  const links = [
    { title: "HOME", href: "/" },
    { title: "SERVICES", href: "/services" },
    
    { title: "PORTFOLIO", href: "/portfolio" },
    { title: "BLOG", href: "/blog" },

    { title: "ABOUT US", href: "/about" },
    
    { title: "CONTACT US", href: "/contactus" },
  ];

  return (
    <ul className="hidden lg:flex space-x-8 text-sm tracking-wide">
      {links.map((item) => {
        const active = pathname === item.href;
        return (
          <li key={item.title}>
            <Link
              href={item.href}
              className={
                active
                  ? "text-blue-400 border-b border-blue-400 pb-1 transition"
                  : "hover:text-blue-400 transition"
              }
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
});

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="
        w-full fixed top-0 left-0 z-50 flex justify-center 
        backdrop-blur-md bg-black/20 
        supports-backdrop-blur:bg-black/30 
        transition-all duration-300
      "
    >
      <div
        className="
          w-full py-3 flex justify-between items-center
          mx-4 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-start">
          <Image
            src="/homePage/Horizure 1.png"
            alt="Horizure Logo"
            width={230}
            height={110}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <NavLinks pathname={pathname} />

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm px-5 py-2 rounded-md shadow-lg transition flex items-center space-x-1">
            <span>Discuss for your Projects</span>
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-black/95 border-t border-gray-800 overflow-hidden transition-[max-height] duration-300 absolute top-full left-0 w-full ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {/* Mobile Links */}
          <ul className="space-y-3">
            {["/","/services",  "/portfolio","/blog", "/about", "/contactus"].map(
              (href, index) => {
                const title =
                  ["HOME", "SERVICES", "PORTFOLIO","BLOGS", "ABOUT US", "CONTACT US"][
                    index
                  ];
                const active = pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={
                        active
                          ? "text-blue-400"
                          : "hover:text-blue-400 transition"
                      }
                    >
                      {title}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>

          {/* Mobile Button */}
          <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm px-5 py-2 rounded-md shadow-md transition flex justify-center items-center space-x-1">
            <span>Discuss for your Projects</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Nav);

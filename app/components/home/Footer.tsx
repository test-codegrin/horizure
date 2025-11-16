// "use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-10 border-t border-white/20">

      <div className="mx-6 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-16">

          {/* LOGO + SOCIAL */}
          <div className="col-span-2">
            <div className="mb-5">
              <Image
                src="/homePage/Horizure 1.png" 
                width={180}
                height={80}
                alt="Horizon Logo"
              />
            </div>

            <p className="text-sm tracking-wide mb-3">FOLLOW US</p>

            <div className="flex gap-10 text-2xl">
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-200 hover:scale-110"
              >
                𝕏
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-200 hover:scale-110"
              >
                𝕀
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-all duration-200 hover:scale-110"
              >
                𝐹
              </a>
            </div>
          </div>

          {/* PAGES */}
          <div>
            <h3 className="font-semibold mb-5 text-sm">Pages</h3>

            <ul className="space-y-2 text-sm text-gray-300">
              {["Home", "About Us", "Portfolio", "Service", "Contact Us"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-400 transition-all duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* OUR SERVICES */}
          <div>
            <h3 className="font-semibold mb-5 text-sm">Our Services</h3>

            <ul className="space-y-2 text-sm text-gray-300">
              {[
                "Graphic Design",
                "UI/UX Design",
                "Custom Software Development",
                "WordPress Development",
                "JS Development",
                "CMS Development",
                "Ecommerce Development",
                "Mobile App Development",
                "Blockchain Development",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-blue-400 transition-all duration-200 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* BLOGS */}
          <div>
            <h3 className="font-semibold mb-5 text-sm">Blogs</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Talia Taylor", "Talia Taylor", "Talia Taylor"].map((blog, idx) => (
                <li
                  key={idx}
                  className="hover:text-blue-400 transition-all duration-200 cursor-pointer"
                >
                  {blog}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFORMATION */}
          <div>
            <h3 className="font-semibold mb-5 text-sm">Contact Information</h3>

            <p className="text-sm text-gray-300 mb-2 hover:text-blue-400 transition duration-200">
              +91 96541 12345
            </p>
            <p className="text-sm text-gray-300 mb-2 hover:text-blue-400 transition duration-200">
              infogaugranth@gmail.com
            </p>
            <p className="text-sm text-gray-300 mb-5 hover:text-blue-400 transition duration-200">
              Street no. 30, Alap Road, Ahmedabad, India
            </p>

            {/* EMAIL INPUT BOX */}
            <div className="flex items-center bg-white text-black rounded-md overflow-hidden w-full max-w-xs">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-sm outline-none"
              />
              <button className="bg-gray-800 text-white px-4 py-2 text-sm hover:bg-gray-700 transition-all duration-200">
                →
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">

          <p className="hover:text-white transition-all duration-200 cursor-pointer">
            Company Name . ©2025 KINS All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-xs justify-center md:justify-end">
            {[
              "Company Profile",
              "Privacy policy",
              "Cancellation policy",
              "Terms of service",
              "Refund/Return Policy",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition-all duration-200"
              >
                {link}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}

// "use client";
import Image from "next/image";

export default function Articles() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">

      {/* Rings — show ONLY on lg+ */}
      <Image
        src="/homePage/articles-ring.png"
        width={220}
        height={220}
        alt="ring"
        className="hidden lg:block absolute top-0 left-52 opacity-80 pointer-events-none"
      />

      <Image
        src="/homePage/articles-ring.png"
        width={220}
        height={220}
        alt="ring"
        className="hidden lg:block absolute bottom-0 right-53 opacity-80 pointer-events-none"
      />

      {/* Main Container */}
      <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60">

        {/* Title Section */}
        <div className="text-center mb-10">
          <p className="text-gray-300 text-sm tracking-wide">Articles</p>

          <h2 className="text-4xl font-semibold mt-2">
            Written <span className="text-blue-400">Blogs</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor.
          </p>
        </div>

        {/* DESKTOP VIEW (LG+) — 3-COLUMN Layout */}
        

        <div className="hidden lg:grid lg:grid-cols-3 p-6 ">

          {/* COLUMN 1 — Gradient Top & Bottom Border*/}
          <div className="flex flex-col mt-40">
            <div
              className="
                relative shadow h-80 w-85
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:w-full before:h-[2px]
                before:bg-gradient-to-r before:from-transparent before:to-white
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:w-full after:h-[2px]
                after:bg-gradient-to-r after:from-transparent after:to-white
              "
            ></div>
          </div>

          {/* COLUMN 2 - Has 3 Rows*/}
          <div className="flex flex-col w-80 relative -left-30">
            {/* Comp1  for Border*/}
            <div
              className="
                relative shadow h-40
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:w-[2px] before:h-full
                before:bg-gradient-to-b before:from-transparent before:to-white
                after:content-[''] after:absolute after:top-0 after:right-0
                after:w-[2px] after:h-full
                after:bg-gradient-to-b after:from-transparent after:to-white
              "
            ></div>

            {/* Comp2 - Avatar Image*/}
            <div className="relative w-80 h-80 border-2 border-white ">
              <img
                src="./homePage/blog-Avatar.png"
                alt="avatar-img"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Comp3 for Border */}
            <div
              className="
                relative shadow h-40
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:w-[2px] before:h-full
                before:bg-gradient-to-b before:from-white before:to-transparent
                after:content-[''] after:absolute after:top-0 after:right-0
                after:w-[2px] after:h-full
                after:bg-gradient-to-b after:from-white after:to-transparent
              "
            ></div>
          </div>

          {/* COLUMN 3 — Article Content */}
          <div className="flex flex-col mt-40">
            <div
              className="
                relative shadow h-80 w-160 -left-65 p-6
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:w-full before:h-[2px]
                before:bg-gradient-to-l before:from-transparent before:to-white
                after:content-[''] after:absolute after:bottom-0 after:left-0
                after:w-full after:h-[2px]
                after:bg-gradient-to-l after:from-transparent after:to-white
              "
            >
              {/* Title */}
              <h2 className="text-2xl font-semibold mt-2">
                ”The Rise of Artificial Intelligence: Shaping Tomorrow, Today”
              </h2>

              <p className="mt-2 text-gray-300">
                Artificial Intelligence (AI) is no longer a futuristic dream it’s a living, evolving part of our daily reality. From voice assistants that understand our needs to algorithms predicting our choices, AI has seamlessly woven itself into every corner of modern life. While AI brings incredible innovation, it also raises questions about ethics, job shifts, and data privacy. The key lies in balancing progress with responsibility.
              </p>
              {/* Author and Position of Author */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p>taila tailor</p>
                  <p className="text-xs text-gray-400">
                    Digital Marketing Director @ Quantum
                  </p>
                </div>
                {/* Read More Button */}
                <button className="border border-gray-500 hover:border-sky-400 hover:text-sky-400 px-6 py-2 rounded-md transition-all flex items-center space-x-2 w-fit text-sm">Read More <span className="text-lg">→</span></button>
              </div>
            </div>
          </div>
        </div>


        {/* TABLET + MOBILE VIEW (md and below) ONLY IMAGE + CONTENT */}
        <div className="block lg:hidden">

          {/* Tablet: image left, text right */}
          {/* Mobile: stacked column */}
          <div className="grid grid-cols-1 md:grid-cols-2  mb-8">

            {/* Avatar Image Tablet & Mobile*/}
            <div className="w-full h-80 border-2 border-white">
              <img
                src="./homePage/blog-Avatar.png"
                alt="avatar-img"
                className="w-full h-full object-cover"
              />
            </div>

            {/*Article Content Tablet & Mobile*/}
            <div className="relative p-4 before:content-[''] before:absolute before:top-0 before:left-0
                            before:w-full before:h-[2px]
                            before:bg-gradient-to-l before:from-transparent before:to-white

                            after:content-[''] after:absolute after:bottom-0 after:left-0
                            after:w-full after:h-[2px]
                            after:bg-gradient-to-l after:from-transparent after:to-white">
              <h2 className="text-2xl font-semibold mt-2">
                ”The Rise of Artificial Intelligence: Shaping Tomorrow, Today”
              </h2>

              <p className="mt-2 text-gray-300">
                Artificial Intelligence (AI) is no longer a futuristic dream it’s a living, evolving part of our daily reality. From voice assistants that....
              </p>

              <div className="flex justify-between items-center mt-2">
                <div>
                  <p>taila tailor</p>
                  <p className="text-xs text-gray-400">
                    Digital Marketing Director @ Quantum
                  </p>
                </div>
                {/* Read More Button */}
                <button className="border border-gray-500 hover:border-sky-400 hover:text-sky-400 px-6 py-2 rounded-md transition-all flex items-center space-x-2 w-fit text-sm">Read More <span className="text-lg">→</span></button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

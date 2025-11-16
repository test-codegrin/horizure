"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    // WhoWeAre Section Start
    <section className="w-full bg-black text-white py-24 flex justify-center">

      {/* responsive fo all screen sizes*/}
      <div
        className="
          w-full 
          mx-4         /* mobile */
          sm:mx-6      /* small screens */
          md:mx-12     /* tablets */
          lg:mx-36     /* laptops */
          xl:mx-48     /* desktops */
          2xl:mx-60    /* large monitors */
        "
      >

        {/* Title Start*/}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-4xl font-light mt-3 leading-snug">
            <span className="text-white">Grand Origins:</span>{" "}
            <span className="text-sky-400">
              Revealing Our Spirit, Shaping Tomorrows with Mastery.
            </span>
          </h2>
        </div>
        {/* Title End*/}

        {/*WhoWeAre Main Content  Start*/}
        <div className="grid lg:grid-cols-[65%_35%] grid-cols-1 w-full">

          {/* LEFT PART (65%) Start*/}
          <div className="relative w-full h-[26rem] rounded-l-lg overflow-hidden shadow-xl">
            <Image
              src="/homePage/WhoWeAre.png"
              alt="Who We Are"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {/* LEFT PART (65%) End*/}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* RIGHT PART (35%) Start*/}
          <div className="relative bg-gradient-to-b from-[#121212] via-[#0d0d0d] to-transparent p-10 rounded-r-lg shadow-xl space-y-6">

            {/* Light overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 rounded-r-lg pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <h3 className="text-xl font-light text-white leading-relaxed">
                Empowering Progress:
                <br />Our Story, Your Journey, Shared Excellence.
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Embark on a journey through our narrative, where innovation meets purpose.
                We dedicate ourselves to creating meaningful experiences that move ideas forward.
              </p>

              <p className="text-gray-300 leading-relaxed">
                From humble beginnings to impactful milestones, our story reflects a commitment
                to innovation, collaboration, and shared growth.
              </p>

              {/* WhoWeAre button Start*/}
              <button className="mt-4 border border-gray-500 hover:border-sky-400 hover:text-sky-400 px-6 py-2 rounded-md transition-all flex items-center space-x-2 w-fit text-sm">
                <span>Who We Are</span>
                <span className="text-lg">→</span>
              </button>
              {/* WhoWeAre button End*/}
            </div>

          </div>
          {/* RIGHT PART (35%) End*/}

        </div>
        {/*WhoWeAre Main Content  */}
        

      </div>
    </section>
    //Whoweare end
  );
}

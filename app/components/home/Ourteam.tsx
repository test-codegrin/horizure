"use client";
import Image from "next/image";

export default function OurTeam() {
  //Array for the details of the team members
  const team = [
    {
      name: "Web Designer",
      img: "/homePage/teammember1.png",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      
      name: "Backend Developer",
      img: "/homePage/teammember1.png",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      name: "Backend Developer",
      img: "/homePage/teammember2.png",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      name: "Backend Developer",
      img: "/homePage/teammember2.png",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      name: "UI & UX Design",
      img: "/homePage/teammember2.png",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      name: "Graphic Design",
      img: "/homePage/teammember3.png",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-10 flex justify-center">
      <div
        className="
          w-full 
          mx-4 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60
        "
      >
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Teams
          </p>

          <h2 className="text-3xl md:text-4xl font-light mt-3 leading-snug">
            Our <span className="text-sky-400">team members</span>
          </h2>

          <p className="text-gray-400 mt-3 max-w-2xl mx-auto px-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 justify-items-center">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center text-center">

              {/* IMAGE — RESPONSIVE SIZES */}
              <div className="
                w-[110px] h-[150px]           /* mobile */
                sm:w-[130px] sm:h-[170px]     /* small screens */
                md:w-[150px] md:h-[190px]     /* tablets */
                lg:w-[160px] lg:h-[200px]     /* laptops+ */
                flex items-end justify-center
              ">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={180}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* NAME */}
              <h3 className="mt-4 text-sm md:text-base font-medium">
                {member.name}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 text-xs mt-2 leading-relaxed px-2">
                {member.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

import Image from "next/image";
import React from "react";

interface Review {
  name: string;
  company: string;
  img: string;
  text: string;
}

/* Review Card  */
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border border-white/20 rounded-lg p-5">
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={review.img}
          width={40}
          height={40}
          alt={review.name}
          className="rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-sm">{review.name}</p>
          <p className="text-xs text-gray-400">{review.company}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
    </div>
  );
}

/*  Main Component  */
export default function CustomerReview() {
  const reviews: Review[] = [
    {
      name: "Brooklyn Simmons",
      company: "Manam",
      img: "/homePage/Ellipse 1.png",
      text: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et."
    },
    {
      name: "Esther Howard",
      company: "Offmax",
      img: "/homePage/Ellipse 1.png",
      text: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit."
    },
    {
      name: "Arlene McCoy",
      company: "bloopixel",
      img: "/homePage/Ellipse 1.png",
      text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas gravida tempor."
    },
    {
      name: "Jane Cooper",
      company: "unpexel",
      img: "/homePage/Ellipse 1.png",
      text: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst."
    }
  ];

  return (
    <section className="relative bg-black w-full mb-10 text-white overflow-hidden">

      {/* Container */}
      <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60 space-y-16">

        {/* Heading */}
        <h2 className="text-3xl font-normal">
          Customer <span className="text-blue-400">Reviews</span>
        </h2>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

      </div>
    </section>
  );
}

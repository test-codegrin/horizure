"use client";

import Image from "next/image";
import React from "react";

interface Review {
  name: string;
  company: string;
  img: string;
  text: string;
}

/* Avatar Wrapper (prevents layout reflow) */
const Avatar = React.memo(({ src, alt }: { src: string; alt: string }) => (
  <div className="w-10 h-10 relative flex-shrink-0">
    <Image
      src={src}
      alt={alt}
      fill
      className="rounded-full object-cover"
      loading="lazy"
      sizes="40px"
    />
  </div>
));

/* Review Card — optimized, no blur, no repaint heavy styles */
const ReviewCard = React.memo(function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="
        rounded-lg p-5 
        bg-white/5 
        border border-white/10 
        shadow-[0_0_10px_rgba(0,0,0,0.2)]
        transition-transform
        hover:scale-[1.02]
        duration-300
      "
    >
      <div className="flex items-center gap-3 mb-4">
        <Avatar src={review.img} alt={review.name} />

        <div>
          <p className="font-semibold text-sm">{review.name}</p>
          <p className="text-xs text-gray-400">{review.company}</p>
        </div>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">
        {review.text}
      </p>
    </div>
  );
});

/* Main Component */
function CustomerReview() {
  const reviews: Review[] = [
    {
      name: "Brooklyn Simmons",
      company: "Manam",
      img: "/homePage/Ellipse-1.webp",
      text: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et.",
    },
    {
      name: "Esther Howard",
      company: "Offmax",
      img: "/homePage/Ellipse-1.webp",
      text: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
    },
    {
      name: "Arlene McCoy",
      company: "bloopixel",
      img: "/homePage/Ellipse-1.webp",
      text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas gravida tempor.",
    },
    {
      name: "Jane Cooper",
      company: "unpexel",
      img: "/homePage/Ellipse-1.webp",
      text: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst.",
    },
  ];

  return (
    <section className="relative bg-black w-full mb-10 text-white">

      <div className="mx-4 sm:mx-6 md:mx-12 lg:mx-36 xl:mx-48 2xl:mx-60 space-y-16">

        {/* Heading */}
        <h2 className="text-3xl font-normal">
          Customer <span className="text-blue-400">Reviews</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(CustomerReview);

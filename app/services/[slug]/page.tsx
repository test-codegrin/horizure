// app/services/[slug]/page.tsx
"use client";

import { servicesData } from "@/app/components/constant/Data";
import { useParams } from "next/navigation";
import { User } from "lucide-react";
import Nav from "@/app/components/common/Nav";
import Footer from "@/app/components/common/Footer";
import OrbitCircle from "@/app/components/services/OrbitCircle";


export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return <div className="text-white p-10">Service not found</div>;

  return (
    <>
    <Nav />
    <section className="max-w-8xl bg-black text-white md:px-20 
    flex flex-col lg:flex-row items-center lg:items-start lg:gap-60 gap-10
    lg:py-20 lg:ml-45 mt-25">

  {/* ORBIT CIRCLE — MOBILE FIRST */}
  <div className="flex justify-center w-full lg:w-auto">
    <OrbitCircle iconName={service.icon} />
  </div>

  {/* RIGHT CONTENT */}
  <div className="max-w-2xl mt-10 lg:mt-0 px-6 lg:px-0 text-center lg:text-left">
    <h1 className="text-3xl md:text-4xl font-semibold mb-6">
      {service.title}
    </h1>

    {service.description.map((para, i) => (
      <p key={i} className="text-gray-300 leading-relaxed mb-5">
        {para}
      </p>
    ))}
  </div>

</section>
    <Footer />
    </>
  );
}

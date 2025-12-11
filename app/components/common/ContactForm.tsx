"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

 
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessText, setShowSuccessText] = useState(false); 

  const GIF_DURATION = 2000; // ← duration of your success.gif in ms

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
    setPhone(value);
    setPhoneError(value.length !== 10 ? "Phone number must be exactly 10 digits." : "");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    

    // show GIF immediately
    setTimeout(() => {
      
      setIsSuccess(true);

      // Show text AFTER GIF completes
      setTimeout(() => {
        setShowSuccessText(true);
      }, GIF_DURATION);

    }, 100); // 👈 No delay for GIF, only small safety delay
  };

  return (
    <>
    

      {/* -----------------------------------
           SUCCESS VIEW (GIF then text)
      -------------------------------------- */}
      {isSuccess && (
        <div className="w-full h-[350px] flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-white to-blue-400 text-center">

          <Image
            src="/homePage/Success1.gif"
            alt="Success"
            unoptimized
            width={150}
            height={150}
          />

          {/* show text only after GIF finishes */}
          {showSuccessText && (
            <p className="text-white text-xl font-medium mt-6">
              Yay! We caught your details.
            </p>
          )}
        </div>
      )}

     
      {/* -----------------------------------
           FORM VIEW
      -------------------------------------- */}
      {!isSuccess && (
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <label className="text-sm">Full name*</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full bg-white/20 border border-white/30 px-4 py-3 rounded-md
            focus:outline-none focus:border-blue-400 placeholder-gray-300"
          />

          {/* Email */}
          <label className="text-sm">Email*</label>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full bg-white/20 border border-white/30 px-4 py-3 rounded-md
            focus:outline-none focus:border-blue-400 placeholder-gray-300"
          />

          {/* Phone */}
          <label className="text-sm">Phone Number*</label>
          <div className="flex gap-3 flex-col sm:flex-row">
            <select
              className="w-full sm:w-[140px] bg-black/20 border border-white/30 px-4 py-3 rounded-md text-white"
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (United States)</option>
              <option value="+44">+44 (United Kingdom)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+81">+81 (Japan)</option>
              <option value="+49">+49 (Germany)</option>
              <option value="+33">+33 (France)</option>
            </select>

            <div className="flex-1">
              <input
                type="text"
                inputMode="numeric"
                maxLength={10}
                value={phone}
                onInput={handlePhoneInput}
                placeholder="Enter your contact number"
                required
                className={`w-full bg-white/20 px-4 py-3 rounded-md
                focus:outline-none placeholder-gray-300
                border ${phoneError ? "border-red-500" : "border-white/30"}
              `}
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>
          </div>

          {/* Service */}
          <label className="text-sm">Select Service*</label>
          <select
            required
            className="w-full bg-black/20 border border-white/30 px-4 py-3 rounded-md text-white"
          >
            <option value="" disabled>
              Choose a service
            </option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Custom Software Development">Custom Software Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="WordPress Development">WordPress Development</option>
            <option value="CMS Development">CMS Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="JS Development">JS Development</option>
            <option value="Ecommerce Development">Ecommerce Development</option>
            <option value="Blockchain Development">Blockchain Development</option>
          </select>

          {/* Message */}
          <label className="text-sm">How we can help you*</label>
          <textarea
            rows={4}
            placeholder="Enter your message here"
            required
            className="w-full bg-white/20 border border-white/30 px-4 py-3 rounded-md focus:outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="bg-gradient-to-r from-sky-500 to-blue-600 
          hover:from-sky-400 hover:to-blue-500
          text-white px-6 py-3 rounded-md shadow-md w-full sm:w-auto transition"
          >
            Submit →
          </button>
        </form>
      )}
    </>
  );
}

"use client";
import { useState } from "react";

export default function ContactForm() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneInput = (e: React.FormEvent<HTMLInputElement>) => {
    const value = (e.currentTarget.value).replace(/\D/g, "").slice(0, 10);
    setPhone(value);
  
    if (value.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
    } else {
      setPhoneError("");
    }
  };

  //  BLOCK SUBMIT WHEN PHONE IS INVALID
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    if (phone.length !== 10) {
      e.preventDefault(); // stop form submit
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Submit allowed — you can add API call here
    console.log("Form Submitted!");
  };

  return (
    <>
      {/* FORM START */}
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
            className="w-full sm:w-[140px] bg-black/20 border border-white/30 px-4 py-3 rounded-md
              text-black dark:text-white"
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
                border ${
                  phoneError
                    ? "border-red-500 focus:border-red-500"
                    : "border-white/30 focus:border-blue-400"
                }`}
            />

            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>
        </div>

        {/* Select Service */}
        <label className="text-sm">Select Service*</label>
        <select
          required
          className="w-full bg-black/20 border border-white/30 px-4 py-3 rounded-md
          text-white focus:outline-none focus:border-blue-400"
        >
          <option value="" disabled selected>
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
          className="w-full bg-white/20 border border-white/30 px-4 py-3 rounded-md
          focus:outline-none focus:border-blue-400 placeholder-gray-300"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-sky-500 to-blue-600 
          hover:from-sky-400 hover:to-blue-500
          text-white px-6 py-3 rounded-md shadow-md 
          w-full sm:w-auto transition flex items-center justify-center gap-2"
        >
          Submit →
        </button>
      </form>
    </>
  );
}

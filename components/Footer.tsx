"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col self-end mt-20 mr-5 w-full max-w-3xl">
      {/* Logo */}
      <div className="flex flex-col ml-11 md:ml-44 min-h-[50px] w-12">
        <div className="flex overflow-hidden flex-col w-full min-h-[50px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd1ee5b61e6a107717de971039c551d17eb4be3e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
            className="object-contain w-full aspect-square"
            alt="Levada Logo"
          />
        </div>
      </div>

      {/* Links and Scroll Button */}
      <div className="flex flex-wrap gap-5 justify-between items-start mt-10 w-full leading-tight">
        <div className="flex gap-10 text-sm text-neutral-500">
          <Link 
            href="/contact-us" 
            className="whitespace-nowrap hover:text-violet-400 transition-colors"
          >
            Contact
          </Link>
          <Link 
            href="/privacy" 
            className="hover:text-violet-400 transition-colors"
          >
            Privacy & Cookie Policy
          </Link>
          <Link 
            href="/terms" 
            className="hover:text-violet-400 transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="self-stretch px-7 cursor-pointer py-4 mt-4 text-base font-medium bg-violet-400 rounded-[50px] text-stone-950 hover:bg-violet-500 transition-colors"
        >
          Scroll up ↑
        </button>
      </div>
    </div>
  );
}

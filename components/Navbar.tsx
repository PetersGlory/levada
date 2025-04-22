"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-7xl mx-auto px-5 md:px-20 py-8">
      {/* Logo */}
      <div className="flex flex-col my-auto">
        <Link href="/" className="flex overflow-hidden flex-col min-h-[51px] w-12">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/16e010cd79117647275e2eec0ec3616c0a4b5483?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
            className="object-contain w-full aspect-[0.98]"
            alt="Levada Logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex overflow-hidden relative gap-6 justify-center items-center py-4 px-8 text-xl tracking-normal leading-tight text-center bg-neutral-900 rounded-[35px] text-neutral-500">
        <Link
          href="/#what-we-are"
          className={`z-0 self-stretch my-auto hover:text-violet-400 transition-colors ${
            pathname === "/#what-we-are" ? "text-violet-400" : ""
          }`}
        >
          What We Are
        </Link>
        <Link
          href="/#for-clients"
          className={`z-0 self-stretch my-auto hover:text-violet-400 transition-colors ${
            pathname === "/#for-clients" ? "text-violet-400" : ""
          }`}
        >
          For Clients
        </Link>
        <Link
          href="/#for-talents"
          className={`z-0 self-stretch my-auto hover:text-violet-400 transition-colors ${
            pathname === "/#for-talents" ? "text-violet-400" : ""
          }`}
        >
          For Talents
        </Link>
        <Link
          href="/#testimonials"
          className={`z-0 self-stretch my-auto whitespace-nowrap hover:text-violet-400 transition-colors ${
            pathname === "/#testimonials" ? "text-violet-400" : ""
          }`}
        >
          Testimonials
        </Link>
        <div className="flex absolute inset-0 z-0 shrink-0 self-start border border-solid border-neutral-800 h-[58px] min-w-[240px] rounded-[35px]" />
      </div>

      {/* Get Started Button */}
      <Link
        href="/register"
        className="self-start mt-2.5 px-8 py-4 text-xl tracking-normal leading-tight text-center text-neutral-500 bg-violet-400 rounded-[35px] hover:bg-violet-500 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
}

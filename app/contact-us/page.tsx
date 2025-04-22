"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center px-5 md:px-20 py-24 w-full">
        <div className="flex flex-col justify-center items-center w-full max-w-7xl">
          <div className="flex flex-col items-center w-full max-w-2xl">
            <div className="flex gap-2 self-center text-lg tracking-normal leading-snug text-violet-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2191e19627b7f3f45706b831d867289ae2827225?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                className="object-contain shrink-0 aspect-square w-6"
                alt="Contact Us Icon"
              />
              <div className="grow shrink my-auto">CONTACT US</div>
            </div>
            <div className="mt-6 text-4xl md:text-5xl tracking-tighter leading-tight text-center text-stone-300">
              Get in Touch
            </div>
            <div className="mt-7 text-xl tracking-normal leading-7 text-center text-neutral-500">
              Have questions or need assistance? We're here to help you connect with Africa's finest talent.
            </div>
          </div>

          {/* Contact Form and Information */}
          <div className="flex flex-col md:flex-row gap-8 mt-16 w-full max-w-4xl">
            {/* Contact Information */}
            <div className="flex flex-col w-full md:w-1/2 gap-8">
              <div className="flex flex-col p-8 rounded-3xl border border-neutral-800">
                <div className="text-2xl tracking-tight leading-8 text-stone-300">
                  Contact Information
                </div>
                <div className="mt-4 text-lg tracking-normal leading-6 text-neutral-500">
                  <p>Email: info@levada.com</p>
                  <p className="mt-4">Phone: +1 (555) 123-4567</p>
                  <p className="mt-4">Address: 123 Tech Hub, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex flex-col p-8 rounded-3xl border border-neutral-800">
                <div className="text-2xl tracking-tight leading-8 text-stone-300">
                  Office Hours
                </div>
                <div className="mt-4 text-lg tracking-normal leading-6 text-neutral-500">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="mt-4">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="mt-4">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col w-full md:w-1/2">
              <form className="flex flex-col gap-6 p-8 rounded-3xl border border-neutral-800">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-lg text-stone-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full py-4 px-6 text-base bg-stone-950 rounded-[35px] text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-lg text-stone-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full py-4 px-6 text-base bg-stone-950 rounded-[35px] text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Your email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-lg text-stone-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full py-4 px-6 text-base bg-stone-950 rounded-[35px] text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Subject"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-lg text-stone-300">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full py-4 px-6 text-base bg-stone-950 rounded-[35px] text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 px-8 py-4 text-base font-medium bg-violet-400 rounded-[35px] text-stone-950 hover:bg-violet-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

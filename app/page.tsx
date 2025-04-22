"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col px-0.5">
      <div className="flex flex-col bg-white w-full">
        <div className="flex flex-col pt-5 pb-11 w-full bg-neutral-900 min-h-[1200px]">
          {/* Header */}
          <Navbar />

          {/* Hero Section */}
          <div className="mt-28 w-full max-w-7xl mx-auto px-5 md:px-20">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left Column - Main Content */}
              <div className="flex flex-col w-full md:w-3/4">
                <div className="flex flex-col mt-14 w-full">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Hero Image */}
                    <div className="w-full md:w-1/3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d7f97fe9d863cdf0ba02c585c39efa91c6cd4b7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7f97fe9d863cdf0ba02c585c39efa91c6cd4b7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7f97fe9d863cdf0ba02c585c39efa91c6cd4b7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7f97fe9d863cdf0ba02c585c39efa91c6cd4b7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7f97fe9d863cdf0ba02c585c39efa91c6cd4b7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7f97fe9d863cdf0ba02c585c39efa91c6cd4b7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7f97fe9d863cdf0ba02c585c39efa91c6cd4b7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d7f97fe9d863cdf0ba02c585c39efa91c6cd4b7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                        className="object-contain w-full aspect-[0.96]"
                        alt="Hero Image"
                      />
                    </div>

                    {/* Hero Text and Form */}
                    <div className="flex flex-col w-full md:w-2/3">
                      <div className="flex flex-col items-center">
                        <h1 className="text-4xl md:text-7xl tracking-tighter text-center leading-tight md:leading-[92px] text-stone-300">
                          Discover <br />
                          Your Potential
                        </h1>
                        <p className="mt-8 text-lg tracking-normal text-center text-neutral-500 max-w-md">
                          Talent meets boundless opportunities. As a dynamic platform 
                          connecting exceptional African talent with reputable 
                          organizations worldwide, Levada is your gateway to a thriving 
                          career and a global network of possibilities.
                        </p>
                        <div className="flex relative justify-center mt-8 w-full max-w-md">
                          <input
                            type="email"
                            placeholder="name@email.com"
                            className="w-full py-6 px-8 text-base bg-stone-950 rounded-[50px] text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                          />
                          <button className="absolute right-4 top-1/2 -translate-y-1/2 py-4 px-8 text-base font-medium bg-violet-400 rounded-[40px] text-stone-950 shadow-[0px_20px_35px_rgba(153,141,235,0.25)] hover:bg-violet-500 transition-colors">
                            Try Levada
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Content */}
                  <div className="flex flex-col md:flex-row gap-8 mt-16">
                    <div className="w-full md:w-1/2">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4686978958ee6de86977edf6539200ade3be83c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4686978958ee6de86977edf6539200ade3be83c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4686978958ee6de86977edf6539200ade3be83c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4686978958ee6de86977edf6539200ade3be83c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4686978958ee6de86977edf6539200ade3be83c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4686978958ee6de86977edf6539200ade3be83c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4686978958ee6de86977edf6539200ade3be83c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4686978958ee6de86977edf6539200ade3be83c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                        className="object-contain w-full aspect-[1.02]"
                        alt="Additional Content Image"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/05c65ae0f4d3a92d0f49bff626c67ac7298caf92?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/05c65ae0f4d3a92d0f49bff626c67ac7298caf92?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05c65ae0f4d3a92d0f49bff626c67ac7298caf92?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/05c65ae0f4d3a92d0f49bff626c67ac7298caf92?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/05c65ae0f4d3a92d0f49bff626c67ac7298caf92?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/05c65ae0f4d3a92d0f49bff626c67ac7298caf92?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/05c65ae0f4d3a92d0f49bff626c67ac7298caf92?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/05c65ae0f4d3a92d0f49bff626c67ac7298caf92?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                        className="object-contain w-full aspect-[1.7]"
                        alt="Additional Content Image 2"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Testimonials */}
              <div className="flex flex-col w-full md:w-1/4">
                <div className="flex flex-col text-xs leading-tight text-neutral-500">
                  <div className="relative w-full aspect-[0.922]">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30bb1eb16c8708f59ffd86c537709baad849a700?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30bb1eb16c8708f59ffd86c537709baad849a700?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30bb1eb16c8708f59ffd86c537709baad849a700?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30bb1eb16c8708f59ffd86c537709baad849a700?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30bb1eb16c8708f59ffd86c537709baad849a700?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30bb1eb16c8708f59ffd86c537709baad849a700?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30bb1eb16c8708f59ffd86c537709baad849a700?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30bb1eb16c8708f59ffd86c537709baad849a700?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                      className="object-cover absolute inset-0 size-full rounded-lg"
                      alt="Felicia Akerele"
                    />
                    <div className="absolute bottom-4 left-4 text-white">Felicia Akerele</div>
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8a3b8c3c75cb59f4767e2baef223c7228e55a34e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a3b8c3c75cb59f4767e2baef223c7228e55a34e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a3b8c3c75cb59f4767e2baef223c7228e55a34e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a3b8c3c75cb59f4767e2baef223c7228e55a34e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a3b8c3c75cb59f4767e2baef223c7228e55a34e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a3b8c3c75cb59f4767e2baef223c7228e55a34e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a3b8c3c75cb59f4767e2baef223c7228e55a34e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8a3b8c3c75cb59f4767e2baef223c7228e55a34e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                    className="object-contain w-full aspect-[1.15] mt-8 rounded-lg"
                    alt="Mark Gabriel"
                  />
                  <div className="text-center mt-4">Mark Gabriel</div>
                </div>
              </div>
            </div>
          </div>

          {/* Organizations Section */}
          <div className="flex flex-col justify-center items-center px-5 md:px-20 py-10 text-xl tracking-normal leading-tight text-center bg-neutral-900 text-neutral-500">
            <div className="flex overflow-hidden flex-col justify-center w-full max-w-7xl">
              <div className="self-center">Organizations hiring on Levada</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea9056c2f1689d29866dd5ef2af5ed2d87cd7af7?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                className="object-contain mt-8 w-full aspect-[12.82]"
              />
            </div>
          </div>

          {/* What We Do Section */}
          <div className="flex justify-center items-start px-5 md:px-20 lg:px-80 py-24 mt-8 bg-neutral-900">
            <div className="flex flex-col flex-1 shrink items-center w-full max-w-screen-xl basis-0">
              <div className="flex overflow-hidden flex-col items-center px-2.5 w-full">
                <div className="flex gap-2 w-full text-lg tracking-normal leading-snug text-violet-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3e79c1f40536b45d25a3a6597a7e312fffbe541?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                    className="object-contain shrink-0 aspect-square w-6"
                    alt="What We Do Icon"
                  />
                  <div className="grow shrink my-auto">WHAT DO WE DO?</div>
                </div>
                <div className="mt-6 text-4xl md:text-5xl tracking-tighter leading-tight text-center text-stone-300">
                  Global Impact, African Roots
                </div>
                <div className="self-stretch mt-5 text-xl tracking-normal leading-7 text-center text-neutral-500">
                  Levada connects reputable organizations with top verified talents from Africa. We are not 
                  just a platform; we are the architects of a movement, committed to showcasing and 
                  propelling African talent to new heights of recognition and success.
                </div>
                <div className="flex overflow-hidden flex-wrap gap-10 justify-center items-center mt-5 w-full max-w-xl text-base font-medium leading-tight text-stone-950">
                  <a href="/hire-talent" className="grow shrink self-stretch px-6 md:px-24 py-4 my-auto bg-violet-400 min-w-[240px] rounded-[50px] hover:bg-violet-500 transition-colors">
                    Hire Talent
                  </a>
                  <a href="/jobs" className="grow shrink self-stretch px-5 md:px-20 py-4 my-auto bg-violet-400 min-w-[240px] rounded-[50px] hover:bg-violet-500 transition-colors">
                    Current jobs
                  </a>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col justify-center items-center px-5 md:px-20 py-14 mt-6 w-full text-xl tracking-normal text-center">
                <div className="flex flex-col items-center px-5 pt-2 pb-0.5 w-full">
                  <div className="text-4xl md:text-5xl tracking-tighter leading-tight">
                    Discover Levada
                  </div>
                  <div className="self-stretch mt-8 leading-7 text-neutral-500">
                    We are on a journey of transforming the way African talent and global organizations 
                    interact. Delve into the transformative experience of recruiting African talent. 
                    Explore a world where possibilities are boundless, and success is just a connection away.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="flex flex-col items-center px-5 md:px-20 py-24 mt-8 w-full bg-stone-950">
            <div className="flex flex-col justify-center items-center w-full max-w-7xl">
              <div className="flex flex-col items-center w-full max-w-2xl">
                <div className="flex gap-2 w-full text-lg tracking-normal leading-snug text-violet-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9390d24f03835825a5bbfe4298bddc32db6411e2?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                    className="object-contain shrink-0 aspect-square w-6"
                    alt="How It Works Icon"
                  />
                  <div className="grow shrink my-auto">HOW IT WORKS</div>
                </div>
                <div className="self-stretch mt-6 text-4xl md:text-5xl tracking-tighter leading-tight text-center text-stone-300">
                  Ready to try Levada? Let's show you how to join our talent pool
                </div>
                <div className="self-stretch mt-6 text-xl tracking-normal leading-7 text-center text-neutral-500">
                  We are on a journey of transforming the way African talent and global organizations interact. 
                  Delve into the transformative experience of recruiting African talent. Explore a world where 
                  possibilities are boundless, and success is just a connection away.
                </div>
              </div>

              {/* Cards Section */}
              <div className="flex flex-wrap gap-8 items-start justify-center mt-16 w-full">
                {/* Card 1 */}
                <div className="flex relative flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                  <div className="flex flex-col p-8">
                    <div className="flex flex-col items-start rounded-3xl bg-neutral-900 bg-opacity-90">
                      <div className="flex gap-2 rounded-3xl bg-neutral-900">
                        <div className="self-start mt-44 text-xs font-medium tracking-tight leading-none text-white">
                          DevOps
                        </div>
                        <div className="flex flex-col p-5 rounded-3xl border border-white border-opacity-10">
                          <div className="text-lg tracking-tight leading-none text-violet-400">
                            Test of Skills [a] [b]
                          </div>
                          <div className="flex flex-col mt-5">
                            <div className="flex gap-2.5 items-start">
                              <div className="h-12 w-2 rounded-xl bg-violet-400" />
                              <div className="h-14 w-2 rounded-xl bg-violet-400" />
                              <div className="h-20 w-2 rounded-xl bg-violet-400" />
                              <div className="h-10 w-2 rounded-xl bg-violet-400" />
                              <div className="h-9 w-2 rounded-xl bg-violet-400" />
                              <div className="h-8 w-2 rounded-xl bg-violet-400" />
                            </div>
                            <div className="text-xs font-medium tracking-tight leading-none text-white">
                              Data Analyst
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="text-2xl tracking-tight leading-tight text-stone-300">
                        Pass the Aptitude Test
                      </div>
                      <div className="mt-4 text-lg tracking-normal leading-6 text-neutral-500">
                        You will take an aptitude test & also prove you can cut it in a real-world work setting.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                  <div className="flex flex-col p-8">
                    <div className="relative aspect-[2.492] rounded-3xl overflow-hidden">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd65ecf6dee09b6878842d56fa02aab2071598?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd65ecf6dee09b6878842d56fa02aab2071598?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd65ecf6dee09b6878842d56fa02aab2071598?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd65ecf6dee09b6878842d56fa02aab2071598?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd65ecf6dee09b6878842d56fa02aab2071598?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd65ecf6dee09b6878842d56fa02aab2071598?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd65ecf6dee09b6878842d56fa02aab2071598?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6cd65ecf6dee09b6878842d56fa02aab2071598?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                        className="object-cover w-full h-full"
                        alt="Interview Process"
                      />
                    </div>
                    <div className="mt-7">
                      <div className="text-2xl tracking-tight leading-tight text-stone-300">
                        Undergo Levada Interview
                      </div>
                      <div className="mt-4 text-lg tracking-normal leading-6 text-neutral-500">
                        Our team will interview you — where you get to wow us, then you get approved and verified.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex relative flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                  <div className="flex flex-col p-8">
                    <div className="text-2xl tracking-tight leading-tight text-stone-300">
                      Get Matched & Elevated
                    </div>
                    <div className="mt-4 text-lg tracking-normal leading-6 text-neutral-500">
                      Levada opens you to pool of jobs and get matched to a project of your choice. Start earning!
                    </div>
                    <div className="relative mt-8 h-48">
                      <div className="absolute inset-0 flex items-center justify-between">
                        <div className="flex flex-col gap-4">
                          <div className="w-1 h-24 bg-violet-400 rounded-full" />
                          <div className="w-1 h-20 bg-violet-400 rounded-full" />
                          <div className="w-1 h-28 bg-violet-400 rounded-full" />
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="w-1 h-32 bg-violet-400 rounded-full" />
                          <div className="w-1 h-24 bg-violet-400 rounded-full" />
                          <div className="w-1 h-28 bg-violet-400 rounded-full" />
                        </div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 bg-violet-400 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">$45</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Join Levada Section */}
          <div className="flex flex-col items-center px-5 md:px-20 py-24 mt-8 w-full bg-neutral-900">
            <div className="flex flex-col justify-center items-center w-full max-w-7xl">
              <div className="flex flex-col items-center w-full max-w-2xl">
                <div className="flex gap-2 self-center text-lg tracking-normal leading-snug text-violet-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/234304581748c6cccdad2577fec2829f8502ebbc?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                    className="object-contain shrink-0 aspect-square w-6"
                    alt="Levada Talent Icon"
                  />
                  <div className="grow shrink my-auto">LEVADA TALENT</div>
                </div>
                <div className="mt-7 text-center text-neutral-500">
                  We're on a journey to disrupt the traditional job-seeking process and explore new opportunities. 
                  Connect, collaborate, and create with top talent across Africa.
                </div>
                <div className="mt-9 text-4xl md:text-5xl tracking-tighter leading-tight text-center text-stone-300">
                  Why Join Levada?
                </div>
              </div>

              {/* Cards Section */}
              <div className="flex flex-wrap gap-8 justify-center items-center mt-16 w-full">
                {/* Card 1 */}
                <div className="flex relative flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                  <div className="flex flex-col items-center p-8">
                    <div className="flex justify-center w-24 h-24">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46d20284fb319329f1b822a68dc065f9273e0add?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                        className="object-contain w-full h-full"
                        alt="Effortless Connection"
                      />
                    </div>
                    <div className="mt-14 text-2xl tracking-tight leading-tight text-stone-300">
                      Effortless Connection
                    </div>
                    <div className="mt-14 text-lg tracking-normal leading-6 text-neutral-500">
                      Say goodbye to tedious job hunting. Levada streamlines the process, 
                      presenting you with tailored opportunities that match your expertise 
                      and career goals. Effortlessly connect with organizations actively 
                      seeking your unique talents.
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex relative flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                  <div className="flex flex-col items-center p-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcac8eea01b7edd57ebeb55a46ee361d6b2c5484?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                      className="object-contain w-24 h-24"
                      alt="Transparent and Fair"
                    />
                    <div className="mt-14 text-2xl tracking-tight leading-tight text-stone-300">
                      Transparent and Fair
                    </div>
                    <div className="mt-14 text-lg tracking-normal leading-6 text-neutral-500">
                      Experience transparency and fairness in every interaction. 
                      Levada values integrity, ensuring a platform where your talent 
                      is recognized and rewarded based on merit.
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex relative flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                  <div className="flex flex-col items-center p-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/31bd96aad42d34b02e0387dba072412acacb5eeb?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                      className="object-contain w-24 h-24"
                      alt="Verified and Approved Pool"
                    />
                    <div className="mt-14 text-2xl tracking-tight leading-tight text-stone-300">
                      Verified and Approved Pool
                    </div>
                    <div className="mt-14 text-lg tracking-normal leading-6 text-neutral-500">
                      Join a community of verified professionals. Levada ensures that 
                      organizations have access to a pool of top talents, and talents, 
                      in turn, connect with reputable and forward-thinking employers.
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="flex flex-col mt-16 w-full">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Career Growth Support */}
                  <div className="flex relative flex-col flex-1 min-w-[280px] rounded-3xl border border-neutral-800">
                    <div className="flex flex-col p-8">
                      <div className="text-2xl tracking-tight leading-8 text-stone-300">
                        Career Growth Support
                      </div>
                      <div className="mt-4 text-lg tracking-normal leading-6 text-neutral-500">
                        Levada is more than just a platform; it's your partner in career growth. 
                        Access resources, training, and mentorship opportunities to enhance your 
                        skills and navigate your career path with confidence.
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb3cae367d20c7dbe08a498f8603566fe08f2d5a?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                        className="object-contain mt-8 w-full max-w-xs"
                        alt="Career Growth"
                      />
                    </div>
                  </div>

                  {/* Collaborate in real-time */}
                  <div className="flex relative flex-col flex-1 min-w-[280px] rounded-3xl border border-neutral-800">
                    <div className="flex flex-col p-8">
                      <div className="text-2xl tracking-tight leading-8 text-stone-300">
                        Collaborate in real-time
                      </div>
                      <div className="mt-4 text-lg tracking-normal leading-6 text-neutral-500">
                        Boost your career by connecting with global top-tier organizations. 
                        Gain exposure to diverse industries and projects aligned with your 
                        skills and goals.
                      </div>
                      <div className="relative mt-8 h-48">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex gap-4">
                            <div className="w-20 h-20 bg-violet-400 rounded-full" />
                            <div className="w-20 h-20 bg-cyan-400 rounded-full" />
                            <div className="w-20 h-20 bg-violet-700 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-4 justify-center mt-8">
                  {[
                    { icon: "f264fe007236bfc4a8609cf06871a3df6d1817cd", text: "Product Designer" },
                    { icon: "582cc1bd92ada53793c46b68693653f35bfa6e20", text: "Data Analyst" },
                    { icon: "11687b31f720f0817289811820d441e6408a8c92", text: "Back & Front-end Engineer" },
                    { icon: "d2d444740c6d92866b7b1ec8f63aa0ed051d4098", text: "Product Management" },
                    { icon: "5cf832764dbd0f6a7611493c638beec18caba67f", text: "Digital Marketer" },
                    { icon: "e3e08a34165b39dc29a1bd9b640b942092240cfa", text: "Data Engineer" },
                    { icon: "b32b5ebef4bc9be3fbbf20c57cf017e3693d3d5b", text: "Mobile Dev Engineer" }
                  ].map((skill, index) => (
                    <div key={index} className="flex relative gap-2 px-5 py-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                      <img
                        loading="lazy"
                        src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${skill.icon}?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52`}
                        className="object-contain shrink-0 aspect-square w-6"
                        alt={skill.text}
                      />
                      <div className="text-lg tracking-normal leading-snug text-neutral-500">
                        {skill.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Access Africa's Finest Talent Section */}
          <div className="flex justify-center items-start px-5 md:px-10 py-9 bg-stone-950">
            <div className="flex flex-col items-center w-full max-w-screen-xl">
              <div className="flex flex-col items-center w-full max-w-2xl">
                <div className="flex gap-2 text-lg tracking-normal leading-snug text-violet-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32ee3d8e8814fd295c7b10ee2caa96aac35d7fa4?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                    className="object-contain shrink-0 aspect-square w-6"
                    alt="Levada Client Icon"
                  />
                  <div className="grow shrink my-auto">LEVADA CLIENT</div>
                </div>
                <div className="mt-6 text-4xl md:text-5xl tracking-tighter leading-tight text-center text-stone-300">
                  Access Africa's Finest Talent
                </div>
                <div className="mt-7 text-xl tracking-normal leading-7 text-center text-neutral-500">
                  Tap into the immense talent reservoir that Africa has to offer. As a
                  visionary organization, you're not just hiring; you're forming partnerships 
                  with some of the finest professionals across the continent.
                </div>
                <div className="mt-5">
                  <button className="px-6 md:px-12 py-4 text-base font-medium leading-tight text-stone-950 bg-violet-400 rounded-[50px] hover:bg-violet-500 transition-colors">
                    Hire on Levada
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center w-full mt-6">
                <div className="flex flex-col items-center w-full max-w-2xl">
                  <div className="text-4xl md:text-5xl tracking-tighter leading-tight text-center text-stone-300">
                    Elite Professionals at Your Fingertips
                  </div>
                  <div className="mt-5 text-xl tracking-normal leading-7 text-center text-neutral-500">
                    We are on a journey of transforming the way African talent and
                    global organizations interact. Delve into the transformative experience 
                    of recruiting African talent. Explore a world where possibilities are 
                    boundless, and success is just a connection away.
                  </div>
                </div>

                {/* Cards Section */}
                <div className="flex flex-wrap gap-8 justify-center items-center mt-16 w-full">
                  {/* Card 1 */}
                  <div className="flex relative flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                    <div className="flex flex-col items-center p-8">
                      <div className="flex justify-center w-24 h-24">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/11872548918794eed514256519f24ab62833a59f?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                          className="object-contain w-full h-full"
                          alt="Efficiency Redefined"
                        />
                      </div>
                      <div className="mt-14 text-2xl tracking-tight leading-tight text-stone-300">
                        Efficiency Redefined
                      </div>
                      <div className="mt-14 text-lg tracking-normal leading-6 text-neutral-500">
                        Levada takes the hassle out of talent discovery saving you time and 
                        resources. Our platform is designed for efficiency, ensuring that your 
                        organization can access top-tier talent seamlessly.
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex relative flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                    <div className="flex flex-col items-center p-8">
                      <div className="flex justify-center w-24 h-24">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/98db9832115d5933a62dfda10c05a97f880867b0?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                          className="object-contain w-full h-full"
                          alt="Tailored Matches"
                        />
                      </div>
                      <div className="mt-14 text-2xl tracking-tight leading-8 text-stone-300">
                        Tailored Matches for Project Success
                      </div>
                      <div className="mt-14 text-lg tracking-normal leading-6 text-neutral-500">
                        Build project teams strategically with Levada's intelligent matching and 
                        personalized recommendations that synergize and drive project success.
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex relative flex-col flex-1 min-w-[280px] max-w-md rounded-3xl border border-neutral-800">
                    <div className="flex flex-col items-center p-8">
                      <div className="flex justify-center w-24 h-24">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f866b2619ad88193752a763333a8f6d8483c09?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                          className="object-contain w-full h-full"
                          alt="Verified Quality"
                        />
                      </div>
                      <div className="mt-14 text-2xl tracking-tight leading-tight text-stone-300">
                        Verified Quality
                      </div>
                      <div className="mt-14 text-lg tracking-normal leading-6 text-neutral-500">
                        Rest easy knowing that every professional on Levada undergoes a 
                        rigorous verification process. Your team deserves the best, and we 
                        ensure quality at every step.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="flex flex-col px-5 md:px-20 py-20 mt-2 w-full bg-neutral-900">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex flex-col items-center w-full max-w-2xl">
                <div className="flex flex-col w-full">
                  <div className="flex gap-2 self-center text-lg tracking-normal leading-snug text-violet-400">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2191e19627b7f3f45706b831d867289ae2827225?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                      className="object-contain shrink-0 aspect-square w-6"
                      alt="Success Stories Icon"
                    />
                    <div className="grow shrink my-auto">SUCCESS STORIES</div>
                  </div>
                  <div className="mt-6 text-4xl md:text-5xl tracking-tighter leading-tight text-center text-stone-300">
                    Don't just take our word for it
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-center items-center w-48 h-48">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb50eaeda54c858aa65f2a928b9fd6277ef009ef?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                    className="object-contain w-full h-full rounded-full"
                    alt="Tosin Adeniyi"
                  />
                </div>
                <div className="mt-9 text-lg tracking-normal leading-6 text-center text-neutral-500">
                  "In the design world, my journey with Levada was a perfect match. Their 
                  smart system linked me with ideal job opportunities worldwide, making job 
                  hunting easy and stress-free. Levada isn't just a job site; it's a friendly 
                  guide to finding success your way, removing barriers and opening doors to 
                  global opportunities."
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbd80f92799ba9e6c852bf4c177a701d7141e3c6?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                  className="object-contain mt-6 w-48 h-48 rounded-full"
                  alt="Tosin's Work"
                />
                <div className="mt-6 text-lg tracking-normal leading-snug text-center text-neutral-500">
                  Tosin Adeniyi
                </div>
                <div className="mt-3 text-lg tracking-normal leading-snug text-center text-stone-300">
                  Data Analyst - PushUp Design Agency
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-center items-center w-48 h-48">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08dc912b65224ac393f9b9fb2c3b4ed31aa10d3c?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                    className="object-contain w-full h-full rounded-full"
                    alt="Martin Loeppky"
                  />
                </div>
                <div className="mt-9 text-lg tracking-normal leading-6 text-center text-neutral-500">
                  "Finding Levada was a real game-changer for our company. As a customer, 
                  it helped our business a lot. Levada connected us with the best talent 
                  from Africa, making hiring way easier. The people we hired through Levada 
                  brought awesome skills to our team, helping our business grow. Levada 
                  makes sure everyone's real and honest, so we know we're getting quality 
                  talent."
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0973726ed3c733f977ed1b3cff8edc17f65bb197?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                  className="object-contain mt-6 w-48 h-48 rounded-full"
                  alt="Martin's Work"
                />
                <div className="mt-6 text-lg tracking-normal leading-snug text-center text-neutral-500">
                  Martin Loeppky
                </div>
                <div className="mt-3 text-lg tracking-normal leading-snug text-center text-stone-300">
                  CTO - Gate
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-7xl tracking-tighter leading-none text-stone-300">
                  20+
                </div>
                <div className="mt-7 text-xl tracking-normal leading-tight text-neutral-500">
                  Happy Clients
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-7xl tracking-tighter leading-none text-stone-300">
                  5k+
                </div>
                <div className="mt-7 text-xl tracking-normal leading-tight text-neutral-500">
                  Verified Talents
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-7xl tracking-tighter leading-none text-stone-300">
                  4.8
                </div>
                <div className="mt-7 text-xl tracking-normal leading-tight text-neutral-500">
                  Review rate
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Africa's Tech Talent Section */}
          <div className="flex flex-col justify-center items-center p-5 md:p-20 bg-stone-950">
            <div className="flex flex-col justify-center items-center w-full max-w-7xl">
              <div className="flex flex-col justify-center items-center w-full p-5 md:p-16 rounded-3xl bg-neutral-900">
                <div className="flex flex-col items-center w-full max-w-2xl">
                  <div className="text-4xl md:text-6xl font-medium tracking-tighter text-center leading-tight md:leading-[65px] text-stone-300">
                    Connecting Africa's tech talent to global opportunities
                  </div>
                  <div className="mt-9 text-lg md:text-xl tracking-normal leading-7 text-center text-neutral-500">
                    Levada empowers individuals to discover tech jobs, access embedded finance, 
                    and enjoy exclusive community benefits
                  </div>
                  <div className="flex relative justify-center mt-9 w-full max-w-md">
                    <input
                      type="email"
                      placeholder="name@email.com"
                      className="w-full py-6 px-8 text-base bg-stone-950 rounded-[50px] text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 py-4 px-8 text-base font-medium bg-violet-400 rounded-[40px] text-stone-950 shadow-[0px_20px_35px_rgba(153,141,235,0.25)] hover:bg-violet-500 transition-colors">
                      Try Levada
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import cartoonImg from "@/images/cartoon.png";
import React from "react";

export default function SecondContainer() {
  return (
    <div>
      <div>
        <h1 className="md:text-8xl text-4xl text-center my-10 animate-pulse text-[#774936]">
          Taste The Magic!
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10 mx-4 sm:mx-20 my-10 gap-6 sm:gap-0">
        {/* Left Text Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left px-4">
          <div className="mb-6">
            <h1 className="text-[#713f12] text-xl sm:text-2xl">
              CRAFTED TO PERFECTION
            </h1>
            <h2 className="text-[#a16207] text-sm sm:text-base">
              Every Chocoza creation is a masterpiece, blending premium
              ingredients with meticulous care to deliver an unforgettable
              experience.
            </h2>
          </div>
          <div>
            <h1 className="text-[#713f12] text-xl sm:text-2xl">
              FROM OUR KITCHEN TO YOUR HEART
            </h1>
            <h2 className="text-[#a16207] text-sm sm:text-base">
              We believe in spreading joy through the irresistible taste of our
              chocolates, cakes, and cupcakes, made with love for every
              occasion.
            </h2>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="w-full sm:w-[80vh] flex justify-center">
          <Image
            src={cartoonImg}
            alt="cartoon-image"
            className="w-[70%] sm:w-full max-w-[300px] sm:max-w-none"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left px-4">
          <div className="mb-6">
            <h1 className="text-[#713f12] text-xl sm:text-2xl">
              FLAVORS THAT TELL A STORY
            </h1>
            <h2 className="text-[#a16207] text-sm sm:text-base">
              Each bite of Chocoza is a journey of flavors, crafted with
              inspiration, passion, and a dash of magic.
            </h2>
          </div>
          <div>
            <h1 className="text-[#713f12] text-xl sm:text-2xl">
              YOUR MOMENT, OUR TREASURE
            </h1>
            <h2 className="text-[#a16207] text-sm sm:text-base">
              Whether it’s a birthday, celebration, or a sweet craving, Chocoza
              adds a special touch to your cherished moments.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import cartoonImg from "@/images/cartoon.png";
import React from "react";

export default function SecondContainer() {
  return (
    <div className="min-h-screen flex justify-center align-middle flex-col">
      <div>
        <h1 className=" md:text-6xl text-3xl text-center md:my-0 my-10 mb-0 animate-pulse text-[#774936] mb-1">
          Taste The Magic!
        </h1>
      </div>

      <div className="w-[90%] flex flex-col md:flex-row justify-center items-center sm:space-x-10 mx-4 sm:m-auto   md:my-10 my-4 gap-6 sm:gap-0">
        {/* Top Image Section For Small Screens */}
        <div className="md:hidden w-full sm:w-[90%] flex justify-center">
          <Image src={cartoonImg} alt="cartoon-image" className="w-[100%]" />
        </div>

        {/* Left Text Section */}
        <div className="w-[100%] text-center sm:text-left">
          <div className="mb-6">
            <h1 className="md:text-left text-left text-[#713f12] text-xl sm:text-2xl mb-1">
              CRAFTED TO PERFECTION
            </h1>
            <h2 className="text-[#a16207] text-sm md:text-left text-left sm:text-base">
              Every Chocoza creation is a masterpiece, blending premium
              ingredients with meticulous care to deliver an unforgettable
              experience.
            </h2>
          </div>
          <div>
            <h1 className="text-[#713f12] text-xl sm:text-2xl md:text-left text-right mb-1">
              FROM OUR KITCHEN TO YOUR HEART
            </h1>
            <h2 className="text-[#a16207] text-sm sm:text-base md:text-left text-right">
              We believe in spreading joy through the irresistible taste of our
              chocolates, cakes, and cupcakes, made with love for every
              occasion.
            </h2>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="md:flex hidden w-full sm:w-[80vh] justify-center">
          <Image
            src={cartoonImg}
            alt="cartoon-image"
            className="w-[70%] sm:w-full max-w-[300px] sm:max-w-none"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full text-center sm:text-left">
          <div className="mb-6">
            <h1 className="text-[#713f12] text-xl sm:text-2xl text-left mb-1">
              FLAVORS THAT TELL A STORY
            </h1>
            <h2 className="text-[#a16207] text-sm sm:text-base text-left">
              Each bite of Chocoza is a journey of flavors, crafted with
              inspiration, passion, and a dash of magic.
            </h2>
          </div>
          <div>
            <h1 className="text-[#713f12] text-xl sm:text-2xl md:text-left text-right mb-1">
              YOUR MOMENT, OUR TREASURE
            </h1>
            <h2 className="text-[#a16207] text-sm sm:text-base md:text-left text-right">
              Whether it’s a birthday, celebration, or a sweet craving, Chocoza
              adds a special touch to your cherished moments.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

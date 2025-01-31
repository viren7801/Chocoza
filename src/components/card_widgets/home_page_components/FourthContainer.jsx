"use client"
import Image from "next/image";
import React from "react";
import Img4 from "@/images/overlayImage.jpg";

function FourthContainer() {
  return (
    <div className="relative">
      <Image src={Img4} alt="hero-image-4" className="w-full h-full" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="md:text-4xl text-2xl sm:text-6xl font-bold">
            Discover Pure Indulgence
          </h1>
          <p className="text-lg sm:text-2xl mt-4">
            Dive into a world of irresistible flavors and unforgettable memories
            with Chocoza.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthContainer;

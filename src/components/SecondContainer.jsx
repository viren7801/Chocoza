"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import cartoonImg from "../images/cartoon.png";
import hamperImg from "../images/HamperImage.png";
import customCupcake1 from "../images/customCupcake1.png";
import customCupcake2 from "../images/customCupcake2.png";
import customCupcake3 from "../images/CustomCupcake3.png";
import Cards_widget from "./Cards_widget";
import { cardData } from "@/utils/CardData";
import Img4 from "../images/overlayImage.jpg";
import React, { useRef, useState } from "react";

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

      <div className="hidden md:block">
        <div className="flex flex-col items-center h-[90vh] bg-[#e6ccb2]">
          <h1 className="my-10 text-5xl text-[#713f12]">Top Picks</h1>
          <div className="flex flex-wrap justify-center bg-orange-50 rounded-md p-10">
            {/* Map through cardData and render CardsWidget */}
            {cardData.map((card, index) => (
              <Cards_widget
                key={index}
                category={card.category}
                title={card.title}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <Image src={Img4} alt="hero-image-4" className="w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="md:text-4xl text-2xl sm:text-6xl font-bold">
              Discover Pure Indulgence
            </h1>
            <p className="text-lg sm:text-2xl mt-4">
              Dive into a world of irresistible flavors and unforgettable
              memories with Chocoza.
            </p>
          </div>
        </div>
      </div>

      {/* Section with Swiper replacing the right-side image */}
      <div className="flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-20 py-10 h-screen">
        {/* Left: Text Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0 max-w-[90%] md:max-w-[40%]">
          <h1 className="text-[#713f12] text-2xl md:text-3xl font-semibold mb-2 md:mb-2">
            Personalized Cupcakes for Special Moments!
          </h1>
          <h2 className="text-[#a16207] text-lg sm:text-xl">
            Crafted with love and topped with chocolate letters, our
            customizable letter cupcakes are the sweetest way to express your
            feelings. Perfect for birthdays, anniversaries, and heartfelt
            surprises!
          </h2>
        </div>

        {/* Right: Swiper Image Section */}
        <div className="w-full sm:w-1/2 flex justify-end">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src={customCupcake1}
                alt="customCupcake1"
                className="object-contain"
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={customCupcake2}
                alt="customCupcake2"
                className="object-contain"
                width={500}
                height={500}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={customCupcake3}
                alt="customCupcake3"
                className="object-contain"
                width={500}
                height={500}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Second Section: Image on Left, Text on Right */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:mx-20 py-10 h-screen">
        {/* Left: Image Section */}
        <div className="w-full sm:w-1/2 flex justify-start mb-8 sm:mb-0">
          <Image
            src={hamperImg}
            alt="Hamper Image"
            className="w-full sm:max-w-[600px] max-w-[500px]"
            width={500}
            height={500}
          />
        </div>

        {/* Right: Text Section */}
        <div className="w-full sm:w-1/2 text-center sm:text-left max-w-[50%]">
          <h1 className="text-[#713f12] text-3xl font-semibold">
            Exclusive Hampers for Unforgettable Moments!
          </h1>
          <h2 className="text-[#a16207] text-lg sm:text-xl">
            Packed with care, love, and all your favorites, our special gift
            hampers are perfect for creating memories.
          </h2>
        </div>
      </div>
    </div>
  );
}

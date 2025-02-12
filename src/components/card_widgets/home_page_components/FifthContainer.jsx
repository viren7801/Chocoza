"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import hamperImg from "@/images/Hamper2.png";
import customCupcake1 from "@/images/customCupcake1.png";
import customCupcake2 from "@/images/customCupcake2.png";
import customCupcake3 from "@/images/CustomCupcake3.png";

function FifthContainer() {
  return (
    <div>
      {/* Section with Swiper replacing the right-side image */}
      <div className="flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-20 py-10 h-screen md:my-5">
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
        <div className="w-full sm:w-1/2 text-center sm:text-left max-w-[80%]">
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

export default FifthContainer;

"use client";

import Image from "next/image";
import Img1 from "../images/Hero-image-1.jpg";

// ===============================================

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// calc(100vh - 100px)
export default function FirstContainer() {
  return (
    <div className="h-[calc(100vh-200px)] bg-gray-200">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Img1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

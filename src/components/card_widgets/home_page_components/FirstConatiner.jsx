"use client";
import Image from "next/image";
import Img1Desktop from "@/images/Hero-image-1.png";
import Img2Desktop from "@/images/hero-image-2.png";
import Img3Desktop from "@/images/Hero-image-3.png";
import Img1Mobile from "@/images/Hero-image-1-mobile.png";
import Img2Mobile from "@/images/hero-image-2-mobile.png";
import Img3Mobile from "@/images/Hero-image-3-mobile.png";

// ===============================================

import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function FirstContainer() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile after mount (for hydration)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Define mobile breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div className={`${isMobile ? "h-auto" : "h-[calc(100vh-100px)]"}`}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {isMobile ? (
            <div className="relative w-full h-[400px]">
              {" "}
              {/* Adjust mobile height here */}
              <Image
                src={Img1Mobile}
                alt="Hero Image 1 Mobile"
                layout="intrinsic" // Keeps image aspect ratio consistent
                width={500} // Define the width to scale on mobile
                height={300} // Define the height for the mobile image
                priority
              />
            </div>
          ) : (
            <div className="relative w-full h-[800px]">
              {" "}
              {/* Desktop height */}
              <Image
                src={Img1Desktop}
                alt="Hero Image 1 Desktop"
                layout="intrinsic" // Maintain desktop aspect ratio
                width={1200} // Desktop width
                height={800} // Desktop height
                priority
              />
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {isMobile ? (
            <div className="relative w-full h-[400px]">
              {" "}
              {/* Adjust mobile height here */}
              <Image
                src={Img2Mobile}
                alt="Hero Image 2 Mobile"
                layout="intrinsic" // Keeps image aspect ratio consistent
                width={500} // Define the width to scale on mobile
                height={300} // Define the height for the mobile image
                priority
              />
            </div>
          ) : (
            <div className="relative w-full h-[800px]">
              {" "}
              {/* Desktop height */}
              <Image
                src={Img2Desktop}
                alt="Hero Image 2 Desktop"
                layout="intrinsic" // Maintain desktop aspect ratio
                width={1200} // Desktop width
                height={800} // Desktop height
                priority
              />
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {isMobile ? (
            <div className="relative w-full h-[400px]">
              {" "}
              {/* Adjust mobile height here */}
              <Image
                src={Img3Mobile}
                alt="Hero Image 3 Mobile"
                layout="intrinsic" // Keeps image aspect ratio consistent
                width={500} // Define the width to scale on mobile
                height={300} // Define the height for the mobile image
                priority
              />
            </div>
          ) : (
            <div className="relative w-full h-[800px]">
              {" "}
              {/* Desktop height */}
              <Image
                src={Img3Desktop}
                alt="Hero Image 3 Desktop"
                layout="intrinsic" // Maintain desktop aspect ratio
                width={1200} // Desktop width
                height={800} // Desktop height
                priority
              />
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "@/lib/utils";
import img1 from "@/assets/imageDiego.png";
import img3 from "@/assets/imageDiego3.webp";
import img2 from "@/assets/imageDiego2.png";
import img4 from "@/assets/imageDiego4.jpeg";
import img5 from "@/assets/imageDiego5.jpeg";

const Skiper48 = () => {
  const images = [
    { src: img1, alt: "Portfolio visual 1" },
    { src: img3, alt: "Portfolio visual 3" },
    { src: img2, alt: "Portfolio visual 2" },
    { src: img4, alt: "Portfolio visual 4" },
    { src: img5, alt: "Portfolio visual 5" },
  ];

  return (
    <div
      className="flex w-full items-center justify-center bg-transparent overflow-visible min-h-[360px] md:min-h-[420px]"
    >
      {/* 'cards' effect is not compatible with Swiper loop mode — disable loop to avoid warnings */}
      <Carousel_002 className="" images={images} loop={false} />
    </div>
  );
};

export { Skiper48 };

const Carousel_002 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = false,
  autoplay = false,
  spaceBetween = 40,
}: {
  images: { src: string; alt: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_002 {
    padding-bottom: 50px !important;
  }
  `;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-3xl flex justify-center", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 1000,
                disableOnInteraction: false,
              }
            : false
        }
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_002 mx-auto"
        style={{
          // Responsive sizing: keep cards visible on small screens
          width: "min(86vw, 260px)",
          height: "calc(min(86vw, 260px) * 1.4615)",
          overflow: "visible",
        }}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="rounded-3xl">
            <img
              style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: 16 }}
              className="object-cover"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export { Carousel_002 };

/**
 * Skiper 48 Carousel_002 — React + Swiper
 * Built with Swiper.js - Read docs to learn more https://swiperjs.com/
 * Illustrations by AarzooAly - https://x.com/AarzooAly
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */

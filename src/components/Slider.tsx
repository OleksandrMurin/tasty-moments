"use client";
import React, { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Pagination,
  Navigation,
  Grid,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { RecipeCard } from "./RecipeCard";
import ArrowLeft from "../../public/arrow-left.svg";
import ArrowRight from "../../public/arrow-right.svg";
import type { Swiper as SwiperType } from "swiper";
import { Children, isValidElement } from "react";
import classNames from "classnames";
import "swiper/css/effect-coverflow";

interface SliderProps {
  // dishes: Dish[];
  // renderSlide: (dish: Dish, index: number) => ReactNode;
  slides: ReactNode[];
}

export const Swiper: FC<SliderProps> = ({ slides }) => {
  // const [realIndex, setRealIndex] = useState(0);

  // const updateIndex = useCallback(
  //   (swiperInstance: SwiperType) => {
  //     if (swiperInstance === null) return;
  //     setRealIndex(swiperInstance?.realIndex);
  //   },
  //   [setRealIndex]
  // );
  // const distance = useCallback(
  //   (i: number) =>
  //     realIndex == i ||
  //     (realIndex + slides.length - 1) % slides.length == i ||
  //     (realIndex + 1) % slides.length == i,
  //   [realIndex, slides.length]
  // );
  return (
    <div className="flex justify-center w-full relative  pb-28">
      <SwiperComponent
        modules={[Navigation, Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={3.9}
        effect="coverflow"
        centeredSlides
        loop
        navigation={{
          nextEl: ".swiper-next-button",
          prevEl: ".swiper-prev-button",
        }}
        className="customSwiper w-full relative"
        onInit={(swiper) => {
          swiper.slideToLoop(0, 0);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-after">
            {slide}
          </SwiperSlide>
        ))}

        <div className="swiper-prev-button top-1/2 left-7">
          <ArrowLeft />
        </div>
        <div className="swiper-next-button top-1/2 right-7">
          <ArrowRight />
        </div>
      </SwiperComponent>
    </div>
  );
};

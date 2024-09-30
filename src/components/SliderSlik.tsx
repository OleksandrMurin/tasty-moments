"use client";
import React, {
  Children,
  Component,
  ComponentProps,
  FC,
  ReactNode,
} from "react";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type SliderProps = {
  children: ReactNode;
};

export const Slider: FC<SliderProps> = ({ children }) => {
  return (
    <SliderComponent
      className="center flex gap-6"
      centerMode
      infinite
      centerPadding="5px"
      slidesToShow={3}
      speed={500}
    >
      {children}
    </SliderComponent>
  );
};

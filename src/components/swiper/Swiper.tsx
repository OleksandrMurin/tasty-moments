"use client";
import React, {ComponentPropsWithoutRef, FC, ReactNode, useCallback, useMemo} from "react";
import {Swiper as SwiperComponent, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination} from "swiper/modules";
import ArrowLeft from "../../../public/arrow-left.svg";
import ArrowRight from "../../../public/arrow-right.svg";
import styles from './Swiper.module.css'
import classNames from "classnames";

interface SliderProps {
    slides: ReactNode[];
}

export const Swiper: FC<SliderProps> = ({slides}) => {
    const mapFunc = useCallback(
        (slide: ReactNode, index: number) => <SwiperSlide key={index} className={styles.swiperAfter}>{slide}</SwiperSlide>,
        []
    )
    const children = useMemo(() => slides.map(mapFunc), [slides, mapFunc])

    return <SwiperComponent
        modules={[Pagination]}
        centeredSlides
        spaceBetween={30}
        slidesPerView={3.4}
        loop
        loopAddBlankSlides
        className="flex justify-center w-full relative pb-28"
        onInit={swiper => swiper.slideToLoop(0, 0)}
    >
        {children}
        <PrevButton className={classNames(styles.swiperButton, "left-2")} length={slides.length}/>
        <NextButton className={classNames(styles.swiperButton, "right-2")} length={slides.length}/>
    </SwiperComponent>;
};

type NavButtonProps = ComponentPropsWithoutRef<"div"> & {
    length: number
}

const PrevButton: FC<NavButtonProps> = ({className, length}) => {
    const swiper = useSwiper()
    const onClick = useCallback(
        () => swiper.slideToLoop((swiper.realIndex + length - 1) % length, 500),
        [length, swiper]
    );
    return <div onClick={onClick} className={className}>
        <ArrowLeft/>
    </div>
}

const NextButton: FC<NavButtonProps> = ({className, length}) => {
    const swiper = useSwiper();
    const onClick = useCallback(
        () => swiper.slideToLoop((swiper.realIndex + 1) % length, 500),
        [length, swiper]
    );
    return <div onClick={onClick} className={className}>
        <ArrowRight/>
    </div>
}
"use client";
import React, { FC } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Grid, Pagination } from "swiper/modules";
import { ComponentProps } from "@/types";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// App

type CarouselProps = SwiperProps &
    ComponentProps & {
        breakpoints?: SwiperProps["breakpoints"];
        grid?: SwiperProps["grid"];
        autoplay?: SwiperProps["autoplay"];
        effect?: SwiperProps["effect"];
        coverflowEffect?: SwiperProps["coverflowEffect"];
        centeredSlides?: SwiperProps["centeredSlides"];
        pagination?: SwiperProps["pagination"];
        children: React.ReactElement[];
    };

// Component
const Carousel: FC<CarouselProps> = ({
    breakpoints,
    grid,
    autoplay,
    effect,
    coverflowEffect,
    centeredSlides,
    pagination,
    className,
    children,
}) => {
    // Template
    return (
        <Swiper
            className={cn(className, "flex justify-center items-center")}
            pagination={pagination}
            grid={grid}
            autoplay={autoplay}
            breakpoints={breakpoints}
            effect={effect}
            coverflowEffect={coverflowEffect}
            centeredSlides={centeredSlides}
            modules={[
                ...(pagination ? [Pagination] : []),
                ...(grid ? [Grid] : []),
                ...(coverflowEffect ? [EffectCoverflow] : []),
                ...(autoplay ? [Autoplay] : []),
            ]}
        >
            {Array.isArray(children) ? (
                children.map((slide) => <SwiperSlide key={slide.key}>{React.cloneElement(slide)}</SwiperSlide>)
            ) : (
                <SwiperSlide>{React.cloneElement(children)}</SwiperSlide>
            )}
        </Swiper>
    );
};

export { Carousel };

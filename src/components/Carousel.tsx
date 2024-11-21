"use client";
// Core
import React, { FC } from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Grid, Navigation, Pagination } from "swiper/modules";

// Style
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

// App
import { cn } from "@/lib/utils";

// Type
import { ComponentProps } from "@/types";

type CarouselProps = SwiperProps &
    ComponentProps & {
        breakpoints?: SwiperProps["breakpoints"];
        pagination?: SwiperProps["pagination"];
        navigation?: SwiperProps["navigation"];
        grid?: SwiperProps["grid"];
        autoplay?: SwiperProps["autoplay"];
        effect?: SwiperProps["effect"];
        coverflowEffect?: SwiperProps["coverflowEffect"];
        centeredSlides?: SwiperProps["centeredSlides"];
        children: React.ReactElement[];
    };

// Component
const Carousel: FC<CarouselProps> = ({
    breakpoints,
    pagination,
    navigation,
    grid,
    autoplay,
    effect,
    coverflowEffect,
    centeredSlides,
    className,
    children,
    ...props
}) => {
    // Template
    return (
        <Swiper
            className={cn(className, "flex justify-center items-center")}
            pagination={pagination}
            navigation={navigation}
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
                ...(navigation ? [Navigation] : []),
            ]}
            {...props}
        >
            {Array.isArray(children) ? (
                children.map((slide) => (
                    <SwiperSlide key={"slide" + slide.key}>{React.cloneElement(slide)}</SwiperSlide>
                ))
            ) : (
                <SwiperSlide>{React.cloneElement(children)}</SwiperSlide>
            )}
        </Swiper>
    );
};

export { Carousel };

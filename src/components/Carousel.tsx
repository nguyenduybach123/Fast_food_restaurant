"use client";
// Core
import React, { FC } from "react";
import { Swiper, SwiperSlideProps } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// App
import { cn } from "@/lib/utils";
import { ComponentProps } from "@/types";
import { SwiperOptions } from "swiper/types";

// Type
interface CarouselProps extends ComponentProps {
    breakpoints: {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
    };
    clickable?: boolean;
    children: React.ReactElement<SwiperSlideProps>[];
}

// Component
const Carousel: FC<CarouselProps> = ({ breakpoints, clickable = true, className, children }) => {
    // Template
    return (
        <Swiper
            className={cn(className, "flex justify-center items-center")}
            pagination={{
                clickable: clickable,
            }}
            breakpoints={breakpoints}
            modules={[Navigation, Pagination]}
        >
            {children.map((slide) => React.cloneElement(slide))}
        </Swiper>
    );
};

export { Carousel };

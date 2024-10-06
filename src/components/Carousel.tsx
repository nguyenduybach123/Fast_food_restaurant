"use client";
// Core
import React, { FC } from "react";
import { Swiper, SwiperSlideProps } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// App
import { cn } from "@/lib/utils";
import { ComponentProps } from "@/types";

// Type
interface CarouselProps extends ComponentProps {
    clickable?: boolean;
    children: React.ReactElement<SwiperSlideProps>[];
}

// Component
const Carousel: FC<CarouselProps> = ({ clickable = true, className, children }) => {
    // Template
    return (
        <Swiper
            className={cn(className, "flex justify-center items-center")}
            pagination={{
                clickable: clickable,
            }}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 3,
                    spaceBetween: 2,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            }}
            modules={[Navigation, Pagination]}
        >
            {children.map((slide) => React.cloneElement(slide))}
        </Swiper>
    );
};

export { Carousel };

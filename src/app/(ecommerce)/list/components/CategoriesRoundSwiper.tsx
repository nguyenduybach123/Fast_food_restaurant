"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import categoryImage from "@/assets/images/home/Ellipse 6.png";
import { Navigation, Pagination } from "swiper/modules";

export const CategoriesRoundSwiper = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    clickable: true,
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
                <SwiperSlide>
                    <div className="w-auto flex flex-col justify-center items-center px-3 cursor-pointer">
                        <Image
                            className="hover:scale-110 transition duration-300"
                            src={categoryImage}
                            alt=""
                            width={80}
                            height={80}
                        />
                        <h3 className="mt-2 text-lg font-semibold">Pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center px-3 cursor-pointer">
                        <Image
                            className="hover:scale-110 transition duration-300"
                            src={categoryImage}
                            alt=""
                            width={80}
                            height={80}
                        />
                        <h3 className="mt-2 text-lg font-semibold">Pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center px-3 cursor-pointer">
                        <Image
                            className="hover:scale-110 transition duration-300"
                            src={categoryImage}
                            alt=""
                            width={80}
                            height={80}
                        />
                        <h3 className="mt-2 text-lg font-semibold">Pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center px-3 cursor-pointer">
                        <Image
                            className="hover:scale-110 transition duration-300"
                            src={categoryImage}
                            alt=""
                            width={80}
                            height={80}
                        />
                        <h3 className="mt-2 text-lg font-semibold">Pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center px-3 cursor-pointer">
                        <Image
                            className="hover:scale-110 transition duration-300"
                            src={categoryImage}
                            alt=""
                            width={80}
                            height={80}
                        />
                        <h3 className="mt-2 text-lg font-semibold">Pizza</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col justify-center items-center px-3 cursor-pointer">
                        <Image
                            className="hover:scale-110 transition duration-300"
                            src={categoryImage}
                            alt=""
                            width={80}
                            height={80}
                        />
                        <h3 className="mt-2 text-lg font-semibold">Pizza</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

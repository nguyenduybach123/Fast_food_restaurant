// Core
import React from "react";
import Image from "next/image";

// App
import { Carousel } from "@/components";
import { ProductList } from "./components/ProductList";
import categoryImage from "@/assets/images/home/Ellipse 6.png";

// Component
export const FilterPage = () => {
    // Template
    return (
        <div className="bg-gradient-to-b from-[#fdeece] via-[#FFF] to-[#FFF]">
            <div className="px-16 md:px-64 py-8">
                <Carousel
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
                >
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
                </Carousel>
            </div>
            <div className="px-16 md:px-32">
                <ProductList />
            </div>
        </div>
    );
};

export default FilterPage;

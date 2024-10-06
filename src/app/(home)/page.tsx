"use client";
// Core
import { FC } from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

// App
import categoryImage from "@/assets/images/home/Category_1.png";
import footerImage from "@/assets/images/home/footer.jpg";
import { Carousel } from "@/components";
import { ProductCard } from "@/components/Card/ProductCard";
import { ProductCardFeatured } from "@/components/Card/ProductCardFeatured";

// Internal
import { FoodDeliveryAddress } from "./components/FoodDeliveryAddress";
import { FoodCategory } from "./components/FoodCategory";
import { OrderGuideStep } from "./components/OrderGuideStep";
import { CartSlide } from "./components/Slide/Cart/CartSlide";

// Component
export const HomePage: FC = () => {
    // Template
    return (
        <div className="relative h-full font-semibold py-4">
            <div className="flex flex-col">
                <div className="relative flex items-center bg-[#fccc21] py-16 overflow-hidden">
                    <div className="flex-auto w-[500px] px-5 py-6">
                        <FoodDeliveryAddress />
                    </div>
                    <div className="flex-auto w-80">
                        <Image className="absolute -bottom-10" src={categoryImage} alt="" width={400} height={500} />
                    </div>
                </div>
                <div className="md:px-16 lg:px-32">
                    <Carousel>
                        <SwiperSlide key={1}>
                            <FoodCategory />
                        </SwiperSlide>
                        <SwiperSlide key={2}>
                            <FoodCategory />
                        </SwiperSlide>
                    </Carousel>
                </div>
                <div className="px-16 mt-16 bg-gradient-to-b from-[#FDEDCA] via-[#FFF] to-[#FFF]">
                    <div className="flex justify-around items-center">
                        <OrderGuideStep />
                        <OrderGuideStep />
                        <OrderGuideStep />
                    </div>
                </div>
                <div className="mt-16 px-16">
                    <Carousel>
                        <SwiperSlide key={1}>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide key={2}>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide key={3}>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide key={4}>
                            <ProductCard />
                        </SwiperSlide>
                    </Carousel>
                    <div className="px-32 mt-16">
                        <ProductCardFeatured />
                        <ProductCardFeatured isReverse />
                        <ProductCardFeatured />
                    </div>
                    <div
                        className="flex justify-center items-center"
                        style={{ backgroundImage: `url(${footerImage})` }}
                    >
                        <div className="text-center">
                            <h1 className="font-semibold text-4xl my-5">Are you ready to order with the best deals?</h1>
                            <button className="px-3 py-2 bg-orange-500 text-white rounded-md shadow-lg">
                                PROCEED TO ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <CartSlide />
        </div>
    );
};

export default HomePage;

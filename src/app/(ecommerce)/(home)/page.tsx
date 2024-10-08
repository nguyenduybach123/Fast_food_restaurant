"use client";
// Core
import { FC } from "react";
import { SwiperSlide } from "swiper/react";

// App
import footerImage from "@/assets/images/home/footer.jpg";
import { Carousel } from "@/components";
import { ProductCard } from "@/components/Card/ProductCard";
import { ProductCardFeatured } from "@/components/Card/ProductCardFeatured";

// Internal
import { FoodDeliveryAddress } from "./components/FoodDeliveryAddress";
import { FoodCategory } from "./components/FoodCategory";
import { OrderGuideStep } from "./components/OrderGuideStep";
import { images } from "@/assets/images/home/guide";
import { FoodFeaturedList } from "./components/FoodFeaturedList";

// Component
export const HomePage: FC = () => {
    // Template
    return (
        <div className="relative h-full font-semibold py-4">
            <div className="flex flex-col">
                <div className="relative flex items-center bg-[#FDEDCA] py-16 overflow-hidden">
                    <div className="flex-auto w-[500px] px-5 py-6">
                        <FoodDeliveryAddress />
                        <Carousel
                            breakpoints={{
                                0: {
                                    slidesPerView: 3,
                                    spaceBetween: 2,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 5,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mt-16"
                        >
                            <SwiperSlide key={1}>
                                <FoodCategory />
                            </SwiperSlide>
                            <SwiperSlide key={2}>
                                <FoodCategory />
                            </SwiperSlide>
                            <SwiperSlide key={3}>
                                <FoodCategory />
                            </SwiperSlide>
                            <SwiperSlide key={4}>
                                <FoodCategory />
                            </SwiperSlide>
                            <SwiperSlide key={5}>
                                <FoodCategory />
                            </SwiperSlide>
                            <SwiperSlide key={6}>
                                <FoodCategory />
                            </SwiperSlide>
                        </Carousel>
                    </div>
                    <div className="hidden md:flex justify-center items-center flex-auto w-80"></div>
                </div>
                <div className="md:px-16 bg-gradient-to-b from-[#FDEDCA] via-[#FFF] to-[#FFF]">
                    <h1 className="mb-16 text-4xl text-center text-popular tracking-normal">How does it work</h1>
                    <div className="flex justify-around items-center">
                        <OrderGuideStep
                            image={images.locationIcon}
                            title="Select location"
                            decription="Choose the location where your food will be delivered."
                        />
                        <OrderGuideStep
                            image={images.orderIcon}
                            title="Choose order"
                            decription="Check over hundreds of menus to pick your favorite food"
                        />
                        <OrderGuideStep
                            image={images.payIcon}
                            title="Pay advanced"
                            decription="It's quick, safe, and simple. Select several methods of payment"
                        />
                        <OrderGuideStep
                            image={images.enjoyIcon}
                            title="Enjoy meals"
                            decription="Food is made and delivered directly to your home."
                        />
                    </div>
                </div>
                <div className="mt-16 px-16">
                    <h1 className="mb-8 text-4xl text-center text-popular tracking-normal">POPULAR</h1>
                    <Carousel
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                            },
                        }}
                    >
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
                        <SwiperSlide key={5}>
                            <ProductCard />
                        </SwiperSlide>
                        <SwiperSlide key={6}>
                            <ProductCard />
                        </SwiperSlide>
                    </Carousel>
                </div>
                <div className="mt-16 px-16">
                    <h1 className="mb-8 text-4xl text-center text-popular tracking-normal">FEATURED</h1>
                    <FoodFeaturedList />
                </div>
                <div className="px-32 mt-16">
                    <h1 className="mb-4 text-4xl text-center text-popular tracking-normal">NEWS</h1>
                    <ProductCardFeatured />
                    <ProductCardFeatured isReverse />
                    <ProductCardFeatured />
                </div>
                <div
                    className="flex justify-center items-center h-64 bg-center bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${footerImage.src})` }}
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
    );
};

export default HomePage;

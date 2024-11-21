"use client";
// Core
import { FC } from "react";
import { motion } from "framer-motion";

// App
import footerImage from "@/assets/images/home/footer.jpg";
import { enjoyImage, locationImage, orderImage, payImage } from "@/assets/images";
import { Carousel } from "@/components";

// Internal
import { FoodCategory } from "./components/FoodCategory";
import { OrderGuideStep } from "./components/OrderGuideStep";
import { DeliveryAddress } from "./components/DeliveryAddress";
import { Banner } from "./components/Banner";
import { FoodNewsCard } from "@/components/Card/FoodNewsCard";
import { FoodCard } from "@/components/Card/FoodCard";

// Constant
const variantFoodCategory = {
    initial: {
        opacity: 0,
        y: -30,
        x: -30,
    },
    animate: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            staggerChildren: 0.3,
        },
    },
};

const variantOrderGuideStep = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
            staggerChildren: 0.3,
        },
    },
};

const variantCardFeatured = {
    initialForward: {
        opacity: 0,
        x: -500,
    },
    initialReverse: {
        opacity: 0,
        x: 500,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 1,
        },
    },
};

// Component
export const HomePage: FC = () => {
    // Template
    return (
        <div className="relative h-full font-semibold py-4 overflow-x-hidden">
            <div className="flex flex-col">
                <DeliveryAddress hasAddress={false} />
                <div className="relative">
                    <div className="relative w-full">
                        <Carousel slidesPerView={1} spaceBetween={0} navigation={true}>
                            <div key={1}>
                                <Banner />
                            </div>
                            <div key={2}>
                                <Banner />
                            </div>
                            <div key={3}>
                                <Banner />
                            </div>
                            <div key={4}>
                                <Banner />
                            </div>
                        </Carousel>
                        <div className="container absolute left-1/2 -bottom-[h-1/2] -translate-x-1/2 -translate-y-1/2 px-3 py-2 md:px-4 md:py-4 bg-[#FDEDCA] rounded-t-lg z-10">
                            <motion.div variants={variantFoodCategory} initial="initial" animate="animate">
                                <Carousel
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2,
                                            spaceBetween: 2,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 5,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 5,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 5,
                                        },
                                    }}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                >
                                    <motion.div variants={variantFoodCategory}>
                                        <FoodCategory />
                                    </motion.div>
                                    <motion.div variants={variantFoodCategory}>
                                        <FoodCategory />
                                    </motion.div>
                                    <motion.div variants={variantFoodCategory}>
                                        <FoodCategory />
                                    </motion.div>
                                    <motion.div variants={variantFoodCategory}>
                                        <FoodCategory />
                                    </motion.div>
                                    <motion.div variants={variantFoodCategory}>
                                        <FoodCategory />
                                    </motion.div>
                                    <motion.div variants={variantFoodCategory}>
                                        <FoodCategory />
                                    </motion.div>
                                </Carousel>
                            </motion.div>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-center w-2/5 items-center flex-auto"></div>
                </div>
                <div className="h-32 bg-[#FDEDCA]"></div>
                <div className="md:px-16 bg-gradient-to-b from-[#FDEDCA] via-[#FFF] to-[#FFF]">
                    <h1 className="mb-8 pt-8 lg:pt-16 text-4xl text-center text-popular tracking-normal">
                        How does it work
                    </h1>
                    <motion.div
                        className="flex justify-around"
                        variants={variantOrderGuideStep}
                        initial="initial"
                        whileInView="animate"
                    >
                        <motion.div variants={variantOrderGuideStep}>
                            <OrderGuideStep
                                image={locationImage}
                                title="Select location"
                                decription="Choose the location where your food will be delivered."
                            />
                        </motion.div>
                        <motion.div variants={variantOrderGuideStep}>
                            <OrderGuideStep
                                image={orderImage}
                                title="Choose order"
                                decription="Check over hundreds of menus to pick your favorite food"
                            />
                        </motion.div>
                        <motion.div variants={variantOrderGuideStep}>
                            <OrderGuideStep
                                image={payImage}
                                title="Pay advanced"
                                decription="It's quick, safe, and simple. Select several methods of payment"
                            />
                        </motion.div>
                        <motion.div variants={variantOrderGuideStep}>
                            <OrderGuideStep
                                image={enjoyImage}
                                title="Enjoy meals"
                                decription="Food is made and delivered directly to your home."
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    className="md:px-16 mt-16"
                    variants={variantCardFeatured}
                    initial="initialReverse"
                    whileInView="animate"
                >
                    <FoodNewsCard isReverse />
                </motion.div>
                <div className="mt-16 px-16">
                    <h1 className="mb-8 text-4xl text-center text-popular tracking-normal">POPULAR</h1>
                    <Carousel
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                    </Carousel>
                </div>
                <div className="mt-16 px-16">
                    <h1 className="mb-8 text-4xl text-center text-popular tracking-normal">FEATURED</h1>
                    <Carousel
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        grid={{
                            rows: 2,
                            fill: "row",
                        }}
                    >
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                    </Carousel>
                </div>
                <motion.div
                    className="md:px-16 my-16"
                    variants={variantCardFeatured}
                    initial="initialForward"
                    whileInView="animate"
                >
                    <FoodNewsCard />
                </motion.div>
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

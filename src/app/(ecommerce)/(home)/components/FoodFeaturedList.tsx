import { Button, Carousel } from "@/components";
import { ProductCard } from "@/components/Card/ProductCard";
import React from "react";

const FoodFeaturedList = () => {
    return (
        <div>
            <Carousel
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    640: {
                        slidesPerView: 2,
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
                grid={{
                    rows: 2,
                    fill: "row",
                }}
            >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Carousel>
            <div className="text-center mt-8">
                <Button className="p-4 text-lg text-center text-white bg-gradient-to-bl from-[#FFBA26] to-[#FF9A0E] shadow-[#FFAE00] shadow-md">
                    View All
                </Button>
            </div>
        </div>
    );
};

export { FoodFeaturedList };

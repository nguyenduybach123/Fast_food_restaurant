import { Carousel } from "@/components";
import React, { FC } from "react";
import FoodRecommendCard from "./FoodRecommendCard";

interface FoodRecommendListProps {
    enable?: boolean;
}

const FoodRecommendList: FC<FoodRecommendListProps> = () => {
    return (
        <div className="p-4 bg-[#2d2d2d] rounded-lg">
            <h1 className="mb-4 text-2xl text-white font-semibold">THIS GOES GREAT WITH ...</h1>
            <Carousel
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
            >
                <FoodRecommendCard />
                <FoodRecommendCard />
                <FoodRecommendCard />
                <FoodRecommendCard />
                <FoodRecommendCard />
                <FoodRecommendCard />
            </Carousel>
        </div>
    );
};

export default FoodRecommendList;

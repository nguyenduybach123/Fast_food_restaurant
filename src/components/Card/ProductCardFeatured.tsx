import { cn } from "@/lib/utils";
import { ComponentProps } from "@/types";
import React, { FC } from "react";

interface CardFeaturedProps extends ComponentProps {
    isReverse?: boolean;
}

export const ProductCardFeatured: FC<CardFeaturedProps> = ({ isReverse = false, className }) => {
    return (
        <div
            className={cn("flex rounded-md drop-shadow-lg", isReverse ? "flex-row-reverse" : "", className)}
            style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
        >
            <div className="w-[400px] p-8">
                <p className="mb-4 text-4xl font-semibold tracking-wide">
                    Best deals
                    <i className="text-[#FFB30E] ml-2">Pizza Cake</i>
                </p>
                <span className="w-4/5 text-md text-gray-300 leading-normal">
                    Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.
                </span>
                <button className="w-full text-white text-md font-semibold px-5 py-2 mt-8 rounded-lg bg-[#FFB800]">
                    PROCEED TO ORDER
                </button>
            </div>
            <div
                className={cn(
                    "hidden md:block flex-1 bg-cover bg-center bg-no-repeat",
                    isReverse ? "rounded-l-lg" : "rounded-r-lg",
                )}
                style={{
                    background: `url(https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600`,
                }}
            ></div>
        </div>
    );
};

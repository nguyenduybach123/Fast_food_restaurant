import React from "react";
import { CartSlideItem } from "./CartSlideItem";
import { ChevronLeft as ChevronLeftIcon } from "lucide-react";

export const CartSlide = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen bg-[#00000080] z-40">
            <div className="absolute top-0 right-0 w-full md:w-[450px] h-screen px-2 py-3 bg-white z-50">
                <div className="relative mb-8 p-3">
                    <ChevronLeftIcon className="absolute left-0 top-1/2 -translate-y-1/2 " width={30} height={30} />
                    <h1 className="flex-1 text-lg md:text-2xl text-center font-semibold"> Cart List</h1>
                </div>
                <div className="flex flex-col">
                    <CartSlideItem />
                    <CartSlideItem />
                    <CartSlideItem />
                    <CartSlideItem />
                    <CartSlideItem />
                </div>
            </div>
        </div>
    );
};

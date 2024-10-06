import Image from "next/image";
import React from "react";
import testImage from "../../assets/images/home/TestProduct.jpg";
import { Rating } from "./Rating";

export const ProductCard = () => {
    return (
        <div className="flex flex-col items-center px-4 py-3 hover:scale-105 transition duration-500 cursor-pointer shadow-md">
            <Image className="w-full rounded-t-lg" src={testImage} alt="" height={200} />
            <div className="w-full flex justify-between">
                <h2 className="px-2 text-lg font-semibold tracking-wide">Pizza Cake</h2>
                <Rating />
            </div>
            <div className="px-1">
                <span className="text-sm text-gray-300">If filename is showing instead of thunder client</span>
                <h3 className="w-full text-red-400 text-lg font-semibold my-2">$4.00</h3>
            </div>
            <button className="w-full text-white text-md font-semibold px-5 py-2 rounded-lg bg-[#F17228]">
                Order Now
            </button>
        </div>
    );
};

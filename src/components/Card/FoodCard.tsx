// Core
import React from "react";
import Image from "next/image";

// App
import testImage from "../../assets/images/home/TestProduct.jpg";
import { Button } from "../ui/button";

// Component
const FoodCard = () => {
    // Template
    return (
        <div className="flex flex-col items-center max-w-64 px-4 py-3 hover:scale-105 transition duration-500 cursor-pointer shadow-md bg-white rounded-lg">
            <Image
                className="w-full rounded-t-lg"
                src={testImage}
                alt=""
                layout="responsive"
                width={500}
                height={750}
            />
            <div className="w-full flex justify-between">
                <h2 className="px-2 text-lg font-semibold tracking-wide">Pizza Cake</h2>
            </div>
            <div className="px-1">
                <span className="text-sm text-gray-300">If filename is showing instead of thunder client</span>
                <h3 className="w-full text-red-400 text-lg font-semibold my-2">$4.00</h3>
            </div>
            <Button className="w-full text-white text-md font-semibold px-5 py-2 rounded-lg bg-[#F17228] shadow-[#FD725C] shadow-md transition-all duration-300 hover:bg-[#fd7c68] hover:text-white">
                Order Now
            </Button>
        </div>
    );
};

export { FoodCard };

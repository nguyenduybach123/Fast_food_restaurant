import Image from "next/image";
import React from "react";
import testImage from "../../../../../assets/images/home/TestProduct.jpg";

export const CartSlideItem = () => {
    return (
        <div className="flex items-center px-2 py-1 my-2 space-x-2">
            <div className="">
                <Image className="rounded-md" src={testImage} alt="" width={100} height={100} />
            </div>
            <div className="flex-1">
                <h2 className="font-semibold">Pizza Cake</h2>
                <div className="flex items-center">
                    <p>4.00$</p>
                    <div className="flex items-center justify-center w-32">
                        <button>+</button>
                        <input className="w-14 h-8 px-2 mx-2 rounded-md outline-none border-2 border-gray-500" />
                        <button>-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

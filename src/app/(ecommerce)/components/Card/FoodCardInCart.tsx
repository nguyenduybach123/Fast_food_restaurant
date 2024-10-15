import Image from "next/image";
import React from "react";
import testImage from "@/assets/images/home/TestProduct.jpg";
import { Button } from "@/components";
import { MinusIcon, PlusIcon } from "lucide-react";

const FoodCardInCart = () => {
    return (
        <div className="flex space-x-4 py-4 border-b-2 border-gray-300">
            <div className="">
                <Image className="rounded-md" src={testImage} alt="" width={80} height={80} />
            </div>
            <div className="flex-1">
                <h2 className="text-lg font-semibold">Pizza Cake</h2>
                <div className="flex justify-between items-center">
                    <p>4.00$</p>
                    <div className="flex items-center space-x-2 justify-center w-32 text-lg text-center font-semibold">
                        <Button size="icon" variant="icon">
                            <MinusIcon width={20} height={20} />
                        </Button>
                        <input className="w-10 h-8 px-2 text-center rounded-md outline-none" />
                        <Button size="icon" variant="icon">
                            <PlusIcon width={20} height={20} />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center space-x-4 font-mono font-semibold">
                    <div className="relative after:content-[''] after:absolute after:w-0 after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:border-0 after:border-black after:transition-all after:duration-300 hover:after:w-full hover:after:border cursor-pointer">
                        Edit
                    </div>
                    <div className="relative text-destructive after:content-[''] after:absolute after:w-0 after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:border-0 after:border-destructive after:transition-all after:duration-300 hover:after:w-full hover:after:border cursor-pointer">
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
};

export { FoodCardInCart };

// Core
import React, { FC } from "react";
import { Pizza as PizzaIcon, ArrowRight as ArrowRightIcon } from "lucide-react";

// Component
const FoodCategory: FC = () => {
    // Template
    return (
        <div
            className="flex items-end h-40 xl:h-52 p-2 lg:p-4 m-2 rounded-md bg-center bg-cover bg-no-repeat cursor-pointer"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600')",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
        >
            <div className="relative flex w-full items-center px-3 py-2 rounded-md bg-white group/btn after:content-[''] after:w-0 after:h-full after:absolute after:left-0 after:top-0 after:bg-[#ff0000] after:rounded-md after:transition-[width] after:duration-500 after:group/btn group-hover/btn:after:w-full">
                <div className="flex-1 flex space-x-2 items-center">
                    <PizzaIcon fill="#fb012e" stroke="#fff" color="#fff" width={30} height={30} />
                    <span className="ml-2 text-lg">Pizza</span>
                </div>
                <div>
                    <ArrowRightIcon stroke="#fb012e" />
                </div>
            </div>
        </div>
    );
};

export { FoodCategory };

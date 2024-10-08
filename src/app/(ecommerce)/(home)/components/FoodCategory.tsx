// Core
import React, { FC } from "react";
import { Pizza as PizzaIcon, ArrowRight as ArrowRightIcon } from "lucide-react";

// Component
const FoodCategory: FC = () => {
    // Template
    return (
        <div
            className="flex items-end w-30 h-40 p-2 m-2 rounded-md bg-center bg-cover bg-no-repeat cursor-pointer"
            style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600')",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
        >
            <div className="flex w-full items-center px-3 py-2 rounded-md bg-white">
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

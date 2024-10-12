// Core
import React, { FC } from "react";
import { Check as CheckIcon, MapPin as MapPinIcon } from "lucide-react";

// Component
const FoodDeliveryAddress: FC = () => {
    // Template
    return (
        <div className="flex justify-center items-center">
            <div className="w-4/5">
                <div>
                    <div className="flex items-center px-2 lg:px-6 xl:px-8 2xl:px-16 mb-4">
                        <MapPinIcon color="#fff" fill="#ff7474" width={40} height={40} />
                        <h3 className="ml-4 text-3xl text-[#ff7474]">Washington</h3>
                    </div>
                    <h1 className="mb-4 text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl text-center font-bold">
                        Discover Restaurants that deliver near you
                    </h1>
                </div>
                <div className="flex flex-shrink p-2 md:p-3 md:mx-8 bg-white shadow-lg rounded-2xl">
                    <input
                        className="w-4/5 md:flex-1 outline-none border-none bg-transparent caret-[#ff7474]"
                        type="text"
                        placeholder="Enter delivery address"
                    />
                    <button className="flex justify-between items-center p-2 md:p-3 text-white bg-red-600 rounded-2xl">
                        <CheckIcon strokeWidth={3} className="md:mx-2" />
                        <span className="text-md md:text-lg">Ok</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export { FoodDeliveryAddress };

// Core
import React, { FC } from "react";
import { Check as CheckIcon, MapPin as MapPinIcon } from "lucide-react";

// Component
const FoodDeliveryAddress: FC = () => {
    // Template
    return (
        <div className="flex justify-center items-center">
            <div className="w-4/5">
                <div className="flex items-center px-2 md:px-8 mb-4">
                    <MapPinIcon color="#fff" fill="#ff7474" width={40} height={40} />
                    <h3 className="ml-4 text-3xl text-[#ff7474]">Washington</h3>
                </div>
                <h1 className="mb-4 text-2xl md:text-3xl lg:text-5xl text-center font-bold">
                    Discover Restaurants that deliver near you
                </h1>
                <div className="p-3 mx-2 md:mx-8 flex bg-white shadow-lg rounded-2xl">
                    <input
                        className="flex-1 outline-none border-none bg-transparent caret-[#ff7474]"
                        type="text"
                        placeholder="Enter delivery address"
                    />
                    <button className="flex justify-between items-center p-3 text-white bg-red-600 rounded-2xl">
                        <CheckIcon strokeWidth={3} className="mx-2" />
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export { FoodDeliveryAddress };

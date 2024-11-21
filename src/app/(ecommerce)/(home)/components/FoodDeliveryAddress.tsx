// Core
import React, { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Check as CheckIcon, MapPin as MapPinIcon } from "lucide-react";

// Constant
const mockDataAddress = [
    {
        name: "Quận 1",
        address: "Từ Liêm, Hà Nội, Việt Nam",
    },
    {
        name: "Quận 2",
        address: "Từ Liêm, Hà Nội, Việt Nam",
    },
    {
        name: "Quận 3",
        address: "Từ Liêm, Hà Nội, Việt Nam",
    },
    {
        name: "Quận 4",
        address: "Từ Liêm, Hà Nội, Việt Nam",
    },
    {
        name: "Quận 5",
        address: "Từ Liêm, Hà Nội, Việt Nam",
    },
];

// Component
const FoodDeliveryAddress: FC = () => {
    const [deliveryAddressValue, setDeliveryAddressValue] = useState("");

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
                <div className="relative flex flex-shrink p-2 md:p-3 md:mx-8 bg-white shadow-lg rounded-2xl">
                    <input
                        className="w-4/5 md:flex-1 outline-none border-none bg-transparent caret-[#ff7474]"
                        type="text"
                        placeholder="Enter delivery address"
                        onChange={(e) => setDeliveryAddressValue(e.target.value)}
                        value={deliveryAddressValue}
                    />
                    <ul
                        className={cn(
                            "absolute inset-x-0 top-full divide-y-2 rounded-md bg-white shadow-lg transition-all duration-300",
                            deliveryAddressValue.length !== 0 ? "opacity-100" : "opacity-0",
                        )}
                    >
                        {deliveryAddressValue.length !== 0 &&
                            mockDataAddress.map((address) => (
                                <li
                                    key={address.name}
                                    className="flex space-x-2 px-3 py-3 cursor-pointer hover:bg-[#999999]"
                                >
                                    <div>
                                        <MapPinIcon className="mt-1" color="#fff" fill="#ff7474" />
                                    </div>
                                    <div>
                                        <div className="text-lg">
                                            <span className="text-red-400">
                                                {address.name.substring(0, deliveryAddressValue.length)}
                                            </span>
                                            <span>{address.name.substring(deliveryAddressValue.length)}</span>
                                        </div>
                                        <p className="text-md text-gray-500 ">{address.address}</p>
                                    </div>
                                </li>
                            ))}
                    </ul>
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

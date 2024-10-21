// Core
import React, { FC } from "react";
import { CatIcon } from "lucide-react";

// Type
interface ProgressOrderTrackingProps {
    enable?: boolean;
}

// Component
const ProgressOrderTracking: FC<ProgressOrderTrackingProps> = () => {
    // Template
    return (
        <div className="h-40">
            <div className="relative flex justify-between items-center z-10">
                <div className="w-full h-2 absolute bg-green-500 rounded-full -z-10"></div>
                <div className="relative w-20 h-20 flex justify-center items-center p-3 rounded-full border-4 border-green-500 bg-white z-10">
                    <CatIcon />
                    <div className="w-40 absolute top-[120%] text-xl text-center font-medium">
                        <p>Order Food</p>
                        <span className="text-sm text-center text-gray-400">00 : 02 10-10-2024</span>
                    </div>
                </div>
                <div className="relative w-20 h-20 flex justify-center items-center p-3 rounded-full border-4 border-green-500 bg-white z-10">
                    <CatIcon />
                    <div className="w-40 absolute top-[120%] text-xl text-center font-medium">
                        <p>Order Food</p>
                        <span className="text-sm text-center text-gray-400">00 : 02 10-10-2024</span>
                    </div>
                </div>
                <div className="relative w-20 h-20 flex justify-center items-center p-3 rounded-full border-4 border-green-500 bg-white z-10">
                    <CatIcon />
                    <div className="w-40 absolute top-[120%] text-xl text-center font-medium">
                        <p>Order Food</p>
                        <span className="text-sm text-center text-gray-400">00 : 02 10-10-2024</span>
                    </div>
                </div>
                <div className="relative w-20 h-20 flex justify-center items-center p-3 rounded-full border-4 border-green-500 bg-white z-10">
                    <CatIcon />
                    <div className="w-40 absolute top-[120%] text-xl text-center font-medium">
                        <p>Order Food</p>
                        <span className="text-sm text-center text-gray-400">00 : 02 10-10-2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressOrderTracking;

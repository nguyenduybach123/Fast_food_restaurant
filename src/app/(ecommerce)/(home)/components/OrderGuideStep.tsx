// Core
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

// Type
interface OrderGuideStepProps {
    image: StaticImageData;
    title: string;
    decription: string;
}

// Component
const OrderGuideStep: FC<OrderGuideStepProps> = ({ title, decription, image }) => {
    // Template
    return (
        <div className="flex flex-col justify-center items-center md:px-8 text-center tracking-wide">
            <div className="mb-4">
                <Image src={image} alt="" layout="responsive" width={500} height={750} />
            </div>
            <h3 className="text-lg md:text-2xl font-semibold mb-2">{title}</h3>
            <p className="hidden md:block w-4/5 text-gray-300 text-sm leading-normal">{decription}</p>
        </div>
    );
};

export { OrderGuideStep };

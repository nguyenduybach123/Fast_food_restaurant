import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface OrderGuideStepProps {
    image: StaticImageData;
    title: string;
    decription: string;
}

const OrderGuideStep: FC<OrderGuideStepProps> = ({ title, decription, image }) => {
    return (
        <div className="flex flex-col justify-center items-center md:px-8 text-center tracking-wide">
            <Image src={image} alt="" width={100} height={100} />
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="w-4/5 text-gray-300 text-sm leading-normal">{decription}</p>
        </div>
    );
};

export { OrderGuideStep };

import React, { FC } from "react";
import Image from "next/image";
import locationGuideImage from "@/assets/images/home/guide/location.png";

const OrderGuideStep: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center px-8 text-center tracking-wide">
            <Image src={locationGuideImage} alt="" width={100} height={100} />
            <h3 className="text-md font-semibold">Select location</h3>
            <p className="text-gray-300 text-sm leading-normal">
                Choose the location where your food will be delivered.
            </p>
        </div>
    );
};

export { OrderGuideStep };

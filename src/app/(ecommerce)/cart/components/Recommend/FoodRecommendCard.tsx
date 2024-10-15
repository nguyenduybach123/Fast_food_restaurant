import { Button } from "@/components";
import { PlusIcon } from "lucide-react";
import React, { FC } from "react";

type FoodRecommendCardProps = {
    enable?: boolean;
};

const FoodRecommendCard: FC<FoodRecommendCardProps> = () => {
    return (
        <div
            className="h-40 flex items-end rounded-md bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${"https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"})`,
            }}
        >
            <Button className="absolute top-2 right-2 p-2 rounded-full shadow-lg" icon={<PlusIcon />} />
            <div className="px-2  text-white">
                <h1 className="text-lg font-bold tracking-normal">FRENCH FRIES (R)</h1>
                <span className="text-md font-semibold">9.000$</span>
            </div>
        </div>
    );
};

export default FoodRecommendCard;
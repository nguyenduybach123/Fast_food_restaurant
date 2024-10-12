import { Button } from "@/components";
import { ProductCard } from "@/components/Card/ProductCard";
import React from "react";

const FoodFeaturedList = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="text-center mt-8">
                <Button className="p-4 text-lg text-center text-white bg-gradient-to-bl from-[#FFBA26] to-[#FF9A0E] shadow-[#FFAE00] shadow-md">
                    View All
                </Button>
            </div>
        </div>
    );
};

export { FoodFeaturedList };

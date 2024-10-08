import React from "react";
import { CategoriesRoundSwiper } from "./components/CategoriesRoundSwiper";
import { ProductList } from "./components/ProductList";

export const Filter = () => {
    return (
        <div className="bg-gradient-to-b from-[#fdeece] via-[#FFF] to-[#FFF]">
            <div className="px-16 md:px-64 py-8">
                <CategoriesRoundSwiper />
            </div>
            <div className="px-16 md:px-32">
                <ProductList />
            </div>
        </div>
    );
};

export default Filter;

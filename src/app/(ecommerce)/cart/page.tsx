// Core
import React from "react";
import { FoodCardInCart } from "../components/Card/FoodCardInCart";

// App
import { Button } from "@/components";
import { Input } from "@/components/ui/input";
import { FoodRecommendList } from "./components/Recommend/FoodRecommendList";

// Component
const CartPage = () => {
    // Template
    return (
        <div className="px-4 md:px-16 lg:px-32 xl:px-64 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-4 md:gap-8">
                <div className="flex flex-col space-y-16">
                    <div className="flex flex-col sm:max-w-[300px]  md:max-w-[600px] lg:max-w-[700px]">
                        <FoodCardInCart />
                        <FoodCardInCart />
                        <FoodCardInCart />
                        <FoodCardInCart />
                    </div>
                    <div className="sm:max-w-[300px]  md:max-w-[600px] lg:max-w-[700px] mx-auto">
                        <FoodRecommendList />
                    </div>
                </div>

                <div className="">
                    <div
                        className="p-6 rounded-lg border-gray-500 divide-y-2"
                        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                    >
                        <h1 className="py-4 text-3xl font-semibold tracking-normal">2 ITEM</h1>
                        <div className="flex flex-col py-4 pb-4 border-b-[1px]">
                            <h3 className="text-md font-semibold tracking-normal">Have an Online Coupon ? </h3>
                            <div className="flex items-center space-x-2 my-2">
                                <Input />
                                <Button>Redeem</Button>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 border-b-[1px]">
                            <div className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span>255.000 đ</span>
                            </div>
                            <div className="flex items-center justify-between text-lg font-semibold">
                                <span>Subtotal</span>
                                <span>255.000 đ</span>
                            </div>
                        </div>
                        <Button className="w-full text-xl font-semibold">Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;

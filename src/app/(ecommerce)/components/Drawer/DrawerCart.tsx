// Core
import React from "react";
import { ChevronLeftIcon, ShoppingCartIcon } from "lucide-react";

// App
import {
    Drawer,
    DrawerBody,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components";
import { FoodCardInCart } from "../Card/FoodCardInCart";

// Component
const DrawerCart = () => {
    // Template
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button size={"icon"} variant="icon">
                    <ShoppingCartIcon width={30} height={30} />
                </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full md:w-[400px]" position={"right"}>
                <div className="flex flex-col h-full px-2">
                    <DrawerHeader>
                        <div className="relative">
                            <DrawerClose asChild className="absolute left-0 top-1/2 -translate-y-1/2">
                                <Button size="icon" variant="icon">
                                    <ChevronLeftIcon />
                                </Button>
                            </DrawerClose>
                            <h1 className="text-2xl md:text-4xl text-center font-semibold tracking-normal">
                                Cart List
                            </h1>
                        </div>
                    </DrawerHeader>
                    <DrawerBody>
                        <div className="flex flex-col h-[378px] overflow-y-hidden">
                            <FoodCardInCart />
                            <FoodCardInCart />
                            <FoodCardInCart />
                            <FoodCardInCart />
                        </div>
                        <div className="flex justify-between items-center mt-4 text-2xl tracking-normal">
                            <h3 className="font-bold">SubTotal :</h3>
                            <h3 className="text-destructive font-semibold">12.00$</h3>
                        </div>
                    </DrawerBody>
                    <DrawerFooter className="mb-4">
                        <div className="flex justify-around items-center">
                            <Button className="px-6 py-3 text-lg font-semibold" variant="destructive">
                                CHECK OUT
                            </Button>
                            <Button className="px-6 py-3 text-lg font-semibold">VIEW CART</Button>
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export { DrawerCart };

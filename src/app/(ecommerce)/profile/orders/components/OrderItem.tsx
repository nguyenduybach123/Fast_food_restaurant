import { Button } from "@/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React, { FC } from "react";

interface OrderItemProps {
    enable?: boolean;
}

const OrderItem: FC<OrderItemProps> = () => {
    return (
        <div
            className="px-4 py-4 rounded-md"
            style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;" }}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h1>Orderer :</h1>
                    <h1 className="ml-4 text-xl font-semibold">Nguyen Duy Bach</h1>
                </div>
                <h1 className="text-blue-500 font-mono font-bold">17 / 10 / 2024</h1>
            </div>
            <div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg text-blue-500 font-semibold">
                            order details
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="px-3 py-2 text-lg font-mono">Combo Chicken 2 x 1</div>
                            <div className="px-3 py-2 text-lg font-mono">Combo Chicken 2 x 1</div>
                            <div className="px-3 py-2 text-lg font-mono">Combo Chicken 2 x 1</div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="flex justify-end items-center mt-8 space-x-4">
                <Button>Buy back</Button>
                <Button>See details</Button>
                <Button>Contact</Button>
            </div>
        </div>
    );
};

export default OrderItem;

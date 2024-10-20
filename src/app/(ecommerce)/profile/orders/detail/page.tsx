import React, { FC } from "react";
import { Button } from "@/components";
import ProgressOrderTracking from "./components/ProgressOrderTracking";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface OrderDetailProps {
    enable?: boolean;
}

const OrderDetailPage: FC<OrderDetailProps> = () => {
    return (
        <div className="px-3">
            <ProgressOrderTracking />
            <div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg text-blue-500 font-semibold">
                            Orderer information
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
                <Button>Cancel order</Button>
                <Button>Contact</Button>
            </div>
        </div>
    );
};

export default OrderDetailPage;

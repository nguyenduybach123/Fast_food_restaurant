// Core
import React, { FC } from "react";

// App
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Internal
import { DeliveryAddressTab } from "../Tab/DeliveryAddressTab";

// Type
interface DeliveryAddressModalProps {
    enable?: boolean;
}

// Component
const DeliveryAddressModal: FC<DeliveryAddressModalProps> = () => {
    // Template
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-lg font-semibold rounded-full bg-[#ff7474] shadow-md">Order Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] lg:max-w-[500px] border-none bg-transparent">
                <DeliveryAddressTab />
            </DialogContent>
        </Dialog>
    );
};

export { DeliveryAddressModal };

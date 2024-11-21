// Core
import React, { FC } from "react";
import { LocateIcon } from "lucide-react";

// App
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Type
interface DeliveryAddressTabProps {
    enable?: boolean;
}

// Component
const DeliveryAddressTab: FC<DeliveryAddressTabProps> = () => {
    // Template
    return (
        <Tabs
            defaultValue="account"
            className="w-full mt-4 bg-white"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
            <TabsList className="grid w-full grid-cols-2 p-0">
                <TabsTrigger
                    className="h-full px-3 py-2 text-xl font-semibold rounded-none bg-[#cacaca] [box-shadow:_14px_1px_5px_-4px_rgba(0_0_0_0.75)]"
                    value="delivery"
                >
                    Delivery
                </TabsTrigger>
                <TabsTrigger
                    className="h-full px-3 py-2 text-xl font-semibold rounded-none bg-[#cacaca] [box-shadow:_-14px_1px_5px_-4px_rgba(0_0_0_0.75)]"
                    value="pickup"
                >
                    Pick Up
                </TabsTrigger>
            </TabsList>
            <TabsContent value="delivery">
                <div className="min-h-80 px-3 py-4">
                    <div className="flex items-center p-2 rounded-full bg-gray-300">
                        <LocateIcon stroke="gray" />
                        <Input className="border-none bg-transparent" placeholder="Please enter your address" />
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="pickup">
                <div className="min-h-80 px-3 py-4">
                    <div className="flex items-center p-2 rounded-full bg-gray-300">
                        <LocateIcon stroke="gray" />
                        <Input
                            className="border-none bg-transparent"
                            placeholder="Please enter the restaurant name and address"
                        />
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export { DeliveryAddressTab };

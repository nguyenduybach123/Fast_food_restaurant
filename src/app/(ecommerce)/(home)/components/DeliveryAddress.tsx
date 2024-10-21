import React, { FC } from "react";
import { ClockIcon, MapPinIcon } from "lucide-react";

// App
import { Button } from "@/components";
import { DeliveryAddressModal } from "./Modal/DeliveryAddressModal";

// Type
interface DeliveryAddressProps {
    hasAddress: boolean;
}

// Component
const DeliveryAddress: FC<DeliveryAddressProps> = ({ hasAddress }) => {
    // Template
    return (
        <div className="flex justify-center items-center py-4 text-white bg-[#FDEDCA]">
            {hasAddress ? (
                <>
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <MapPinIcon color="#fff" fill="#ff7474" width={30} height={30} />
                            <h3 className="ml-4 text-lg text-[#ff7474]">Delivery From :</h3>
                        </div>
                        <h3 className="ml-4 text-xl text-[#ff7474]">KFC MAXIMARK CỘNG HÒA</h3>
                    </div>
                    <div className="flex items-center space-x-3 ml-8">
                        <div>
                            <ClockIcon color="#fff" fill="#ff7474" width={30} height={30} />
                        </div>
                        <h3 className="ml-4 text-xl text-[#ff7474]">GIAO NGAY</h3>
                    </div>
                </>
            ) : (
                <div className="text-xl text-[#ff7474]">Let&apos;s Order For Delivery Or Takeaway</div>
            )}
            {hasAddress ? (
                <div className="ml-4">
                    <Button className="text-lg font-semibold rounded-full bg-[#ff7474] shadow-md">Change</Button>
                </div>
            ) : (
                <div className="ml-4">
                    <DeliveryAddressModal />
                </div>
            )}
        </div>
    );
};

export { DeliveryAddress };

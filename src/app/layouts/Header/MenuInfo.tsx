// Core
import React, { FC } from "react";
import { CircleUserRound as CircleUserRoundIcon, ShoppingCart as ShoppingCartIcon } from "lucide-react";

// App
import { cn } from "@/lib/utils";

// Component
const MenuInfo: FC = () => {
    // Template
    return (
        <div className="hidden md:block">
            <ul className="flex items-center">
                <li className="px-2">
                    <CircleUserRoundIcon />
                </li>
                <li
                    className={cn(
                        "relative ml-2 px-2 cursor-pointer",
                        'after:content-["2"] after:w-6 after:h-6 after:absolute after:-top-2 after:right-0 after:rounded-full after:text-white after:text-center after:p-1 after:text-xs after:bg-[#fa012e] after:shadow-md',
                    )}
                >
                    <ShoppingCartIcon />
                </li>
            </ul>
        </div>
    );
};

export { MenuInfo };

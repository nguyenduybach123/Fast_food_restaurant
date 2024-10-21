// Core
import React, { FC } from "react";
import Link from "next/link";

// App
import { cn } from "@/lib/utils";

// Type
import { ComponentProps } from "@/types";

interface BannerProps extends ComponentProps {
    enable?: boolean;
}

// Component
const Banner: FC<BannerProps> = ({ className }) => {
    // Template
    return (
        <Link href={"/"}>
            <div
                className={cn(
                    "w-full h-[35rem] flex flex-col gap-16 xl:flex-row bg-cover bg-center bg-no-repeat",
                    className,
                )}
                style={{
                    background:
                        "url(https://images.pexels.com/photos/3682838/pexels-photo-3682838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                }}
            ></div>
        </Link>
    );
};

export { Banner };

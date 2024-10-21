"use client";
// Core
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// App
import { cn } from "@/lib/utils";

// Constant
const navigates = [
    {
        title: "HOME",
        link: "/",
    },
    {
        title: "MENU",
        link: "/list",
    },
    {
        title: "PROMOTION",
        link: "/promotion",
    },
    {
        title: "PARTY",
        link: "/party",
    },
    {
        title: "ABOUT",
        link: "/about",
    },
];

// Component
const MenuNavigate = () => {
    // Hook
    const pathname = usePathname();

    // Template
    return (
        <div className="hidden md:block ml-4 md:ml-8 lg:ml-16 font-semibold text-md">
            <ul className="flex items-center space-x-8">
                {navigates.map((navigate) => (
                    <li
                        key={navigate.title}
                        className={cn(
                            "relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-2 after:bg-destructive after:transition-all after:duration-300 hover:after:w-full",
                            { "after:w-full": navigate.link === pathname },
                        )}
                    >
                        <Link href={navigate.link} className="text-2xl font-semibold">
                            {navigate.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { MenuNavigate };

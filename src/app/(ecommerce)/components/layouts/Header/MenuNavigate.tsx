"use client";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navigates = [
    {
        title: "MENU",
        link: "/",
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

export const MenuNavigate = () => {
    const pathname = usePathname();

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

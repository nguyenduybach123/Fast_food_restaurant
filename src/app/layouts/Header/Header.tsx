import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "../../../assets/images/logo.webp";
import { MenuNavigate } from "./MenuNavigate";
import { MenuInfo } from "./MenuInfo";

export const Header = () => {
    return (
        <div className="flex justify-between items-center px-4 py-2 md:px-16 lg:px-32">
            <div className="flex items-center">
                <Link href={"/"}>
                    <Image src={logoImage} width={80} height={80} alt="logo" />
                </Link>
                <MenuNavigate />
            </div>
            <MenuInfo />
        </div>
    );
};

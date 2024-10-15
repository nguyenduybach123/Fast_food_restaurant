import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logoImage from "@/assets/images/logo.webp";
import { MenuNavigate } from "./MenuNavigate";
import { MenuInfo } from "./MenuInfo";

export const Header: FC = () => {
    return (
        <div className="flex justify-between items-center sticky top-0 inset-x-0 px-4 py-2 md:px-16 lg:px-32 bg-white z-50">
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

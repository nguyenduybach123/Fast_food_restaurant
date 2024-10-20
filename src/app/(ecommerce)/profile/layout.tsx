import { HandPlatterIcon, LogOutIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-8 md:px-16 lg:px-32 py-16">
            <div>
                <div className="flex space-x-8">
                    <div
                        className="max-w-[250px] px-4 py-3 rounded-l-lg bg-[#FDEDCA]"
                        style={{
                            boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                        }}
                    >
                        <h1 className="px-3 text-4xl font-bold [text-shadow:_0_4px_8px_#FFF] tracking-wide">
                            WELCOME, NGUYEN !
                        </h1>
                        <ul className="h-full flex flex-col mt-8">
                            <li className="flex items-center space-x-4 px-3 py-4 text-xl font-semibold tracking-normal cursor-pointer transition-all duration-200 hover:bg-[#999999] hover:text-white">
                                <HandPlatterIcon className="mr-4" />
                                <Link href={"/profile/orders"}>My Orders</Link>
                            </li>
                            <li className="flex items-center space-x-4 px-3 py-4 text-xl font-semibold tracking-normal cursor-pointer transition-all duration-200 hover:bg-[#999999] hover:text-white">
                                <UserIcon className="mr-4" />
                                <Link href={"/profile/account"}>My Account</Link>
                            </li>
                            <li className="flex items-center space-x-4 px-3 py-4 text-xl font-semibold tracking-normal cursor-pointer transition-all duration-200 hover:bg-[#999999] hover:text-white">
                                <UserIcon className="mr-4" />
                                <Link href={"/profile/account"}>My Account</Link>
                            </li>
                            <li className="justify-self-end flex items-center space-x-4 px-3 py-4 text-xl font-semibold tracking-normal cursor-pointer transition-all duration-200 hover:bg-[#999999] hover:text-white">
                                <LogOutIcon className="mr-4" />
                                <Link href={"/profile/account"}>Log out</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-4/5">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;

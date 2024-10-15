import { HandPlatterIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-8 md:px-16 lg:px-32 py-16">
            <div>
                <div className="flex space-x-8">
                    <div className="w-2/5">
                        <ul className="pl-5">
                            <li className="flex items-center space-x-4 px-3 py-4 text-2xl font-bold tracking-normal cursor-pointer transition-all duration-200 hover:bg-[#999999] hover:text-white">
                                <HandPlatterIcon className="mr-4" />
                                <Link href={"/profile/orders"}>My Orders</Link>
                            </li>
                            <li className="flex items-center space-x-4 px-3 py-4 text-2xl font-bold tracking-normal cursor-pointer transition-all duration-200 hover:bg-[#999999] hover:text-white">
                                <UserIcon className="mr-4" />
                                <Link href={"/profile/account"}>My Account</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/5">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;

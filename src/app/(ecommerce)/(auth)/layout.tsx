import { Carousel } from "@/components";
import Image from "next/image";
import React, { FC } from "react";

const AuthLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="px-4 md:px-8 lg:px-16 py-8 bg-[rgb(253,237,202)]">
            <div className="flex justify-center max-w-screen-2xl mx-auto">
                <div className="w-1/2">
                    <Carousel className="w-full h-full rounded-l-lg" pagination={{ clickable: true }}>
                        <div>
                            <Image
                                src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="pizza"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div>
                            <Image
                                src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="pizza"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </Carousel>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default AuthLayout;

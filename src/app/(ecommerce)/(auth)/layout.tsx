import React, { FC } from "react";

const AuthLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="bg-[#FDEDCA]">{children}</div>;
};

export default AuthLayout;

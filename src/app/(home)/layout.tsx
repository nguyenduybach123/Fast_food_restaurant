// Core
import React, { FC } from "react";

// App
import { Header } from "../layouts/Header/Header";
import Footer from "../layouts/Footer";

// Component
export const HomeLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    // Template
    return (
        <div className="relative">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default HomeLayout;

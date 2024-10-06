import React from "react";
import { Header } from "../layouts/Header/Header";
import Footer from "../layouts/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

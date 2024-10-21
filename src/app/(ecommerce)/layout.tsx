// Core
import React from "react";

// App
import { Footer, Header } from "./components/layouts";

// Component
export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
    // Template
    return (
        <div className="relative">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

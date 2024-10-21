// Core
import React, { FC } from "react";

// App
import OrderItem from "../components/OrderItem";

// Type
interface OrdersListPageProps {
    enable?: boolean;
}

// Component
const OrdersListPage: FC<OrdersListPageProps> = () => {
    // Template
    return (
        <div className="flex flex-col space-y-8">
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>
    );
};

export default OrdersListPage;

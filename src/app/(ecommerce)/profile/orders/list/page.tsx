import React, { FC } from "react";
import OrderItem from "../components/OrderItem";

interface OrdersListPageProps {
    enable?: boolean;
}

const OrdersListPage: FC<OrdersListPageProps> = () => {
    return (
        <div className="flex flex-col space-y-8">
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>
    );
};

export default OrdersListPage;

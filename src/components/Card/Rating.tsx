import React from "react";
import { StarFillIcon } from "../Icon";

export const Rating = () => {
    return (
        <div className="flex items-center px-3 py-1">
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
            <StarFillIcon />
        </div>
    );
};

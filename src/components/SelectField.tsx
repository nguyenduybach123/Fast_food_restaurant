import React, { FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { cn } from "@/lib/utils";

const selectFieldVariants = cva("box-content  relative", {
    variants: {
        variant: {
            outline: "",
        },
    },
    defaultVariants: {
        variant: "outline",
    },
});

// Type
interface SelectFieldProps extends VariantProps<typeof selectFieldVariants> {
    values: Array<string | number>;
}

const SelectField: FC<SelectFieldProps> = ({ values, variant }) => {
    return (
        <div className="w-full">
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                <SelectContent className={cn(selectFieldVariants({ variant }))}>
                    <SelectGroup>
                        {values.map((value) => (
                            <SelectItem key={value} value={value as string}>
                                {value}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectField;

import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { FormControl } from "@/components/ui/form";

// App
import { cn } from "@/lib/utils";
import { Input } from './ui/input';
import { FormLabel } from "./ui/form";

// Constant
const textFieldVariants = cva(
    "box-content relative",
    {
        variants: {
            variant: {
                outline: ""
            },
            sizeInput: {
                sm: "min-h-10 px-3 py-2"
            }
        },

        defaultVariants: {
            variant: "outline",
            sizeInput: "sm"
        },
    },
);

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof textFieldVariants> {
    label: string,
    className?: string
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
    ({ label, variant, sizeInput, className }, ref) => {
        const [textFieldValue, setTextFieldValue] = useState("");
        const [isFocused, setIsFocused] = useState(false);

        const handleFocused = () => {
            setIsFocused(true);
        }

        const handleBlur = () => {
            console.log(textFieldValue)
            if(textFieldValue === "")
                setIsFocused(false);
        }

        return (
            <div className={cn(textFieldVariants({ variant, sizeInput, className }))}>
                <FormLabel className={cn("absolute font-normal transition-transform duration-300 z-10", isFocused ? 'translate-x-[7px] translate-y-[-10px] scale-75' : 'translate-x-[12px] translate-y-[16px] scale-100')}>{label}</FormLabel>
                <div className="absolute inset-0">
                    <FormControl>
                        <Input ref={ref} className={cn("w-full h-full")} type='text' value={textFieldValue}  onChange={(e) => setTextFieldValue(e.target.value)} onFocus={handleFocused} onBlur={handleBlur}/>
                    </FormControl>
                    <fieldset className={cn("absolute inset-0 px-2 rounded-md pointer-events-none", isFocused ? "border-blue-500 border" : "border border-input")}>
                        <legend className={cn("h-2 invisible", isFocused ? "max-w-full" : "w-0 ")}>
                            <span>{label}</span>
                        </legend>
                    </fieldset>
                </div>
            </div>
        )
  }
);

TextField.displayName = 'TextField';

export { TextField }
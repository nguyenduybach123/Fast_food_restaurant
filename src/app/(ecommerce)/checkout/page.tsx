"use client";
// Core
import React from "react";
import { useForm } from "react-hook-form";

// App
import { Button } from "@/components";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Component
const CheckoutPage = () => {
    // Hook
    const form = useForm();

    // Template
    return (
        <div className="px-4 md:px-16 lg:px-32 xl:px-64">
            <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4 md:gap-8">
                <div className="flex flex-col">
                    <div>
                        <Form {...form}>
                            <form className="space-y-8 my-4">
                                <div className="px-2 py-3">
                                    <h1>ADD YOUR DETAILS:</h1>
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xl font-semibold">First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="First Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xl font-semibold">Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Last Name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xl font-semibold">Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Phone Number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-xl font-semibold">Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Email" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button className="w-full" type="submit">
                                    Place Order
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
                <div className="p-2">
                    <div className="border-gray-500">
                        <h1 className="py-4 border-b-[1px]">ORDER SUMMARY :</h1>
                        <div className="flex flex-col py-4 pb-4 border-b-[1px]">
                            <div className="flex items-center justify-between mb-2 text-lg font-semibold">
                                <div>1x Burger Banh Mi HDB</div>
                                <div>189.000đ</div>
                            </div>
                            <div className="flex items-center justify-between mb-2 text-lg font-semibold">
                                <div>1x Burger Banh Mi HDB</div>
                                <div>189.000đ</div>
                            </div>
                        </div>
                        <div className="flex flex-col py-4 border-b-[1px]">
                            <div className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span>255.000 đ</span>
                            </div>
                            <div className="flex items-center justify-between text-lg font-semibold">
                                <span>Subtotal</span>
                                <span>255.000 đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;

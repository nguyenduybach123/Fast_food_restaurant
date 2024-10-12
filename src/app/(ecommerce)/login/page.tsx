"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
    const form = useForm();

    return (
        <div className="px-4 md:px-8 lg:px-16">
            <div className="flex max-w-screen-2xl mx-auto">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <h1 className="text-4xl text-center font-semibold tracking-normal">Login</h1>
                    <Form {...form}>
                        <form className="space-y-8 my-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xl font-semibold">Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Username" {...field} />
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
                                        <FormLabel className="text-xl font-semibold">Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full" type="submit">
                                Login
                            </Button>
                        </form>
                        <div className="flex justify-stretch items-center my-5">
                            <div className="flex-1 h-[1px] bg-gray-500"></div>
                            <span className="px-5">OR</span>
                            <div className="flex-1 h-[1px] bg-gray-500"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button className="w-1/2">Facebook</Button>
                            <Button className="w-1/2">Google</Button>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-center">
                                <p>Forget password ?</p>
                            </p>
                            <p className="text-center">
                                Dont have an account yet ? <span className="font-bold">Register</span>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

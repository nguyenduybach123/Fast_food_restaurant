"use client";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { TextField } from "@/components/TextField";

const RegisterPage = () => {
    const form = useForm();

    return (
        <div className="px-4 md:px-8 lg:px-16">
            <div className="flex max-w-screen-2xl mx-auto">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <div
                        className="md:w-[500px] px-8 py-8 rounded-lg bg-white"
                        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
                    >
                        <h1 className="text-4xl text-center font-semibold tracking-normal">Register</h1>
                        <Form {...form}>
                            <form className="space-y-8 my-4">
                                <FormField
                                    control={form.control}
                                    name="firstname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <TextField label="First Name" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <TextField label="Last Name" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <TextField label="Phone Number" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <TextField label="Email" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <TextField label="Password" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className="w-full" type="submit">
                                    Create My Account
                                </Button>
                            </form>
                            <div className="flex justify-center items-center mt-4">
                                <p className="text-center">
                                    Already have an account ?
                                    <span className="ml-2 font-bold">
                                        <Link href="/login">Login</Link>
                                    </span>
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

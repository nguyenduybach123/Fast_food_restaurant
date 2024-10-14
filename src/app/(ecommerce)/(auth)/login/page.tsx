"use client";
import { useForm } from "react-hook-form";


import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem,  FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { TextField } from "@/components/TextField";
import { cn } from "@/lib/utils";

const btnLoginStyle = "text-lg font-normal rounded-none"

const LoginPage = () => {
    const form = useForm();

    

    return (
        <div className="px-4 md:px-8 lg:px-16 py-16">
            <div className="flex max-w-screen-2xl mx-auto">
                <div className="w-1/2"></div>
                <div className="w-auto">
                    <div className="md:w-[500px] px-8 py-8 rounded-lg bg-white" style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                        <h1 className="text-4xl text-center font-semibold tracking-normal">Login</h1>
                        <Form {...form}>
                            <form className="flex flex-col justify-center space-y-8 my-4">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <TextField label="Username" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <TextField label="Password" {...field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className={cn("w-full", btnLoginStyle)} type="submit">
                                    Login
                                </Button>
                            </form>
                            <div className="flex justify-stretch items-center my-5">
                                <div className="flex-1 h-[1px] bg-gray-500"></div>
                                <span className="px-5">OR</span>
                                <div className="flex-1 h-[1px] bg-gray-500"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button className={cn("w-1/2", btnLoginStyle)}>Facebook</Button>
                                <Button className={cn("w-1/2", btnLoginStyle)}>Google</Button>
                            </div>
                            <div className="flex justify-between items-center my-4">
                                <p className="text-center">
                                    Forget password ?
                                </p>
                                <p className="text-center">
                                    Don&apos;t have an account yet ? <span className="font-bold"><Link href="/register">Register</Link></span>
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

"use client";
import React, { FC } from "react";
import { Button } from "@/components";
import { TextField } from "@/components/TextField";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import SelectField from "@/components/SelectField";

type AccountDetailProps = {
    enable?: boolean;
};

const MyAccountPage: FC<AccountDetailProps> = () => {
    const form = useForm();

    return (
        <div>
            <div>
                <h1 className="text-4xl font-semibold">Account details</h1>
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
                        <SelectField values={["Male", "Female"]} />
                        <Button className="w-full text-xl font-semibold" type="submit">
                            Update Account
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default MyAccountPage;

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    url: z.string().refine((val) => val.length > 0, {
        message: "Url is required",
    })
})

export function UrlInputForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            url: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-5">
                <FormField
                    control={form.control}
                    name="url"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input placeholder="https://www.amazon.com/product_name/..."  {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter the url of the product.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Search</Button>
            </form>
        </Form>
    )
}
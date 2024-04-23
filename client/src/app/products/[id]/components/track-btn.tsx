'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { addUserEmailToProduct } from '../actions'
import toast from 'react-hot-toast'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    email: z.string().email()
})

type Props = {
    product: Product & Base
}

export default function TrackBtn({ product }: Props) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const resposne = addUserEmailToProduct(values.email, product.id)

        toast.promise(resposne, {
            loading: 'Saving...',
            success: <b>Added to watch list!</b>,
            error: (err) => `An error occured: ${err.message}`,
        })

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='w-full rounded-full py-6 text-xl tracking-tight' disabled={product.price === 0}>Track Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        Stay updated!
                    </DialogTitle>
                    <DialogDescription>
                        Never miss a bargain again with our timely alerts.
                    </DialogDescription>
                </DialogHeader>
                <div className="">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="your_email@example.com" type='email'  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" disabled={form.formState.isSubmitting}>
                                {
                                    form.formState.isSubmitting ? "Saving..." : "Track Product"
                                }
                            </Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
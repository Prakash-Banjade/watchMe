'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CiMail } from 'react-icons/ci'

type Props = {
    product: Product
}

export default function TrackBtn({ product }: Props) {
    const [email, setEmail] = useState('')

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
                <div className="grid gap-4 py-4">
                    <div className="">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <div className='relative w-full flex items-center justify-center'>
                            <Input id="email" placeholder="your_email@example.com" className='pl-10' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className='text-muted-foreground absolute left-[3%] -z-10'><CiMail /></div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" className='w-full'>Track Product</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
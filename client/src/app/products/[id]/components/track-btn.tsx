'use client'

import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {
    product: Product
}

export default function TrackBtn({ product }: Props) {
    return (
        <Button className='w-full rounded-full py-6 text-xl tracking-tight' disabled={product.price === 0}>Track Product</Button>
    )
}
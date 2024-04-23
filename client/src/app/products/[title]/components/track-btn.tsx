'use client'

import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

export default function TrackBtn({ }: Props) {
    return (
        <Button className='w-full rounded-full py-6 text-xl tracking-tight'>Track Product</Button>
    )
}
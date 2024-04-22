'use client'

import React from 'react'
import { Button } from '../ui/button'
import { GoArrowLeft } from "react-icons/go";
import { useRouter } from 'next/navigation';

type Props = {}

export default function BackBtn({ }: Props) {
    const router = useRouter()
    
    return (
        <Button variant={'ghost'} className='text-sm mt-1' onClick={() => router.back()}>
            <GoArrowLeft className='mr-1' />
            Back
        </Button>
    )
}
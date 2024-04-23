'use client'

import BackBtn from '@/components/utils/back-btn'
import React from 'react'

type Props = {}

export default function Error({ }: Props) {
    return (
        <>
            <BackBtn />
            <div className='text-center py-12 text-2xl font-medium'>Product not found!</div>
        </>
    )
}
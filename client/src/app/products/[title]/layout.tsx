import Header from '@/components/header'
import React, { Suspense } from 'react'

type Props = {
    children: React.ReactNode
}

export default function SingleProductLayout({
    children
}: Props) {
    return (
        <div>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
        </div>
    )
}
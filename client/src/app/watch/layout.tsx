import Header from '@/components/header'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function WatchLayout({
    children
}: Props) {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
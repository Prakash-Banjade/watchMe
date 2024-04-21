import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div>
            <TracingBeam>
                {children}
            </TracingBeam>
        </div>
    )
}
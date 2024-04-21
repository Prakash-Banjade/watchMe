import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'
import NepseTable from './components/nepse-table'
import { Metadata } from 'next'

type Props = {
    searchParams: {
        t: string | undefined
    }
}

export async function generateMetadata({ searchParams: { t } }: Props): Promise<Metadata> {
    switch (t) {
        case 'nepse': return { title: 'Nepse', description: 'Watch Market Nepse.' }
        case 'amazon': return { title: 'Amazon Products', description: 'Track Amazon Products.' }
    }
    return {
        title: 'Watch Me',
        description: 'Watch Market, Track Products, and Get Alerts.',
    }
}

export default function WatchPage({ searchParams: { t } }: Props) {

    if (!t) return redirect('/')

    switch (t) {
        case 'nepse': return (
            <main className='p-5'>
                <h1 className='text-3xl tracking-tighter my-5 font-bold uppercase'>Nepse</h1>
                <Suspense fallback={<p>Loading...</p>}>
                    <NepseTable />
                </Suspense>
                <p className='text-sm mt-2 py-5'>Source: <a href='https://merolagani.com/LatestMarket.aspx' className='underline'>Merolagani.com</a></p>
            </main>
        )
        case 'amazon': return <p>Amazon Products</p>
    }
}
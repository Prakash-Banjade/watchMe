import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'
import NepseTable from './components/nepse-table'
import { Metadata } from 'next'
import { UrlInputForm } from './components/urlInput-form'
import ProductImageCarousel from './components/product-image-carousel'

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
        case 'amazon': return (
            <main className='p-5 grid md:grid-cols-2 grid-cols-1 gap-5 min-h-[calc(100vh-80px)]'>
                <section className='h-full flex flex-col items-start justify-center'>
                    <div>
                        <h2 className='capitalize text-left text-5xl tracking-tight leading-tight font-bold'>Unleash the power of <br /><span className='text-primary'>WatchMe</span></h2>
                        <p className='mt-2 text-sm'>Powerful, self serve product and growth analytics to help you convert, engage, and retail more.</p>
                        <div className='mt-10'>
                            <UrlInputForm />
                        </div>
                    </div>
                </section>
                <section className='flex items-center justify-center h-full'>
                    <ProductImageCarousel />
                </section>
            </main>
        )
    }
}
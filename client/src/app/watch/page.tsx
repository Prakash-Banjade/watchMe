import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'
import NepseTable from './components/nepse/nepse-table'
import { Metadata } from 'next'
import { UrlInputForm } from './components/products/urlInput-form'
import ProductImageCarousel from './components/products/product-image-carousel'
import TrendingProducts from './components/products/trending-products'

type Props = {
    searchParams: {
        t: string | undefined
    }
}

const imageUrls = [
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2505&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1615486363973-f79d875780cf?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

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
            <div className='pb-36'>
                <main className='p-5 grid md:grid-cols-2 grid-cols-1 gap-5'>
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
                        <ProductImageCarousel imageUrls={imageUrls} />
                    </section>
                </main>
                <Suspense fallback={<p>Loading...</p>}>
                    <TrendingProducts />
                </Suspense>
            </div>
        )
    }
}
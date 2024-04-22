import BackBtn from '@/components/utils/back-btn';
import { getProductData } from '@/lib/product-data-access'
import Image from 'next/image';
import React from 'react'
import { CiHeart } from "react-icons/ci";

type Props = {
    searchParams: {
        id: string,
    }
}

export default async function SingleProductPage({ searchParams: { id } }: Props) {

    const product = await getProductData(id);


    return (
        <>
            <BackBtn />
            <main className='min-h-[calc(100vh-80px)] grid md:grid-cols-2 gap-5'>
                <section className='h-full grid place-items-center'>
                    <div className='px-12 py-24 border rounded-md'>
                        <Image
                            src={product.image}
                            alt={product.title}
                            className='rounded-md'
                            height={600}
                            width={400}
                            loading='lazy'
                        />
                    </div>
                </section>

                <section className='flex flex-col items-start justify-center'>
                    <a href={product.url} className='text-muted-foreground text-xs'>Visit Product</a>
                    <h1 className='text-3xl tracking-tighter leading-tight my-5 mt-2 font-semibold'>{product.title}</h1>
                    <section className='flex items-center'>
                        <div className='px-3 py-2 rounded-md bg-pink-500/10 text-pink-500 flex items-center'><CiHeart className='mr-2 text-xl' /> 123</div>

                    </section>
                    <hr className='bg-border w-full my-3' />

                </section>

            </main></>
    )
}
import BackBtn from '@/components/utils/back-btn';
import { getProductData } from '@/lib/product-data-access'
import Image from 'next/image';
import React from 'react'
import { CiHeart, CiStar } from "react-icons/ci";
import { IoMdPricetags } from "react-icons/io";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs"
import TrackBtn from './components/track-btn';

type Props = {
    searchParams: {
        id: string,
    }
}

function originalPrice(product: Product) {
    if (!product.discount) return product.price.toLocaleString();
    const originalPrice = product.price + (+product.discount.replace(/\D/g, '') / 100) * product.price;
    return Math.trunc(+originalPrice).toLocaleString()
}

function PriceCard({ variant, product, icon }
    : {
        variant: 'current' | 'average' | 'highest' | 'lowest',
        product: Product,
        icon: React.ReactNode
    }) {

    const price = variant === 'current' ? product.price : variant === 'highest' ? originalPrice(product) : variant === 'lowest' ? product.price : product.price

    return (
        <div className='px-5 py-4 rounded-lg border bg-secondary text-sm flex flex-col gap-2'>
            <p className='capitalize'>{variant} price</p>
            <div className='flex gap-2 items-center'>
                <span className='text-2xl'>{icon}</span>
                <strong className='text-2xl'><span className='text-sm'>{product.priceSymbol}</span> {price.toLocaleString()}</strong>
            </div>
        </div>
    )
}



export default async function SingleProductPage({ searchParams: { id } }: Props) {

    const product = await getProductData(id);


    return (
        <>
            <BackBtn />
            <main className='py-12 grid md:grid-cols-2 gap-5'>
                <section className='h-full grid place-items-center'>
                    <div className='px-12 py-24 shadow-sm border rounded-md'>
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
                    <a href={product.url} className='text-muted-foreground text-xs hover:text-primary'>Visit Product</a>
                    <h1 className='text-3xl tracking-tighter leading-tight my-5 mt-2 font-semibold'>{product.title}</h1>
                    <section className='flex items-center'>
                        <div className='px-3 py-2 rounded-md bg-pink-500/10 text-pink-500 flex items-center'><CiHeart className='mr-2 text-xl' /> 123</div>

                    </section>
                    <hr className='bg-border w-full my-6' />

                    <section className='flex gap-32 items-center'>
                        <div className='flex flex-col gap-1'>
                            <strong className='text-4xl'><span className='text-sm'>{product.priceSymbol}</span> {product.price.toLocaleString()}</strong>
                            {product.discount && <del className='text-muted-foreground mt-3 text-lg'>{product.priceSymbol} {originalPrice(product)}</del>}
                        </div>

                        <div>
                            <div className='px-3 py-2 text-sm rounded-full text-[#a28c7e] bg-[#a28c7e]/10 flex items-center'>
                                <CiStar className='mr-2 text-lg' />
                                {product.rating || 'N/A'}
                                <span className='text-xs ml-2'>( {product.ratingNumber} )</span>
                            </div>
                        </div>
                    </section>

                    <hr className='bg-border w-full my-6' />

                    <section className='grid sm:grid-cols-2 gap-5 grid-cols-1 w-full'>
                        <PriceCard variant='current' product={product} icon={<IoMdPricetags className='text-[#1E90FF]' />} />
                        <PriceCard variant='average' product={product} icon={<AiOutlineMoneyCollect className='text-[#800080]' />} />
                        <PriceCard variant='highest' product={product} icon={<BsGraphUpArrow className='text-[#a00]' />} />
                        <PriceCard variant='lowest' product={product} icon={<BsGraphDownArrow className='text-[#0a0]' />} />
                    </section>

                    <section className='mt-10 w-full'>
                        <TrackBtn />
                    </section>

                </section>

            </main>

            <hr className='bg-border w-full my-6' />

            <section className='mb-32'>
                <h2 className='text-3xl font-medium tracking-tight mb-8'>Product Details</h2>
                <ul className='list-disc pl-5'>
                    {product.descriptionArray.map((detail, index) => (
                        <li key={index} className='text-sm my-3'>
                            {detail}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
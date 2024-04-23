import BackBtn from '@/components/utils/back-btn';
import { getProductData } from '@/lib/product-data-access'
import React from 'react'
import { CiHeart, CiStar } from "react-icons/ci";
import { IoMdPricetags } from "react-icons/io";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs"
import TrackBtn from './components/track-btn';
import ProductImageCarousel from '@/app/watch/components/products/product-image-carousel';
import { TiInfoOutline } from "react-icons/ti";

type Props = {
    params: {
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

    const price = product.price === 0 ? 'N/A' : variant === 'current' ? product.price : variant === 'highest' ? originalPrice(product) : variant === 'lowest' ? product.price : product.price

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



export default async function SingleProductPage({ params: { id } }: Props) {

    const product = await getProductData(id);
    console.log(product)

    return (
        <>
            <BackBtn />
            <main className='py-6 grid lg:grid-cols-2 gap-10'>
                <section className='h-full grid place-items-center'>
                    <div className='px-12 py-24 shadow-sm border rounded-md'>
                        <ProductImageCarousel imageUrls={product.images} />
                    </div>
                </section>

                <section className='flex flex-col items-start justify-center'>
                    <a href={product.url} className='text-muted-foreground text-xs hover:text-primary'>Visit Product</a>
                    <h1 className='text-3xl tracking-tighter leading-tight my-5 mt-2 font-semibold'>{product.title}</h1>
                    <section className='flex items-center'>
                        <div className='px-3 py-2 rounded-md bg-pink-500/10 text-pink-500 flex items-center'><CiHeart className='mr-2 text-xl' /> 123</div>

                    </section>
                    <hr className='bg-border w-full my-6' />

                    {/* Price not available yet */}
                    {
                        product?.price === 0 && <div className='mb-5 px-3 py-2 rounded-full text-sm text-primary bg-red-300/10 flex items-center gap-2'>
                            <TiInfoOutline />
                            This product has variable price. You can check out the main site.
                        </div>
                    }

                    <section className='flex gap-32 items-center'>
                        <div className='flex flex-col gap-1'>
                            <strong className='text-4xl'>
                                <span className='text-sm'>{product.priceSymbol}</span>
                                {product?.price === 0 ? 'N/A' : product.price.toLocaleString()}
                            </strong>
                            {product.discount && <del className='text-muted-foreground mt-3 text-lg'>{product.priceSymbol} {originalPrice(product)}</del>}
                        </div>

                        <div className='flex flex-wrap gap-2'>
                            <div className='px-3 py-2 text-sm rounded-full w-fit text-[#b39d8f] bg-[#a28c7e]/10 flex items-center'>
                                <CiStar className='mr-2 text-lg' />
                                {product.rating || 'N/A'}
                                <span className='text-xs ml-2'>( {product.ratingNumber} )</span>
                            </div>

                            {product.rating && <div className='rounded-full px-3 py-2 text-sm text-pink-400 bg-pink-100/10'>
                                <p>{product.rating / 5 * 100}% of the customers likes this</p>
                            </div>}
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
                        <TrackBtn product={product} />
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
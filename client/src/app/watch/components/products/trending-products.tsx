import { getProducts } from '@/lib/product-data-access'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiStar } from 'react-icons/ci'

type Props = {}

function SingleProductItem({ product }: { product: Product & Base }) {
    return (
        <Link href={`/products/${product.id}`}>
            <figure className='p-3 border shadow-sm hover:shadow-lg transition-all duration-500 rounded-sm'>
                <section className='rounded-md flex items-center justify-center'>
                    <Image
                        src={product.images[0]}
                        alt={product.title}
                        width={200}
                        height={300}
                        className='rounded-md'
                        loading='lazy'
                    />
                </section>

                <section className='mt-2'>
                    <h3 className='font-medium line-clamp-1'>{product.title}</h3>
                    <div className='mt-3 flex items-center justify-between'>
                        <div>
                            <div className='px-3 py-2 text-sm rounded-full w-fit text-[#b39d8f] bg-[#a28c7e]/10 flex items-center'>
                                <CiStar className='mr-2 text-lg' />
                                {product.rating || 'N/A'}
                            </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <strong className='text-lg'>
                                <span className='text-sm'>{product.priceSymbol}</span>
                                {product?.price === 0 ? 'N/A' : product.price.toLocaleString()}
                            </strong>
                        </div>

                    </div>
                </section>
            </figure>
        </Link>
    )
}

export default async function TrendingProducts({ }: Props) {
    const productsResponse = getProducts()

    const products = await productsResponse;

    return (
        <div className='mt-10'>
            <header className='text-3xl font-medium mb-10'>Trending Products</header>
            <section className='grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5'>
                {
                    products.map(product => <SingleProductItem key={product.id} product={product} />)
                }
            </section>
        </div>
    )
}
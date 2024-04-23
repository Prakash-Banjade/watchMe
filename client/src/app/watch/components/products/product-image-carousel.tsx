import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'


type Props = {
    imageUrls: string[]
}


export default function ProductImageCarousel({ imageUrls }: Props) {
    return (
        <div className='px-24 py-12 rounded-md flex items-center justify-center'>
            <Carousel className="w-full max-w-xs flex items-center justify-center">
                <CarouselContent>
                    {imageUrls?.map((url, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Image
                                    src={url}
                                    alt='product image'
                                    className='rounded-md'
                                    height={600}
                                    width={400}
                                    loading='lazy'
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
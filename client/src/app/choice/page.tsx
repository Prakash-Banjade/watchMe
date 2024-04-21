'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {}

export default function ChoicePage({ }: Props) {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className='min-h-screen relative overflow-hidden'
        >
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className="sm:text-3xl text-2xl lg:text-4xl font-bold text-center z-20">
                    Choose what to watch
                </h1>
                <div className='flex justify-center mt-5 gap-4'>
                    <Button size={'lg'} variant={'outline'} className='rounded-2xl  shadow-lg hover:shadow-2xl transition-all' asChild>
                        <Link href="/choice">
                            Nepse
                        </Link>
                    </Button>
                    <Button size={'lg'} variant={'outline'} className='rounded-2xl  shadow-lg hover:shadow-2xl transition-all' asChild>
                        <Link href="/choice">
                            Amazon Products
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.main>
    )
}
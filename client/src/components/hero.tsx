'use client'

import React from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <motion.main
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className='min-h-screen relative overflow-hidden'
        >
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className="sm:text-7xl text-5xl lg:text-9xl font-bold text-center relative z-20">
                    Watch Me
                </h1>
                <p className='text-center'>Watch Market, Track Products, and Get Alerts.</p>
                <div className='flex justify-center'>
                    <Button size={'lg'} className='rounded-full mt-5 sm:text-xl md:px-8 md:py-6 shadow-lg hover:shadow-2xl transition-all' asChild>
                        <Link href="/choice">
                            Get started
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.main>
    )
}
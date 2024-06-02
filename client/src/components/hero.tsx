'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
    const [choice, setChoice] = useState(false);

    return choice ? <Choice /> : (
        <div
            className='min-h-screen grid place-items-center'
        >
            <motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    stiffness: 200,
                    damping: 25,
                    restDelta: 2,
                    duration: .5
                }}
            >
                <div>
                    <h1 className="sm:text-7xl text-5xl lg:text-9xl font-bold text-center relative z-20">
                        Watch Me
                    </h1>
                    <p className='text-center'>Watch Market, Track Products, and Get Alerts.</p>
                    <div className='flex justify-center'>
                        <Button size={'lg'} className='rounded-full mt-5 sm:text-xl md:px-8 md:py-6 shadow-lg hover:shadow-2xl transition-all' onClick={() => setChoice(true)}>
                            Get started
                        </Button>
                    </div>
                </div>
            </motion.main>
        </div>
    )
}

function Choice({ }: Props) {
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
                        <Link href="/watch?t=nepse">
                            Nepse
                        </Link>
                    </Button>
                    <Button size={'lg'} variant={'outline'} className='rounded-2xl  shadow-lg hover:shadow-2xl transition-all' asChild>
                        <Link href="/watch?t=amazon">
                            Amazon Products
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.main>
    )
}
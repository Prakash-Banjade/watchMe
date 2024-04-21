'use client'

import React from 'react'

type Props = {}

export default function Error({}: Props) {
  return (
    <div className='text-center py-12 text-2xl font-medium'>Failed to fetch data</div>
  )
}
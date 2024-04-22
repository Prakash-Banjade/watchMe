import React from 'react'

type Props = {
    searchParams: {
        id: string,
    }
}

export default function SingleProductPage({ searchParams: { id } }: Props) {
    return (
        <div>{id}</div>
    )
}
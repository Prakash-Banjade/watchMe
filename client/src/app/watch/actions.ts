'use server'

import { API } from "@/lib/api"

export async function scrapeProduct(url: string) {
    const res = await fetch(`${API}/products?url=${url}`, { cache: 'force-cache' })
    const data = await res.json()
    return data
}
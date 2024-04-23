import { API } from "./api"

export async function getProductData(id: string) {
    const res = await fetch(`${API}/products/${id}`, { cache: 'no-cache' })
    if (!res.ok) throw new Error('Failed to fetch data')

    const data: Product & Base = await res.json()
    return data
}

export async function getProducts() {
    const res = await fetch(`${API}/products`, { cache: 'no-cache' })
    if (!res.ok) throw new Error('Failed to fetch data')

    const data: (Product & Base)[] = await res.json()
    return data
}
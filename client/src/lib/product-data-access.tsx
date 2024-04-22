import { API } from "./api"

export async function getProductData(id: string) {
    const res = await fetch(`${API}/products/${id}`, { cache: 'force-cache' })
    if (!res.ok) throw new Error('Failed to fetch data')

    const data: Product = await res.json()
    return data
}
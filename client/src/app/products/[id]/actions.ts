'use server'

import { API } from "@/lib/api";

export async function addUserEmailToProduct(email: string, productId: string) {
    console.log(`${API}/products/add_user`)
    const res = await fetch(`${API}/products/add_user`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, productId }),
    })

    if (!res?.ok) throw new Error('Failed to add user email to product')

    return;
}
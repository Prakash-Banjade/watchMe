'use client'

import { usePathname, useSearchParams } from "next/navigation";

export function useRoutes(){
    const pathName = usePathname()
    const params = useSearchParams()

    return [
        {
            path: '/',
            label: 'Home', 
            isActive: pathName === '/'
        },
        {
            path: '/watch?t=nepse',
            label: 'Nepse',
            isActive: params.get('t') === 'nepse'
        },
        {
            path: '/watch?t=amazon',
            label: 'Amazon Products',
            isActive: params.get('t') === 'amazon'
        }
    ]
}
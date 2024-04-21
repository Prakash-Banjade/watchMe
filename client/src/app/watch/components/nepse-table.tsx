import { DataTable } from '@/components/data-table';
import { getNepseData } from '@/lib/nepse-data-access'
import React from 'react'
import { nepseColumns } from './columns';

type Props = {}

export default async function NepseTable({ }: Props) {

    const data = await getNepseData();

    return (
        <>
        <p className='text-sm text-muted-foreground'>Found: {data.length} stocks</p>
        <DataTable columns={nepseColumns} data={data} />
        </>
    )
}
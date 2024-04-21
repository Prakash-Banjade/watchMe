"use client"

import { Button } from "@/components/ui/button";
import { TooltipWrapper } from "@/components/utils/tooltip-provider";
import { ColumnDef } from "@tanstack/react-table"
import clsx from "clsx";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export const nepseColumns: ColumnDef<Stock>[] = [
    {
        accessorKey: "symbol",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Symbol
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const stock = row.original;

            return <TooltipWrapper
                title={stock.title}
                trigger={
                    <a href={stock.url} target="__blank" rel="noopener noreferrer" className={clsx(stock.percentChange > 0 ? "text-green-500" : "text-red-500", 'pl-4')}>{stock.symbol}</a>
                }
            />
        },
    },
    {
        accessorKey: "LTP",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    LTP
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const stock = row.original;

            return <span className={clsx(stock.percentChange > 0 ? "text-green-500" : "text-red-500", 'pl-4')}>{stock.LTP?.toLocaleString()}</span>
        },
    },
    {
        accessorKey: "percentChange",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Percentage Change
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const stock = row.original;

            return <span className={clsx(stock.percentChange > 0 ? "text-green-500" : "text-red-500", 'pl-4')}>{stock.percentChange}</span>
        },
    },
    {
        accessorKey: "open",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Open
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const stock = row.original;

            return <span className={clsx(stock.percentChange > 0 ? "text-green-500" : "text-red-500", 'pl-4')}>{stock.open?.toLocaleString()}</span>
        },
    },
    {
        accessorKey: "high",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    High
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const stock = row.original;

            return <span className={clsx(stock.percentChange > 0 ? "text-green-500" : "text-red-500", 'pl-4')}>{stock.high?.toLocaleString()}</span>
        },
    },
    {
        accessorKey: "quantity",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Quantity
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const stock = row.original;

            return <span className={clsx(stock.percentChange > 0 ? "text-green-500" : "text-red-500", 'pl-4')}>{stock.quantity?.toLocaleString()}</span>
        },
    },
    {
        accessorKey: "pClose",
        header: "pClose",
        cell: ({ row }) => {
            const stock = row.original;

            return <span className={clsx(stock.percentChange > 0 ? "text-green-500" : "text-red-500")}>{stock.pClose}</span>
        },
    },
    {
        accessorKey: "diff",
        header: "diff",
        cell: ({ row }) => {
            const stock = row.original;

            return <span className={clsx(stock.percentChange > 0 ? "text-green-500" : "text-red-500")}>{stock.diff}</span>
        },
    },
]

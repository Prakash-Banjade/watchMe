import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci"

export function HeaderDropDownMenu() {
    return (
       <div className="lg:hidden block">
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size={'icon'} variant={'outline'} className='sm:flex hidden text-xl'><CiMenuFries /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" side="right" alignOffset={110}>
                <DropdownMenuItem asChild>
                    <Link href={'/'}>Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={'/watch?t=nepse'}>Nepse</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href={'/watch?t=amazon'}>Amazon Products</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
       </div>
    )
}

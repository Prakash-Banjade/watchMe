'use client'
import { useRoutes } from '@/hooks/useRoutes'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { ModeToggle } from './theme-toggle'
import { HeaderDropDownMenu } from './header-menu-dropdown'

type Props = {}

export default function Header({ }: Props) {
  const routes = useRoutes()

  useEffect(() => {
    const header = document.getElementById("header")

    if (!header) return;

    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        header!.style.top = "0";
      } else {
        header!.style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  }, [])

  return (
    <header className='flex items-center justify-between py-5 border-b sticky top-0 z-[50] backdrop-blur-xl transition-all px-5' id='header'>
      <section className='flex items-center gap-4'>
        <div className='lg:hidden block'><HeaderDropDownMenu /></div>
        <Link href="/" className='text-3xl font-extrabold'>Watch<span className='text-primary'>Me</span></Link>
      </section>

      <section className='lg:block hidden'>
        <nav>
          <ul className='flex gap-6 items-center '>
            {
              routes.map(route => (
                <li key={route.path}>
                  <Link href={route.path} className={clsx(route.isActive && 'active', 'tab px-4 py-2 rounded-full transition-all')}>{route.label}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </section>

      <section className='flex items-center gap-5'>
        <ModeToggle />
        <Button asChild>
          <a href={'https://github.com/Prakash-Banjade/watchMe'} target='_blank' rel='noopener noreferrer'>
            <GitHubLogoIcon className='mr-2 text-2xl' />
            GitHub
          </a>
        </Button>
      </section>
    </header>
  )
}
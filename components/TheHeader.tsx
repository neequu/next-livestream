import React from 'react'
import DarkToggle from './DarkToggle'
import { UserButton } from '@clerk/nextjs'
import Search from './Search'
import Image from 'next/image'
import Link from 'next/link'

const TheHeader = () => {
  return (
    <header className='bg-gray-700 p-4 shadow'>
      <div className='flex items-center justify-center gap-4 sm:justify-between'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={32}
            height={32}
            alt='logo'
            className='min-h-8 min-w-8'
          />
        </Link>
        <Search />
        <div className='flex items-center'>
          <UserButton afterSignOutUrl='/' />
          {/* <DarkToggle /> */}
        </div>
      </div>
    </header>
  )
}

export default TheHeader

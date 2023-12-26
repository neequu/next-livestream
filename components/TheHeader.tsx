import React from 'react'
import DarkToggle from './DarkToggle'
import { UserButton } from '@clerk/nextjs'
import Search from './Search'
import Image from 'next/image'
import Link from 'next/link'

const TheHeader = () => {
  return (
    <header className='bg-gray-700 py-4 shadow'>
      <div className='flex items-center justify-center sm:justify-between'>
        <Link href='/'>
          <Image src='/logo.svg' width={32} height={32} alt='logo' />
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

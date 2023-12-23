import React from 'react'
import DarkToggle from './DarkToggle'
import { UserButton } from '@clerk/nextjs'
import Search from './Search'

const TheHeader = () => {
  return (
    <header className='flex items-center justify-center bg-[#242731] py-4 sm:justify-between'>
      <h1 className='hidden sm:block'>nick</h1>
      {/* <div className='flex items-center'>
        <UserButton afterSignOutUrl='/' />
        <DarkToggle />
      </div> */}
      <Search />
    </header>
  )
}

export default TheHeader

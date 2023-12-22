import React from 'react'
import DarkToggle from './DarkToggle'
import { UserButton } from '@clerk/nextjs'
import Search from './Search'

const TheHeader = () => {
  return (
    <header className='flex items-center justify-between bg-neutral-600 py-4'>
      <h1 className=''>nick</h1>
      {/* <div className='flex items-center'>
        <UserButton afterSignOutUrl='/' />
        <DarkToggle />
      </div> */}
      <Search />
    </header>
  )
}

export default TheHeader

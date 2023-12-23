import React from 'react'
import Sidebar from '@/components/sidebar'
import TheHeader from '@/components/TheHeader'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TheHeader />
      <main className='relative flex-1 bg-gray-900/40'>
        <Sidebar />
        {children}
      </main>
    </>
  )
}

export default layout

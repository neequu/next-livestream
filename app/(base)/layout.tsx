import React from 'react'
import Sidebar from '@/components/sidebar'
import TheHeader from '@/components/TheHeader'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-1 flex-col'>
      <TheHeader />
      <main className=' flex flex-1 flex-col bg-gray-700/90'>
        <div className='container mx-auto flex flex-1 flex-col'>
          {children}
          <Sidebar />
        </div>
      </main>
    </div>
  )
}

export default layout

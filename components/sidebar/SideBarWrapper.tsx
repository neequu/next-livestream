import useSidebarStore from '@/stores/sidebarStore'
import React from 'react'

const SideBarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { collapsed } = useSidebarStore((state) => state)
  return (
    <aside className='absolute bottom-0 left-0 top-0 flex h-full w-60 flex-col border-r border-gray-500/40 bg-gray-700/80'>
      {children}
    </aside>
  )
}

export default SideBarWrapper

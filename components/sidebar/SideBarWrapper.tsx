'use client'
import { cn } from '@/lib/utils'
import useSidebarStore from '@/stores/sidebarStore'
import React from 'react'

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { collapsed } = useSidebarStore((state) => state)
  return (
    <aside
      className={cn(
        'flex w-60 flex-col border-r border-gray-600/40 bg-gray-800 transition-[width_300]',
        collapsed && 'w-[70px]',
      )}
    >
      {children}
    </aside>
  )
}

export default SidebarWrapper

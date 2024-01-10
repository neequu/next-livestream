'use client'
import { cn } from '@/lib/utils'
import useSidebarStore from '@/stores/sidebarStore'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { collapsed, onCollapse, onExpand } = useSidebarStore((state) => state)
  const isMobile = useMediaQuery('(min-width: 640px)')

  useEffect(() => {
    if (isMobile) onExpand()
    else onCollapse()
  }, [isMobile, onCollapse, onExpand])

  return (
    <aside
      className={cn(
        'flex w-[70px] flex-col border-r border-gray-600/40 bg-gray-800 py-2 transition-[width_300] sm:px-4',
        !collapsed && 'w-60',
      )}
    >
      {children}
    </aside>
  )
}

export default SidebarWrapper

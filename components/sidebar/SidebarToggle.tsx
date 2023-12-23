'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import useSidebarStore from '@/stores/sidebarStore'

const SidebarToggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebarStore((state) => state)

  return (
    <>
      {collapsed ? (
        <div className='hidden justify-center p-2 sm:flex'>
          <Button variant='ghost' className='p-2' onClick={onExpand}>
            <ArrowRightFromLine />
          </Button>
        </div>
      ) : (
        <div className='flex items-center justify-between p-2'>
          <p className='font-semibold'>Recommended</p>
          <Button variant='ghost' className='p-2' onClick={onCollapse}>
            <ArrowLeftFromLine />
          </Button>
        </div>
      )}
    </>
  )
}

export default SidebarToggle

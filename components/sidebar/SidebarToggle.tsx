'use client'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react'
import useSidebarStore from '@/stores/sidebarStore'
import Hint from '@/components/Hint'

const SidebarToggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebarStore((state) => state)
  const label = collapsed ? 'Expand' : 'Collapse'
  return (
    <>
      {collapsed ? (
        <div className='hidden justify-center p-2 sm:flex'>
          <Hint label={label}>
            <Button
              variant='ghost'
              className='p-2 hover:bg-gray-700'
              onClick={onExpand}
            >
              <ArrowRightFromLine className='size-5' />
            </Button>
          </Hint>
        </div>
      ) : (
        <div className='hidden items-center justify-between p-2 sm:flex'>
          <p className='font-semibold'>Recommended</p>
          <Hint label={label}>
            <Button
              variant='ghost'
              className='p-2 hover:bg-gray-700'
              onClick={onCollapse}
            >
              <ArrowLeftFromLine className='size-5' />
            </Button>
          </Hint>
        </div>
      )}
    </>
  )
}

export default SidebarToggle

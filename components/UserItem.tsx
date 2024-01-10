'use client'

import useSidebarStore from '@/stores/sidebarStore'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import UserAvatar from './UserAvatar'

const UserItem = ({
  username,
  imageUrl,
  isLive,
}: {
  username: string
  imageUrl: string
  isLive: boolean
}) => {
  const pathname = usePathname()
  const { collapsed } = useSidebarStore((state) => state)

  const href = `/${username}`
  const isActive = pathname === href

  return (
    <Button
      asChild
      variant='ghost'
      className={cn('h-12 w-full', isActive && 'bg-accent')}
    >
      <Link href={href}>
        <div
          className={cn(
            'items flex w-full gap-x-4',
            collapsed && 'justify-center',
          )}
        >
          <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
        </div>
      </Link>
    </Button>
  )
}

export default UserItem

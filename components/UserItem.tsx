'use client'

import useSidebarStore from '@/stores/sidebarStore'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import UserAvatar from './UserAvatar'
import LiveBadge from './LiveBadge'

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
      className={cn(
        'h-12 w-full px-2 hover:bg-gray-700',
        isActive && 'bg-accent',
      )}
    >
      <Link href={href}>
        <div
          className={cn(
            'flex w-full items-center gap-3',
            collapsed && 'justify-center',
          )}
        >
          <UserAvatar imageUrl={imageUrl} username={username} isLive={isLive} />
          {!collapsed && <p>{username}</p>}
          {!collapsed && isLive && <LiveBadge className='ml-auto' />}
        </div>
      </Link>
    </Button>
  )
}

export default UserItem

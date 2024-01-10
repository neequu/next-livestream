import { type VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { cn } from '@/lib/utils'
import LiveBadge from './LiveBadge'

const avatarSizes = cva('', {
  variants: {
    size: {
      default: 'h-8 w-8',
      lg: 'h-14 w-14',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string
  imageUrl: string
  isLive?: boolean
  showBadge?: boolean
}

const UserAvatar = ({
  imageUrl,
  username,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
  const shouldShowBadge = showBadge && isLive
  return (
    <div className='relative'>
      <Avatar
        className={cn(
          isLive && 'border border-background ring-2 ring-rose-500',
          avatarSizes({ size }),
        )}
      >
        <AvatarImage src={imageUrl} className='object-cover' />
        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {shouldShowBadge && (
        <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 transform'>
          <LiveBadge />
        </div>
      )}
    </div>
  )
}

export default UserAvatar

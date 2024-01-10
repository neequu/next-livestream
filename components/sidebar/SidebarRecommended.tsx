'use client'
import useSidebarStore from '@/stores/sidebarStore'
import { User } from '@prisma/client'
import UserItem from '../UserItem'

const SidebarRecommended = ({ data }: { data: User[] }) => {
  const { collapsed } = useSidebarStore((state) => state)
  const showLabel = !collapsed && data.length > 0

  return (
    <div>
      {showLabel && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              <UserItem
                username={user.username}
                imageUrl={user.imageUrl}
                isLive={true}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SidebarRecommended

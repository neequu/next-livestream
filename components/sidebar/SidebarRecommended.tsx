import { User } from '@prisma/client'
import UserItem from '../UserItem'

const SidebarRecommended = ({ data }: { data: User[] }) => {
  const hasData = data.length > 0

  return (
    <>
      {hasData && (
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
    </>
  )
}

export default SidebarRecommended

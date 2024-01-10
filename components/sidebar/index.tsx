import SidebarWrapper from './SidebarWrapper'
import SidebarToggle from './SidebarToggle'
import SidebarRecommended from './SidebarRecommended'
import { getRecommended } from '@/lib/recommended'

const Sidebar = async () => {
  const recommended = await getRecommended()

  return (
    <SidebarWrapper>
      <SidebarToggle />
      <div>
        <SidebarRecommended data={recommended} />
      </div>
    </SidebarWrapper>
  )
}

export default Sidebar

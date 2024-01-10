import SidebarWrapper from './SidebarWrapper'
import SidebarToggle from './SidebarToggle'
import SidebarRecommended from './SidebarRecommended'
import { getRecommended } from '@/lib/recommended'

const Sidebar = async () => {
  const recommended = await getRecommended()

  return (
    <SidebarWrapper>
      <SidebarToggle />
      <SidebarRecommended data={recommended} />
    </SidebarWrapper>
  )
}

export const SidebarSkeleton = () => {
  return (
    <aside className='flex w-[70px] flex-col border-r border-gray-600/40 bg-gray-800 py-2 transition-[width_300] sm:w-60 sm:px-4'>
      {/* <ToggleSkeleton /> */}
      {/* <RecommendedSkeleton /> */}
      loading
    </aside>
  )
}

export default Sidebar

import HomeContainer from '@/components/HomeContainer'
import Sidebar, { SidebarSkeleton } from '@/components/sidebar'
import TheHeader from '@/components/TheHeader'
import { Suspense } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TheHeader />
      <main className='relative flex flex-1 bg-gray-700/90'>
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <HomeContainer>{children}</HomeContainer>
      </main>
    </>
  )
}

export default layout

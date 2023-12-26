import HomeContainer from '@/components/HomeContainer'
import Sidebar from '@/components/sidebar'
import TheHeader from '@/components/TheHeader'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TheHeader />
      <main className='relative flex-1 bg-gray-900/40'>
        <Sidebar />
        <HomeContainer>{children}</HomeContainer>
      </main>
    </>
  )
}

export default layout

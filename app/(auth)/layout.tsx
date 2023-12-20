import TheHeader from '@/components/TheHeader'
import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TheHeader />
      <section className='grid h-screen place-content-center'>
        {children}
      </section>
    </>
  )
}

export default AuthLayout

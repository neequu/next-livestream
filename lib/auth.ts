import { currentUser } from '@clerk/nextjs'
import prisma from '@/lib/prisma'

export async function getCurrentUser() {
  const clerkUser = await currentUser()

  if (!clerkUser || !clerkUser.username) throw new Error('Unathorized')

  const user = await prisma.user.findUnique({
    where: { externalUserId: clerkUser.id },
  })

  if (!user) throw new Error('Not found')

  return user
}

// export const

import { getCurrentUser } from './auth'
import prisma from '@/lib/prisma'

export async function getRecommended() {
  let userId

  try {
    const currentUser = await getCurrentUser()
    userId = currentUser.id
  } catch {
    userId = null
  }

  if (userId) {
    return prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          id: userId,
        },
      },
    })
  } else {
    return prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
  }
}

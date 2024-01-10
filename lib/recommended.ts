import { getCurrentUser } from './auth'
import prisma from '@/lib/prisma'

export async function getRecommended() {
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return users
}

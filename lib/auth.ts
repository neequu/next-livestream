import { currentUser } from "@clerk/nextjs";
import prisma from '@/lib/prisma'

async function getCurrentUser() {
  const clerkUser = await currentUser()

  if (!clerkUser || !clerkUser.username)
    throw new Error('Unathorized')


  const user = await prisma.user.

}

export const  
import Image from "next/image";
import prisma from "@/lib/prisma";

async function getPost() {
  const users = await prisma.user.findMany();
  return users;
}

export default async function Home() {
  const users = await getPost();
  return <div>{JSON.stringify(users)}</div>;
}

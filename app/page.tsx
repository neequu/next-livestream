import Image from "next/image";

export default async function Home() {
  const pets = ["zxc"];
  return <div>{JSON.stringify(pets)}</div>;
}

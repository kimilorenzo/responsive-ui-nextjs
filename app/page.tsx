import { Metadata } from "next";

type profileData = {
  data: {
    name: string;
    description: string;
  };
};

export const metadata: Metadata = {
  title: "Belajar NextJS",
  description: "Website keren banget",
};

async function getData(): Promise<profileData> {
  const res = await fetch("/api/data", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className={`flex flex-col items-center justify-center h-screen bg-yellow-100`}>
      <h1 className="text-[#ff4d32] font-bold text-2xl underline decoration-[#ff4d32]">{data.data.name}</h1>
      <p className="text-[#ff4d32] font-light">{data.data.description}</p>
    </div>
  );
}

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
  const res = await fetch("https://responsive-ui-nextjs.vercel.app/api/data", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const frontendSkills = [
    { id: 1, name: "NextJS" },
    { id: 2, name: "ReactJS" },
    { id: 3, name: "Svelte" },
  ];

  const backendSkills = [
    { id: 1, name: "NestJS" },
    { id: 2, name: "ExpressJS" },
    { id: 3, name: "Spring Boot Java" },
  ];

  return (
    <div>
      <div id="home" className={`flex flex-col items-center justify-center h-screen bg-yellow-100`}>
        <h1 className="text-[#ff4d32] font-bold text-2xl underline decoration-[#ff4d32]">{data.data.name}</h1>
        <p className="text-[#ff4d32] font-light">{data.data.description}</p>
      </div>
      <div id="about" className={`flex flex-col items-center justify-center h-screen bg-[#ff4d32] gap-4`}>
        <div className="flex flex-col bg-[#ff4d32] gap-4">
          <h1 className="text-2xl font-bold text-yellow-100 underline decoration-yellow-100">Skills:</h1>
          <div>
            <h1 className="font-bold text-yellow-100">Frontend:</h1>
            <ul>
              {frontendSkills.map((skill) => (
                <li key={skill.id}>
                  <p className="text-yellow-100">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-yellow-100 underline decoration-yellow-100">Backend:</h1>
            <ul>
              {backendSkills.map((skill) => (
                <li key={skill.id}>
                  <p className="text-yellow-100">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getData() {
  const res = await fetch(
    "https://responsive-ui-nextjs-964jsl1cd-kimilorenzos-projects.vercel.app/api/data",
    {
      cache: "no-store",
    }
  );

  return {
    status: res.status,
    contentType: res.headers.get("content-type"),
  };
}

export default async function Home() {
  const data = await getData();

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}
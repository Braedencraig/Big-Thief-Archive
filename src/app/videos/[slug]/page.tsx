import { videosQuery } from "../../../../queries";
import { getData } from "../../../../helpers";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: {
      videoCollection: { items },
    },
  } = await getData({ query: videosQuery });

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>{params.slug}</h2>
      <div className="w-2/4 justify-between flex flex-row items-center">
        <Link href={`/videos/${params.slug}/official`}>Official</Link>
        <Link href={`/videos/${params.slug}/sessions`}>Sessions</Link>
        <Link href={`/videos/${params.slug}/live`}>Live</Link>
      </div>
    </main>
  );
}

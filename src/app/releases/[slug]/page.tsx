import { releaseByYearQuery } from "../../../../queries";
import { getData } from "../../../../helpers";
import Link from "next/link";
import VideoBlock from "@/components/VideoBlock";

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: {
      releasedMusicCollection: { items },
    },
  } = await getData({ query: releaseByYearQuery });

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {decodeURIComponent(params.slug)}
      </h2>
      <div className="w-2/4 justify-between flex flex-row items-center"></div>
      <Link href={`/photos/${params.slug}`}>Photos</Link>
      <Link href={`/lyrics/${params.slug}`}>Lyrics</Link>
      <div>Videos</div>
      {items[0].videosCollection.items.map((video: { embedUrl: string }) => (
        <VideoBlock key={video.embedUrl} id={video.embedUrl} />
      ))}
    </main>
  );
}

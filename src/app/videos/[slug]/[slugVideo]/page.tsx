import { videosQuery } from "../../../../../queries";
import { getData } from "../../../../../helpers";
import Link from "next/link";
import VideoBlock from "@/components/VideoBlock";

export default async function Page({
  params,
}: {
  params: { slug: string; slugVideo: string };
}) {
  const {
    data: {
      videoCollection: { items },
    },
  } = await getData({ query: videosQuery });

  interface Map {
    [key: string]: string | undefined;
  }

  const VideoTypeMap: Map = {
    official: "isOfficial",
    sessions: "isSessions",
    live: "isLive",
  };

  const videos = items
    .map(
      ({
        year,
        embedUrl,
        isLive,
        isOfficial,
        isSessions,
      }: {
        year: { year: number };
        embedUrl: string;
        isLive?: boolean;
        isOfficial?: boolean;
        isSessions?: boolean;
      }) => {
        if (year.year === parseInt(params.slug)) {
          if (VideoTypeMap[params.slugVideo] === "isOfficial" && isOfficial) {
            return embedUrl;
          }
          if (VideoTypeMap[params.slugVideo] === "isSessions" && isSessions) {
            return embedUrl;
          }
          if (VideoTypeMap[params.slugVideo] === "isLive" && isLive) {
            return embedUrl;
          }
        }
      }
    )
    .filter(Boolean);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>{params.slug}</h2>
      <div className="w-2/4 justify-between flex flex-row items-center">
        <Link
          className={`${
            "/videos/official".includes(params.slugVideo) && "font-bold"
          }`}
          href={`/videos/${params.slug}/official`}
        >
          Official
        </Link>
        <Link
          className={`${
            "/videos/sessions".includes(params.slugVideo) && "font-bold"
          }`}
          href={`/videos/${params.slug}/sessions`}
        >
          Sessions
        </Link>
        <Link
          className={`${
            "/videos/live".includes(params.slugVideo) && "font-bold"
          }`}
          href={`/videos/${params.slug}/live`}
        >
          Live
        </Link>
      </div>
      <div>
        {videos.map((video: string) => (
          <VideoBlock key={video} id={video} />
        ))}
      </div>
    </main>
  );
}

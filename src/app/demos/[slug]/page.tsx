import { demosByYearQuery } from "../../../../queries";
import { getData } from "../../../../helpers";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: {
      demosCollection: { items },
    },
  } = await getData({ query: demosByYearQuery });

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {decodeURIComponent(params.slug)}
      </h2>
      {items[0].songsCollection.items.map(
        ({
          title,
          linkToListen,
          linkToVideo,
        }: {
          title: string;
          linkToListen: string;
          linkToVideo: string;
        }) => {
          return (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-2 font-bold text-xl">{title}</div>
              <Link href={linkToListen}>Link to listen</Link>
              <Link href={linkToVideo}>Link to video</Link>
            </div>
          );
        }
      )}
    </main>
  );
}

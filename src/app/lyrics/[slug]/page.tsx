import { releasesQuery } from "../../../../queries";
import { getData } from "../../../../helpers";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: {
      releaseCollection: { items },
    },
  } = await getData({ query: releasesQuery });

  const releases = items.filter(
    ({ year }: { year: { year: number } }) =>
      year.year === parseInt(params.slug)
  );

  const song = items
    .map(
      ({
        tracklistCollection,
      }: {
        tracklistCollection: {
          items: { title: string; lyrics: string }[];
        };
      }) => {
        const potentialSong = tracklistCollection.items.filter(
          ({ title }: { title: string }) =>
            title === decodeURIComponent(params.slug)
        );
        return potentialSong;
      }
    )
    .flat();

  if (song.length > 0 && releases.length === 0) {
    return (
      <main className="flex flex-col items-center justify-between p-24">
        <h2 className={`mb-3 text-2xl font-semibold`}>{song[0].title}</h2>
        <div className="w-2/4 justify-between flex flex-row items-center">
          <p>{song[0].lyrics}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {decodeURIComponent(params.slug)}
      </h2>
      <div className="w-2/4 justify-between flex flex-row items-center">
        {releases.map(
          ({
            title,
            tracklistCollection: { items },
          }: {
            title: string;
            tracklistCollection: { items: { title: string; lyrics: string }[] };
          }) => {
            return (
              <div key={title}>
                <h2 className="font-bold">{title}</h2>
                <ul>
                  {items.map(({ title }: { title: string }) => {
                    return (
                      <Link
                        key={title}
                        href={`/lyrics/${encodeURIComponent(title)}`}
                      >
                        <li>
                          <h3>-{title}</h3>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
}

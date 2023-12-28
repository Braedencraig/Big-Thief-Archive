import { showsQuery } from "../../../../queries";
import { getData } from "../../../../helpers";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: {
      showCollection: { items },
    },
  } = await getData({ query: showsQuery });

  const shows = items.filter(
    ({ year }: { year: { year: number } }) =>
      year.year === parseInt(params.slug)
  );

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {decodeURIComponent(params.slug)}
      </h2>
      <div className="w-2/4 justify-between flex flex-row items-center">
        {shows.map(
          ({
            title,
            city,
            venue,
            date,
          }: {
            title: string;
            city: string;
            date: string;
            venue: string;
          }) => {
            const formattedDate = new Date(date);
            return (
              <div
                key={date}
                className="flex flex-col items-center text-center"
              >
                <Link href={`/shows/${date.substring(0, 10)}`}>
                  <div className="mb-2 font-bold text-xl">{title}</div>
                  <div className="mb-2 font-bold text-xl">{city}</div>
                  <div className="mb-2 font-bold text-xl">{venue}</div>
                  <div className="mb-2 font-bold text-xl">
                    {formattedDate.toDateString()}
                  </div>
                </Link>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
}

import { yearsQuery } from "../../../queries";
import { getData } from "../../../helpers";
import Link from "next/link";

export default async function Page() {
  const {
    data: {
      yearCollection: { items },
    },
  } = await getData({ query: yearsQuery });

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>Unreleased Music</h2>
      <div className="w-2/4 justify-between flex flex-row items-center">
        {items.map(({ year }: { year: number }) => {
          return (
            <div key={year} className="flex flex-col items-center">
              <Link href={`/unreleased/${year}`}>
                <span className="mb-6 font-bold text-xl">{year}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

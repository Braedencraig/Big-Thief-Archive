import { showsQuery } from "../../../../queries";
import { getData } from "../../../../helpers";

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: {
      showCollection: { items },
    },
  } = await getData({ query: showsQuery });

  const show = items.filter(({ date }: { date: string }) => {
    return date.substring(0, 10) === params.slug;
  });

  const formattedDate = new Date(show[0].date);
  formattedDate.toDateString();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {formattedDate.toDateString()}
      </h2>
      <div className="w-2/4 justify-center flex flex-row items-center">
        {show.map(
          ({
            title,
            city,
            venue,
            setlists,
          }: {
            title: string;
            city: string;
            venue: string;
            setlists: any;
          }) => {
            return (
              <div
                key={title}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 font-bold text-xl mt-4">{title}</div>
                <div className="mb-2 font-bold text-xl">{city}</div>
                <div className="mb-2 font-bold text-xl">{venue}</div>
                <div className="font-bold text-xl mt-8">Setlist</div>
                <ol>
                  {setlists.json.content[0].content.map(
                    ({ content }: { content: any }, i: any) => {
                      return (
                        <li key={i} className="mb-2 font-bold text-xl">
                          {i + 1} - {content[0].content[0].value}
                        </li>
                      );
                    }
                  )}
                </ol>
              </div>
            );
          }
        )}
      </div>
    </main>
  );
}

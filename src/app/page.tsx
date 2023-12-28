import { getData } from "../../helpers";
import { memberLinkoutQuery } from "../../queries";

export default async function Home() {
  const {
    data: {
      memberLinkoutCollection: { items },
    },
  } = await getData({ query: memberLinkoutQuery });

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>Big Thief Sitemap Bones</h2>
      <div className="w-2/4 m-auto justify-between flex my-20">
        <a href="/photos" className={`mb-6 font-bold text-xl`}>
          Photos
        </a>
        <a href="/lyrics" className={`mb-6 font-bold text-xl`}>
          Lyrics
        </a>
        <a href="/videos" className={`mb-6 font-bold text-xl`}>
          Videos
        </a>
        <a href="/tours" className={`mb-6 font-bold text-xl`}>
          Tours/Setlists
        </a>
        <a href="/releases" className={`mb-6 font-bold text-xl`}>
          Released Music
        </a>
        <a href="/unreleased" className={`mb-6 font-bold text-xl`}>
          Unreleased Music
        </a>
        <a href="/demos" className={`mb-6 font-bold text-xl`}>
          demos
        </a>
      </div>
      <div className="w-full justify-center flex flex-col items-center">
        <span className="mb-6 font-bold text-xl">Member linkouts</span>
        <div className="w-2/4 flex justify-between">
          {items.map(
            ({
              memberName,
              externalLink,
            }: {
              memberName: string;
              externalLink: string;
            }) => (
              <a
                key={memberName}
                href={externalLink}
                className={`text-xl font-semibold`}
              >
                {memberName}
              </a>
            )
          )}
        </div>
      </div>
    </main>
  );
}

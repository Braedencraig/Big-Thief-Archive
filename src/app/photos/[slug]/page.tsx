import { photosQuery } from "../../../../queries";
import { getData } from "../../../../helpers";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: {
      photoCollection: { items },
    },
  } = await getData({ query: photosQuery });

  const photos = items.filter(
    ({ year }: { year: { year: number } }) =>
      year.year === parseInt(params.slug)
  );
  console.log(photos);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h2 className={`mb-3 text-2xl font-semibold`}>{params.slug}</h2>
      <div className="w-2/4 justify-between flex flex-row items-center">
        {photos.map(
          ({
            image,
            altText,
            photoCredits,
          }: {
            image: { url: string };
            altText: string;
            photoCredits: string;
          }) => (
            <div key={image.url} className="flex flex-col">
              <Image src={image.url} alt={altText} height={150} width={150} />
              <span className="mb-6 text-sm">{photoCredits}</span>
            </div>
          )
        )}
      </div>
    </main>
  );
}

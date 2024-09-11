import { getWork } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { work: string };
};

export default async function Work({ params }: Props) {
  //.project comes from the folder [project] params
  const slug = params.work;

  const work = await getWork(slug);

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-darker text-white pb-[120px]">
        {/* Title */}
        <header className="text-center mb-8">
          <h1 className="bg-clip-text text-3xl md:text-7xl drop-shadow font-extrabold pt-[40%] md:pt-[25%]">
            {work.name}
          </h1>
        </header>

        {/* Image and Buttons */}
        <div className="w-full flex flex-col items-center">
          <Image
            src={work.image}
            alt={work.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl w-[80%] md:w-[50%]"
          />

          <div className="flex justify-evenly w-[100%] md:w-[50%] my-[5%] md:my-[2%]">
            <a
              href="/"
              title="Home"
              rel="noopener noreferrer"
              className="flex justify-center bg-gray-100 rounded-lg text-darker font-bold py-3 px-4 whitespace-nowrap hover:bg-accentTwo hover:text-pink-100 transition w-[125px]"
            >
              Home
            </a>
            <a
              href={work.url}
              title="View Work"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center bg-gray-100 rounded-lg text-darker font-bold py-3 px-4 whitespace-nowrap hover:bg-accent hover:text-pink-100 transition w-[125px]"
            >
              View Work
            </a>
          </div>
          {/* Text block */}
          <div className=" text-lighter mt-5 prose prose-blue prose-xl prose-h2:text-center prose-h5:text-left prose-invert mx-10">
            <PortableText value={work.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

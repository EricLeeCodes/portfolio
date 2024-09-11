import Image from "next/image";
import Link from "next/link";
import { getWorks } from "@/sanity/sanity-utils";

async function WorkSection() {
  const works = await getWorks();

  return (
    <section
      id="works"
      className=" bg-darker bg-cover mb-[100px] pt-[20px] h-[60vh]"
    >
      <div className="w-[80%] mx-auto pt-10">
        <h2 className="flex justify-center font-bold text-white text-5xl">
          My Works
        </h2>
        <p className="flex items-center justify-center text-xl text-lighter my-5 pb-5">
          Hey, everyone! Check out my works!
        </p>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link
              href={`/works/${work.slug}`}
              key={work._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            >
              {work.image && (
                <Image
                  src={work.image}
                  alt={work.name}
                  width={750}
                  height={300}
                  className="object-cover aspect-4/2 rounded-lg border border-gray-500"
                />
              )}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent flex justify-center items-center">
                {work.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;

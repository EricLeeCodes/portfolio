import Footer from "@/app/_components/Footer";
import NavbarServer from "@/app/_components/NavbarServer";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  //.project comes from the folder [project] params
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <NavbarServer />
      <div className="flex flex-col items-center justify-center bg-darker text-white">
        {/* Title */}
        <header className="text-center mb-8">
          <h1 className="bg-clip-text text-7xl drop-shadow font-extrabold pt-[25%]">
            {project.name}
          </h1>
        </header>

        {/* Image and Buttons */}
        <div className="w-full flex flex-col items-center">
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl w-[80%] md:w-[50%]"
          />

          <div className="flex justify-evenly w-[100%] md:w-[50%] my-[5%] md:my-[2%]">
            <a
              href="/"
              title="Home"
              rel="noopener noreferrer"
              className="flex justify-center bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-accentTwo hover:text-pink-100 transition w-[125px]"
            >
              Home
            </a>
            <a
              href={project.url}
              title="View Project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-accent hover:text-pink-100 transition w-[125px]"
            >
              View Project
            </a>
          </div>
          {/* Text block */}
          <div className=" text-lighter mt-5 prose prose-blue prose-xl prose-h2:text-center prose-h5:text-left prose-invert mx-10">
            <PortableText value={project.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

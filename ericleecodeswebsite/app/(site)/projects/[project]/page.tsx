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
      <div className="flex flex-col items-center justify-center">
        <header className="text-center mb-8">
          <h1 className="bg-clip-text text-5xl drop-shadow font-extrabold">
            {project.name}
          </h1>

          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
          >
            View Project
          </a>
        </header>
        <div className="w-full flex flex-col items-center">
          <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl w-[80%] h-auto"
          />

          <div className="text-center text-gray-700 mt-5 prose prose-blue prose-xl prose-h5:text-left">
            <PortableText value={project.content} />
          </div>
        </div>
      </div>
    </div>
  );
}

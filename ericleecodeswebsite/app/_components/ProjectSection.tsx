import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";

async function ProjectSection() {
  const projects = await getProjects();

  return (
    <section id="projects" className=" bg-darker bg-cover mb-[178px] py-[40px]">
      <div className="w-[80%] mx-auto pt-10">
        <h2 className="flex justify-center font-bold text-white text-5xl">
          My Projects
        </h2>
        <p className="flex items-center justify-center text-xl text-lighter my-5 pb-5">
          Hey, everyone! Check out my projects!
        </p>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover aspect-[4/2] rounded-lg border border-gray-500"
                />
              )}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent flex justify-center items-center">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;

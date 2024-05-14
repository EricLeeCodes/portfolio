import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import profilePic from "/public/Eric-profile.jpg";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <div className="flex items-center justify-around h-screen">
        <div className="">
          <h1 className="text-7xl font-extrabold text-lighter pb-3">Hey! 👋</h1>
          <h1 className="text-7xl font-extrabold text-lighter">
            I&apos;m <span className="text-accent">Eric</span>!
          </h1>
        </div>
        <div className=" w-[30%] items-center">
          <Image
            src={profilePic}
            alt="Eric"
            className="object-cover rounded-full items-center"
          />
        </div>
      </div>

      <div>
        <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
        <p className="mt-3 text-xl text-gray-600">
          Hey everyone! Check out my projects!
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
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

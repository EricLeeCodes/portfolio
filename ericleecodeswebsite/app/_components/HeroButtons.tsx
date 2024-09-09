"use client";

import { ArrowDownTrayIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function HeroButtons() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center pt-[10%] gap-3 md:pt-[25%] ">
      <button
        onClick={handleScrollToProjects}
        className="flex items-center px-[90%] md:px-5 py-2 rounded-full border-2 border-accentTwo font-bold text-accentTwo hover:text-slate-200 hover:border-slate-200 transition gap-2"
      >
        <ArrowDownIcon className="h-5 w-5" />
        Projects
      </button>
      <a
        href="/EricLeeSeptemberResume.pdf"
        download="Eric Lee Resume"
        className="px-[90%] md:px-5 py-2 rounded-full border-2 border-accent text-accent font-bold hover:text-slate-200 hover:border-slate-200 transition"
      >
        <button className="flex items-center gap-2">
          <ArrowDownTrayIcon className="h-5 w-5" />
          Resume
        </button>
      </a>
      <Link
        href="/about"
        className="items-center px-[100%] md:px-5 py-2 rounded-full border-2 border-accentTwo font-bold text-accentTwo hover:text-slate-200 hover:border-slate-200 transition gap-2 whitespace-nowrap"
      >
        About Me
      </Link>
    </div>
  );
}

export default HeroButtons;

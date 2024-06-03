"use client";

import Link from "next/link";
import { Page } from "@/types/Page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXTwitter,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

interface NavbarProps {
  pages?: Page[];
}

function Footer({ pages = [] }: NavbarProps) {
  return (
    <footer className="absolute bottom-0 flex flex-col w-[100%] mx-auto z-20 h-24 md:h-20 md:w-screen border border-gray-800 text-lighter py-4 md:py-8 bg-darker">
      {/* Links */}
      <div className="flex justify-center md:flex-row md:space-x-8">
        {pages.map((page) => (
          <Link
            key={page._id}
            href={`/${page.slug}`}
            className="block py-2 pl-3 pr-4 text-lighter text-sm rounded md:p-0 hover:text-white"
          >
            {page.title}
          </Link>
        ))}
      </div>
      {/* Socials */}
      <div className="flex justify-center space-x-4 py-2 pl-3 pr-4 text-lighter text-sm rounded md:p-0">
        <a
          href="https://www.linkedin.com/in/eric-lee-codes/"
          target="_blank"
          className=" hover:text-white"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
        <a
          href="https://x.com/EricLee619"
          target="_blank"
          className=" hover:text-white"
        >
          <FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
        </a>
        <a
          href="https://github.com/EricLeeCodes"
          target="_blank"
          className=" hover:text-white"
        >
          <FontAwesomeIcon icon={faSquareGithub} size="xl" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

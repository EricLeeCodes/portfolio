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
    <footer className="flex justify-around absolute bottom-0  w-[100%] mx-auto z-20 h-24 md:h-20 border border-gray-800 text-lighter bg-darker">
      {/* Footer Logo */}
      <Link
        href="/"
        className="flex items-center text-4xl text-accent font-semibold"
      >
        <p>EricLeeCodes</p>
      </Link>

      {/* Links */}
      <div className="flex flex-col">
        <div className="flex justify-center space-x-8 py-4">
          {pages.map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className="block text-lighter text-sm rounded md:p-0 hover:text-white"
            >
              {page.title}
            </Link>
          ))}
        </div>
        {/* Socials */}
        <div className="flex justify-center space-x-4 py-2 pl-3 pr-4 text-lighter text-sm rounded md:p-0 ">
          <Link
            href="https://www.linkedin.com/in/eric-lee-codes/"
            target="_blank"
            className=" hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </Link>
          <Link
            href="https://x.com/EricLee619"
            target="_blank"
            className=" hover:text-white"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
          </Link>
          <Link
            href="https://github.com/EricLeeCodes"
            target="_blank"
            className=" hover:text-white"
          >
            <FontAwesomeIcon icon={faSquareGithub} size="xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

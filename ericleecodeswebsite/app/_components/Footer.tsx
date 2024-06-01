"use client";

import Link from "next/link";
import { Page } from "@/types/Page";
import {} from "@heroicons/react/24/solid";

interface NavbarProps {
  pages?: Page[];
}

function Footer({ pages = [] }: NavbarProps) {
  return (
    <footer className="fixed w-[100%] mx-auto bottom-0 z-20 h-24 md:h-20 md:w-auto border border-gray-800 text-lighter py-4 md:py-8">
      {/* Links */}
      <div className="flex justify-center md:flex-row md:space-x-8 ">
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
      <div>
        <a>{/* LinkedIn */}</a>
        <a>{/* Twitter */}</a>
        <a>{/* GitHub */}</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;

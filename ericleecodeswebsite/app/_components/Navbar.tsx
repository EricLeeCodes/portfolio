"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Page } from "@/types/Page";
import MenuOverlay from "./MenuOverlay";

interface NavbarProps {
  pages: Page[];
}

function Navbar({ pages }: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-gray-800 top-0 left-0 right-0 z-10 bg-darker">
      <div className="flex container flex-wrap items-center justify-between mx-auto py-2 px-4 lg:py-4">
        <Link
          href="/"
          className="text-lg md:text-4xl text-accent font-semibold"
        >
          EricLeeCodes
        </Link>

        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="hidden md:block md:w-auto">
          <div className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 text-lighter">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="block py-2 pl-3 pr-4 text-lighter sm:text-xl rounded md:p-0 hover:text-white"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
        {navbarOpen ? <MenuOverlay pages={pages} /> : null}
      </div>
    </nav>
  );
}

export default Navbar;

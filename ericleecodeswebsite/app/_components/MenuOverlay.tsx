import Link from "next/link";
import NavbarServer from "./NavServer";
import { Page } from "@/types/Page";

interface MenuOverlayProps {
  pages: Page[];
}

function MenuOverlay({ pages }: MenuOverlayProps) {
  return (
    <div className="flex top-0 left-0 w-full h-full flex-col py-4 items-center text-lighter md:hidden">
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
  );
}

export default MenuOverlay;

import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

async function Navbar() {
  const pages = await getPages();

  return (
    <div className="w-[100%] mx-auto bg-darker py-6 px-32 fixed z-20">
      <div className="flex item-center justify-between">
        <Link href="/" className="text-accent text-4xl font-bold">
          EricLeeCodes
        </Link>
        <div className="flex item-center gap-5 text-lg text-lighter font-bold">
          {pages.map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className=" hover:text-accent transition-colors"
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

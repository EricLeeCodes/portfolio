import { getPages } from "@/sanity/sanity-utils";

export async function fetchPages() {
  return await getPages();
}

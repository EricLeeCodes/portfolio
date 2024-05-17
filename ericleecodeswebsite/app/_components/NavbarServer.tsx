import { fetchPages } from "../lib/fetchPages";
import Navbar from "./Navbar";

export default async function NavbarServer() {
  const pages = await fetchPages();
  return <Navbar pages={pages} />;
}

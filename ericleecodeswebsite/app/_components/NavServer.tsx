import { fetchPages } from "../lib/fetchPages";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default async function NavServer() {
  const pages = await fetchPages();
  return (
    <>
      <Navbar pages={pages} />
      <Footer pages={pages} />
    </>
  );
}

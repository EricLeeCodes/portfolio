import Footer from "../_components/Footer";
import Hero from "../_components/Hero";
import NavbarServer from "../_components/NavbarServer";
import ProjectSection from "../_components/ProjectSection";
import WelcomePage from "../_components/Welcome";

export default async function Home() {
  return (
    <main className="overflow-x-hidden">
      <NavbarServer />
      <div>
        <WelcomePage />
        <Hero />
        <ProjectSection />
      </div>
    </main>
  );
}

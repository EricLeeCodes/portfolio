import Hero from "../_components/Hero";
import NavbarServer from "../_components/NavbarServer";
import ProjectSection from "../_components/ProjectSection";
import WelcomePage from "../_components/Welcome";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavbarServer />
      <div className="container">
        <WelcomePage />
        <Hero />
        <ProjectSection />
      </div>
    </main>
  );
}

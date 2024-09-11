import Footer from "../_components/Footer";
import Hero from "../_components/Hero";
import NavbarServer from "../_components/NavServer";
import ProjectSection from "../_components/ProjectSection";
import WelcomePage from "../_components/Welcome";
import WorkSection from "../_components/WorkSection";

export default async function Home() {
  return (
    <main className="overflow-x-hidden">
      <div>
        <WelcomePage />
        <Hero />
        <WorkSection />
        <ProjectSection />
      </div>
    </main>
  );
}

import Hero from "../_components/Hero";
import ProjectSection from "../_components/ProjectSection";
import WelcomePage from "../_components/Welcome";

export default async function Home() {
  return (
    <div>
      <WelcomePage />
      <Hero />
      <ProjectSection />
    </div>
  );
}

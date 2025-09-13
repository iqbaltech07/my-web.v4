import { HeroSection } from "~/components/pages/home/HeroSection";
import { ProjectsSection } from "~/components/pages/home/ProjectSection";
import { ToolsSection } from "~/components/pages/home/ToolSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <ProjectsSection />
    </>
  );
}

export default Home;
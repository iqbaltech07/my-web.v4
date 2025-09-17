import type { Metadata } from 'next';
import { HeroSection } from "~/components/pages/home/HeroSection";
import { ProjectsSection } from "~/components/pages/home/ProjectSection";
import { ToolsSection } from "~/components/pages/home/ToolSection";

export const metadata: Metadata = {
  title: 'Home | M Iqbal Ferdiansyah',
  description: 'A passionate Informatics Management student and Web Developer skilled in building modern web applications.',
};

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
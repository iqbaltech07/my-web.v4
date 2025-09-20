import type { Metadata } from 'next';
import { HeroSection } from "~/components/pages/home/HeroSection";
import { ProjectsSection } from "~/components/pages/home/ProjectSection";
import { ToolsSection } from "~/components/pages/home/ToolSection";
import { getActiveTechnologies, getFeaturedProjects, getProfileData } from '~/lib/data';

export const metadata: Metadata = {
  title: 'Home | M Iqbal Ferdiansyah',
  description: 'A passionate Informatics Management student and Web Developer skilled in building modern web applications.',
};

const Home = async () => {

  const [profileData, skillsData, projectsData] = await Promise.all([
    getProfileData(),
    getActiveTechnologies(),
    getFeaturedProjects(),
  ]);

  return (
    <>
      <HeroSection profileData={profileData} />
      <ToolsSection skillsData={skillsData} />
      <ProjectsSection projectsData={projectsData} />
    </>
  );
}

export default Home;
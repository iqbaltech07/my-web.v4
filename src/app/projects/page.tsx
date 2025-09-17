import { Typography } from "~/components/ui/typography";
import type { Metadata } from 'next';
import { projectsData } from "~/lib/data";
import { ProjectsClientPage } from "./ProjectsClientPage";

export const metadata: Metadata = {
    title: 'My Projects | M Iqbal Ferdiansyah',
    description: 'A collection of projects by M Iqbal Ferdiansyah, from personal experiments to client work.',
    openGraph: {
        title: 'Projects | M Iqbal Ferdiansyah',
        description: 'Explore a collection of my web development projects.',
    },
};

const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
});

const ProjectsPage = () => {
    return (
        <>
            <section className="mb-12">
                <Typography variant="h1" className="font-bold tracking-tight">
                    Projects
                </Typography>
                <Typography variant="p" className="text-md lg:text-lg text-muted-foreground">
                    A collection of projects I've worked on, from personal experiments to client work.
                </Typography>
            </section>

            <ProjectsClientPage projects={sortedProjects} />
        </>
    );
};

export default ProjectsPage;
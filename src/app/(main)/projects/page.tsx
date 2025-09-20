import { Typography } from "~/components/ui/typography";
import type { Metadata } from "next";
import { ProjectsClientPage } from "./ProjectsClientPage";
import { getAllProjects, ProjectWithTechnologies } from "~/lib/data";

export const metadata: Metadata = {
    title: "My Projects | M Iqbal Ferdiansyah",
    description: "A collection of projects by M Iqbal Ferdiansyah, from personal experiments to client work.",
    openGraph: {
        title: "Projects | M Iqbal Ferdiansyah",
        description: "Explore a collection of my web development projects.",
    },
};

const ProjectsPage = async () => {
    const projects: ProjectWithTechnologies[] = await getAllProjects();

    console.log(projects);


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

            <ProjectsClientPage projects={projects} />
        </>
    );
};

export default ProjectsPage;

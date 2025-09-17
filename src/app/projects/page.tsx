import { Typography } from "~/components/ui/typography";
import { projectsData } from "~/lib/data";
import { ProjectsClientPage } from "./ProjectsClientPage";

// Urutkan proyek agar yang "featured" muncul lebih dulu
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
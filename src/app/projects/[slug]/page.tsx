import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "~/lib/data"; // Updated import
import ProjectDetailPageContent from "~/components/pages/projects/ProjectDetailPageContent";
import type { Metadata } from "next";

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = await getProjectBySlug(params.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Project`,
        description: project.description,
        openGraph: {
            title: `${project.title} | M Iqbal Ferdiansyah`,
            description: project.description,
            images: [
                {
                    url: project.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailPageContent project={project} />;
}

export async function generateStaticParams() {
    const projects = await getAllProjects();
    return projects.map((project) => ({
        slug: project.slug,
    }));
}
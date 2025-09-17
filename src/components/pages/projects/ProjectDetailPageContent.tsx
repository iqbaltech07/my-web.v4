import Image from "next/image";
import Link from "next/link";
import { Typography } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Github, Globe, CheckCircle2, ArrowLeft } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { projectsData } from "~/lib/data";

type Project = typeof projectsData[0];

interface ProjectDetailPageContentProps {
    project: Project;
}

export default function ProjectDetailPageContent({ project }: ProjectDetailPageContentProps) {
    return (
        <div className="space-y-8">
            <Button asChild variant="ghost" className="pl-0">
                <Link href="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>
            </Button>

            <section className="text-left">
                <Typography variant="h1" className="font-bold tracking-tight mb-4">{project.title}</Typography>
                <Typography variant="p" className="text-lg text-muted-foreground max-w-3xl">
                    {project.description}
                </Typography>
            </section>

            <div className="relative w-full h-64 sm:h-95 rounded-lg overflow-hidden border">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-2 space-y-8">
                    <div>
                        <Typography variant="h2" className="text-2xl font-bold border-b pb-2 mb-4">About this project</Typography>
                        <Typography variant="p" className="text-muted-foreground whitespace-pre-line leading-relaxed">
                            {project.longDescription}
                        </Typography>
                    </div>

                    <div>
                        <Typography variant="h3" className="text-xl font-semibold mb-4">Key Features</Typography>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-4">
                                    <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="space-y-6">
                    <div>
                        <Typography variant="h3" className="text-xl font-bold border-b pb-2 mb-4">Tech Stack</Typography>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button asChild variant="outline">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <Globe className="mr-2 h-4 w-4" /> Live Demo
                            </a>
                        </Button>
                        <Button asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" /> Source Code
                            </a>
                        </Button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
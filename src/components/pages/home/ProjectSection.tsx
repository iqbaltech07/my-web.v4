import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Typography } from "~/components/ui/typography";
import { Project, Technology } from "~/generated/prisma";
import { Badge } from "~/components/ui/badge";

interface ProjectSectionProps {
    projectsData: (Project & { technologies: Technology[] })[];
}

export function ProjectsSection({ projectsData }: ProjectSectionProps) {
    return (
        <section>
            <div className="flex items-center justify-between mb-8">
                <Typography variant="h2" className="text-2xl border-none sm:text-3xl font-bold tracking-tight">Featured Projects</Typography>
                <Link href={"/projects"} className="text-md text-nowrap underline underline-offset-2">See All</Link>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {projectsData.map((project) => (
                    <Card key={project.slug} className="flex flex-col md:flex-row overflow-hidden transition-shadow hover:shadow-lg py-0">
                        <div className="relative w-full md:w-1/2 h-48 md:h-auto">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between pt-3 px-6 pb-6 sm:p-6 md:w-2/3">
                            <div>
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0 mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech.id}>{tech.name}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </div>
                            <CardFooter className="p-0">
                                <Button asChild variant="outline">
                                    <Link href={`/projects/${project.slug}`}>
                                        See Detail <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { ArrowRight, Badge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "~/lib/data";
import { Button } from "~/components/ui/button";
import { Typography } from "~/components/ui/typography";

export function ProjectsSection() {
    return (
        <section>
            <div className="flex items-center justify-between mb-8">
                <Typography variant="h2" className="text-2xl border-none sm:text-3xl font-bold tracking-tight">Featured Projects</Typography>
                <Link href={"/projects"} className="text-md text-nowrap underline underline-offset-2">See All</Link>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {projectsData.map((project: any) => (
                    <Card key={project.slug} className="flex flex-col md:flex-row overflow-hidden transition-shadow hover:shadow-lg">
                        <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between p-6 md:w-2/3">
                            <div>
                                <CardHeader className="p-0 mb-4">
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-0 mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech: any) => (
                                            <Badge key={tech}>{tech}</Badge>
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
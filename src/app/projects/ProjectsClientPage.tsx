"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Badge } from "~/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";
import { TechIcon } from "~/components/TechIcons";
import { ProjectWithTechnologies } from "~/lib/data";

const PROJECTS_PER_PAGE = 4;

export function ProjectsClientPage({ projects }: { projects: ProjectWithTechnologies[] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProjects = useMemo(() => {
        return projects.filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.technologies.some(tech => tech.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [projects, searchTerm]);

    const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

    const currentProjects = useMemo(() => {
        const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
        return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
    }, [filteredProjects, currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    return (
        <TooltipProvider>
            <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Search projects by title or technology..."
                    className="w-full pl-10"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentProjects.map(project => (
                    <Link href={`/projects/${project.slug}`} key={project.id} className="group block">
                        <Card className="h-full flex flex-col bg-card/60 border border-border/20 overflow-hidden hover:border-zinc-600 py-0 pb-6">
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                {project.featured && (
                                    <Badge className="absolute top-3 right-3" variant="secondary">
                                        <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                                        Featured
                                    </Badge>
                                )}
                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                    {project.technologies.slice(0, 5).map(tech => (
                                        <Tooltip key={tech.id}>
                                            <TooltipTrigger>
                                                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-background/70 p-1.5">
                                                    <TechIcon name={tech.name} className="h-full w-full text-foreground" />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{tech.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>

                            <CardHeader className="flex-grow p-6">
                                <CardTitle className="mb-2 text-lg font-semibold">{project.title}</CardTitle>
                                <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
            </div>
        </TooltipProvider>
    );
}

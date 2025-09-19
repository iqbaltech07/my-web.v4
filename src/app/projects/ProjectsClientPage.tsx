"use client";

import React, { useState, useMemo } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "~/components/ui/pagination";
import { Badge } from '~/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip';
import { TechIcon } from '~/components/TechIcons';
import { Project, Technology } from '~/generated/prisma';

type ProjectWithTechnologies = Project & {
    technologies: Technology[];
};

const PROJECTS_PER_PAGE = 4;

export function ProjectsClientPage({ projects }: { projects: ProjectWithTechnologies[] }) {
    const [searchTerm, setSearchTerm] = useState('');
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
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
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
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentProjects.map((project) => (
                    <Link href={`/projects/${project.slug}`} key={project.slug} className="group block">
                        <Card className="h-full flex flex-col bg-card/60 dark:bg-input/30 backdrop-blur-sm border-border/20 overflow-hidden transition-all duration-300 ease-in-out hover:border-zinc-600 dark:hover:border-zinc-600 py-0 pb-6">
                            <div className="relative overflow-hidden">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                                {project.featured && (
                                    <Badge className="absolute top-3 right-3 border border-transparent" variant="secondary">
                                        <Sparkles className="mr-1.5 h-3 w-3 text-primary" />
                                        Featured
                                    </Badge>
                                )}
                                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                    {project.technologies.slice(0, 5).map(tech => (
                                        <Tooltip key={tech.id}>
                                            <TooltipTrigger>
                                                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-background/70 p-1.5 backdrop-blur-sm">
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

            {totalPages > 1 && (
                <Pagination className="mt-12">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}
                                    isActive={currentPage === i + 1}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </TooltipProvider>
    );
}
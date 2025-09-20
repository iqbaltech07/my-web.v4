import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion";
import { CalendarDays, Briefcase, MapPin } from "lucide-react";
import { Experience } from "~/generated/prisma";

type GroupedExperience = {
    [company: string]: Experience[];
};

interface ExperienceTabContentProps {
    experienceData: Experience[];
}

function parseDate(dateStr: string): Date {
    if (!dateStr || dateStr.toLowerCase() === "present") {
        return new Date();
    }

    const parts = dateStr.split("-");

    if (parts.length === 3) {
        const [d, m, y] = parts.map((p) => parseInt(p, 10));
        return new Date(y, m - 1, d);
    }

    if (parts.length === 2) {
        const [m, y] = parts.map((p) => parseInt(p, 10));
        return new Date(y, m - 1, 1);
    }

    return new Date(dateStr);
}

export function ExperienceTabContent({
    experienceData,
}: ExperienceTabContentProps) {
    const sortedExperiences = [...experienceData].sort((a, b) => {
        const aEnd = parseDate(a.endDate);
        const bEnd = parseDate(b.endDate);

        if (bEnd.getTime() !== aEnd.getTime()) {
            return bEnd.getTime() - aEnd.getTime();
        }

        const aStart = parseDate(a.startDate);
        const bStart = parseDate(b.startDate);
        return bStart.getTime() - aStart.getTime();
    });

    const groupedByCompany = sortedExperiences.reduce((acc, exp) => {
        if (!acc[exp.company]) {
            acc[exp.company] = [];
        }
        acc[exp.company].push(exp);
        return acc;
    }, {} as GroupedExperience);

    return (
        <div className="max-w-3xl mx-auto flex flex-col gap-8 mt-6">
            {Object.keys(groupedByCompany).map((company, index) => {
                const experiences = groupedByCompany[company];
                const firstExp = experiences[0];

                return (
                    <div
                        key={index}
                        className="flex flex-col border-b pb-4 last:border-b-0 last:pb-0"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-md border bg-muted flex-shrink-0">
                                <Image
                                    src={firstExp.logoUrl}
                                    alt={`${firstExp.company} logo`}
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                    {firstExp.company}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {experiences.length} Position
                                    {experiences.length > 1 ? "s" : ""}
                                </p>
                            </div>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                            {experiences.map((exp, expIndex) => (
                                <AccordionItem
                                    value={`item-${index}-${expIndex}`}
                                    key={expIndex}
                                    className="border-b-0"
                                >
                                    <AccordionTrigger className="hover:no-underline">
                                        <div className="flex flex-col items-start text-left">
                                            <h4 className="text-lg font-medium">{exp.position}</h4>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                                                <div className="flex items-center gap-1.5">
                                                    <CalendarDays className="h-3.5 w-3.5" />
                                                    <span>
                                                        {exp.startDate} - {exp.endDate}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Briefcase className="h-3.5 w-3.5" />
                                                    <span>{exp.type}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="h-3.5 w-3.5" />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-4">
                                        <ul className="list-disc ml-5 space-y-2 text-muted-foreground text-sm">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                );
            })}
        </div>
    );
}

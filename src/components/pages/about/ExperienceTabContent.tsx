import Image from "next/image";
import { experienceData } from "~/lib/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { CalendarDays, Briefcase, MapPin } from "lucide-react";

export function ExperienceTabContent() {
    return (
        <div className="max-w-3xl mx-auto flex flex-col gap-8 mt-6">
            {experienceData.map((exp, index) => (
                <div key={index} className="flex flex-col border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md border bg-muted flex-shrink-0">
                            <Image
                                src={exp.logoUrl}
                                alt={`${exp.company} logo`}
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                            <p className="text-sm text-muted-foreground mt-1">1 Position</p>
                        </div>
                    </div>

                    <Accordion type="single" collapsible defaultValue={`item-${index}`} className="w-full">
                        <AccordionItem value={`item-${index}`} className="border-b-0">
                            <AccordionTrigger className="hover:no-underline">
                                <div className="flex flex-col items-start text-left">
                                    <h4 className="text-lg font-medium">{exp.position}</h4>
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
                                        <div className="flex items-center gap-1.5">
                                            <CalendarDays className="h-3.5 w-3.5" />
                                            <span>{exp.startDate} - {exp.endDate}</span>
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
                    </Accordion>
                </div>
            ))}
        </div>
    );
}
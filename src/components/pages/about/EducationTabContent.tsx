import Image from "next/image";
import { educationData } from "~/lib/data";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

export function EducationTabContent() {
    return (
        <div className="space-y-6 max-w-3xl mx-auto mt-3">
            {educationData.map((edu, index) => (
                <Card key={index} className="transition-all dark:bg-input/30 hover:border-zinc-600 dark:hover:border-zinc-600 duration-300 ease-in-out">
                    <CardHeader className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md border bg-muted flex-shrink-0">
                            <Image
                                src={edu.logoUrl}
                                alt={`${edu.institution} logo`}
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <CardTitle className="text-lg font-semibold">{edu.institution}</CardTitle>
                            <p className="font-medium text-muted-foreground">{edu.degree}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                                <div className="flex items-center gap-1.5">
                                    <CalendarDays className="h-3.5 w-3.5" />
                                    <span>{edu.startDate} - {edu.endDate}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="h-3.5 w-3.5" />
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
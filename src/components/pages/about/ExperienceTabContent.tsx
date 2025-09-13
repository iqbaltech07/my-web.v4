import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import Image from "next/image";
import { experienceData } from "~/lib/data";

export function ExperienceTabContent() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            {experienceData.map((exp, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                    <CardHeader className="flex flex-row items-start gap-4">
                        <Image
                            src={exp.logoUrl}
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="rounded-md border"
                        />
                        <div>
                            <CardTitle>{exp.position}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                {exp.company} • {exp.startDate} - {exp.endDate}
                            </p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc ml-4 space-y-2 text-muted-foreground">
                            {exp.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
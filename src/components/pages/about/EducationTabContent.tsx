// src/components/pages/about/EducationTabContent.tsx

import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import Image from "next/image";
import { educationData } from "~/lib/data";

export function EducationTabContent() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto">
            {educationData.map((edu, index) => (
                <Card key={index} className="transition-shadow hover:shadow-lg">
                    <CardHeader className="flex flex-row items-start gap-4">
                        <Image
                            src={edu.logoUrl}
                            alt={`${edu.institution} logo`}
                            width={48}
                            height={48}
                            className="rounded-md border"
                        />
                        <div>
                            <CardTitle>{edu.institution}</CardTitle>
                            <p className="font-medium">{edu.degree}</p>
                            <p className="text-sm text-muted-foreground">
                                {edu.startDate} - {edu.endDate}
                            </p>
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
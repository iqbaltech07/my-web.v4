import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "~/components/ui/card";
import { ExternalLink } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Certification, Profile } from "~/generated/prisma";

interface CertificationTabContentProps {
    certificationData: Certification[];
    profileData: Partial<Profile>;
}

export function CertificationTabContent({ certificationData, profileData }: CertificationTabContentProps) {
    const sortedCertifications = [...certificationData].sort((a, b) => {
        return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime();
    });

    return (
        <div className="space-y-6 mt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border bg-[#0e86d1]/20 px-4 py-3 rounded-md">
                <div className="flex items-center gap-4">
                    <FaLinkedin className="rounded-md text-4xl text-[#0e86d1]" />
                    <div>
                        <h5 className="text-lg semibold">
                            View All Certifications
                        </h5>
                        <p className="text-sm text-muted-foreground">See my complete certification portfolio on LinkedIn</p>
                    </div>
                </div>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                    <a href={`${profileData.linkedin}/details/certifications/`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        View on LinkedIn
                    </a>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sortedCertifications.map((cert) => (
                    <Card
                        key={cert.id}
                        className="group dark:bg-input/30 flex flex-col justify-between overflow-hidden transition-all duration-300 ease-in-out hover:border-zinc-600 dark:hover:border-zinc-600 cursor-default"
                    >
                        <CardHeader>
                            <div className="flex items-start justify-between gap-4">
                                <CardTitle className="text-lg font-semibold leading-tight">
                                    {cert.name}
                                </CardTitle>
                                <p className="text-sm font-medium text-muted-foreground flex-shrink-0 text-right">
                                    {cert.issueDate}
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground pt-2">
                                {cert.issuingOrganization}
                            </p>
                        </CardHeader>
                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    View Credential
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
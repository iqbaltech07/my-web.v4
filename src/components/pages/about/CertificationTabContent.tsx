import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { certificationData } from "~/lib/data";
import { ExternalLink, Linkedin } from "lucide-react";
import Link from "next/link";

export function CertificationTabContent() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight">Sertifikasi</h3>
                <Button variant="secondary" asChild>
                    <a href="https://www.linkedin.com/in/usernameanda/details/certifications/" target="_blank">
                        <Linkedin className="mr-2 h-4 w-4" /> Lihat di LinkedIn
                    </a>
                </Button>
            </div>
            <div className="space-y-4">
                {certificationData.map((cert, index) => (
                    <Card key={index} className="transition-shadow hover:shadow-lg">
                        <CardHeader>
                            <Link href={cert.credentialUrl} target="_blank" className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{cert.issuingOrganization}</p>
                                </div>
                                <ExternalLink className="h-5 w-5 text-muted-foreground" />
                            </Link>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
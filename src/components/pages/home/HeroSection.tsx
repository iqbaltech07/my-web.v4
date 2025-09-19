
import { FileText, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Typography } from "~/components/ui/typography";
import { Profile } from "~/generated/prisma";
interface HeroSectionProps {
    profileData: Partial<Profile>;
}

export function HeroSection({ profileData }: HeroSectionProps) {
    return (
        <section className="mb-24 text-left">
            <Typography variant="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Hi, I'm {profileData?.name?.split(" ")[1]} 👋
            </Typography>
            <Typography variant="p" className="mt-6 text-lg sm:text-xl max-w-3xl text-muted-foreground">
                {profileData.bio}
            </Typography>
            <div className="mt-8 flex justify-left gap-4">
                <Button asChild>
                    <Link href="/about">
                        <FileText className="mr-2 h-5 w-5" /> About Me
                    </Link>
                </Button>
                <Button variant="secondary" asChild>
                    <a href={`mailto:${profileData?.email}`}>
                        <Send className="mr-2 h-5 w-5" /> Contact Me
                    </a>
                </Button>
            </div>
        </section>
    );
}
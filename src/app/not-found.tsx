import { ArrowLeft, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Typography } from "~/components/ui/typography";

export const metadata: Metadata = {
    title: "Page Not Found",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <section className="h-dvh w-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center -mt-20 px-6">
                <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
                    <AlertTriangle className="absolute h-full w-full animate-ping text-destructive/50" />
                    <AlertTriangle className="relative h-16 w-16 text-destructive mt-4" />
                </div>

                <div className="space-y-4">
                    <Typography
                        variant="h1"
                        className="text-6xl font-bold tracking-tight sm:text-7xl text-destructive/80"
                    >
                        404
                    </Typography>
                    <Typography
                        variant="h3"
                        className="border-none text-2xl font-semibold tracking-tight sm:text-3xl"
                    >
                        Page Not Found
                    </Typography>
                    <Typography variant="p" className="max-w-md text-muted-foreground">
                        Sorry, we couldn’t find the page you’re looking for. The link may be broken or the page may have been removed.
                    </Typography>
                    <Button asChild className="mt-6">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

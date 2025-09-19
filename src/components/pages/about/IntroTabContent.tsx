import { Button } from "~/components/ui/button";
import { FileDown, FileText, Info } from "lucide-react";
import Link from "next/link";
import { Profile } from "~/generated/prisma";

export function IntroTabContent({ profileData }: { profileData: Partial<Profile> }) {
    return (
        <div className="space-y-6 mt-6">
            <div className="space-y-8">
                <div className="rounded-lg border bg-background px-6 py-4 shadow-xs dark:bg-input/30">
                    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center mb-2">
                        <div className="flex items-center gap-3">
                            <FileText className="h-6 w-6 text-muted-foreground" />
                            <div>
                                <h5 className="text-lg font-semibold">Curriculum Vitae</h5>
                                <p className="text-sm text-muted-foreground">
                                    Access my CV in different formats.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full gap-3 sm:w-auto mb-2 sm:mb-0 ">
                            {profileData.cvOldUrl && (
                                <Link href={profileData.cvOldUrl} download target="_blank">
                                    <Button variant="outline" className="w-[110px] cursor-pointer" >
                                        <FileDown className="mr-2 h-4 w-4" /> PDF
                                    </Button>
                                </Link>
                            )}
                            {profileData.cvLatestUrl && (
                                <Link href={profileData.cvLatestUrl} download target="_blank">
                                    <Button variant="outline" className="w-[110px] cursor-pointer">
                                        <FileText className="mr-2 h-4 w-4" /> Latest
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Info className="mr-2 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                        <p className="text-[12px] text-muted-foreground">
                            View in PDF or Latest format for the most up-to-date information.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-background border rounded-lg px-6 py-4 shadow-sm dark:bg-input/30">
                <h5 className="text-xl font-semibold mb-2">Who I Am?</h5>
                <p className="text-muted-foreground text-pretty whitespace-pre-line" dangerouslySetInnerHTML={{ __html: profileData.description || "" }} />
            </div>
            <div className="bg-background border-2 rounded-lg px-6 py-4 shadow-sm flex sm:items-center justify-between sm:flex-row flex-col gap-4">
                <div>
                    <h5 className="text-lg font-semibold">Let’s Connect</h5>
                    <p className="text-sm text-muted-foreground">
                        Feel free to reach out for collaboration or opportunities.
                    </p>
                </div>
                <Link href="/contact">
                    <Button className="w-full cursor-pointer">Get in Touch</Button>
                </Link>
            </div>

        </div>
    );
}
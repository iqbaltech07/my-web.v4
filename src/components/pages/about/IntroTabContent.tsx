import { Button } from "~/components/ui/button";
import { profileData } from "~/lib/data";
import { Download } from "lucide-react";

export function IntroTabContent() {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Tentang Saya</h3>
                <p className="text-muted-foreground text-pretty">
                    {profileData.bio}
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-bold tracking-tight mb-4">Curriculum Vitae</h3>
                <p className="text-muted-foreground mb-4">
                    Unduh CV saya untuk melihat riwayat lengkap dan kualifikasi saya secara mendetail.
                </p>
                <Button asChild>
                    <a href="/cv/CV-NamaAnda.pdf" download>
                        <Download className="mr-2 h-4 w-4" /> Unduh CV
                    </a>
                </Button>
            </div>
        </div>
    );
}
import { Typography } from "~/components/ui/typography";
import { TechIcon } from '~/components/TechIcons';
import { Technology } from "~/generated/prisma";
interface ToolsSectionProps {
    skillsData: Technology[];
}

export function ToolsSection({ skillsData }: ToolsSectionProps) {
    return (
        <section className="mb-24">
            <Typography variant="h2" className="text-2xl border-none sm:text-3xl font-bold tracking-tight text-left mb-8">
                Technologies I Use
            </Typography>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-start">
                {skillsData.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center gap-3 text-center p-4 h-30 w-30 rounded-lg bg-muted/50 transition-transform hover:scale-105 cursor-default duration-300 justify-center">
                        <div>
                            <TechIcon name={skill.name} className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <span className="font-semibold">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPrisma, SiTypescript, SiJavascript, SiMysql } from "react-icons/si";
import { skillsData } from "~/lib/data";

const iconMap: { [key: string]: React.ElementType } = {
    "React": FaReact,
    "Next.js": SiNextdotjs,
    "Node.js": FaNodeJs,
    "Tailwind": SiTailwindcss,
    "Prisma": SiPrisma,
    "TypeScript": SiTypescript,
    "JavaScript": SiJavascript,
    "MySQL": SiMysql,
    "Git": FaGitAlt,
};

export function ToolsSection() {
    return (
        <section className="mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-left mb-8">
                Tools & Technology
            </h2>
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-start">
                {skillsData.map((skill: any) => {
                    const IconComponent = iconMap[skill.name];
                    if (!IconComponent) return null;

                    return (
                        <div key={skill.name} className="flex flex-col items-center gap-2 text-center p-4 h-30 w-30 rounded-lg bg-muted/50 transition-transform hover:scale-105 cursor-default duration-300 justify-center">
                            <div>
                                <IconComponent className="h-10 w-10 text-muted-foreground" />
                            </div>
                            <span className="font-semibold">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
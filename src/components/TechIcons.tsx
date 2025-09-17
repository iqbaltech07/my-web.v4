import React from 'react';
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiPrisma,
    SiMysql,
    SiGit,
    SiJavascript,
    SiNodedotjs,
    SiNextdns,
    SiSupabase,
    SiGooglegemini,
    SiFigma,
    SiExpress,
    SiSequelize,
    SiBootstrap
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";

const iconMap: { [key: string]: React.ElementType } = {
    "Next.js": SiNextdotjs,
    "React.js": SiReact,
    "Tailwind": SiTailwindcss,
    "TypeScript": SiTypescript,
    "Prisma": SiPrisma,
    "MySQL": SiMysql,
    "Git": SiGit,
    "NextAuth.js": SiNextdns,
    "Framer Motion": TbBrandFramerMotion,
    "JavaScript": SiJavascript,
    "Node.js": SiNodedotjs,
    "Supabase": SiSupabase,
    "PostgreSQL": BiLogoPostgresql,
    "Gemini AI": SiGooglegemini,
    "Figma": SiFigma,
    "Express.js": SiExpress,
    "Sequelize": SiSequelize,
    "Bootstrap": SiBootstrap,
};

interface TechIconProps {
    name: string;
    className?: string;
}

export const TechIcon = ({ name, className }: TechIconProps) => {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        return null;
    }

    return <IconComponent className={className} />;
};

export { iconMap };
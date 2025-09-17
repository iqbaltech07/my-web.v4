"use client";

import { cn } from "~/lib/utils";
import { Github, Linkedin, Mail, Home, User, Briefcase, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { profileData } from "~/lib/data";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { VerifyIcon } from "../../public/images/icons/verifyIcon";
import { DrawerClose } from "./ui/drawer";
import React from "react";

export function SidebarContent({ isInsideDrawer = false }: { isInsideDrawer?: boolean }) {
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Home", icon: Home },
        { href: "/about", label: "About", icon: User },
        { href: "/projects", label: "Projects", icon: Briefcase },
        { href: "/contact", label: "Contact", icon: Mail },
        // guesbook
        { href: "/guestbook", label: "Guestbook", icon: MessageSquare },
    ];

    const LinkWrapper = isInsideDrawer ? DrawerClose : React.Fragment;
    const linkWrapperProps = isInsideDrawer ? { asChild: true } : {};

    return (
        <>
            <div className="hidden sm:block">
                <div className="flex flex-row items-center sm:items-start sm:flex-col gap-3">
                    <Avatar className="h-10 w-10 sm:h-16 sm:w-16">
                        <AvatarImage
                            src={profileData.avatarUrl}
                            alt={profileData.name}
                        />
                        <AvatarFallback>
                            {profileData.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <h1 className="font-semibold leading-tight text-md sm:text-2xl flex items-center gap-1">
                            {profileData.name}
                            <div className="mt-1 ml-1">
                                <VerifyIcon />
                            </div>
                        </h1>
                        <p className="text-sm font-normal sm:text-center md:text-start text-zinc-400">@{profileData.username}</p>
                    </div>
                </div>
            </div>

            <nav className="mt-8 flex-1">
                <ul className="space-y-2">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <li key={link.href}>
                                <LinkWrapper {...linkWrapperProps}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "flex w-full items-center gap-2 rounded-md px-4 py-2 text-lg font-medium",
                                            pathname === link.href
                                                ? "bg-primary text-primary-foreground"
                                                : "text-muted-foreground hover:bg-muted"
                                        )}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span>{link.label}</span>
                                    </Link>
                                </LinkWrapper>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="mt-auto flex justify-center gap-4">
                <ThemeToggle />
                <Button variant="outline" size="icon" asChild>
                    <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                    </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                    </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                    <a href={`mailto:${profileData.contact.email}`}>
                        <Mail className="h-4 w-4" />
                    </a>
                </Button>
            </div>

            <p className="text-[12px] text-zinc-400 text-center mt-5">&copy; {new Date().getFullYear()} M Iqbal Ferdiansyah • Privacy</p>
        </>
    );
}
"use client";

import React from 'react';
import { Typography } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { profileData } from "~/lib/data";
import { Mail, Linkedin, Github, Link as LinkIcon, MessageSquare, Clock } from "lucide-react";
import Link from 'next/link';

const ContactPage = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <section className="mb-12 text-left">
                <Typography variant="h1" className="font-bold tracking-tight">
                    Contact Me
                </Typography>
                <Typography variant="p" className="text-md lg:text-lg text-muted-foreground">
                    Some conversations don't start with code, they begin with a message.
                </Typography>
            </section>

            <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <LinkIcon className="h-5 w-5 text-muted-foreground" />
                    <Typography variant="h3" className="text-xl font-semibold tracking-tight">Let's stay in touch</Typography>
                </div>
                <Typography variant="p" className="text-sm text-muted-foreground mb-6">
                    Here's where ideas become conversations—feel free to reach out.
                </Typography>
                <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-[#06ad44] hover:bg-[#025e23] text-white font-bold text-base px-5 py-6">
                        <Link href={`mailto:${profileData.contact.email}`}>
                            <Mail className="mr-2 h-5 w-5" /> Email
                        </Link>
                    </Button>
                    <Button asChild className="bg-[#333] hover:bg-[#111] text-white font-bold text-base px-5 py-6">
                        <Link href={profileData.contact.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" /> GitHub
                        </Link>
                    </Button>
                    <Button asChild className="bg-[#0A66C2] hover:bg-[#044688] text-white font-bold text-base px-5 py-6">
                        <Link href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                        </Link>
                    </Button>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <Typography variant="h3" className="text-xl font-semibold tracking-tight">Send me a message</Typography>
                </div>
                <Typography variant="p" className="text-sm text-muted-foreground mb-6">
                    Have a thought, a question, or just want to say hello? Leave a note—I read them all.
                </Typography>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-muted-foreground">Name*</Label>
                            <Input id="name" placeholder="" className="py-6" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-muted-foreground">Email*</Label>
                            <Input id="email" type="email" placeholder="" className="py-6" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-muted-foreground">Message*</Label>
                        <Textarea id="message" placeholder="" rows={6} />
                    </div>
                    <Button type="submit" className="w-full text-base font-bold py-6">
                        Begin the conversation
                    </Button>
                </form>
            </section>

            <footer className="mt-8 text-left">
                <Typography variant="muted" className="text-xs flex items-center justify-start gap-2">
                    <Clock className="h-4 w-4" />
                    Typical response time: 1-2 hours (Weekdays, GMT+7). I reply with care.
                </Typography>
            </footer>
        </div>
    );
};

export default ContactPage;
"use client";

import React, { useState, useRef } from 'react';
import { Typography } from "~/components/ui/typography";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { Mail, Linkedin, Github, Link as LinkIcon, MessageSquare, Clock, Instagram, Loader2 } from "lucide-react";
import Link from 'next/link';
import { Profile } from '~/generated/prisma';
import { cn } from '~/lib/utils';
// Ganti path ini jika lokasi file Anda berbeda
import { sendContactEmail } from '~/lib/email';

interface ContactPageContentProps {
    profileData: Partial<Profile>;
}

export default function ContactPageContent({ profileData }: ContactPageContentProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        if (!name || !email || !message) {
            setStatus('error');
            setStatusMessage('Please fill in all required fields.');
            return;
        }

        setStatus('loading');
        setStatusMessage('');

        const emailData = {
            title: `New message from ${name}`,
            name: name,
            email: email,
            message: message,
            time: new Date().toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                timeZone: "Asia/Jakarta",
            }),
        };

        sendContactEmail(emailData)
            .then(() => {
                setStatus('success');
                setStatusMessage('Your message has been sent successfully!');
                formRef.current?.reset();

                setTimeout(() => {
                    setStatus('idle');
                    setStatusMessage('');
                }, 5000);
            })
            .catch((error) => {
                setStatus('error');
                setStatusMessage('Failed to send the message. Please try again.');
                console.error('FAILED TO SEND EMAIL...', error);

                setTimeout(() => {
                    setStatus('idle');
                    setStatusMessage('');
                }, 5000);
            });
    };

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
                    {profileData.email && (
                        <Button asChild className="bg-[#25D366] hover:bg-[#1DAA51] text-white font-bold text-base px-5 py-6">
                            <Link href={`mailto:${profileData.email}`}>
                                <Mail className="mr-2 h-5 w-5" /> Email
                            </Link>
                        </Button>
                    )}
                    {profileData.github && (
                        <Button asChild className="bg-[#333] hover:bg-[#111] text-white font-bold text-base px-5 py-6">
                            <Link href={profileData.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-5 w-5" /> GitHub
                            </Link>
                        </Button>
                    )}
                    {profileData.linkedin && (
                        <Button asChild className="bg-[#0A66C2] hover:bg-[#0854a0] text-white font-bold text-base px-5 py-6">
                            <Link href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                            </Link>
                        </Button>
                    )}
                    {profileData.instagram && (
                        <Button asChild className="bg-[#E4405F] hover:bg-[#C13584] text-white font-bold text-base px-5 py-6">
                            <Link href={profileData.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram className="mr-2 h-5 w-5" /> Instagram
                            </Link>
                        </Button>
                    )}
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
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-muted-foreground">Name*</Label>
                            <Input id="name" name="name" placeholder="Your Name" className="py-6" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-muted-foreground">Email*</Label>
                            <Input id="email" name="email" type="email" placeholder="your.email@example.com" className="py-6" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-muted-foreground">Message*</Label>
                        <Textarea id="message" name="message" placeholder="Let's talk about..." rows={6} required />
                    </div>
                    <Button type="submit" className="w-full text-base font-bold py-7" disabled={status === 'loading'}>
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                            </>
                        ) : 'Begin the conversation'}
                    </Button>
                    {statusMessage && (
                        <p className={cn(
                            "text-sm text-center mt-4",
                            status === 'success' && "text-green-600",
                            status === 'error' && "text-destructive"
                        )}>
                            {statusMessage}
                        </p>
                    )}
                </form>
            </section>

            <footer className="mt-8 flex items-center justify-center gap-2">
                <div>
                    <Clock className="h-4 w-4" />
                </div>
                <Typography variant="muted" className="text-xs">
                    Typical response time: 1-2 hours (Weekdays, GMT+7). I reply with care.
                </Typography>
            </footer>
        </div>
    );
}
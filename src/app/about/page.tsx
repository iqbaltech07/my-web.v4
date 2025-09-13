import React from 'react'
import { CertificationTabContent } from "~/components/pages/about/CertificationTabContent";
import { EducationTabContent } from '~/components/pages/about/EducationTabContent';
import { ExperienceTabContent } from '~/components/pages/about/ExperienceTabContent';
import { IntroTabContent } from "~/components/pages/about/IntroTabContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";


const About = () => {
    return (
        <>
            <section className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                    Tentang Saya
                </h1>
            </section>

            <Tabs defaultValue="intro" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="intro">Intro</TabsTrigger>
                    <TabsTrigger value="experience">Pengalaman</TabsTrigger>
                    <TabsTrigger value="education">Pendidikan</TabsTrigger>
                    <TabsTrigger value="certification">Sertifikasi</TabsTrigger>
                </TabsList>

                <TabsContent value="intro">
                    <IntroTabContent />
                </TabsContent>
                <TabsContent value="experience">
                    <ExperienceTabContent />
                </TabsContent>
                <TabsContent value="education">
                    <EducationTabContent />
                </TabsContent>
                <TabsContent value="certification">
                    <CertificationTabContent />
                </TabsContent>
            </Tabs>
        </>
    )
}

export default About
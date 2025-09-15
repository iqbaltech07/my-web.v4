import React from "react"
import { CertificationTabContent } from "~/components/pages/about/CertificationTabContent"
import { EducationTabContent } from "~/components/pages/about/EducationTabContent"
import { ExperienceTabContent } from "~/components/pages/about/ExperienceTabContent"
import { IntroTabContent } from "~/components/pages/about/IntroTabContent"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Typography } from "~/components/ui/typography"

const tabItems = [
    {
        value: "intro",
        label: "Intro",
        content: <IntroTabContent />,
    },
    {
        value: "experience",
        label: "Experience",
        content: <ExperienceTabContent />,
    },
    {
        value: "education",
        label: "Education",
        content: <EducationTabContent />,
    },
    {
        value: "certification",
        label: "Certification",
        content: <CertificationTabContent />,
    },
]

const About = () => {
    return (
        <>
            <section className="mb-12">
                <Typography variant="h1" className="font-bold tracking-tight">
                    About Me
                </Typography>
                <Typography variant="p" className="text-md lg:text-lg">
                    Fueled by belief, woven in code. This is the course I pursue, and the
                    trail I continue to build.
                </Typography>
            </section>

            <Tabs defaultValue="intro" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
                    {tabItems.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value} className="cursor-pointer">
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {tabItems.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                        {tab.content}
                    </TabsContent>
                ))}
            </Tabs>
        </>
    )
}

export default About

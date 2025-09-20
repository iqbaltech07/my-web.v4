import type { Metadata } from 'next';
import ContactPageContent from '~/components/pages/contact/ContactPageContent';
import { getProfileData } from '~/lib/data';

export const metadata: Metadata = {
    title: 'Contact Me | M Iqbal Ferdiansyah',
    description: 'Have a question, a project idea, or just want to connect? Feel free to reach out to M Iqbal Ferdiansyah.',
    openGraph: {
        title: 'Contact Me | M Iqbal Ferdiansyah',
        description: 'Get in touch for collaborations, project inquiries, or just a friendly chat.',
    },
};

export default async function ContactPage() {
    const profileData = await getProfileData();

    return <ContactPageContent profileData={profileData} />;
}
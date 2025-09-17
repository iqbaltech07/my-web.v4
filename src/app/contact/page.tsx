import type { Metadata } from 'next';
import ContactPageContent from '~/components/pages/contact/ContactPageContent';

export const metadata: Metadata = {
    title: 'Contact Me | M Iqbal Ferdiansyah',
    description: 'Have a question, a project idea, or just want to connect? Feel free to reach out to M Iqbal Ferdiansyah.',
    openGraph: {
        title: 'Contact Me | M Iqbal Ferdiansyah',
        description: 'Get in touch for collaborations, project inquiries, or just a friendly chat.',
    },
};

export default function ContactPage() {
    return <ContactPageContent />;
}
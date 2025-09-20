import { Typography } from "~/components/ui/typography";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | M Iqbal Ferdiansyah",
    description: "Privacy Policy for the personal website of M Iqbal Ferdiansyah.",
};

const PrivacyPolicyPage = () => {
    return (
        <>
            <section className="mb-12">
                <Typography variant="h1" className="font-bold tracking-tight">
                    Privacy Policy
                </Typography>
                <Typography variant="p" className="text-muted-foreground">
                    Last updated: Sept 20, 2025
                </Typography>
            </section>

            <article className="space-y-8">
                <Typography variant="p" className="leading-relaxed">
                    Thank you for visiting my personal website. This Privacy Policy explains how I collect, use, and protect your personal information. By using this site, you agree to the collection and use of information in accordance with this policy.
                </Typography>

                <div className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        Information I Collect
                    </Typography>
                    <Typography variant="p" className="leading-relaxed">
                        I may collect information from you in several ways on this site:
                    </Typography>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        <li>
                            <strong>Contact Form:</strong> When you send a message through the contact form, I collect your name, email address, and message content in order to respond to your inquiries or feedback.
                        </li>
                        <li>
                            <strong>Guestbook:</strong> When you sign in with Google or GitHub to leave a message in the guestbook, I receive basic profile information such as your name, email address, and profile picture. This information is used to publicly display your entry on the guestbook page.
                        </li>
                        <li>
                            <strong>Log Data & Cookies:</strong> Like many websites, I may use log files to collect information such as IP addresses, browser types, the pages you visit, and the time of your visit. This information is used for statistical analysis and to improve the user experience.
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        How Your Information Is Used
                    </Typography>
                    <Typography variant="p" className="leading-relaxed">
                        The collected information may be used for the following purposes:
                    </Typography>
                    <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                        <li>To respond to communications you initiate through the contact form.</li>
                        <li>To display your name and message on the guestbook page.</li>
                        <li>To maintain and improve the security and performance of the website.</li>
                        <li>To analyze usage trends in order to enhance site content and functionality.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        Third-Party Services
                    </Typography>
                    <Typography variant="p" className="leading-relaxed">
                        The guestbook feature on this site uses third-party authentication services (Google and GitHub). When you choose to sign in with one of these services, you will be redirected to their authentication page. I only receive the basic profile information that you consent to share. I recommend reviewing their privacy policies:
                    </Typography>
                    <ul className="list-disc space-y-2 pl-5">
                        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-primary">Google Privacy Policy</a></li>
                        <li><a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" className="underline text-primary">GitHub Privacy Statement</a></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        Data Security
                    </Typography>
                    <Typography variant="p" className="leading-relaxed">
                        I am committed to protecting your data. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While I strive to use reasonable means to protect your personal information, I cannot guarantee its absolute security.
                    </Typography>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        Your Rights
                    </Typography>
                    <Typography variant="p" className="leading-relaxed">
                        You have the right to request the deletion of your personal data, such as entries in the guestbook. Please contact me if you would like to make such a request.
                    </Typography>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        Changes to This Policy
                    </Typography>
                    <Typography variant="p" className="leading-relaxed">
                        I may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated date will be revised accordingly.
                    </Typography>
                </div>

                <div className="space-y-4">
                    <Typography variant="h2" className="text-2xl font-semibold border-b pb-2">
                        Contact Me
                    </Typography>
                    <Typography variant="p" className="leading-relaxed">
                        If you have any questions regarding this Privacy Policy, feel free to <Link href="/contact" className="underline text-primary">contact me</Link>.
                    </Typography>
                </div>
            </article>
        </>
    );
};

export default PrivacyPolicyPage;

import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { ThemeProvider } from "~/lib/ThemeProvider";
import { cn } from "~/lib/utils";
import "./globals.css";

const onest = Onest({
    variable: "--font-onest-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    onest.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
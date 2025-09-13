import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import { Sidebar } from "~/components/Sidebar";
import { cn } from "~/lib/utils";
import { MobileHeader } from "~/components/MobileHeader";
import { ThemeProvider } from "~/lib/ThemeProvider";

const onest = Onest({
  variable: "--font-onest-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Iqbal Ferdiansyah",
  description: "Hey, I’m Muhammad Iqbal – passionate about coding, learning, and creating.",
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icons/coding.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          onest.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex min-h-screen max-w-7xl mx-auto">
            <div className="hidden lg:block">
              <Sidebar />
            </div>

            <div className="flex flex-1 flex-col">
              <MobileHeader />
              <div className="flex-1 md:ml-62">
                <main className="px-4 py-6 md:px-6 lg:px-8">
                  <div className="mx-auto max-w-3xl p-5 sm:p-12">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>

  );
}

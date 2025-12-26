import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedBackground } from "@/components/animated-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryan Kumar - Full Stack Developer",
  description: "Portfolio of Aryan Kumar, a full-stack developer specializing in modern web technologies, AI/ML, and scalable applications.",
  keywords: "Developer, Full Stack, React, Node.js, Next.js, TypeScript, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300`} suppressHydrationWarning>
        <AnimatedBackground />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

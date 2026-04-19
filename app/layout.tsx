import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MobileBottomNav, SidebarNav } from "@/components/modules/navigation";
import { TopBar } from "@/components/modules/top-bar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maverick",
  description: "Maverick personal operating system"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen bg-background">
            <SidebarNav />
            <div className="flex min-h-screen flex-1 flex-col">
              <TopBar />
              <main className="flex-1 p-4 pb-20 md:p-6 md:pb-6">{children}</main>
            </div>
            <MobileBottomNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

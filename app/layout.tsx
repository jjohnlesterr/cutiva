import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "./providers";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cutiva",
  description:
    "Affordable and reliable premium digital accounts. Access streaming services, creative tools, and AI-powered applications at budget-friendly prices.",
  icons: {
    icon: "/8.png",
    shortcut: "/logotab.png",
    apple: "/logotab.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-background"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>

        <ScrollToTop />

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
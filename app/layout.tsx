import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cutiva',
  description:
    'Affordable and reliable premium digital accounts. Access streaming services, creative tools, and AI-powered applications at budget-friendly prices.',
  generator: 'v0.app',
  icons: {
    icon: '/8.png',
    shortcut: '/logotab.png',
    apple: '/logotab.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
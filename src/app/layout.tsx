import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SoulShare - A mental health and empowerment community',
  description: 'Find like-minded people and empower each other',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <script
          async
          data-uid='a15afa33b0'
          src='https://soul-share.ck.page/a15afa33b0/index.js'></script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

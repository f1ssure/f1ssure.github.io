import type { Metadata } from 'next';
import { Geist, Geist_Mono, Tinos, Work_Sans } from 'next/font/google';
import ScrollToTop from './scroll';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const tinos = Tinos({
  variable: '--font-tinos',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Gabrielius Bakas',
  description: 'My cute lil\' webpage.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tinos.variable} ${workSans.variable} antialiased`}
      >
        <div className='flex lg:flex-row flex-col items-center lg:items-start mx-2.5 mb-25 lg:mb-40 max-w-5xl mt-10 md:mt-20 lg:mt-32 lg:mx-auto'>
          <ScrollToTop />
          {children}
        </div>
      </body>
    </html>
  );
}

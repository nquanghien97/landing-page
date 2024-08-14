import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import AppHeader from './_component/AppHeader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Contact from './_component/Contact';
import AppFooter from './_component/AppFooter';

export const dynamic = 'force-dynamic';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.google.com/'),
  title: 'HOSHI',
  openGraph: {
    locale: 'vi_VN',
    title: 'HOSHI',
    url: 'https://www.google.com',
    siteName: 'HOSHI',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        {children}
        <Contact />
        <AppFooter />
      </body>
    </html>
  )
}

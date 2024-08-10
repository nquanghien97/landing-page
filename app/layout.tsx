import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import AppHeader from './_component/AppHeader';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PhoneIcon from '@/assets/icons/PhoneIcon';
import ZaloIcon from '@/assets/icons/ZaloIcon';
import MessageIcon from '@/assets/icons/MessageIcon';
import Contact from './_component/Contact';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.google.com/'),
  title: 'Trang chủ - MAM DESIGN - Thiết kế và thi công nội thất',
  openGraph: {
    locale: 'vi_VN',
    title: 'Trang chủ - MAM DESIGN - Thiết kế và thi công nội thất',
    url: 'https://www.google.com',
    siteName: 'Trang chủ - MAM DESIGN - Thiết kế và thi công nội thất',
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
      </body>
    </html>
  )
}

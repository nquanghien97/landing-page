import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import AppHeader from './_component/AppHeader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NGẮM TRỌN KIỆT TÁC NGHỆ THUẬT VỚI MẪU THIẾT KẾ CĂN BIỆT THỰ TÂN CỔ ĐIỂN ĐẸP TỪNG &quot;XEN-TI-MET&quot; - MAM DESIGN - Thiết kế và thi công nội thất',
  description: 'THÔNG TIN CÔNG TRÌNH: Chủ đầu tư: Chị Nguyên Diện tích: 200m2 Địa chỉ: Hưng Yên Đúng như tên gọi, mẫu thiết kế căn biệt thự mang phong cách Tân Cổ Điển luôn hút mắt người nhìn bởi sự sang trọng, kết hợp sự trang nhã với nét mạnh mẽ, cá tính, nét cổ điển...',
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
      </body>
    </html>
  )
}

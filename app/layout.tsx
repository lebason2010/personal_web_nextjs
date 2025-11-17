import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/narbar'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trang web cá nhân của tôi',
  description: 'Giới thiệu bản thân và các dự án.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {}
      
      <body
        className={`${inter.className} bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen text-white`}
      >
        <Navbar /> {/* 👈 Thêm Navbar ở đây */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
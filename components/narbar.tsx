"use client"; // Cần thiết để dùng usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Trang chủ' },
    { href: '/about', label: 'Giới thiệu' },
    { href: '/projects', label: 'Dự án' },
    { href: '/contact', label: 'Liên hệ' },
  ];

  return (
    <nav className="bg-black bg-opacity-50 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-center space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-lg font-medium ${
              pathname === link.href
                ? 'text-white border-b-2 border-white'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}   
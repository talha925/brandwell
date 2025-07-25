'use client';

import Link from 'next/link';
import React from 'react';

const navLinks = [
  { href: '/admin/blogs/create', label: 'Create Blog' },
  { href: '/admin/blogs', label: 'All Blogs' },
];

function handleLogout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col py-8 px-4 space-y-8 fixed top-0 left-0 h-screen z-40">
        <div className="text-2xl font-bold mb-8">Admin Panel</div>
        <nav className="flex flex-col gap-4 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded hover:bg-gray-700 transition-colors font-medium"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="w-full mt-8 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8 overflow-auto ml-64">{children}</main>
    </div>
  );
} 
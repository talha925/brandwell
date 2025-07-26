"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const pathname = usePathname();

  // Hide header on all /admin routes
  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="w-full flex flex-col md:flex-row items-center md:justify-between p-1 space-y-2 md:space-y-0 bg-white shadow">
      <div className="flex items-center ml-8">
        <Image
          src="/image/Logo-ATT.png"
          alt="logo"
          width={100}
          height={50}
          className="w-full md:w-36 h-auto p-4"
        />
        <h1 className="text-3xl bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-bold mr-60 md:mr-7 sm:ml-2">
          BRANDWELL
        </h1>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden">
            <Menu />
          </button>
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="hover:text-orange-500">
              <Link href="/"> HOME</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-blue-600">
              <Link href="/Categories">CATEGORIES</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-blue-600">
              <Link href="/stores">STORES</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 text-blue-600">
              <Link href="/blog">BLOG</Link>
            </li>
            {isAuthenticated && <></>}
          </ul>
        </SheetContent>
      </Sheet>
      <nav className="hidden gap-4 items-center mr-44 md:flex space-x-3 list-none text-sm">
        <Link href="/" className="hover:text-orange-500">
          HOME
        </Link>
        <div className="relative ">
          <Link href="/Categories" className="hover:text-orange-500 ">
            CATEGORIES
          </Link>
        </div>
        <div className="relative">
          <Link href="/stores" className="hover:text-orange-500 ">
            STORES
          </Link>
        </div>
        <div className="relative">
          <Link href="/blog" className="hover:text-orange-500 ">
            BLOG
          </Link>
        </div>
        {isAuthenticated && <></>}
      </nav>
      <div className="flex flex-1 ">
        <input
          type="text"
          placeholder="Find Coupons & Stores"
          className="border rounded-lg px-4 py-3 w-80"
        />
      </div>
    </header>
  );
}






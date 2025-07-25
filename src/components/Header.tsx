"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, isAuthenticated, logout, isLoading } = useAuth();

  return (
    <header className="bg-white text-sm overflow-x-hidden flex flex-col md:flex-row items-center md:justify-between sm:flex-row-items-center sm:justify-between p-1 md:p-1  sm-p-0 space-y-2 md:space-y-0">

      <div className="flex items-center md:-gap-5  sm:-gap-0 ml-8">
        <Image
          src="/image/Logo-ATT.png"
          alt="logo"
          width={100}
          height={50}
          className="w-full md:w-36 h-auto p-4  md:gap-7 sm:gap-1"
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
              {isAuthenticated && (
                <></>
              )}
            </ul>
          </SheetContent>
        </Sheet>
      <nav className="hidden gap-4 items-center mr-44 md:flex space-x-3 sm:flex-space-x-1 list-none text-sm">
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
        
        {isAuthenticated && (
          <></>
        )}
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






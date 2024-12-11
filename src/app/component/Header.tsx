"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {



  return (
    <header className="bg-white text-sm flex flex-col md:flex-row items-center md:justify-between  sm:flex-row-items-center sm:justify-between p-1 md:p-1  sm-p-0 space-y-2 md:space-y-0">

      <div className="flex items-center md:gap-1 ml-28">
        <Image
          src="/image/Logo-ATT.png"
          alt="logo"
          width={100}
          height={50}
          className="w-full md:w-36 h-auto p-4  md:gap-7 sm:gap-1"
        />
        <h1 className="text-3xl bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent font-bold mr-60 md:mr-4 sm:ml-2">
          BRANDWELL
        </h1>
      </div>
      <nav className="flex gap-4 items-center mr-44  md:flex space-x-3 sm:flex-space-x-1 list-none text-xl">
        <Link href="/" className="hover:text-orange-500">
           HOME
        </Link>

        {/* CATEGORIES with Dropdown */}
        
          {/* <button
            onClick={toggleDropdown}
            className="hover:text-orange-500 flex items-center"
          >
           
          </button>  */}
          {/* {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
              {[
                "Accessories",
                "Art",
                "Automotive",
                "Baby",
                "Beauty",
                "Business & Services",
                "Clothing",
                "Department Stores",
                "Electronics",
                "Entertainment",
              ].map((category, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link href={`/categories/${category.toLowerCase()}`}>
                    {category}
                  </Link>
                </li>
              ))} */}
               <div className="relative">
          <Link href="Categories" className="hover:text-orange-500">
      CATEGORIES
            </Link>
        
        </div>

        <Link href="Coupons" className="hover:text-orange-500">
       COUPONS
        </Link>
      </nav>

   
      <div className="flex flex-1 ml-4">
        <input
          type="text"
          placeholder="Find Coupons & Stores"
          className="border rounded-lg px-4 py-3 w-96"
        />

     
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
                <Link href="Categories">CATEGORIES</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 text-blue-600">
                <Link href="Coupons">Coupons</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

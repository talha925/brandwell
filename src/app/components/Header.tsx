"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status when component mounts
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const userStr = localStorage.getItem('user');
      
      if (token) {
        setIsLoggedIn(true);
        if (userStr) {
          try {
            const user = JSON.parse(userStr);
            setUserName(user.name || user.email || "User");
          } catch (e) {
            console.error("Error parsing user data", e);
          }
        }
      } else {
        setIsLoggedIn(false);
        setUserName("");
      }
    };
    
    // Run on component mount
    checkAuth();
    
    // Setup event listener for storage changes (for multi-tab support)
    const handleStorageChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      
      // Call the logout API to clear the HTTP-only cookie
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Clear client-side storage
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      
      // Update state
      setIsLoggedIn(false);
      setUserName("");
      
      // Redirect to home page
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

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
              {isLoggedIn && (
                <>
                  <li className="px-4 py-2 hover:bg-gray-100 text-blue-600">
                    <Link href="/blog/create">CREATE BLOG</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 text-red-600">
                    <button 
                      onClick={handleLogout} 
                      className="flex items-center"
                      disabled={isLoggingOut}
                    >
                      <LogOut size={16} className="mr-1" /> {isLoggingOut ? 'LOGGING OUT...' : 'LOGOUT'}
                    </button>
                  </li>
                </>
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
        
        {isLoggedIn && (
          <>
            <div className="relative">
              <Link href="/blog/create" className="hover:text-orange-500">
                CREATE BLOG
              </Link>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-gray-600">Hi, {userName}</span>
              <button 
                onClick={handleLogout}
                className="flex items-center text-red-600 hover:text-red-800"
                disabled={isLoggingOut}
              >
                <LogOut size={16} className="mr-1" /> {isLoggingOut ? 'LOGGING OUT...' : 'LOGOUT'}
              </button>
            </div>
          </>
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
"use client";


import { useState, useEffect } from "react";
import Image from "next/image";

export default function Blogs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/image/travel1.jpg",
    "/image/health1.jpg",
    "/image/sport.png",
    "/image/travel1.jpg",
    "/image/app.png",
    "/image/home-(3).png",
    "/image/bali.png",
    "/image/fashion1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]); 

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="container ">
      <section className="p-0">
        <div className="relative text-3xl font-bold text-start mb-18 pb-10">
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-3 rounded-full cursor-pointer z-10"
          >
            ❮
          </button>
          <div className="w-screen md:w-screen sm:w-screeen h-full md:h-full relative ml-1 md:ml-4 sm:ml-9 md:mr-4">
            <div className="opacity-100 transition-opacity duration-500">
              <Image
                src={images[currentSlide]}
                alt="Current Image"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-start text-white p-44 mb-80">
                <h1 className="mb-16 mt-32">
                  Best Practices for Preserving Your Smart Appliances Performance
                </h1>
                <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Read more
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-3 rounded-full cursor-pointer z-10"
          >
            ❯
          </button>
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold text-start mb-7r md:ml-4 sm:ml-7">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6">
          <div className="relative bg-blue-50 md:ml-4 shadow-md rounded-md  overflow-hidden hover:shadow-sm transition-shadow  ">
    
            <Image
              src="/image/travel1.jpg"
              alt="Travel Image"
              width={800}
              height={300}
              className="w-full h-auto"
            />

            <h1 className="p-10 text-black font-bold text-3xl">Travel</h1>
          </div>

          <div className="relative bg-blue-50 shadow-md rounded-md overflow-hidden  hover:shadow-lg  transition-shadow mb-3">
            <Image
              src="/image/health1.jpg"
              alt="Health"
              width={800}
              height={450}
              className="rounded shadow-md"
            />
            <h1 className="p-10 text-black font-bold text-3xl">Lifestyle</h1>
          </div>

          <div className="relative bg-blue-50 shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src="/image/sport.png"
              alt="Sport"
              width={800}
              height={450}
              className="rounded shadow-md"
            />
            <h1 className="p-10 text-black font-bold text-3xl">Sports and Fitness</h1>
          </div>

          <div className="relative bg-blue-50 shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow -mb-4" >
            <Image
              src="/image/header_image_Article_Main-The_Many_Health_and_Beauty_Benefits_of_Castor_Oil-300x169.png"
              alt="Health and Fitness"
              width={800}
              height={450}
              className="rounded shadow-md"
            />
            <h1 className="p-10 text-black font-bold text-3xl">Health and Beauty</h1>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-black font-bold text-3xl mb-8 text-start pt-6 ml-3">Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative bg-transparent shadow-md ml-3 mr-3 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src="/image/app.png"
              alt="App"
              width={800}
              height={450}
              className="rounded shadow-md md:w-screen sm:w-56 "
            />
            <h1 className="p-10 text-black text-3xl">Best Practices for Preserving Your Smart Appliances Performance</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src="/image/home-(3).png"
              alt="Home"
              width={800}
              height={450}
              className="rounded shadow-md"
            />
            <h1 className="p-10 text-black text-3xl">Home Security Cameras Made Easy: Your Ultimate Guide to Safety Solutions</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              src="/image/bali.png"
              alt="Bali"
              width={800}
              height={450}
            />
            <h1 className="p-10 text-black text-3xl">Why Smart Homes Are the Future: Discover the Advantages of IoT</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/scot.png"
              alt="digi"
              width={800}
              height={450}
            />
            <h1 className="p-10 text-black text-3xl">Chasing Thrills: Top Adventure Travel Hotspots</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/adveture.png"
              alt="digi"
              width={800}
              height={450}
            />
            <h1 className="p-10 text-black text-3xl">Best Places for Digital Nomads in 2024</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/fashion1.jpg"
              alt="Fashion"
              width={800}
              height={450}
            />
            <h1 className="p-10 text-black text-3xl">Scotland Secret Wonders: Exploring Beyond Edinburgh and Glasgow</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/digi.png"
              alt="fitness"
              width={800}
              height={450}
            />
            <h1 className="p-10 text-black text-3xl">Exploring Bali&apos;s Hidden Cultural Wonders</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/ot.png"
              alt="digi"
              width={800}
              height={450}
            />
            <h1 className="p-10 text-black text-3xl">Techniques and Benefits of Stretching</h1>
          </div>

          <div className="relative bg-transparent shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow pb-28">
            <Image
              src="/image/fitness.png"
              alt="digi"
              width={800}
              height={450}
            />
            <h1 className="p-10 text-black text-3xl">Preserving Your Favorite Gadgets: Repair or Replace?</h1>
          </div>
        </div>
      </section>
      <footer className="bg-black text-white py-4 ">
      <div className="container mx-auto px-4 text-center" >
   
        <div className="flex justify-center  mb-44 space-x-4">
   
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-1 md:stroke-2"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.306.975.975 1.244 2.242 1.306 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.306 3.608-.975.975-2.242 1.244-3.608 1.306-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.306-.975-.975-1.244-2.242-1.306-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.306-3.608.975-.975 2.242-1.244 3.608-1.306 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.67.014-4.947.072-1.63.07-3.179.51-4.343 1.674-1.164 1.164-1.604 2.713-1.674 4.343-.058 1.277-.072 1.688-.072 4.947s.014 3.67.072 4.947c.07 1.63.51 3.179 1.674 4.343 1.164 1.164 2.713 1.604 4.343 1.674 1.277.058 1.688.072 4.947.072s3.67-.014 4.947-.072c1.63-.07 3.179-.51 4.343-1.674 1.164-1.164 1.604-2.713 1.674-4.343.058-1.277.072-1.688.072-4.947s-.014-3.67-.072-4.947c-.07-1.63-.51-3.179-1.674-4.343-1.164-1.164-2.713-1.604-4.343-1.674-1.277-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.287c-2.276 0-4.125-1.849-4.125-4.125s1.849-4.125 4.125-4.125 4.125 1.849 4.125 4.125-1.849 4.125-4.125 4.125zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
            </svg>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-1 md:stroke-2"
            >
              <path d="M22.676 0h-21.352c-.732 0-1.324.592-1.324 1.324v21.352c0 .732.592 1.324 1.324 1.324h11.483v-9.294h-3.13v-3.622h3.13v-2.671c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.465.099 2.795.143v3.24h-1.917c-1.505 0-1.795.715-1.795 1.763v2.313h3.59l-.467 3.622h-3.123v9.294h6.132c.732 0 1.324-.592 1.324-1.324v-21.352c0-.732-.592-1.324-1.324-1.324z" />
            </svg>
          </a>

          <div className="border-b-* border-indigo-200 "></div>
        </div>
        
        <ul className="flex justify-center mb-28 space-x-6 text-sm ">
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
          <li><a href="Coupons" className="hover:underline">Coupons</a></li>
        </ul>
     
        <p className="text-xs text-gray-500">
          © 2024 Bloggydeals. We may earn a commission if you use our links/coupons.
        </p>
      </div>
    </footer>
    </div>
 
  );
}

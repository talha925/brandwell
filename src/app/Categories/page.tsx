// import { FaHeart, FaCar, FaBaby, FaBrush, FaLaptop, FaHome } from "react-icons/fa"; 
// import { GiLipstick, GiShirt, GiPawHeart, GiCakeSlice, GiFlashlight } from "react-icons/gi";
// import Link from 'next/link';  

// export default async function Categories() {
//   const categories = [
//     { name: "Accessories", icon: <FaBrush /> },
//     { name: "Adult", icon: <FaHeart /> },
//     { name: "Art", icon: <FaBrush /> },
//     { name: "Automotive", icon: <FaCar /> },
//     { name: "Baby", icon: <FaBaby /> },
//     { name: "Beauty", icon: <GiLipstick /> },
//     { name: "Business & Services", icon: <FaLaptop /> },
//     { name: "Clothing", icon: <GiShirt /> },
//     { name: "Electronics", icon: <FaLaptop /> },
//     { name: "Entertainment", icon: <FaHeart /> },
//     { name: "Food & Drinks", icon: <GiFlashlight /> },
//     { name: "Health", icon: <GiPawHeart /> },
//     { name: "Home & Garden", icon: <FaHome /> },
//     { name: "Photography", icon: <FaHeart /> },
//     { name: "Restaurants", icon: <FaHeart /> },
//     { name: "Toys", icon: <FaBaby /> },
//     { name: "Travel", icon: <FaCar /> },
//     { name: "Wedding", icon: <GiCakeSlice /> },
//   ];
//   const movieData = await fetch(`https://coupon-app-backend.vercel.app/api/categories`);
//   if (!movieData.ok) {
//     console.error(`Error: ${movieData.status} - ${movieData.statusText}`);
//   }
//   const movie = await movieData.json();
//   console.log(movie);
  
//   return (
//     <div className="p-6">
//       <div className="text-2xl mb-2 text-blue-500">  {movie?.name || "No Data Found"}</div>
//       <h1 className="text-2xl font-bold text-center mb-8">
//         Coupons, Promo Codes & Deals by Category
//       </h1>
//       <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-4">
//         {categories.map((category, index) => (
//           <Link
//             href={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
//             key={index}
          
//              className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
//               <div className="text-2xl mb-2 text-blue-500">{category.icon}</div>
//               <span className="text-sm font-medium">{category.name}</span>
           
//           </Link>
//         ))}
//       </div>
// 'use client';

// import { useEffect, useState } from "react";
// import { FaHeart, FaCar, FaBaby, FaBrush, FaLaptop, FaHome } from "react-icons/fa";
// import { GiLipstick, GiShirt, GiPawHeart, GiCakeSlice, GiFlashlight } from "react-icons/gi";
// import Link from 'next/link';

// // TypeScript Type
// type Movie = {
//   name: string;
//   [key: string]: any; // Extra properties ko handle karne ke liye
// };

// export default async function Categories() {
  // const [movie, setMovie] = useState<Movie | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`https://coupon-app-backend.vercel.app/api/stores`);
  //       const data = await response.json();
  //       console.log("API Response:", data);
  //       setMovie(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
//   const movieData = await fetch(`https://coupon-app-backend.vercel.app/api/stores`);
//   const movie = await movieData.json();
//   console.log("Fetched Movie Data:", movie);
  
//   const categories = [
//     { name: "Accessories", icon: <FaBrush /> },
//     { name: "Adult", icon: <FaHeart /> },
//     { name: "Art", icon: <FaBrush /> },
//     { name: "Automotive", icon: <FaCar /> },
//     { name: "Baby", icon: <FaBaby /> },
//     { name: "Beauty", icon: <GiLipstick /> },
//     { name: "Business & Services", icon: <FaLaptop /> },
//     { name: "Clothing", icon: <GiShirt /> },
//     { name: "Electronics", icon: <FaLaptop /> },
//     { name: "Entertainment", icon: <FaHeart /> },
//     { name: "Food & Drinks", icon: <GiFlashlight /> },
//     { name: "Health", icon: <GiPawHeart /> },
//     { name: "Home & Garden", icon: <FaHome /> },
//     { name: "Photography", icon: <FaHeart /> },
//     { name: "Restaurants", icon: <FaHeart /> },
//     { name: "Toys", icon: <FaBaby /> },
//     { name: "Travel", icon: <FaCar /> },
//     { name: "Wedding", icon: <GiCakeSlice /> },
//   ];

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-6">
// <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-4">
//   {movie.data && movie.data.map((category: any, index: number) => (
//     <div
//     //   href={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
//       key={index}
//       className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
//     >
        


//       <div className="text-2xl mb-2 text-blue-500">📌</div> {/* Temporary icon */}
//     <Link href={`/categories/${category.trackingUrl.toLowerCase().replace(/ /g, "-")}`}>  <span className="text-sm font-medium">{category.trackingUrl}</span></Link>
//       <h1 className="text-sm font-medium">{category.short_description}</h1>
//     </div>
//   ))}
// </div>

//       <h1 className="text-2xl font-bold text-center mb-8">
//         Coupons, Promo Codes & Deals by Category
//       </h1>
//       <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-4">
//         {categories.map((category, index) => (
//           <Link
//             href={`/categories/${category.name.toLowerCase().replace(/ /g, "-")}`}
//             key={index}
//             className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
//           >
//             <div className="text-2xl mb-2 text-blue-500">{category.icon}</div>
//             <span className="text-sm font-medium">{category.name}</span>
//           </Link>
//         ))}
//       </div>
    
   
//       <footer className="bg-black text-white w-screen max-h-96 w-flex flex-col justify-between pb-6">
      
//         <div className="flex-grow px-4 flex flex-col items-center justify-center my-9">
  
//           <div className="flex space-x-2 my-9">
        
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-white transition mt-0"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="h-8 w-8"
//               >
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ..."></path>
//               </svg>
//             </a>
            
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-white transition"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 className="h-8 w-8"
//               >
//                 <path d="M22.676 0h-21.352c-.732 0-1.324.592 ..."></path>
//               </svg>
//             </a>
//           </div>
//       x
      
//           <ul className="flex flex-wrap justify-center space-x-6 text-sm my-6">
//             <li><a href="#" className="hover:underline">About Us</a></li>
//             <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//             <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
//             <li><a href="#" className="hover:underline">Contact Us</a></li>
//             <li><a href="Coupons" className="hover:underline">Coupons</a></li>
//           </ul>
//         </div>


//         <p className="text-xs text-gray-400 text-center pt-28">
//           © 2024 Bloggydeals. We may earn a commission if you use our links/coupons.
//         </p>
//       </footer>
//     </div>
//   );
// }







// 'use client';

// import { useEffect, useState } from "react";

// // TypeScript Type according to your API response
// type Coupon = {
//   _id: string;
//   name: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   directUrl: string;
//   short_description: string;
//   long_description: string;
//   trackingUrl: string;
//   categories: string[]; // Assuming categories is an array of strings
//   language: string;
//   isTopStore: boolean;
//   isEditorsChoice: boolean;
//   heading: string;
//   createdAt: string;
//   updatedAt: string;
// };

// export default function Home() {
//   const [coupons, setCoupons] = useState<Coupon[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchCoupons() {
//       try {
//         const res = await fetch("https://coupon-app-backend.vercel.app/api/stores");
//         if (!res.ok) {
//           throw new Error(`Error: ${res.status}`);
//         }
//         const jsonData = await res.json();
//         setCoupons(jsonData.data); // Accessing the 'data' array directly
//       } catch (err) {
//         setError("Failed to fetch coupons. Please try again later.");
//         console.error(err);
//       }
//     }
//     fetchCoupons();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Available Coupons</h1>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {coupons.map((coupon) => (
//           <div key={coupon._id} className="bg-white shadow-lg rounded-2xl p-4">
//             <img
//               src={coupon.image.url}
//               alt={coupon.image.alt}
//               className="rounded-xl mb-4 w-full h-40 object-cover"
//             />
//             <h2 className="text-xl font-semibold mb-2">{coupon.name}</h2>
//             <p className="text-gray-600 mb-4">{coupon.short_description}</p>
//             <p className="text-gray-600 mb-4">{coupon.long_description}</p>
            
//             <p className="text-gray-600 mb-4">{coupon.heading}</p>
//             <p className="text-gray-600 mb-4">{coupon.isEditorsChoice ? "Editors Choice" : "Not Editors Choice"}</p>
//             <p className="text-gray-600 mb-4">{coupon.isTopStore ? "Top Store" : "Not a Top Store"}</p>
//             <p className="text-gray-600 mb-4">{coupon.updatedAt}</p>
//             <p className="text-gray-600 mb-4">{coupon.createdAt}</p> 
            
//             <a
//               href={coupon.directUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Redeem Offer
//             </a>
//             <a
//               href={coupon.trackingUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Offer
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { useEffect, useState } from "react";

// // Updated TypeScript Type with the correct structure
// type Coupon = {
//   _id: string;
//   name: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   directUrl: string;
//   trackingUrl: string;
//   short_description: string;
//   long_description: string;
//   categories: string[];
//   language: string;
//   isTopStore: boolean;
//   isEditorsChoice: boolean;
//   heading: string;
//   createdAt: string;
//   updatedAt: string;
//   seo: {
//     meta_title: string;
//     meta_description: string;
//     meta_keywords: string;
//   };
//   coupons: string[];
//   slug: string;
//   __v: number;
// };

// export default function Home() {
//   const [coupons, setCoupons] = useState<Coupon[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchCoupons() {
//       try {
//         const res = await fetch("https://coupon-app-backend.vercel.app/api/stores");
//         if (!res.ok) {
//           throw new Error(`Error: ${res.status}`);
//         }
//         const jsonData = await res.json();
//         setCoupons(jsonData.data); // Accessing the 'data' array directly
//       } catch (err) {
//         setError("Failed to fetch coupons. Please try again later.");
//         console.error(err);
//       }
//     }
//     fetchCoupons();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Available Coupons</h1>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {coupons.map((coupon) => (
//           <div key={coupon._id} className="bg-white shadow-lg rounded-2xl p-4">
//             <img
//               src={coupon.image.url}
//               alt={coupon.image.alt}
//               className="rounded-xl mb-4 w-full h-40 object-cover"
//             />
//             <h2 className="text-xl font-semibold mb-2">{coupon.name}</h2>
//             <p className="text-gray-600 mb-4">{coupon.short_description}</p>
//             <p className="text-gray-600 mb-4">{coupon.long_description}</p>
            
//             <p className="text-gray-600 mb-4">{coupon.heading}</p>
//             <p className="text-gray-600 mb-4">{coupon.isEditorsChoice ? "Editors Choice" : "Not Editors Choice"}</p>
//             <p className="text-gray-600 mb-4">{coupon.isTopStore ? "Top Store" : "Not a Top Store"}</p>
//             <p className="text-gray-600 mb-4">{coupon.updatedAt}</p>
//             <p className="text-gray-600 mb-4">{coupon.createdAt}</p> 
            
//             <a
//               href={coupon.directUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Redeem Offer
//             </a>
//             <a
//               href={coupon.trackingUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Offer
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useEffect, useState } from "react";

// // Updated TypeScript Type with the correct structure
// type Coupon = {
//   _id: string;
//   name: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   directUrl: string;
//   trackingUrl: string;
//   short_description: string;
//   long_description: string;
//   categories: string[];
//   language: string;
//   isTopStore: boolean;
//   isEditorsChoice: boolean;
//   heading: string;
//   createdAt: string;
//   updatedAt: string;
//   seo: {
//     meta_title: string;
//     meta_description: string;
//     meta_keywords: string;
//   };
//   coupons: string[];
//   slug: string;
//   __v: number;
// };

// export default function Home() {
//   const [coupons, setCoupons] = useState<Coupon[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchCoupons() {
//       try {
//         const res = await fetch("https://coupon-app-backend.vercel.app/api/stores");
//         if (!res.ok) {
//           throw new Error(`Error: ${res.status}`);
//         }
//         const jsonData = await res.json();
//         setCoupons(jsonData.data); // Accessing the 'data' array directly
//       } catch (err) {
//         setError("Failed to fetch coupons. Please try again later.");
//         console.error(err);
//       }
//     }

//     fetchCoupons();

//     // Add the new coupon (Zaful Logos) to the coupons list
//     const zafulCoupon: Coupon = {
//       _id: "679e90301f8136e8b4060035",
//       name: "Zaful Logos",
//       image: {
//         url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/171ee919-e0ce-41ba-8ca7-b40b653f15ad-zafulcom_logo.jpeg",
//         alt: "Zaful Logos Best Deals Logo"
//       },
//       directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//       trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//       short_description: "saq",
//       long_description: "asqq",
//       categories: ["66fb9c962b0d9eff6eee3460"],
//       language: "English",
//       isTopStore: false,
//       isEditorsChoice: false,
//       heading: "Coupons & Promo Codes",
//       createdAt: "2025-02-01T21:20:48.648Z",
//       updatedAt: "2025-02-18T15:52:26.315Z",
//       seo: {
//         meta_title: "saq",
//         meta_description: "sq",
//         meta_keywords: "asq"
//       },
//       coupons: [],
//       slug: "Zaful Logos",
//       __v: 0
//     };

//     setCoupons((prevCoupons) => [...prevCoupons, zafulCoupon]);

//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Available Coupons</h1>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {coupons.map((coupon) => (
//           <div key={coupon._id} className="bg-white shadow-lg rounded-2xl p-4">
//             <img
//               src={coupon.image.url}
//               alt={coupon.image.alt}
//               className="rounded-xl mb-4 w-full h-40 object-cover"
//             />
//             <h2 className="text-xl font-semibold mb-2">{coupon.name}</h2>
//             <p className="text-gray-600 mb-4">{coupon.short_description}</p>
//             <p className="text-gray-600 mb-4">{coupon.long_description}</p>
            
//             <p className="text-gray-600 mb-4">{coupon.heading}</p>
//             <p className="text-gray-600 mb-4">{coupon.isEditorsChoice ? "Editors Choice" : "Not Editors Choice"}</p>
//             <p className="text-gray-600 mb-4">{coupon.isTopStore ? "Top Store" : "Not a Top Store"}</p>
//             <p className="text-gray-600 mb-4">{coupon.updatedAt}</p>
//             <p className="text-gray-600 mb-4">{coupon.createdAt}</p> 
            
//             <a
//               href={coupon.directUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Redeem Offer
//             </a>
//             <a
//               href={coupon.trackingUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Offer
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useEffect, useState } from "react";

// // TypeScript Type
// type Coupon = {
//   _id: string;
//   name: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   directUrl: string;
//   trackingUrl: string;
//   short_description: string;
//   long_description: string;
//   categories: string[];
//   language: string;
//   isTopStore: boolean;
//   isEditorsChoice: boolean;
//   heading: string;
//   createdAt: string;
//   updatedAt: string;
//   seo: {
//     meta_title: string;
//     meta_description: string;
//     meta_keywords: string;
//   };
//   coupons: string[];
//   slug: string;
//   __v: number;
// };

// export default function Home() {
//   const [coupons, setCoupons] = useState<Coupon[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchCoupons() {
//       try {
//         const res = await fetch("https://coupon-app-backend.vercel.app/api/stores");
//         if (!res.ok) {
//           throw new Error(`Error: ${res.status}`);
//         }
//         const jsonData = await res.json();
//         setCoupons(jsonData.data);
//       } catch (err) {
//         setError("Failed to fetch coupons. Please try again later.");
//         console.error(err);
//       }
//     }

//     fetchCoupons();

//     // New Coupons List
//     const newCoupons: Coupon[] = [
//       {
//         _id: "67bb9753524643e1351ab1f8",
//         name: "Hello Heading Check",
//         image: {
//           url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/7a24c8eb-bc81-41cb-9935-3cb8e773a693-2672266.jpg",
//           alt: "Hello Heading Check Best Deals Logo"
//         },
//         directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         short_description: "asdas",
//         long_description: "dasdasd",
//         categories: [],
//         language: "English",
//         isTopStore: false,
//         isEditorsChoice: false,
//         heading: "Voucher & Discount Codes",
//         createdAt: "2025-02-23T21:46:59.120Z",
//         updatedAt: "2025-02-23T21:46:59.120Z",
//         seo: {
//           meta_title: "HeadingHeadingHeadingHeading",
//           meta_description: "HeadingHeadingHeading",
//           meta_keywords: "HeadingHeading"
//         },
//         coupons: [],
//         slug: "hello-heading-check",
//         __v: 0
//       },
//       {
//         _id: "67bba162524643e1351ab1fe",
//         name: "Top Store Check",
//         image: {
//           url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/f8f8a7c1-18e1-4497-92d0-8554e59976fd-NICHE.png",
//           alt: "Top Store Check Best Deals Logo"
//         },
//         directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         short_description: "Top Store Check",
//         long_description: "Top Store Check",
//         categories: [],
//         language: "English",
//         isTopStore: false,
//         isEditorsChoice: false,
//         heading: "Promo Codes & Coupon",
//         createdAt: "2025-02-23T22:29:54.330Z",
//         updatedAt: "2025-02-23T22:29:54.330Z",
//         seo: {
//           meta_title: "Top Store Check",
//           meta_description: "Top Store Check",
//           meta_keywords: "Top Store Check"
//         },
//         coupons: [],
//         slug: "top-store-check",
//         __v: 0
//       },
//       {
//         _id: "67bc32449f3f4593c00f4194",
//         name: "Toggle Button Check",
//         image: {
//           url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/31a96c76-8736-44f3-bb45-213d0e6e8626-images.png",
//           alt: "Toggle Button Check Best Deals Logo"
//         },
//         directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         short_description: "Toggle Button Check",
//         long_description: "Toggle Button Check",
//         categories: [],
//         language: "English",
//         isTopStore: false,
//         isEditorsChoice: false,
//         heading: "Voucher & Discount Codes",
//         createdAt: "2025-02-24T08:48:04.737Z",
//         updatedAt: "2025-02-24T08:48:04.737Z",
//         seo: {
//           meta_title: "Toggle Button Check",
//           meta_description: "Toggle Button Check",
//           meta_keywords: "Toggle Button Check"
//         },
//         coupons: [],
//         slug: "toggle-button-check",
//         __v: 0
//       }
//     ];

//     setCoupons((prevCoupons) => [...prevCoupons, ...newCoupons]);

//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Available Coupons</h1>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {coupons.map((coupon) => (
//           <div key={coupon._id} className="bg-white shadow-lg rounded-2xl p-4">
//             <img
//               src={coupon.image.url}
//               alt={coupon.image.alt}
//               className="rounded-xl mb-4 w-full h-40 object-cover"
//             />
//             <h2 className="text-xl font-semibold mb-2">{coupon.name}</h2>
//             <p className="text-gray-600 mb-4">{coupon.short_description}</p>
//             <p className="text-gray-600 mb-4">{coupon.long_description}</p>
            
//             <p className="text-gray-600 mb-4">{coupon.heading}</p>
//             <p className="text-gray-600 mb-4">{coupon.isEditorsChoice ? "Editors Choice" : "Not Editors Choice"}</p>
//             <p className="text-gray-600 mb-4">{coupon.isTopStore ? "Top Store" : "Not a Top Store"}</p>
//             <p className="text-gray-600 mb-4">{coupon.updatedAt}</p>
//             <p className="text-gray-600 mb-4">{coupon.createdAt}</p> 
            
//             <a
//               href={coupon.directUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Redeem Offer
//             </a>
//             <a
//               href={coupon.trackingUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Offer
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









// 'use client';

// import { useEffect, useState } from "react";

// // TypeScript Type
// type Coupon = {
//   _id: string;
//   name: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   directUrl: string;
//   trackingUrl: string;
//   short_description: string;
//   long_description: string;
//   categories: string[];
//   language: string;
//   isTopStore: boolean;
//   isEditorsChoice: boolean;
//   heading: string;
//   createdAt: string;
//   updatedAt: string;
//   seo: {
//     meta_title: string;
//     meta_description: string;
//     meta_keywords: string;
//   };
//   coupons: string[];
//   slug: string;
//   __v: number;
// };

// export default function Home() {
//   const [coupons, setCoupons] = useState<Coupon[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchCoupons() {
//       try {
//         const res = await fetch("https://coupon-app-backend.vercel.app/api/stores");
//         if (!res.ok) {
//           throw new Error(`Error: ${res.status}`);
//         }
//         const jsonData = await res.json();
//         setCoupons(jsonData.data);
//       } catch (err) {
//         setError("Failed to fetch coupons. Please try again later.");
//         console.error(err);
//       }
//     }

//     fetchCoupons();

//     // Updated Coupons List with all given data
//     const newCoupons: Coupon[] = [
//       {
//         _id: "67bb9753524643e1351ab1f8",
//         name: "Hello Heading Check",
//         image: {
//           url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/7a24c8eb-bc81-41cb-9935-3cb8e773a693-2672266.jpg",
//           alt: "Hello Heading Check Best Deals Logo"
//         },
//         directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         short_description: "asdas",
//         long_description: "dasdasd",
//         categories: [],
//         language: "English",
//         isTopStore: false,
//         isEditorsChoice: false,
//         heading: "Voucher & Discount Codes",
//         createdAt: "2025-02-23T21:46:59.120Z",
//         updatedAt: "2025-02-23T21:46:59.120Z",
//         seo: {
//           meta_title: "HeadingHeadingHeadingHeading",
//           meta_description: "HeadingHeadingHeading",
//           meta_keywords: "HeadingHeading"
//         },
//         coupons: [],
//         slug: "hello-heading-check",
//         __v: 0
//       },
//       {
//         _id: "67bba162524643e1351ab1fe",
//         name: "Top Store Check",
//         image: {
//           url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/f8f8a7c1-18e1-4497-92d0-8554e59976fd-NICHE.png",
//           alt: "Top Store Check Best Deals Logo"
//         },
//         directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         short_description: "Top Store Check",
//         long_description: "Top Store Check",
//         categories: [],
//         language: "English",
//         isTopStore: false,
//         isEditorsChoice: false,
//         heading: "Promo Codes & Coupon",
//         createdAt: "2025-02-23T22:29:54.330Z",
//         updatedAt: "2025-02-23T22:29:54.330Z",
//         seo: {
//           meta_title: "Top Store Check",
//           meta_description: "Top Store Check",
//           meta_keywords: "Top Store Check"
//         },
//         coupons: [],
//         slug: "top-store-check",
//         __v: 0
//       },
//       {
//         _id: "67bc32449f3f4593c00f4194",
//         name: "Toggle Button Check",
//         image: {
//           url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/31a96c76-8736-44f3-bb45-213d0e6e8626-images.png",
//           alt: "Toggle Button Check Best Deals Logo"
//         },
//         directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//         short_description: "Toggle Button Check",
//         long_description: "Toggle Button Check",
//         categories: [],
//         language: "English",
//         isTopStore: false,
//         isEditorsChoice: false,
//         heading: "Voucher & Discount Codes",
//         createdAt: "2025-02-24T08:48:04.737Z",
//         updatedAt: "2025-02-24T08:48:04.737Z",
//         seo: {
//           meta_title: "Toggle Button Check",
//           meta_description: "Toggle Button Check",
//           meta_keywords: "Toggle Button Check"
//         },
//         coupons: [],
//         slug: "toggle-button-check",
//         __v: 0
//       }
//     ];

//     setCoupons((prevCoupons) => [...prevCoupons, ...newCoupons]);

//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Available Coupons</h1>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {coupons.map((coupon) => (
//           <div key={coupon._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
//             <img
//               src={coupon.image.url}
//               alt={coupon.image.alt}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
//             />
//             <h2 className="text-xl font-semibold mb-2">{coupon.name}</h2>
//             <p className="text-gray-600 mb-4">{coupon.short_description}</p>
//             <p className="text-gray-600 mb-4">{coupon.long_description}</p>
            
//             <p className="text-gray-600 mb-4">{coupon.heading}</p>
//             <p className="text-gray-600 mb-4">{coupon.isEditorsChoice ? "Editors Choice" : "Not Editors Choice"}</p>
//             <p className="text-gray-600 mb-4">{coupon.isTopStore ? "Top Store" : "Not a Top Store"}</p>
//             <p className="text-gray-600 mb-4">{coupon.updatedAt}</p>
//             <p className="text-gray-600 mb-4">{coupon.createdAt}</p> 
            
//             <a
//               href={coupon.directUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Redeem Offer
//             </a>
//             <a
//               href={coupon.trackingUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600"
//             >
//               Offer
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// 'use client';

// import { useEffect, useState } from "react";

// type Coupon = {
//   _id: string;
//   name: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   directUrl: string;
//   trackingUrl: string;
//   short_description: string;
//   long_description: string;
//   categories: string[];
//   language: string;
//   isTopStore: boolean;
//   isEditorsChoice: boolean;
//   heading: string;
//   createdAt: string;
//   updatedAt: string;
//   seo: {
//     meta_title: string;
//     meta_description: string;
//     meta_keywords: string;
//   };
//   coupons: string[];
//   slug: string;
//   __v: number;
// };

// export default function Home() {
//   const [coupons, setCoupons] = useState<Coupon[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchCoupons() {
//       try {
//         const res = await fetch("https://coupon-app-backend.vercel.app/api/stores");
//         if (!res.ok) {
//           throw new Error(`Error: ${res.status}`);
//         }
//         const jsonData = await res.json();
//         console.log("Fetched Data:", jsonData); // Debugging
//         setCoupons(jsonData.data || []); // Ensure data is an array
//       } catch (err) {
//         setError("⚠️ Failed to fetch coupons. Please try again later.");
//         console.error(err);
//       }
//     }
  
//     fetchCoupons();
//   }, []);
  
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-200 p-8">
//       <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
//         🔥 Best Coupons & Exclusive Deals
//       </h1>

//       {error && <p className="text-red-500 text-center text-lg">{error}</p>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {coupons.map((coupon) => (
//           <div 
//             key={coupon._id} 
//             className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             <img
//               src={coupon.image.url}
//               alt={coupon.image.alt}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold text-gray-800">{coupon.name}</h2>
//               <p className="text-gray-600 mt-2 text-sm">{coupon.short_description}</p>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 {coupon.isEditorsChoice && (
//                   <span className="text-sm px-3 py-1 bg-yellow-500 text-white rounded-full">
//                     ⭐ Editor’s Choice
//                   </span>
//                 )}
//                 {coupon.isTopStore && (
//                   <span className="text-sm px-3 py-1 bg-green-500 text-white rounded-full">
//                     🏆 Top Store
//                   </span>
//                 )}
//               </div>

//               <div className="mt-6 flex justify-between">
//                 <a
//                   href={coupon.directUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-300"
//                 >
//                   🎟️ Get Coupon
//                 </a>
//                 <a
//                   href={coupon.trackingUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-purple-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition duration-300"
//                 >
//                   📊 Track Offer
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { useEffect, useState } from "react";

// // TypeScript Type
// type Coupon = {
//   _id: string;
//   name: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   directUrl: string;
//   trackingUrl: string;
//   short_description: string;
//   long_description: string;
//   categories: string[];
//   language: string;
//   isTopStore: boolean;
//   isEditorsChoice: boolean;
//   heading: string;
//   createdAt: string;
//   updatedAt: string;
//   seo: {
//     meta_title: string;
//     meta_description: string;
//     meta_keywords: string;
//   };
//   coupons: string[];
//   slug: string;
//   __v: number;
// };

// export default function Home() {
//   const [coupons, setCoupons] = useState<Coupon[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchCoupons() {
//       try {
//         const res = await fetch("https://coupon-app-backend.vercel.app/api/stores");
//         if (!res.ok) {
//           throw new Error(`Error: ${res.status}`);
//         }
//         const jsonData = await res.json();

//         // Hardcoded Coupons
//         const newCoupons: Coupon[] = [
//           {
//             _id: "67bb9753524643e1351ab1f8",
//             name: "Hello Heading Check",
//             image: {
//               url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/7a24c8eb-bc81-41cb-9935-3cb8e773a693-2672266.jpg",
//               alt: "Hello Heading Check Best Deals Logo"
//             },
//             directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//             trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//             short_description: "asdas",
//             long_description: "dasdasd",
//             categories: [],
//             language: "English",
//             isTopStore: false,
//             isEditorsChoice: false,
//             heading: "Voucher & Discount Codes",
//             createdAt: "2025-02-23T21:46:59.120Z",
//             updatedAt: "2025-02-23T21:46:59.120Z",
//             seo: {
//               meta_title: "HeadingHeadingHeadingHeading",
//               meta_description: "HeadingHeadingHeading",
//               meta_keywords: "HeadingHeading"
//             },
//             coupons: [],
//             slug: "hello-heading-check",
//             __v: 0
//           },
//           {
//             _id: "67bba162524643e1351ab1fe",
//             name: "Top Store Check",
//             image: {
//               url: "https://coupon-app-image.s3.us-east-1.amazonaws.com/f8f8a7c1-18e1-4497-92d0-8554e59976fd-NICHE.png",
//               alt: "Top Store Check Best Deals Logo"
//             },
//             directUrl: "https://coupon-app-backend.vercel.app/api/stores",
//             trackingUrl: "https://coupon-app-backend.vercel.app/api/stores",
//             short_description: "Top Store Check",
//             long_description: "Top Store Check",
//             categories: [],
//             language: "English",
//             isTopStore: false,
//             isEditorsChoice: false,
//             heading: "Promo Codes & Coupon",
//             createdAt: "2025-02-23T22:29:54.330Z",
//             updatedAt: "2025-02-23T22:29:54.330Z",
//             seo: {
//               meta_title: "Top Store Check",
//               meta_description: "Top Store Check",
//               meta_keywords: "Top Store Check"
//             },
//             coupons: [],
//             slug: "top-store-check",
//             __v: 0
//           }
//         ];

//         // ✅ Fix: API se aaye hue aur hardcoded coupons merge karke set kar rahe hain
//         setCoupons([...jsonData.data, ...newCoupons]);
//       } catch (err) {
//         setError("Failed to fetch coupons. Please try again later.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchCoupons();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
//         🔥 Best Coupon Deals
//       </h1>

//       {loading && <p className="text-center text-gray-500">Loading coupons...</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {coupons.map((coupon) => (
//           <div 
//             key={coupon._id} 
//             className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             <img 
//               src={coupon.image.url} 
//               alt={coupon.image.alt} 
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5">
//               <h2 className="text-2xl font-semibold text-gray-800">{coupon.name}</h2>
//               <p className="text-gray-500 mb-3">{coupon.short_description}</p>

//               <div className="flex items-center justify-between mt-4">
//                 <span 
//                   className={`px-3 py-1 text-sm font-semibold rounded-lg ${coupon.isTopStore ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'}`}
//                 >
//                   {coupon.isTopStore ? "🏆 Top Store" : "Regular Store"}
//                 </span>
//                 <span 
//                   className={`px-3 py-1 text-sm font-semibold rounded-lg ${coupon.isEditorsChoice ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}
//                 >
//                   {coupon.isEditorsChoice ? "✨ Editor's Choice" : "Standard"}
//                 </span>
//               </div>

//               <div className="mt-6 flex space-x-3">
//                 <a 
//                   href={coupon.directUrl} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex-1 text-center bg-orange-500 text-white font-bold py-2 rounded-lg transition hover:bg-orange-600"
//                 >
//                   Redeem Offer
//                 </a>
//                 <a 
//                   href={coupon.trackingUrl} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex-1 text-center bg-gray-800 text-white font-bold py-2 rounded-lg transition hover:bg-gray-900"
//                 >
//                   Track Offer
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




// "use client";
// import React, { useEffect, useState } from "react";

// type Category = {
//   _id: string;
//   name: string;
// };

// const CategoriesDropdown = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>("");

//   useEffect(() => {
//     fetch("https://coupon-app-backend.vercel.app/api/categories")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === "success" && Array.isArray(data.data.categories)) {
//           setCategories(data.data.categories);
//         }
//       })
//       .catch((err) => console.error("Failed to fetch categories:", err));
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(e.target.value);
//     console.log("Selected category ID:", e.target.value);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <label htmlFor="categories" className="block mb-2 font-semibold">
//         Select Category
//       </label>
//       <select
//         id="categories"
//         value={selectedCategory}
//         onChange={handleChange}
//         className="w-full p-2 border rounded-md"
//       >
//         <option value="">All Categories</option>
//         {categories.map((cat) => (
//           <option key={cat._id} value={cat._id}>
//             {cat.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CategoriesDropdown;



// "use client";
// import React, { useEffect, useState } from "react";

// type Category = {
//   _id: string;
//   name: string;
// };

// const CategoriesCards = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true); // ✅ Added
//   const [error, setError] = useState<string | null>(null); // ✅ Added

//  useEffect(() => {
//   fetch("/api/proxy-categories")
//     .then(res => {
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//       return res.json();
//     })
//     .then(json => {
//       console.log("API response:", json);
//       if (!json.data || !Array.isArray(json.data.categories)) {
//         throw new Error("Invalid data format");
//       }
//       setCategories(json.data.categories);
//       setLoading(false);
//       setError(null);
//     })
//     .catch(err => {
//       console.error("Fetch error:", err);
//       setError(err.message || "Failed to fetch categories");
//       setLoading(false);
//     });
// }, []);

//   if (loading) return <div className="p-6 text-center">Loading categories...</div>;
//   if (error) return <div className="p-6 text-red-500 text-center">Error: {error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {categories.map((cat) => (
//         <div
//           key={cat._id}
//           className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-300"
//         >
//           <h2 className="text-lg font-semibold text-gray-800">{cat.name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoriesCards;









"use client";

import React, { useEffect, useState } from "react";


type Category = {
  _id: string;
  name: string;
 
};

const CategoriesCards = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/proxy-categories")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!json.data || !Array.isArray(json.data.categories)) {
          throw new Error("Invalid data format");
        }
        setCategories(json.data.categories);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message || "Failed to fetch categories");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div className="text-center py-20 text-gray-600 font-medium text-lg">Loading categories...</div>;

  if (error)
    return <div className="text-center py-20 text-red-600 font-semibold text-xl">Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white p-5 flex flex-col items-center gap-4"
          >
            
            {/* <Image
              src={cat.image?.url || "https://via.placeholder.com/80"}
              alt={cat.image?.alt || cat.name}
              width={80}
              height={80}
              className="rounded-md border object-contain"
            /> */}

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-800 text-center">{cat.name}</h3>

           
            <button
              // href={`/category/${cat._id}`}
              className="text-sm px-2 py-1.5 bg-orange-500 text-white rounded-md hover:bg-orange-700 transition"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCards;




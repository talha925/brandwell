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
//   trackingUrl:string
//   categories: {
//   language: string
//   isTopStore: string
//   isEditorsChoice: string
//   heading: string
//   createdAt: string
//   updatedAt: string
// };
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
           
//             <p className="text-gray-600 mb-4">{coupon.categories.heading}</p>
//             <p className="text-gray-600 mb-4">{coupon.categories.isEditorsChoice}</p>
//             <p className="text-gray-600 mb-4">{coupon.categories.isTopStore}</p>
//             <p className="text-gray-600 mb-4">{coupon.categories.updatedAt}</p>
//             <p className="text-gray-600 mb-4">{coupon.categories.createdAt}</p> 
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

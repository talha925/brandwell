

// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// type Coupon = {
//   _id: string;
//   offerDetails: string;
//   code: string;
//   active: boolean;
//   isValid: boolean;
// };

// type Store = {
//   _id: string;
//   name: string;
//   trackingUrl: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   coupons: Coupon[];
//     heading: string;
//   language: string;

// };

// const CouponsPage = () => {
//   const [stores, setStores] = useState<Store[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://coupon-app-backend.vercel.app/api/stores")
//       .then((res) => res.json())
//       .then((data) => {
//         setStores(data.data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center mt-20 text-xl font-semibold text-gray-600">
//         Loading coupons...
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {stores.map((store) => (
//         <div
//           key={store._id}
//           className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5"
//         >
//           <Image
//   src={store.image.url}
//   alt="Store Image"
//   width={100}   // specify width in pixels
//   height={100}  // specify height in pixels
// />

//           <div className="flex flex-col gap-1">
//             <h2 className="text-2xl font-bold text-gray-800">{store.name}</h2>
//             <a
//               href={store.trackingUrl}
//               target="_blank"
//               className="text-blue-600 underline text-sm"
//             >
//               Visit Store
//             </a>
//             <p className="text-sm text-gray-500">{store.heading}</p>
//             <p className="text-xs text-gray-400">Language: {store.language}</p>

//             <div className="flex gap-2 mt-1">
//               {/* {store.isTopStore && (
//                 <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
//                   🌟 Top Store
//                 </span>
//               )}
//               {store.isEditorsChoice && (
//                 <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
//                   📝 Editor's Choice
//                 </span>
//               )} */}
//             </div>
//           </div>

//           <h3 className="mt-4 font-semibold text-gray-700">Coupons:</h3>
//           {/* {store.coupons.length > 0 ? (
//             <ul className="mt-2 space-y-2">
//               {store.coupons.map((coupon) => (
//                 <li
//                   key={coupon._id}
//                   className="bg-gray-100 p-3 rounded-lg text-sm text-gray-800 flex justify-between items-center"
//                 >
//                   <span>{coupon.offerDetails}</span>
//                   {coupon.code && (
//                     <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-mono text-xs">
//                       {coupon.code}
//                     </span>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-sm text-gray-500">No coupons available.</p>
//           )} */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CouponsPage;






// "use client";
// import { Store } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// type Coupon = {
//   _id: string;
//   offerDetails: string;
//   code: string;
//   active: boolean;
//   isValid: boolean;
// };

// type Store = {
//   _id: string;
//   name: string;
//   trackingUrl: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   coupons: Coupon[];
//   heading: string;
//   language: string;
// };

// const StorePage = () => {
//   const [stores, setStores] = useState<Store[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetch("/api/proxy-stores")
//       .then(res => {
//         if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//         return res.json();
//       })
//       .then(json => {
//         console.log("API response:", json);
//         setStores(json.data);
//         setLoading(false);
//         setError(null);
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setError(err.message || "Failed to fetch stores");
//         setLoading(false);
//       });
//   }, []);

//   console.log("Stores state:", stores);
// console.log("Tracking URL:", stores);
//   if (loading) {
//     return (
//       <div className="text-center mt-20 text-xl font-semibold text-gray-600">
//         Loading coupons...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center mt-20 text-xl font-semibold text-red-600">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {stores.map((store) => (
//         <div
//           key={store._id}
//           className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5"
//         >
//           <Image
//             src={store.image.url}
//             alt={store.image.alt || "Store Image"}
//             width={100}
//             height={100}
//             priority={true}  // <-- Add if this image is above fold to fix LCP warning
//           />

//           <div className="flex flex-col gap-1 mt-3">
//             <h2 className="text-2xl font-bold text-gray-800">{store.name}</h2>
         
              
//             <a
//               href={store.trackingUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline text-sm"
//             >
//               Visit Store
//             </a>
        


//             <p className="text-sm text-gray-500">{store.heading}</p>
//             <p className="text-xs text-gray-400">Language: {store.language}</p>
//           </div>

//           <h3 className="mt-4 font-semibold text-gray-700">Coupons:</h3>
    
//           {store.coupons.length > 0 ? (
//             <ul className="mt-2 space-y-2">
//               {store.coupons.map((coupon) => (
//                 <li
//                   key={coupon._id}
//                   className="bg-gray-100 p-3 rounded-lg text-sm text-gray-800 flex justify-between items-center"
//                 >
//                   <span>{coupon.offerDetails}</span>
//                   {coupon.code && (
//                     <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-mono text-xs">
//                       {coupon.code}
//                     </span>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-sm text-gray-500">No coupons available.</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StorePage;


'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Coupon = {
  _id: string;
  offerDetails: string;
  code: string;
  active: boolean;
  isValid: boolean;
  expires?: string; // Optional expiry date
  usedCount?: number; // Optional usage count
};

type Store = {
  _id: string;
  image: {
    url: string;
    alt: string;
  };
  name: string;
  about?: string;
  short_description?: string;
  long_description?: string;
  coupons: Coupon[];
};

const StorePage = () => {
  const params = useParams();
  const id = params?.id as string;

  const [store, setStore] = useState<Store | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStore() {
      try {
        const res = await fetch(`/api/store/${id}`);
        if (!res.ok) throw new Error('Store not found');
        const data = await res.json();
        setStore(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchStore();
  }, [id]);

  

  if (loading)
    return (
      <p className="text-center py-20 text-gray-600 font-medium text-lg">
        Loading store details...
      </p>
    );
  if (!store)
    return (
      <p className="text-center py-20 text-red-600 font-semibold text-xl">
        Store not found
      </p>
    );

  const aboutText =
    store.about ||
    store.long_description ||
    store.short_description ||
    'Discover amazing offers and coupons from our store. Save more every time you shop with us!';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen font-sans">
      {/* Store Name */}
      <div className="flex justify-center mb-12">
        {/* Adjusted font size for responsiveness on smaller screens */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-800">
          {store.name}
        </h1>
      </div>

      {/* Main Content Area: Coupons and About Section */}
      <div className="flex flex-col md:flex-row gap-12 justify-center items-start"> {/* items-start to align top */}
        {/* Coupons Section */}
        <main className="flex-1 space-y-6 w-full md:max-w-3xl lg:max-w-4xl"> {/* Adjusted width for main content */}
          {store.coupons.length === 0 ? (
            <p className="text-gray-500 text-center py-10 text-lg">
              No coupons available at the moment.
            </p>
          ) : (
            store.coupons.map((coupon) => (
              <div
                key={coupon._id}
                // Removed ml-28, made padding responsive
                className="bg-gray-200 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between mx-auto"
              >
                {/* Logo Image */}
                <div 
                  // Removed fixed margins, made size responsive, added flex-shrink-0
                  className="bg-white rounded-lg w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex items-center justify-center shadow-sm flex-shrink-0 mb-4 md:mb-0 md:mr-6"
                >
                  <Image
                    src={store.image.url}
                    alt={store.image.alt}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>

                {/* Coupon Info */}
                <div className="flex-1 w-full text-center md:text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {coupon.offerDetails}
                  </h3>

                  {/* Deal Button + Code (Revised for split effect responsiveness) */}
                  <div className="flex w-full max-w-sm mx-auto md:mx-0 h-12 rounded-md overflow-hidden shadow-md">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(coupon.code);
                        alert(`Coupon code "${coupon.code}" copied!`);
                      }}
                      // Responsive button classes, replaced absolute positioning
                      className="flex-1 bg-gradient-to-r from-black to-blue-800 text-white font-semibold py-3 px-4 flex items-center justify-center text-sm tracking-wide rounded-l-md hover:brightness-110 transition-all cursor-pointer"
                    >
                      GET DEAL
                    </button>
                    {/* Code display section */}
                    <div 
                      // Fixed width for code, added dashed border styling
                      className="w-[80px] sm:w-[90px] bg-white border-y-2 border-r-2 border-dashed border-black flex items-center justify-center text-xs font-bold text-black rounded-r-md flex-shrink-0"
                    >
                      {coupon.code}
                    </div>
                  </div>

                  {/* Expiry & Usage Info */}
                  <div className="text-xs text-gray-600 pt-3 space-y-1">
                    {coupon.expires && <p>EXPIRES: {coupon.expires}</p>}
                    {coupon.usedCount !== undefined && <p>USED: {coupon.usedCount}</p>}
                  </div>
                </div>
              </div>
            ))
          )}
        </main>

        {/* About Section */}
        <aside 
          // Responsive width and padding
          className="w-full md:w-80 bg-white shadow-xl rounded-xl p-6 h-fit flex flex-col items-center text-center mx-auto md:mx-0"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            {aboutText}
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-bold"> {/* Changed font-medium to font-bold */}
            View
          </button>
        </aside>
      </div>
    </div>
  );
};

export default StorePage;
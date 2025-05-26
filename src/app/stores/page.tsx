

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


import Image from "next/image";
import React, { useEffect, useState } from "react";

type Coupon = {
  _id: string;
  offerDetails: string;
  code: string;
  active: boolean;
  isValid: boolean;
};

type Store = {
  _id: string;
  name: string;
  trackingUrl: string;
  image: {
    url: string;
    alt: string;
  };
  coupons: Coupon[];
  heading: string;
  language: string;
};

const StorePage = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/proxy-stores")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(json => {
        setStores(json.data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message || "Failed to fetch stores");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-gray-600 animate-pulse">
        Loading stores...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-red-600">
        Error: {error}
      </div>
    );
  }

  return (

    
    <div className="p-7 max-w-5xl items-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
     

      {stores.map((store) => (
       <div
  key={store._id}
  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5"
>
 

  <div className="flex justify-center">
    <Image
      src={store.image.url}
      alt={store.image.alt || "Store Image"}
      width={100}
      height={100}
      priority={true}
    />
  </div>
          <div className="flex flex-col gap-1 mt-3">
            <h2 className="text-2xl text-center font-thin text-gray-800">{store.name}</h2>

          </div>
          <div className="mt-4">
           <button
  className="w-24 sm:w-[60px] mx-auto block bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-2xl text-center text-sm font-semibold transition duration-100 shadow-md"
>
  View
</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default StorePage;


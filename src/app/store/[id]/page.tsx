// 'use client';

// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// type Coupon = {
//   _id: string;
//   offerDetails: string;
//   code: string;
//   active: boolean;
//   isValid: boolean;
//   featuredForHome?: boolean;
//   hits?: number;
//   lastAccessed?: string | null;
// };

// type Store = {
//   _id: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   name: string;
//   coupons: Coupon[];
// };

// const StorePage = () => {
//   const params = useParams();
//   const id = params?.id as string;

//   const [store, setStore] = useState<Store | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchStore() {
//       try {
//         const res = await fetch(`/api/store/${id}`);
//         if (!res.ok) throw new Error("Store not found");
//         const data = await res.json();
//         setStore(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchStore();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!store) return <p>No store found</p>;

//   return (
//     <div className="p-50 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">{store.name}</h1>
//       <h2 className="text-2xl font-semibold mb-4">Coupons:</h2>
//       <div className="grid grid-row-2 md:grid-row-2 gap-6">
//       {store.coupons.map((coupon) => (
//   <div
//     key={coupon._id}
//     className="border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white p-5 flex flex-col md:flex-row items-start md:items-center gap-4"
//   >
//     {/* Store image */}
//     <Image
//       src={store.image.url}
//       alt={store.image.alt}
//       width={80}
//       height={80}
//       className="rounded-md border object-contain"
//     />

//     {/* Coupon Content */}
//     <div className="flex-1 space-y-2">
//       {/* Offer Title */}
//       <h3 className="text-xl font-semibold text-gray-800">
//         {coupon.offerDetails}
//       </h3>

//       {/* Code + Copy */}
//       <div className="flex items-center gap-3">
//         <span className="bg-gray-100 text-gray-800 font-mono px-3 py-1 rounded-md border text-sm tracking-wider">
//           {coupon.code || "NO CODE"}
//         </span>

//         {coupon.code && (
//           <button
//             onClick={() => {
//               navigator.clipboard.writeText(coupon.code);
//               alert("Coupon copied!");
//             }}
//             className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//           >
//             Copy Code
//           </button>
//         )}
//       </div>

//       {/* Status */}
//       <div className="flex flex-wrap gap-2 mt-1">
//         <span
//           className={`text-xs font-medium px-2 py-1 rounded-full ${
//             coupon.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//           }`}
//         >
//           {coupon.active ? "Active" : "Inactive"}
//         </span>

//         <span
//           className={`text-xs font-medium px-2 py-1 rounded-full ${
//             coupon.isValid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//           }`}
//         >
//           {coupon.isValid ? "Valid" : "Invalid"}
//         </span>
//       </div>
//     </div>
//   </div>
// ))}

// </div>
// </div>
//   );
// };

// export default StorePage;





// 'use client';

// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// type Coupon = {
//   _id: string;
//   offerDetails: string;
//   code: string;
//   active: boolean;
//   isValid: boolean;
// };

// type Store = {
//   _id: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   name: string;
//   about?: string; // optional about field for store description
//   coupons: Coupon[];
// };

// const StorePage = () => {
//   const params = useParams();
//   const id = params?.id as string;

//   const [store, setStore] = useState<Store | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchStore() {
//       try {
//         const res = await fetch(`/api/store/${id}`);
//         if (!res.ok) throw new Error('Store not found');
//         const data = await res.json();
//         setStore(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchStore();
//   }, [id]);

//   if (loading)
//     return (
//       <p className="text-center py-20 text-gray-600 font-medium text-lg">
//         Loading store details...
//       </p>
//     );
//   if (!store)
//     return (
//       <p className="text-center py-20 text-red-600 font-semibold text-xl">
//         Store not found
//       </p>
//     );

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <div className="flex flex-col md:flex-row gap-12">
//         {/* Left side: Coupons */}
//         <main className="md:w-2/3 space-y-6">
//           <h1 className="text-4xl font-extrabold text-gray-900">{store.name}</h1>
//           <h2 className="text-2xl font-semibold text-gray-800">Coupons</h2>

//           {store.coupons.length === 0 ? (
//             <p className="text-gray-500 text-center py-10">
//               No coupons available at the moment.
//             </p>
//           ) : (
//             <div className="space-y-5">
//               {store.coupons.map((coupon) => (
//                 <div
//                   key={coupon._id}
//                   className="border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white p-5 flex flex-col md:flex-row items-start md:items-center gap-4"
//                 >
//                   {/* Store image */}
//                   <Image
//                     src={store.image.url}
//                     alt={store.image.alt}
//                     width={80}
//                     height={80}
//                     className="rounded-md border object-contain"
//                   />

//                   {/* Coupon Content */}
//                   <div className="flex-1 space-y-2">
//                     {/* Offer Title */}
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {coupon.offerDetails}
//                     </h3>

//                     {/* Code + Copy */}
//                     <div className="flex items-center gap-3">
//                       <span className="bg-gray-100 text-gray-800 font-mono px-3 py-1 rounded-md border text-sm tracking-wider select-all">
//                         {coupon.code || 'NO CODE'}
//                       </span>

//                       {coupon.code && (
//                         <button
//                           onClick={() => {
//                             navigator.clipboard.writeText(coupon.code);
//                             alert('Coupon copied!');
//                           }}
//                           className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//                         >
//                           Copy Code
//                         </button>
//                       )}
//                     </div>

//                     {/* Status */}
//                     <div className="flex flex-wrap gap-2 mt-1">
//                       <span
//                         className={`text-xs font-medium px-2 py-1 rounded-full ${
//                           coupon.active
//                             ? 'bg-green-100 text-green-700'
//                             : 'bg-red-100 text-red-600'
//                         }`}
//                       >
//                         {coupon.active ? 'Active' : 'Inactive'}
//                       </span>

//                       <span
//                         className={`text-xs font-medium px-2 py-1 rounded-full ${
//                           coupon.isValid
//                             ? 'bg-green-100 text-green-700'
//                             : 'bg-red-100 text-red-600'
//                         }`}
//                       >
//                         {coupon.isValid ? 'Valid' : 'Invalid'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </main>

//         {/* Right side: About Store */}
//         <aside className="md:w-72 md:h-72 bg-white rounded-xl shadow-lg p-6 flex flex-col items-start text-center sticky top-24 self-start">
// <div className="w-full flex justify-center mb-4">
//   <h2 className="text-4xl font-light text-yellow-500 text-center">About</h2>
// </div>          <p className="mt-4 text-gray-700 text-sm leading-relaxed">
//             {store.about ||
//               'Discover amazing offers and coupons from our store. Save more every time you shop with us!'}
//           </p>
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default StorePage;





// 'use client';

// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// type Coupon = {
//   _id: string;
//   offerDetails: string;
//   code: string;
//   active: boolean;
//   isValid: boolean;
//   featuredForHome?: boolean;
//   hits?: number;
//   lastAccessed?: string | null;
// };

// type Store = {
//   _id: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   name: string;
//   coupons: Coupon[];
// };

// const StorePage = () => {
//   const params = useParams();
//   const id = params?.id as string;

//   const [store, setStore] = useState<Store | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchStore() {
//       try {
//         const res = await fetch(`/api/store/${id}`);
//         if (!res.ok) throw new Error("Store not found");
//         const data = await res.json();
//         setStore(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchStore();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!store) return <p>No store found</p>;

//   return (
//     <div className="p-50 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">{store.name}</h1>
//       <h2 className="text-2xl font-semibold mb-4">Coupons:</h2>
//       <div className="grid grid-row-2 md:grid-row-2 gap-6">
//       {store.coupons.map((coupon) => (
//   <div
//     key={coupon._id}
//     className="border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white p-5 flex flex-col md:flex-row items-start md:items-center gap-4"
//   >
//     {/* Store image */}
//     <Image
//       src={store.image.url}
//       alt={store.image.alt}
//       width={80}
//       height={80}
//       className="rounded-md border object-contain"
//     />

//     {/* Coupon Content */}
//     <div className="flex-1 space-y-2">
//       {/* Offer Title */}
//       <h3 className="text-xl font-semibold text-gray-800">
//         {coupon.offerDetails}
//       </h3>

//       {/* Code + Copy */}
//       <div className="flex items-center gap-3">
//         <span className="bg-gray-100 text-gray-800 font-mono px-3 py-1 rounded-md border text-sm tracking-wider">
//           {coupon.code || "NO CODE"}
//         </span>

//         {coupon.code && (
//           <button
//             onClick={() => {
//               navigator.clipboard.writeText(coupon.code);
//               alert("Coupon copied!");
//             }}
//             className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//           >
//             Copy Code
//           </button>
//         )}
//       </div>

//       {/* Status */}
//       <div className="flex flex-wrap gap-2 mt-1">
//         <span
//           className={`text-xs font-medium px-2 py-1 rounded-full ${
//             coupon.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//           }`}
//         >
//           {coupon.active ? "Active" : "Inactive"}
//         </span>

//         <span
//           className={`text-xs font-medium px-2 py-1 rounded-full ${
//             coupon.isValid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
//           }`}
//         >
//           {coupon.isValid ? "Valid" : "Invalid"}
//         </span>
//       </div>
//     </div>
//   </div>
// ))}

// </div>
// </div>
//   );
// };

// export default StorePage;


// 'use client';

// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { useEffect, useState } from 'react';

// type Coupon = {
//   _id: string;
//   offerDetails: string;
//   code: string;
//   active: boolean;
//   isValid: boolean;
// };

// type Store = {
//   _id: string;
//   image: {
//     url: string;
//     alt: string;
//   };
//   name: string;
//   about?: string; // ya short_description ya long_description bhi aa sakta hai ..
//   short_description?: string;
//   long_description?: string;
//   coupons: Coupon[];
// };

// const StorePage = () => {
//   const params = useParams();
//   const id = params?.id as string;

//   const [store, setStore] = useState<Store | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchStore() {
//       try {
//         const res = await fetch(`/api/store/${id}`);
//         if (!res.ok) throw new Error('Store not found');
//         const data = await res.json();
//         setStore(data);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchStore();
//   }, [id]);

//   if (loading)
//     return (
//       <p className="text-center py-20 text-gray-600 font-medium text-lg">
//         Loading store details...
//       </p>
//     );
//   if (!store)
//     return (
//       <p className="text-center py-20 text-red-600 font-semibold text-xl">
//         Store not found
//       </p>
//     );

//   // Decide which description to show in About box, priority: about > long_description > short_description
//   const aboutText =
//     store.about ||
//     store.long_description ||
//     store.short_description ||
//     'Discover amazing offers and coupons from our store. Save more every time you shop with us!';

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <div className="flex flex-col md:flex-row gap-12">
//         {/* Left side: Coupons */}
//         <main className="md:w-2/3 space-y-6">
//           <h1 className="text-4xl font-extrabold text-gray-900">{store.name}</h1>

//           <h2 className="text-2xl font-semibold text-gray-800 mt-6">Coupons</h2>

//           {store.coupons.length === 0 ? (
//             <p className="text-gray-500 text-center py-10">
//               No coupons available at the moment.
//             </p>
//           ) : (
//             <div className="space-y-5">
//               {store.coupons.map((coupon) => (
//                 <div
//                   key={coupon._id}
//                   className="border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white p-5 flex flex-col md:flex-row items-start md:items-center gap-4"
//                 >
//                   {/* Store image */}
//                   <Image
//                     src={store.image.url}
//                     alt={store.image.alt}
//                     width={80}
//                     height={80}
//                     className="rounded-md border object-contain"
//                   />

//                   {/* Coupon Content */}
//                   <div className="flex-1 space-y-2">
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {coupon.offerDetails}
//                     </h3>

//                     <div className="flex items-center gap-3">
//                       <span className="bg-gray-100 text-gray-800 font-mono px-3 py-1 rounded-md border text-sm tracking-wider select-all">
//                         {coupon.code || 'NO CODE'}
//                       </span>

//                       {coupon.code && (
//                         <button
//                           onClick={() => {
//                             navigator.clipboard.writeText(coupon.code);
//                             alert('Coupon copied!');
//                           }}
//                           className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//                         >
//                           Copy Code
//                         </button>
//                       )}
//                     </div>

//                     <div className="flex flex-wrap gap-2 mt-1">
//                       <span
//                         className={`text-xs font-medium px-2 py-1 rounded-full ${
//                           coupon.active
//                             ? 'bg-green-100 text-green-700'
//                             : 'bg-red-100 text-red-600'
//                         }`}
//                       >
//                         {coupon.active ? 'Active' : 'Inactive'}
//                       </span>

//                       <span
//                         className={`text-xs font-medium px-2 py-1 rounded-full ${
//                           coupon.isValid
//                             ? 'bg-green-100 text-green-700'
//                             : 'bg-red-100 text-red-600'
//                         }`}
//                       >
//                         {coupon.isValid ? 'Valid' : 'Invalid'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </main>

//         {/* Right side: About Store */}
//         <aside className="md:w-72 md:h-72 bg-white rounded-xl shadow-lg p-6 flex flex-col items-start text-center sticky top-24 self-start">
//           <div className="w-full flex justify-center mb-4">
//             <h2 className="text-4xl font-light text-yellow-500 text-center">About</h2>
//           </div>
//           <p className="mt-4 text-gray-700 text-sm leading-relaxed">{aboutText}</p>
//         </aside>
//       </div>
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
  expires?: string;
  usedCount?: number;
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

const Storelist = () => {
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
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 bg-gray-50 min-h-screen">
      {/* Store Name */}
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800">
          {store.name}
        </h1>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Coupons Section */}
        <main className="w-full lg:flex-1 space-y-6">
          {store.coupons.length === 0 ? (
            <p className="text-gray-500 text-center py-10 text-lg">
              No coupons available at the moment.
            </p>
          ) : (
            store.coupons.map((coupon) => (
              <div
                key={coupon._id}
                className="bg-gray-200 rounded-xl shadow-lg p-6 md:p-10 flex flex-row gap-6 items-center"
              >
                {/* Logo Image */}
                <div className="bg-white rounded-lg w-[100px] h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center shadow-sm">
                  <Image
                    src={store.image.url}
                    alt={store.image.alt}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>

                {/* Coupon Info */}
                <div className="flex-1 space-y-3 text-center md:text-left w-full">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">
                    {coupon.offerDetails}
                  </h3>

                  {/* Button + Code */}
                  <div className="relative w-full h-12 mt-2 ">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(coupon.code);
                        alert(`Coupon code "${coupon.code}" copied to clipboard!`);
                      }}
                      className="absolute transition-transform duration-200 active:scale-95 hover:w-24 left-0 top-0 h-full w-full bg-gradient-to-r from-black to-blue-800 text-white font-semibold flex items-center justify-center text-sm tracking-wide"
                    >
                      GET DEAL
                    </button>

                    <div className="absolute right-0 top-0 h-full w-[70px] bg-white border-dashed border-2 border-black flex items-center justify-center clip-path-custom text-xs font-bold text-black">
                       {coupon.code.slice(-3)}
                    </div>
                  </div>
                  {/* Expiry & Usage */}
                  <div className="text-xs text-gray-600 pt-2 space-y-1">
                    {coupon.expires && <p>EXPIRES: {coupon.expires}</p>}
                    {coupon.usedCount !== undefined && <p>USED: {coupon.usedCount}</p>}
                  </div>
                </div>
              </div>
            ))
          )}
        </main>

        {/* Sidebar: About Section */}
        <aside className="w-full lg:w-80 bg-white shadow-xl rounded-xl p-4 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">About</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-6">{aboutText}</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-medium">
            view
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Storelist;

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Store } from '@/lib/types';
import { decodeHTML } from '@/lib/utils/formatting';

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const handleGetDeal = () => {
    // Get the first available coupon
    const firstCoupon = store.coupons?.[0];
    
    // Copy coupon code to clipboard if available
    if (firstCoupon?.code) {
      navigator.clipboard.writeText(firstCoupon.code);
      alert(`Coupon code "${firstCoupon.code}" copied to clipboard!`);
    }

    // Redirect to store tracking URL
    if (store?.trackingUrl) {
      const decodedUrl = decodeHTML(store.trackingUrl);
      window.open(decodedUrl, '_blank');
    } else {
      alert('Tracking URL not available for this store.');
    }
  };

  const hasCoupons = store.coupons && store.coupons.length > 0;
  const hasTrackingUrl = store.trackingUrl;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col justify-between items-center shadow-sm hover:shadow-md transition-all">
      <div className="h-28 flex items-center justify-center mb-4">
        <Image
          src={store.image?.url || '/placeholder-store.png'}
          alt={store.image?.alt || store.name}
          width={160}
          height={80}
          className="object-contain max-h-24"
        />
      </div>

      <h3 className="text-lg font-medium text-gray-800 text-center mb-4">
        {store.name}
      </h3>

      <div className="flex flex-col gap-2 w-full">
        {/* GET DEAL Button */}
        {hasCoupons && hasTrackingUrl && (
          <button
            onClick={handleGetDeal}
            className="bg-gradient-to-r from-black to-blue-800 hover:from-blue-800 hover:to-black text-white text-sm font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-200 transform hover:scale-105"
          >
            GET DEAL
          </button>
        )}
        
        {/* View Button */}
        <Link
          href={`/store/${store._id}`}
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-6 rounded-full shadow-md transition text-center"
        >
          View All Coupons
        </Link>
      </div>
    </div>
  );
};

export default StoreCard; 
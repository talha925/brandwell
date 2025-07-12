'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Store } from '@/lib/types';

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
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

      <Link
        href={`/store/${store._id}`}
        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-6 rounded-full shadow-md transition"
      >
        View
      </Link>
    </div>
  );
};

export default StoreCard; 
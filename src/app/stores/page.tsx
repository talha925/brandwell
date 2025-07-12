'use client';

import React, { useEffect, useState } from 'react';
import { StoreGrid } from '@/components/store';
import { Store } from '@/lib/types';

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

  return <StoreGrid stores={stores} loading={loading} error={error} />;
};

export default StorePage;

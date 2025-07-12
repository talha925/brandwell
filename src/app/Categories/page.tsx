'use client';

import React, { useEffect, useState } from 'react';
import { CategoryGrid } from '@/components/category';
import { Category } from '@/lib/types';

const CategoriesPage = () => {
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

  return <CategoryGrid categories={categories} loading={loading} error={error} />;
};

export default CategoriesPage;




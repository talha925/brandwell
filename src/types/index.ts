// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

// Authentication Types
export interface AuthResponse {
  token: string;
  user: User;
  message: string;
}

// Blog Types
export interface Blog {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  author: Author;
  category: CategoryRef;
  store: StoreRef;
  status: 'draft' | 'published';
  isFeaturedForHome: boolean;
  image?: Image;
  tags?: string[];
  meta?: SEOMeta;
  faqs?: FAQ[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Author {
  name: string;
  email?: string;
  avatar?: string;
}

export interface CategoryRef {
  id: string;
  name: string;
  slug: string;
}

export interface StoreRef {
  id: string;
  name: string;
  url: string;
}

export interface Image {
  url: string;
  alt: string;
}

export interface SEOMeta {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  robots?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Category Types
export interface Category {
  _id: string;
  name: string;
  description?: string;
  slug?: string;
}

// Store Types
export interface Store {
  _id: string;
  name: string;
  description?: string;
  trackingUrl?: string;
  logo?: string;
}

// API Response Types
export interface ApiResponse<T> {
  status: 'success' | 'error';
  data?: T;
  message?: string;
  error?: string;
}

// Form Error Types
export interface FormErrors {
  [key: string]: string;
} 
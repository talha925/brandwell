'use client';

import { useState, useEffect } from 'react';

interface Category {
  _id: string;
  name: string;
  description?: string;
}

interface Store {
  _id: string;
  name: string;
  trackingUrl?: string;
}

// Utility function to clean and format URLs
const cleanAndFormatUrl = (url: string): string => {
  if (!url) return '';
  
  // Remove any HTML entity encoding
  let cleanUrl = url.replace(/&#x2F;/g, '/');
  
  // Remove any existing protocol to avoid duplication
  cleanUrl = cleanUrl.replace(/^https?:\/\//, '');
  
  // Add https:// protocol if URL is not empty
  if (cleanUrl) {
    cleanUrl = 'https://' + cleanUrl;
  }
  
  return cleanUrl;
};

const BlogForm = () => {
  // Required Fields
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [storeId, setStoreId] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [status, setStatus] = useState('draft');

  // Optional Fields
  const [authorEmail, setAuthorEmail] = useState('');
  const [authorAvatar, setAuthorAvatar] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [tags, setTags] = useState('');

  // SEO Metadata Fields
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');
  const [metaCanonicalUrl, setMetaCanonicalUrl] = useState('');
  const [metaRobots, setMetaRobots] = useState('index,follow');

  // FAQs Section
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>([]);
  const [newFaqQuestion, setNewFaqQuestion] = useState('');
  const [newFaqAnswer, setNewFaqAnswer] = useState('');

  // Form State
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [storesLoading, setStoresLoading] = useState(true);

  // Validation States
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // Fetch Blog Categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoriesLoading(true);
        const response = await fetch('/api/blog-categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data.data || data || []);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch Stores from API
  useEffect(() => {
    const fetchStores = async () => {
      try {
        setStoresLoading(true);
        const response = await fetch('/api/proxy-stores');
        if (response.ok) {
          const data = await response.json();
          console.log('Stores API response:', data);
          const storesData = data.data || data || [];
          console.log('Stores data:', storesData);
          if (storesData.length > 0) {
            console.log('First store structure:', storesData[0]);
          }
          setStores(storesData);
        } else {
          console.error('Failed to fetch stores');
        }
      } catch (error) {
        console.error('Error fetching stores:', error);
      } finally {
        setStoresLoading(false);
      }
    };

    fetchStores();
  }, []);

  const handleStoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStoreId = e.target.value;
    setStoreId(selectedStoreId);

    // Find the selected store and set its URL
    const selectedStore = stores.find((store) => store._id === selectedStoreId);
    console.log('Selected store:', selectedStore);
    
    if (selectedStore) {
      console.log('Store trackingUrl:', selectedStore.trackingUrl);
      
      // Clean and format the URL using utility function
      const cleanUrl = cleanAndFormatUrl(selectedStore.trackingUrl || '');
      
      console.log('Processed URL:', cleanUrl);
      setStoreUrl(cleanUrl);
    } else {
      setStoreUrl('');
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Required field validations
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    } else if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
    }

    if (!shortDescription.trim()) {
      newErrors.shortDescription = 'Short description is required';
    } else if (shortDescription.trim().length < 10) {
      newErrors.shortDescription = 'Short description must be at least 10 characters long';
    } else if (shortDescription.trim().length > 500) {
      newErrors.shortDescription = 'Short description must not exceed 500 characters';
    }

    if (!longDescription.trim()) {
      newErrors.longDescription = 'Long description is required';
    } else if (longDescription.trim().length < 50) {
      newErrors.longDescription = 'Long description must be at least 50 characters long';
    }

    if (!categoryId) {
      newErrors.category = 'Category is required';
    }

    if (!storeId) {
      newErrors.store = 'Store is required';
    } else if (!storeUrl) {
      newErrors.store = 'Selected store must have a valid URL';
    }

    if (!authorName.trim()) {
      newErrors.authorName = 'Author name is required';
    }

    // Optional field validations
    if (authorEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authorEmail)) {
      newErrors.authorEmail = 'Please enter a valid email address';
    }

    if (authorAvatar && !isValidUrl(authorAvatar)) {
      newErrors.authorAvatar = 'Please enter a valid URL';
    }

    if (imageUrl && !isValidUrl(imageUrl)) {
      newErrors.imageUrl = 'Please enter a valid URL';
    }

    // SEO metadata validations
    if (metaTitle && metaTitle.length > 60) {
      newErrors.metaTitle = 'Meta title should not exceed 60 characters';
    }

    if (metaDescription && metaDescription.length > 160) {
      newErrors.metaDescription = 'Meta description should not exceed 160 characters';
    }

    if (metaCanonicalUrl && !isValidUrl(metaCanonicalUrl)) {
      newErrors.metaCanonicalUrl = 'Please enter a valid canonical URL';
    }

    // FAQ validations
    faqs.forEach((faq, index) => {
      if (!faq.question.trim()) {
        newErrors[`faqQuestion${index}`] = 'FAQ question is required';
      }
      if (!faq.answer.trim()) {
        newErrors[`faqAnswer${index}`] = 'FAQ answer is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // URL validation helper
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage('Please fix the errors above before submitting.');
      return;
    }

    setLoading(true);
    setMessage('');

    // Find the selected category and store objects
    const selectedCategory = categories.find(cat => cat._id === categoryId);
    const selectedStore = stores.find(store => store._id === storeId);

    if (!selectedCategory || !selectedStore) {
      setMessage('Invalid category or store selection.');
      setLoading(false);
      return;
    }

    // Clean the URL before validation to ensure it's properly formatted
    const cleanUrl = cleanAndFormatUrl(storeUrl);
    
    // Additional URL validation
    try {
      new URL(cleanUrl);
    } catch (error) {
      setMessage('Invalid store URL format. Please check the URL and try again.');
      setLoading(false);
      return;
    }

    // Process tags - split by comma and trim whitespace
    const processedTags = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const blogData = {
      title: title.trim(),
      shortDescription: shortDescription.trim(),
      longDescription: longDescription.trim(),
      author: {
        name: authorName.trim(),
        email: authorEmail.trim() || undefined,
        avatar: authorAvatar.trim() || undefined,
      },
      category: {
        id: selectedCategory._id,
        name: selectedCategory.name,
        slug: selectedCategory.name.toLowerCase().replace(/\s+/g, '-'),
      },
      store: {
        id: selectedStore._id,
        name: selectedStore.name,
        url: cleanUrl,
      },
      status,
      isFeaturedForHome: isFeatured,
      image: imageUrl.trim() ? { 
        url: imageUrl.trim(), 
        alt: imageAlt.trim() || title.trim() 
      } : undefined,
      tags: processedTags.length > 0 ? processedTags : undefined,
      // SEO Metadata
      meta: {
        title: metaTitle.trim() || undefined,
        description: metaDescription.trim() || undefined,
        keywords: metaKeywords.trim() || undefined,
        canonicalUrl: metaCanonicalUrl.trim() || undefined,
        robots: metaRobots.trim() || 'index,follow',
      },
      // FAQs
      faqs: faqs.length > 0 ? faqs : undefined,
    };

    try {
      const response = await fetch('/api/create-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Blog created successfully!');
        // Reset form after successful save
        resetForm();
      } else {
        setMessage(`Error: ${data.error || 'Failed to create blog'}`);
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      setMessage('Error creating blog. Please try again.');
    }

    setLoading(false);
  };

  const resetForm = () => {
    setTitle('');
    setShortDescription('');
    setLongDescription('');
    setAuthorName('');
    setAuthorEmail('');
    setAuthorAvatar('');
    setCategoryId('');
    setStoreId('');
    setStoreUrl('');
    setStatus('draft');
    setIsFeatured(false);
    setImageUrl('');
    setImageAlt('');
    setTags('');
    // Reset SEO metadata
    setMetaTitle('');
    setMetaDescription('');
    setMetaKeywords('');
    setMetaCanonicalUrl('');
    setMetaRobots('index,follow');
    // Reset FAQs
    setFaqs([]);
    setNewFaqQuestion('');
    setNewFaqAnswer('');
    setErrors({});
  };

  useEffect(() => {
    if (longDescription) {
      localStorage.setItem('blogDraft', longDescription);
    }
  }, [longDescription]);

  useEffect(() => {
    const saved = localStorage.getItem('blogDraft');
    if (saved) setLongDescription(saved);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Create a New Blog Post
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Required Fields Section */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Required Fields</h2>
          
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter blog title"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Short Description */}
          <div className="mb-4">
            <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-2">
              Short Description * (Max 500 characters)
            </label>
            <input
              id="shortDescription"
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              maxLength={500}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.shortDescription ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Brief description of the blog post"
            />
            <div className="flex justify-between items-center mt-1">
              {errors.shortDescription && <p className="text-red-500 text-sm">{errors.shortDescription}</p>}
              <p className="text-gray-500 text-sm">{shortDescription.length}/500</p>
            </div>
          </div>

          {/* Long Description */}
          <div className="mb-4">
            <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-2">
              Long Description *
            </label>
            <textarea
              id="longDescription"
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-32 resize-y ${
                errors.longDescription ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Write your detailed blog content here..."
              rows={8}
            />
            {errors.longDescription && <p className="text-red-500 text-sm mt-1">{errors.longDescription}</p>}
          </div>

          {/* Category and Store Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                id="category"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.category ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={categoriesLoading}
              >
                <option value="">{categoriesLoading ? 'Loading categories...' : 'Select Category'}</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            <div>
              <label htmlFor="store" className="block text-sm font-medium text-gray-700 mb-2">
                Store * (Must have URL)
              </label>
              <select
                id="store"
                value={storeId}
                onChange={handleStoreChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.store ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={storesLoading}
              >
                <option value="">{storesLoading ? 'Loading stores...' : 'Select Store (with URL)'}</option>
                {stores.map((store) => (
                  <option key={store._id} value={store._id} disabled={!store.trackingUrl}>
                    {store.name} {store.trackingUrl ? '(Has URL)' : '(No URL)'}
                  </option>
                ))}
              </select>
              {storeUrl && (
                <p className="text-xs text-green-600 mt-1">
                  Selected store URL: {storeUrl}
                </p>
              )}
              {errors.store && <p className="text-red-500 text-sm mt-1">{errors.store}</p>}
            </div>
          </div>

          {/* Author Name and Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-2">
                Author Name *
              </label>
              <input
                id="authorName"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.authorName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Author name"
              />
              {errors.authorName && <p className="text-red-500 text-sm mt-1">{errors.authorName}</p>}
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
        </div>

        {/* Optional Fields Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Optional Fields</h2>
          
          {/* Author Email and Avatar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="authorEmail" className="block text-sm font-medium text-gray-700 mb-2">
                Author Email
              </label>
              <input
                id="authorEmail"
                type="email"
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.authorEmail ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="author@example.com"
              />
              {errors.authorEmail && <p className="text-red-500 text-sm mt-1">{errors.authorEmail}</p>}
            </div>

            <div>
              <label htmlFor="authorAvatar" className="block text-sm font-medium text-gray-700 mb-2">
                Author Avatar URL
              </label>
              <input
                id="authorAvatar"
                type="url"
                value={authorAvatar}
                onChange={(e) => setAuthorAvatar(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.authorAvatar ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="https://example.com/avatar.jpg"
              />
              {errors.authorAvatar && <p className="text-red-500 text-sm mt-1">{errors.authorAvatar}</p>}
            </div>
          </div>

          {/* Image URL and Alt Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                id="imageUrl"
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.imageUrl ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="https://example.com/image.jpg"
              />
              {errors.imageUrl && <p className="text-red-500 text-sm mt-1">{errors.imageUrl}</p>}
            </div>

            <div>
              <label htmlFor="imageAlt" className="block text-sm font-medium text-gray-700 mb-2">
                Image Alt Text
              </label>
              <input
                id="imageAlt"
                type="text"
                value={imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Description of the image"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter tags separated by commas (e.g., technology, web development, tips)"
            />
            <p className="text-xs text-gray-500 mt-1">
              Separate multiple tags with commas
            </p>
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center">
            <input
              id="isFeatured"
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="isFeatured" className="ml-2 text-sm font-medium text-gray-700">
              Featured for Home
            </label>
          </div>
        </div>

        {/* SEO Metadata Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">SEO Metadata</h2>
          
          {/* Meta Title */}
          <div className="mb-4">
            <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-2">
              Meta Title
            </label>
            <input
              id="metaTitle"
              type="text"
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter meta title"
            />
          </div>

          {/* Meta Description */}
          <div className="mb-4">
            <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description
            </label>
            <textarea
              id="metaDescription"
              rows={3}
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter meta description"
            />
          </div>

          {/* Meta Keywords */}
          <div className="mb-4">
            <label htmlFor="metaKeywords" className="block text-sm font-medium text-gray-700 mb-2">
              Meta Keywords
            </label>
            <input
              id="metaKeywords"
              type="text"
              value={metaKeywords}
              onChange={(e) => setMetaKeywords(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter meta keywords separated by commas"
            />
          </div>

          {/* Meta Canonical URL */}
          <div className="mb-4">
            <label htmlFor="metaCanonicalUrl" className="block text-sm font-medium text-gray-700 mb-2">
              Meta Canonical URL
            </label>
            <input
              id="metaCanonicalUrl"
              type="url"
              value={metaCanonicalUrl}
              onChange={(e) => setMetaCanonicalUrl(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter meta canonical URL"
            />
          </div>

          {/* Meta Robots */}
          <div className="mb-4">
            <label htmlFor="metaRobots" className="block text-sm font-medium text-gray-700 mb-2">
              Meta Robots
            </label>
            <input
              id="metaRobots"
              type="text"
              value={metaRobots}
              onChange={(e) => setMetaRobots(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter meta robots"
            />
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h2>
          
          {/* FAQs List */}
          <div className="mb-4">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-800">FAQ {index + 1}</h4>
                  <button
                    type="button"
                    onClick={() => {
                      const updatedFaqs = faqs.filter((_, i) => i !== index);
                      setFaqs(updatedFaqs);
                    }}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove
                  </button>
                </div>
                <div className="mb-2">
                  <label htmlFor={`faqQuestion${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Question
                  </label>
                  <input
                    id={`faqQuestion${index}`}
                    type="text"
                    value={faq.question}
                    onChange={(e) => {
                      const updatedFaqs = [...faqs];
                      updatedFaqs[index].question = e.target.value;
                      setFaqs(updatedFaqs);
                    }}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[`faqQuestion${index}`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter question"
                  />
                  {errors[`faqQuestion${index}`] && (
                    <p className="text-red-500 text-xs mt-1">{errors[`faqQuestion${index}`]}</p>
                  )}
                </div>
                <div>
                  <label htmlFor={`faqAnswer${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Answer
                  </label>
                  <textarea
                    id={`faqAnswer${index}`}
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => {
                      const updatedFaqs = [...faqs];
                      updatedFaqs[index].answer = e.target.value;
                      setFaqs(updatedFaqs);
                    }}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[`faqAnswer${index}`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter answer"
                  />
                  {errors[`faqAnswer${index}`] && (
                    <p className="text-red-500 text-xs mt-1">{errors[`faqAnswer${index}`]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* New FAQ Question */}
          <div className="mb-4">
            <label htmlFor="newFaqQuestion" className="block text-sm font-medium text-gray-700 mb-2">
              New Question
            </label>
            <input
              id="newFaqQuestion"
              type="text"
              value={newFaqQuestion}
              onChange={(e) => setNewFaqQuestion(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter new question"
            />
          </div>

          {/* New FAQ Answer */}
          <div className="mb-4">
            <label htmlFor="newFaqAnswer" className="block text-sm font-medium text-gray-700 mb-2">
              Answer
            </label>
            <textarea
              id="newFaqAnswer"
              rows={3}
              value={newFaqAnswer}
              onChange={(e) => setNewFaqAnswer(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter answer"
            />
          </div>

          {/* Add New FAQ Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => {
                if (newFaqQuestion.trim() && newFaqAnswer.trim()) {
                  setFaqs([...faqs, { question: newFaqQuestion.trim(), answer: newFaqAnswer.trim() }]);
                  setNewFaqQuestion('');
                  setNewFaqAnswer('');
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add New FAQ
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            disabled={loading || categoriesLoading || storesLoading}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Creating...
              </div>
            ) : (
              'Create Blog Post'
            )}
          </button>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`mt-4 p-4 rounded-lg text-center ${
            message.includes('Error') 
              ? 'bg-red-100 text-red-700 border border-red-200' 
              : 'bg-green-100 text-green-700 border border-green-200'
          }`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default BlogForm; 
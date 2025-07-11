'use client';

import { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';  // Import TinyMCE
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api'; // Import our API client
import { useAuth } from '@/context/AuthContext'; // Import useAuth hook

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
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  
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
        const data = await api.get('/api/blog-categories');
        setCategories(data.data || data || []);
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
        const data = await api.get('/api/proxy-stores');
        console.log('Stores API response:', data);
        const storesData = data.data || data || [];
        console.log('Stores data:', storesData);
        if (storesData.length > 0) {
          console.log('First store structure:', storesData[0]);
        }
        setStores(storesData);
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

  // Handle Long Description with TinyMCE Editor
  const handleEditorChange = (content: string, editor: any) => {
    setLongDescription(content);  // Update longDescription with editor content
    
    // Save to localStorage
    try {
      localStorage.setItem('blogDraft', content);
    } catch (error) {
      console.error('Error saving draft to localStorage:', error);
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

    // For TinyMCE content, we need to check if it's empty or too short
    // This removes HTML tags to check actual content length
    const stripHtml = (html: string) => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || '';
    };
    
    const plainLongDescription = stripHtml(longDescription);
    
    if (!plainLongDescription.trim()) {
      newErrors.longDescription = 'Long description is required';
    } else if (plainLongDescription.trim().length < 50) {
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

  // Sanitize HTML content
  const sanitizeHtml = (html: string): string => {
    // This is a basic sanitization - you might want to use a library like DOMPurify for production
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/on\w+="[^"]*"/g, '') // Remove event handlers
      .replace(/javascript:/g, ''); // Remove javascript: protocol
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

    // Sanitize the HTML content from TinyMCE
    const sanitizedLongDescription = sanitizeHtml(longDescription);

    const blogData = {
      title: title.trim(),
      shortDescription: shortDescription.trim(),
      longDescription: sanitizedLongDescription,
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
      const response = await api.post('/api/create-blog', blogData);
      setMessage('Blog created successfully!');
      // Reset form after successful save
      resetForm();
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
    // Clear localStorage draft
    localStorage.removeItem('blogDraft');
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem('blogDraft');
      if (saved) setLongDescription(saved);
    } catch (error) {
      console.error('Error loading draft from localStorage:', error);
    }
  }, []);

  // Check if user is authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // If still loading auth state or not authenticated, show loading state
  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

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
            <Editor
              apiKey='6be041uk7orm1ngovq1ze4udc28my9puzhlaeosuhcm6g3lg'
              id="longDescription"
              value={longDescription}
              onEditorChange={handleEditorChange}
              init={{
                height: 400,
                menubar: true,
                plugins: [
                  // Core editing features
                  'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 
                  'media', 'searchreplace', 'table', 'visualblocks', 'wordcount', 'code', 'fullscreen',
                  'insertdatetime', 'preview', 'help',
                  // Premium features available for free trial
                  'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed'
                ],
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | ' +
                  'link image media table | align lineheight | checklist numlist bullist indent outdent | ' +
                  'emoticons charmap | removeformat | code fullscreen help',
                content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 16px; }',
                images_upload_handler: function (blobInfo, progress) {
                  return new Promise((resolve, reject) => {
                    // Here you would typically upload the image to your server
                    // For now, we'll just convert it to a data URL
                    const reader = new FileReader();
                    reader.onload = function () {
                      resolve(reader.result as string);
                    };
                    reader.onerror = function () {
                      reject('Image upload failed');
                    };
                    reader.readAsDataURL(blobInfo.blob());
                  });
                }
              }}
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
                  />
                  {errors[`faqQuestion${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`faqQuestion${index}`]}</p>}
                </div>
                <div className="mb-2">
                  <label htmlFor={`faqAnswer${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Answer
                  </label>
                  <textarea
                    id={`faqAnswer${index}`}
                    rows={3}
                    value={faq.answer}
                    onChange={(e) => {
                      const updatedFaqs = [...faqs];
                      updatedFaqs[index].answer = e.target.value;
                      setFaqs(updatedFaqs);
                    }}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors[`faqAnswer${index}`] ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors[`faqAnswer${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`faqAnswer${index}`]}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Add New FAQ */}
          <div className="flex items-center mt-4">
            <button
              type="button"
              onClick={() => {
                setFaqs([...faqs, { question: newFaqQuestion, answer: newFaqAnswer }]);
                setNewFaqQuestion('');
                setNewFaqAnswer('');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add New FAQ
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300"
          >
            {loading ? 'Creating...' : 'Create Blog Post'}
          </button>
        </div>

        {message && (
          <div className="mt-6 text-center text-lg text-gray-700">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default BlogForm;
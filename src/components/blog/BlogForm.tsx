'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { 
  FormField, 
  RichTextEditor, 
  CategorySelector, 
  StoreSelector, 
  FAQSection, 
  SEOMetadataSection 
} from './index';
import { Category, Store, BlogValidationErrors } from '@/lib/types';
import { 
  isValidUrl, 
  isValidEmail, 
  stripHtml, 
  sanitizeHtml, 
  cleanAndFormatUrl 
} from '@/lib/utils/validation';
import { processTags } from '@/lib/utils/formatting';
import { BLOG_STATUS_OPTIONS } from '@/lib/constants/options';

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

  // Image Upload States
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUploadMessage, setImageUploadMessage] = useState('');

  // SEO Metadata Fields
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');
  const [metaCanonicalUrl, setMetaCanonicalUrl] = useState('');
  const [metaRobots, setMetaRobots] = useState('index,follow');

  // FAQs Section
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>([]);

  // Form State
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [storesLoading, setStoresLoading] = useState(true);

  // Validation States
  const [errors, setErrors] = useState<BlogValidationErrors>({});

  // Image Upload Handlers
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageUploadMessage('');
    }
  };

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
        const storesData = data.data || data || [];
        setStores(storesData);
      } catch (error) {
        console.error('Error fetching stores:', error);
      } finally {
        setStoresLoading(false);
      }
    };

    fetchStores();
  }, []);

  const handleStoreChange = (selectedStoreId: string, selectedStoreUrl: string) => {
    setStoreId(selectedStoreId);
    setStoreUrl(selectedStoreUrl);
  };

  const handleMetaChange = (field: string, value: string) => {
    switch (field) {
      case 'metaTitle':
        setMetaTitle(value);
        break;
      case 'metaDescription':
        setMetaDescription(value);
        break;
      case 'metaKeywords':
        setMetaKeywords(value);
        break;
      case 'metaCanonicalUrl':
        setMetaCanonicalUrl(value);
        break;
      case 'metaRobots':
        setMetaRobots(value);
        break;
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors: BlogValidationErrors = {};

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
    if (authorEmail && !isValidEmail(authorEmail)) {
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

    // Handle image upload if there's a selected file but no imageUrl
    let finalImageUrl = imageUrl;
    if (imageFile && !imageUrl.trim()) {
      try {
        setMessage('Uploading image...');
        const formData = new FormData();
        formData.append('image', imageFile);

        const uploadResponse = await fetch('https://coupon-app-backend.vercel.app/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error(`Image upload failed: ${uploadResponse.status}`);
        }

        const uploadData = await uploadResponse.json();
        finalImageUrl = uploadData.imageUrl;
        setImageUrl(uploadData.imageUrl); // Update state with uploaded URL
        setImageFile(null); // Clear the file input
        setMessage('Image uploaded successfully! Proceeding with blog creation...');
      } catch (uploadError) {
        console.error('Error uploading image:', uploadError);
        setMessage('Failed to upload image. Please try uploading the image again or provide an image URL.');
        setLoading(false);
        return;
      }
    }

    // Process tags
    const processedTags = processTags(tags);

    // Sanitize the HTML content from TinyMCE
    const sanitizedLongDescription = sanitizeHtml(longDescription);

    // Build the blog data object
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
      // Only include image if we have a valid image URL
      ...(finalImageUrl && finalImageUrl.trim() && {
        image: {
          url: finalImageUrl.trim(),
          alt: imageAlt.trim() || title.trim()
        }
      }),
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
    setImageFile(null);
    // Reset SEO metadata
    setMetaTitle('');
    setMetaDescription('');
    setMetaKeywords('');
    setMetaCanonicalUrl('');
    setMetaRobots('index,follow');
    // Reset FAQs
    setFaqs([]);
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
          
          <FormField
            id="title"
            label="Title"
            type="text"
            value={title}
            onChange={setTitle}
            placeholder="Enter blog title"
            required
            error={errors.title}
          />

          <FormField
            id="shortDescription"
            label="Short Description (Max 500 characters)"
            type="text"
            value={shortDescription}
            onChange={setShortDescription}
            placeholder="Brief description of the blog post"
            required
            maxLength={500}
            error={errors.shortDescription}
          />

          <RichTextEditor
            value={longDescription}
            onChange={setLongDescription}
            error={errors.longDescription}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <CategorySelector
              categories={categories}
              selectedCategoryId={categoryId}
              onCategoryChange={setCategoryId}
              loading={categoriesLoading}
              error={errors.category}
            />

            <StoreSelector
              stores={stores}
              selectedStoreId={storeId}
              onStoreChange={handleStoreChange}
              loading={storesLoading}
              error={errors.store}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <FormField
              id="authorName"
              label="Author Name"
              type="text"
              value={authorName}
              onChange={setAuthorName}
              placeholder="Author name"
              required
              error={errors.authorName}
            />

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2 cursor-pointer">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {BLOG_STATUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Optional Fields Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Optional Fields</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <FormField
              id="authorEmail"
              label="Author Email"
              type="email"
              value={authorEmail}
              onChange={setAuthorEmail}
              placeholder="author@example.com"
              error={errors.authorEmail}
            />

            <FormField
              id="authorAvatar"
              label="Author Avatar URL"
              type="url"
              value={authorAvatar}
              onChange={setAuthorAvatar}
              placeholder="https://example.com/avatar.jpg"
              error={errors.authorAvatar}
            />
          </div>

          {/* Image Upload Section */}
          <div className="space-y-4 mb-6">
            <label className="block text-sm font-medium text-gray-700 cursor-pointer">Upload Image (Optional)</label>
            <div className="text-xs text-gray-500 mb-2">
              Select an image file to upload. The image will be uploaded automatically when you submit the blog post.
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />

            {imageFile && (
              <div className="text-sm text-green-600 mt-1">
                ✓ Selected: {imageFile.name} (will be uploaded when you submit the blog)
              </div>
            )}

            {imageUrl && (
              <div className="mt-4">
                <div className="text-sm text-gray-600 mb-2">Image Preview:</div>
                <img 
                  src={imageUrl} 
                  alt="Uploaded preview" 
                  className="rounded-lg w-full max-w-md h-auto border border-gray-300" 
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <FormField
              id="imageUrl"
              label="Image URL (Alternative to upload above)"
              type="url"
              value={imageUrl}
              onChange={setImageUrl}
              placeholder="https://example.com/image.jpg"
              error={errors.imageUrl}
            />

            <FormField
              id="imageAlt"
              label="Image Alt Text"
              type="text"
              value={imageAlt}
              onChange={setImageAlt}
              placeholder="Description of the image"
            />
          </div>

          <FormField
            id="tags"
            label="Tags"
            type="text"
            value={tags}
            onChange={setTags}
            placeholder="Enter tags separated by commas (e.g., technology, web development, tips)"
          />

          <div className="flex items-center">
            <input
              id="isFeatured"
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="isFeatured" className="ml-2 text-sm font-medium text-gray-700 cursor-pointer">
              Featured for Home
            </label>
          </div>
        </div>

        {/* SEO Metadata Section */}
        <SEOMetadataSection
          metaTitle={metaTitle}
          metaDescription={metaDescription}
          metaKeywords={metaKeywords}
          metaCanonicalUrl={metaCanonicalUrl}
          metaRobots={metaRobots}
          onMetaChange={handleMetaChange}
          errors={errors}
        />

        {/* FAQs Section */}
        <FAQSection
          faqs={faqs}
          onFaqsChange={setFaqs}
          errors={errors}
        />

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed"
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
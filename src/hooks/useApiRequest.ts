'use client';

import { useState, useCallback } from 'react';
import { api } from '@/lib/api';

interface ApiRequestState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Hook for handling API requests with loading and error states
 */
export function useApiRequest<T>() {
  const [state, setState] = useState<ApiRequestState<T>>({
    data: null,
    isLoading: false,
    error: null,
  });

  /**
   * Make a GET request
   */
  const get = useCallback(async (endpoint: string, options = {}) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const data = await api.get<T>(endpoint, options);
      
      setState({
        data,
        isLoading: false,
        error: null,
      });
      return data;
    } catch (error: any) {
      setState({
        data: null,
        isLoading: false,
        error: error.message || 'An error occurred',
      });
      throw error;
    }
  }, []);

  /**
   * Make a POST request
   */
  const post = useCallback(async (endpoint: string, data?: any, options = {}) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const responseData = await api.post<T>(endpoint, data, options);
      
      setState({
        data: responseData,
        isLoading: false,
        error: null,
      });
      return responseData;
    } catch (error: any) {
      setState({
        data: null,
        isLoading: false,
        error: error.message || 'An error occurred',
      });
      throw error;
    }
  }, []);

  /**
   * Make a PUT request
   */
  const put = useCallback(async (endpoint: string, data?: any, options = {}) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const responseData = await api.put<T>(endpoint, data, options);
      
      setState({
        data: responseData,
        isLoading: false,
        error: null,
      });
      return responseData;
    } catch (error: any) {
      setState({
        data: null,
        isLoading: false,
        error: error.message || 'An error occurred',
      });
      throw error;
    }
  }, []);

  /**
   * Make a DELETE request
   */
  const del = useCallback(async (endpoint: string, options = {}) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const responseData = await api.delete<T>(endpoint, options);
      
      setState({
        data: responseData,
        isLoading: false,
        error: null,
      });
      return responseData;
    } catch (error: any) {
      setState({
        data: null,
        isLoading: false,
        error: error.message || 'An error occurred',
      });
      throw error;
    }
  }, []);

  return {
    ...state,
    get,
    post,
    put,
    delete: del,
  };
} 
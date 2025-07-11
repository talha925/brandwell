/**
 * API client for making authenticated requests
 */

interface RequestOptions extends RequestInit {
  skipAuth?: boolean;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }

  /**
   * Get the authentication token from storage
   */
  private getAuthToken(): string | null {
    if (typeof window === 'undefined') {
      return null; // Server-side
    }
    return localStorage.getItem('authToken');
  }

  /**
   * Add authentication headers to requests
   */
  private createHeaders(options?: RequestOptions): Headers {
    const headers = new Headers(options?.headers);
    
    // Set default content type if not provided
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }

    // Add auth token if available and not skipped
    if (!options?.skipAuth) {
      const token = this.getAuthToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return headers;
  }

  /**
   * Make a GET request
   */
  async get<T = any>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.baseUrl + endpoint;
    const headers = this.createHeaders(options);
    
    const response = await fetch(url, {
      ...options,
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      this.handleError(response);
    }

    return await response.json();
  }

  /**
   * Make a POST request
   */
  async post<T = any>(endpoint: string, data: any, options?: RequestOptions): Promise<T> {
    const url = this.baseUrl + endpoint;
    const headers = this.createHeaders(options);
    
    const response = await fetch(url, {
      ...options,
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      this.handleError(response);
    }

    return await response.json();
  }

  /**
   * Make a PUT request
   */
  async put<T = any>(endpoint: string, data: any, options?: RequestOptions): Promise<T> {
    const url = this.baseUrl + endpoint;
    const headers = this.createHeaders(options);
    
    const response = await fetch(url, {
      ...options,
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      this.handleError(response);
    }

    return await response.json();
  }

  /**
   * Make a DELETE request
   */
  async delete<T = any>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.baseUrl + endpoint;
    const headers = this.createHeaders(options);
    
    const response = await fetch(url, {
      ...options,
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      this.handleError(response);
    }

    return await response.json();
  }

  /**
   * Handle error responses
   */
  private handleError(response: Response): never {
    // Handle authentication errors
    if (response.status === 401) {
      // Clear token and redirect to login
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
      }
    }
    
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

// Create and export a singleton instance
export const api = new ApiClient();

// Export the class for testing or custom instances
export default ApiClient; 
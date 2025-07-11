import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Define protected routes that require authentication
const protectedRoutes = [
  '/blog/create',
];

// Function to verify JWT token
async function verifyToken(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'default_secret_replace_in_production');
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  // Get token from cookies
  const token = request.cookies.get('authToken')?.value;
  const pathname = request.nextUrl.pathname;
  
  // Check if the current path is /blog/create
  if (pathname === '/blog/create' || pathname.startsWith('/blog/create/')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Verify the token
    const payload = await verifyToken(token);
    if (!payload) {
      // Clear invalid token and redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('authToken');
      return response;
    }
  }

  // Also protect API routes that should require authentication
  if ((pathname.startsWith('/api/blog-categories') || 
       pathname.startsWith('/api/blogs/') ||
       pathname.startsWith('/api/create-blog') ||
       pathname.startsWith('/api/save-blog/') ||
       pathname.startsWith('/api/store/')) && !token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    '/blog/create',
    '/blog/create/:path*',
    '/api/blog-categories',
    '/api/blogs/:path*',
    '/api/create-blog',
    '/api/save-blog/:path*',
    '/api/store/:path*',
  ],
}; 
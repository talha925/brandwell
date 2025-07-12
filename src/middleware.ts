import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

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

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;
  const { pathname } = req.nextUrl;

  const protectedRoutes = ['/blog/create'];

  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Verify the token
    const payload = await verifyToken(token);
    if (!payload) {
      // Clear invalid token and redirect to login
      const response = NextResponse.redirect(new URL('/login', req.url));
      response.cookies.delete('authToken');
      return response;
    }
  }

  return NextResponse.next();
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    '/blog/create',
    '/blog/create/:path*',
  ],
}; 
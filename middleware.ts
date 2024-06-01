import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  // Allow access to login page without authentication
  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.next();
  }

  // Redirect to login if no token is found
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'], // Apply to all routes that need protection
};

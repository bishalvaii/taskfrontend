import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');

  // Allow access to login page without authentication if token is found in cookies
  if (request.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.next();
  }

  // Redirect to login if no token is found
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}


// middleware applies to this root route only '/'
export const config = {
  matcher: ['/'], 
};

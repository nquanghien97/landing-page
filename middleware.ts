import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';
interface AuthJwt extends JwtPayload {
  userId: string;
}
const publicRoutes = ['/api/auth/login', '/api/auth/register'];
export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.headers.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204 });
  }
  //jwt
  // const isPublicRoute = publicRoutes.some(route => req.nextUrl.pathname.startsWith(route));
  // if (isPublicRoute) {
  //   return res;
  // }
  // const authHeader = req.headers.get('Authorization');
  // if (!authHeader) {
  //   return new NextResponse(
  //     JSON.stringify({ success: false, message: 'UnAuthorized' }),
  //     { status: 401, headers: { 'Content-Type': 'application/json' } }
  //   );
  // }

  // const token = authHeader?.split(' ')[1];
  // if (!token) {
  //   return new NextResponse(
  //     JSON.stringify({ success: false, message: 'Access token not found' }),
  //     { status: 401, headers: { 'Content-Type': 'application/json' } }
  //   );
  // }

  // try {
  //   const payload = jwt.verify(token, process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET as string) as AuthJwt;
  //   // In Next.js middleware, we can't modify the request object directly.
  //   // Instead, we can add custom headers to pass information to the API route.
  //   res.headers.set('X-User-ID', payload.userId);
  // } catch (error) {
  //   console.error(error);
  //   return new NextResponse(
  //     JSON.stringify({ success: false, message: 'Invalid token' }),
  //     { status: 401, headers: { 'Content-Type': 'application/json' } }
  //   );
  // }


  return res;
}

export const config = {
  matcher: '/api/:path*',
};
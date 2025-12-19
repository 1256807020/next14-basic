
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.url,'5555')
  console.log(request.nextUrl.pathname,'6666')
}

export const config = {
  matcher: '/about/:path*',
}
import { cookies, headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export function GET(request: NextRequest) {
  console.log('GET /api/time')
  const searchParams = request.nextUrl.searchParams
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const headersLit = headers()
  const referer = headersLit.get('referer')
  // 有缓存,观察缓存先执行build再启动start
  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
    searchParams,
    token,
    referer
  })
}
import { NextRequest, NextResponse } from "next/server"

export function GET(request:NextRequest){
  console.log('GET /api/time')
  const searchParams = request.nextUrl.searchParams
  // 有缓存,观察缓存先执行build再启动start
  return NextResponse.json({
    time:new Date().toLocaleTimeString(),
    searchParams
  })
}
import { NextRequest, NextResponse } from "next/server"
export async function DELETE(request: NextRequest) {
  console.log(request)
  return NextResponse.json({})
}
export async function PATCH(request: NextRequest) {
  console.log(request)
  return NextResponse.json({})
}
"use client"
import Link from "next/link";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
      <div className="flex gap-4 font-bold text-lg text-purple-500">
        <Link href="/dashboard/about">About</Link>
        {/* <span className="p-4">|</span> */}
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h2>dashboard layout {count}</h2>
      <button className="bg-black text-white p-2 rounded-md" onClick={()=>setCount(count +1)}>点击增加+</button>
      {children}
    </div>
  );
}

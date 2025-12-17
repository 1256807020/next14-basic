"use client"
import { useState } from "react";

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 mx-auto mt-10">
      <h2>dashboard layout {count}</h2>
      <button className="bg-black text-white p-2 rounded-md" onClick={()=>setCount(count +1)}>点击增加+</button>
      {children}
    </div>
  );
}

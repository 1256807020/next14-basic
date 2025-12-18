"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();
  const linkData = [
    {
      name: "Performance",
      path: "/performance",
    },
    {
      name: "Reliability",
      path: "/reliability",
    },
    {
      name: "Scale",
      path: "/scale",
    },
  ];
  // const accessLink = ["/", "/performance", "/reliability", "/scale"];
  // if (!accessLink.includes(pathname)) return null;
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto p-8">
        <Link className="text-3xl font-bold text-white" href="/">
          Home
        </Link>
        <div className="text-xl space-x-2 text-white">
          {linkData.map((link) => (
            <Link
              className={pathname === link.path ? "text-purple-500" : ""}
              href={link.path}
              key={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

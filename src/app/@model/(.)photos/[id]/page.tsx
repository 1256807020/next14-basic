"use client";
import React from "react";
import { photos } from "@/data/photos";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Photo({ params }: { params: { id: string } }) {
  const photo = photos.find((item) => item.id === params.id)!;
  const router = useRouter();
  return (
    <div
      className="h-screen w-screen flex justify-center fixed items-center inset-0 bg-gray-500/[.8]"
      onClick={router.back}
    >
      <Image
        className="block rounded-lg"
        src={photo.src}
        alt={photo.alt}
        width={200}
        height={200}
        onClick={(e) => e.stopPropagation()}
      ></Image>
    </div>
  );
}

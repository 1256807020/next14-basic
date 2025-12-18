import React from "react";
import { photos } from "@/data/photos";
import Image from "next/image";
export default function Photo({ params }: { params: { id: string } }) {
  const photo = photos.find((item) => item.id === params.id)!;
  return (
    <div className="container mx-auto pt-4 text-center">
      photo--{params.id}
      <div className="flex justify-center items-center mt-6 flex-col border-2 border-dashed border-black">
        <Image className="block rounded-lg" src={photo.src} alt={photo.alt} width={200} height={200}></Image>
        <div className="">{photo.price}</div>
      </div>
    </div>
  );
}

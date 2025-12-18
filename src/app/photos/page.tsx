import React from "react";
import { photos } from "@/data/photos";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="container mx-auto max-w-2xl px-4">
      <h2 className="sr-only">Products</h2>
      <div className="flex justify-center">
        {photos.map((item) => (
          <Link href={`/photos/${item.id}`} className="group" key={item.id}>
            <div className="">
              <Image
                src={item.src}
                width={200}
                height={200}
                alt={item.alt}
              ></Image>
            </div>
            <h3>{item.alt}</h3>
            <p>{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

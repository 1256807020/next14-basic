import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      Blog
      <div>
        <Link href="/blog/1">跳转到/blog/1</Link>
      </div>
    </div>
  );
}

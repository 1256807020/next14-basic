import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen bg-blue-500 flex justify-center items-center  not-found container mx-auto">
      <div className="flex justify-center items-center container flex-col gap-6">
        <h2>Not Found</h2>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}

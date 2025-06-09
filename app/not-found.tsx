"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-blue-200 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Sorry, the page you're looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-block bg-blue-200 text-white px-6 py-3 rounded-full hover:bg-blue-300 transition"
      >
        {/* <Button onClick={() => console.log("elsee")}> */}
        Go back home
        {/* </Button> */}
      </Link>
    </div>
  );
}

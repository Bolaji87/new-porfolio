"use client";
import React from "react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="mb-6 text-lg text-center max-w-md">
        An unexpected error has occurred. Please try again later or go back to
        the homepage.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}

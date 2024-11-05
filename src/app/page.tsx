import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Blogging Platform</h1>
      <p className="mb-6">
        This is a simple blogging platform built with Next.js, React, TypeScript, Tailwind CSS, and SASS.
      </p>
      <Link 
        href="/posts"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
      >  
        View Blog Posts
      </Link>
    </main>
  );
}
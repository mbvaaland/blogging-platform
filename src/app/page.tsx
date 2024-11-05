import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Welcome to My Blog</h1>
      <p className= "text-lg md:text-xl mb-6 text-center">
        Share your thoughts, ideas, and stories with the world.
      </p>
      <Link href="/posts" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          View All Posts
      </Link>
    </div>
  );
}
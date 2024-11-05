'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { PostsContext } from '@/context/PostsContext';

export default function PostsPage() {
  const postsContext = useContext(PostsContext);

  if (!postsContext) {
    return <div>Loading...</div>;
  }

  const { posts } = postsContext;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Blog Posts</h1>
      <Link href="/posts/new" className="mb-6 inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200">
          Create New Post
      </Link>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <Link href={`/posts/${post.slug}`} className="text-2xl text-blue-600 hover:underline">{post.title}
            </Link>
            <p className="text-gray-600 mt-2">{post.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
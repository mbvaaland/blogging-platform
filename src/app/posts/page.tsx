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
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <Link href="/posts/new" className="mb-4 inline-block">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200">
          Create New Post
        </button>
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.slug}`}>
              <span className="text-2xl text-blue-600 hover:underline cursor-pointer">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
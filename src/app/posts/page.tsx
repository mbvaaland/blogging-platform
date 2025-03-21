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
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Blog Posts</h1>
      <Link href="/posts/new" className="btn-success mb-6 inline-block">
          Create New Post
      </Link>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <Link href={`/posts/${post.slug}`} className="text-2xl text-blue-600 hover:underline">{post.title}
            </Link>
            <p className="text-gray-600 mt-2 line-clamp-3">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
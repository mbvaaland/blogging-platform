import Link from 'next/link';
import { posts } from '@/data/posts';

export default function PostsPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link
              href={`/posts/${post.slug}`}
              className="text-2xl text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
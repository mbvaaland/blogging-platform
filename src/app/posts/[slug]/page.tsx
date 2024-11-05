// src/app/posts/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';

interface PostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <article className="prose">{post.content}</article>
    </main>
  );
}
'use client';

import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PostsContext } from '@/context/PostsContext';

interface EditPostPageProps {
  params: { slug: string };
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const postsContext = useContext(PostsContext);
  const router = useRouter();

  if (!postsContext) {
    return <div>Loading...</div>;
  }

  const { posts, updatePost } = postsContext;
  const post = posts.find((p) => p.slug === params.slug);

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  useEffect(() => {
    if (!post) {
      router.push('/posts');
    }
  }, [post, router]);

  if (!post) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSlug = title.toLowerCase().replace(/\s+/g, '-');
    updatePost({ ...post, title, content, slug: updatedSlug });
    router.push(`/posts/${updatedSlug}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 md:p-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter post title"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-60"
            placeholder="Update your post content here..."
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn-warning"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
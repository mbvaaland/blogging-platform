'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { PostsContext } from '@/context/PostsContext';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const postsContext = useContext(PostsContext);
  const router = useRouter();

  if (!postsContext) {
    return <div>Loading...</div>;
  }

  const { addPost } = postsContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = title.toLowerCase().replace(/\s+/g, '-');
    addPost({ title, content, slug });
    router.push('/posts');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 md:p-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Create New Post</h1>
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
            placeholder="Write your post content here..."
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="btn-success"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
}
'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { PostsContext } from '@/context/PostsContext';

interface PostPageProps {
  params: { slug: string };
}

export default function PostPage({ params }: PostPageProps) {
  const postsContext = useContext(PostsContext);
  const router = useRouter();

  if (!postsContext) {
    return <div>Loading...</div>;
  }

  const { posts, deletePost } = postsContext;
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div>Post not found.</div>;
  }

  const handleDelete = () => {
    deletePost(post.id);
    router.push('/posts');
  };

  const handleEdit = () => {
    router.push(`/posts/${post.slug}/edit`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>
      <article className="prose lg:prose-xl mb-6">{post.content}</article>
      <div className="space-x-4">
       <button
          onClick={handleEdit}
          className="btn-warning"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
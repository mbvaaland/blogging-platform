// src/context/PostsContext.tsx

'use client';

import React, { createContext, useState, ReactNode } from 'react';

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
}

interface PostsContextType {
  posts: Post[];
  addPost: (post: Omit<Post, 'id'>) => void;
  updatePost: (updatedPost: Post) => void;
  deletePost: (id: string) => void;
}

export const PostsContext = createContext<PostsContextType | undefined>(undefined);

const initialPosts: Post[] = [
  {
    id: '1',
    title: 'First Blog Post',
    slug: 'first-blog-post',
    content: 'This is the content of the first blog post.',
  },
  {
    id: '2',
    title: 'Second Blog Post',
    slug: 'second-blog-post',
    content: 'This is the content of the second blog post.',
  },
];

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (post: Omit<Post, 'id'>) => {
    const newPost: Post = {
      ...post,
      id: (posts.length + 1).toString(),
    };
    setPosts([...posts, newPost]);
  };

  const updatePost = (updatedPost: Post) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};
// src/data/posts.ts

export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
  }
  
  export const posts: Post[] = [
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
    // Add more posts as needed
  ];
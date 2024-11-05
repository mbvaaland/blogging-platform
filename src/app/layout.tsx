'use client';

import './globals.scss';
import { PostsProvider } from '@/context/PostsContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PostsProvider>
          {children}
        </PostsProvider>
      </body>
    </html>
  );
}
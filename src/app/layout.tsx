// src/app/layout.tsx

import './globals.scss';
import { PostsProvider } from '@/context/PostsContext';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <PostsProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </PostsProvider>
      </body>
    </html>
  );
}
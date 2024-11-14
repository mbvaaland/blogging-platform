// src/app/components/Header.tsx

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              My Blog
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="nav-link">
                Home
            </Link>
            <Link href="/posts" className="nav-link">
                Posts
            </Link>
            <Link href="/posts/new" className= "nav-link">
                New Post
            </Link>
          </nav>
          {/* Mobile Menu Button (Optional) */}
          {/* Future Enhancement: Implement a hamburger menu for mobile devices */}
        </div>
      </div>
    </header>
  );
};

export default Header;
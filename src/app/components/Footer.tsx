import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <Link href="/about" className="text-gray-400 hover:text-white">
          About
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
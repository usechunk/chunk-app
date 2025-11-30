import { Link } from 'react-router-dom';
import { authApi } from '@/lib/api';

export default function Navbar() {
  const isLoggedIn = !!localStorage.getItem('auth_token');

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Chunk Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-900">chunk</span>
            </Link>
            <div className="hidden md:flex gap-6">
              <Link to="/mods" className="text-gray-600 hover:text-chunk-green transition">
                Mods
              </Link>
              <Link to="/modpacks" className="text-gray-600 hover:text-chunk-green transition">
                Modpacks
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <button
                onClick={authApi.logout}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={authApi.githubLogin}
                className="px-4 py-2 bg-chunk-green text-white rounded-lg hover:bg-chunk-green/90 transition"
              >
                Login with GitHub
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

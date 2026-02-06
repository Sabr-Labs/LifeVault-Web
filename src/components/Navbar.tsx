import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [mounted, setMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Get the theme from the document which was set by the inline script
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    setTheme(currentTheme || 'light');
    setMounted(true);
    // Get the current page path for active link highlighting
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    // Check for exact match or path followed by '/' to avoid partial matches
    // e.g., '/docs' should not match '/documentation'
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Render a placeholder button during SSR to avoid hydration mismatch
  const themeButton = (
    <button 
      onClick={toggleTheme} 
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {mounted && theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );

  return (
    <nav className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 border-b border-base-300">
      <div className="container mx-auto max-w-7xl px-4 flex items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <img src="/logo_transparent256.png" alt="LifeVault Logo" className="w-8 h-8" width="32" height="32" />
          <span>LifeVault</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="menu menu-horizontal px-1 gap-1 hidden md:flex ml-6">
          <li><a href="/" className={`font-medium ${isActive('/') ? 'active text-primary' : ''}`}>Home</a></li>
          <li><a href="/download" className={`font-medium ${isActive('/download') ? 'active text-primary' : ''}`}>Download</a></li>
          <li><a href="/docs" className={`font-medium ${isActive('/docs') ? 'active text-primary' : ''}`}>Docs</a></li>
          <li><a href="/faq" className={`font-medium ${isActive('/faq') ? 'active text-primary' : ''}`}>FAQ</a></li>
        </ul>

        {/* Right side: Theme toggle + Get Started */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          {themeButton}
          <a href="/download" className="btn btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2 ml-auto">
          {themeButton}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-base-100 border-b border-base-300 shadow-lg">
          <ul className="menu p-4 gap-2">
            <li><a href="/" className={`font-medium ${isActive('/') ? 'active text-primary' : ''}`}>Home</a></li>
            <li><a href="/download" className={`font-medium ${isActive('/download') ? 'active text-primary' : ''}`}>Download</a></li>
            <li><a href="/docs" className={`font-medium ${isActive('/docs') ? 'active text-primary' : ''}`}>Docs</a></li>
            <li><a href="/faq" className={`font-medium ${isActive('/faq') ? 'active text-primary' : ''}`}>FAQ</a></li>
            <li>
              <a href="/download" className="btn btn-primary mt-2">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

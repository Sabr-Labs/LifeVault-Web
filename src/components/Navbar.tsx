import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Vault } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get the theme from the document which was set by the inline script
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
    setTheme(currentTheme || 'light');
    setMounted(true);
  }, []);

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
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Vault className="w-8 h-8" />
            <span>LifeVault</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-none gap-2">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li><a href="/" className="font-medium">Home</a></li>
            <li><a href="/download" className="font-medium">Download</a></li>
          </ul>
          {themeButton}
          <a href="/download" className="btn btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden gap-2">
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
            <li><a href="/" className="font-medium">Home</a></li>
            <li><a href="/download" className="font-medium">Download</a></li>
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

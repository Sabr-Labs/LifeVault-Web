import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
              <img src="/logo_transparent256.png" alt="LifeVault Logo" className="w-8 h-8" width="32" height="32" />
              <span>LifeVault</span>
            </a>
            <p className="text-base-content/60 text-sm text-center md:text-left max-w-xs">
              Your file-system-first organizer for important documents.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-sm">Product</h4>
              <a href="/" className="text-sm text-base-content/60 hover:text-primary transition-colors">Home</a>
              <a href="/download" className="text-sm text-base-content/60 hover:text-primary transition-colors">Download</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-sm">Support</h4>
              <a href="/docs" className="text-sm text-base-content/60 hover:text-primary transition-colors">Documentation</a>
              <a href="/faq" className="text-sm text-base-content/60 hover:text-primary transition-colors">FAQ</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-sm">Legal</h4>
              <a href="/privacy" className="text-sm text-base-content/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-sm text-base-content/60 hover:text-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="#" 
              className="btn btn-ghost btn-circle"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="btn btn-ghost btn-circle"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="divider my-8"></div>

        <div className="text-center text-sm text-base-content/60">
          <p>&copy; {currentYear} LifeVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

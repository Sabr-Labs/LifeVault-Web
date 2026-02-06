import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  BookOpen,
  Info,
  Rocket,
  Download,
  FileText,
  FolderTree,
  Cloud,
  Tag,
  Lock,
  Fingerprint,
  ShieldCheck,
  Key,
  Globe,
  Webhook,
  ChevronRight,
  HardDrive,
  Layers,
  ScanLine,
  Shield,
  ArrowRight,
} from 'lucide-react';

// Sidebar navigation structure
const sidebarSections = [
  {
    title: 'GETTING STARTED',
    items: [
      { label: 'Introduction', id: 'introduction', icon: BookOpen, active: true },
      { label: 'Quick Start Guide', id: 'quick-start', icon: Rocket },
      { label: 'Installation', id: 'installation', icon: Download },
    ],
  },
  {
    title: 'FILE MANAGEMENT',
    items: [
      { label: 'Smart Naming', id: 'smart-naming', icon: FileText },
      { label: 'Vault Structure', id: 'vault-structure', icon: FolderTree },
      { label: 'Cloud Syncing', id: 'cloud-syncing', icon: Cloud },
      { label: 'Tags & Metadata', id: 'tags-metadata', icon: Tag },
    ],
  },
  {
    title: 'SECURITY',
    items: [
      { label: 'End-to-End Encryption', id: 'encryption', icon: Lock },
      { label: 'Biometric Access', id: 'biometric', icon: Fingerprint },
      { label: 'Privacy Policy', id: 'privacy-policy', icon: ShieldCheck },
    ],
  },
  {
    title: 'API REFERENCE',
    items: [
      { label: 'Authentication', id: 'authentication', icon: Key },
      { label: 'Endpoints', id: 'endpoints', icon: Globe },
      { label: 'Webhooks', id: 'webhooks', icon: Webhook },
    ],
  },
];

const tocItems = [
  { label: 'What is LifeVault?', id: 'what-is-lifevault' },
  { label: 'Quick Start Guide', id: 'quick-start-guide' },
  { label: 'Developer API', id: 'developer-api' },
];

export default function Documentation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('what-is-lifevault');

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="docs-page min-h-screen bg-[#0f1117] text-gray-200 pt-16">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-lg bg-[#1a1d2e] border border-[#2a2d3e] text-gray-300 hover:bg-[#252838] transition-colors"
        aria-label="Toggle documentation sidebar"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-30 pt-16"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Left Sidebar */}
        <aside
          className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-[#0f1117] border-r border-[#1e2030] overflow-y-auto transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:sticky lg:top-16`}
        >
          <nav className="p-4 space-y-6">
            {sidebarSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                          item.active
                            ? 'text-purple-400 bg-purple-500/10 border-l-2 border-purple-400'
                            : 'text-gray-400 hover:text-gray-200 hover:bg-[#1a1d2e]'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 lg:ml-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-medium uppercase tracking-wide text-xs">
                Documentation
              </span>
            </div>

            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Introduction to LifeVault
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl">
              Learn how to transform your cluttered digital life into a structured, secure, and
              searchable vault.
            </p>

            {/* What is LifeVault */}
            <section id="what-is-lifevault" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">What is LifeVault?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                LifeVault is a file-system-first organizer designed for the modern individual. It
                doesn't replace your storage; it <strong className="text-white">augments</strong>{' '}
                it. By layering a smart structure over your existing cloud and local folders,
                LifeVault helps you manage IDs, warranties, receipts, and critical documents with
                zero friction.
              </p>

              {/* Privacy callout */}
              <div className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-lg p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-purple-400 font-semibold text-sm mb-1">Privacy First</h4>
                  <p className="text-gray-400 text-sm">
                    LifeVault never uploads your files to its own servers. Your data stays in your
                    control, on your devices and your chosen cloud providers.
                  </p>
                </div>
              </div>
            </section>

            {/* Quick Start Guide */}
            <section id="quick-start-guide" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-2">Quick Start Guide</h2>
              <p className="text-gray-400 mb-6">
                To get started with LifeVault, follow these three simple steps:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    step: 1,
                    icon: HardDrive,
                    title: 'Connect Storage',
                    description:
                      "Link your local folders or cloud drives like iCloud or Drive.",
                  },
                  {
                    step: 2,
                    icon: Layers,
                    title: 'Choose Presets',
                    description:
                      "Enable smart categories like 'Tax Documents' or 'Warranties'.",
                  },
                  {
                    step: 3,
                    icon: ScanLine,
                    title: 'Start Scanning',
                    description:
                      'LifeVault will automatically index and organize your files.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-lg p-5"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold mb-3">
                      {item.step}
                    </div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Developer API */}
            <section id="developer-api" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-2">Developer API</h2>
              <p className="text-gray-400 mb-6">
                LifeVault offers a local-first API to interact with your vault programmatically.
                Here is how you can fetch your expiring warranties via CLI:
              </p>

              <div className="bg-[#161822] border border-[#2a2d3e] rounded-lg overflow-hidden">
                <pre className="p-4 sm:p-6 text-sm overflow-x-auto">
                  <code>
                    <span className="text-gray-500">
                      # Fetch all expiring warranties in the next 30 days
                    </span>
                    {'\n'}
                    <span className="text-gray-300">lifevault list</span>
                    <span className="text-gray-500"> --type</span>{' '}
                    <span className="text-green-400">"warranty"</span>
                    <span className="text-gray-500"> --expiring-in</span>{' '}
                    <span className="text-purple-400">30d</span>
                    <span className="text-gray-500"> --format</span>{' '}
                    <span className="text-green-400">json</span>
                    {'\n'}
                    <span className="text-gray-500">// Output:</span>
                    {'\n'}
                    <span className="text-gray-300">{'['}</span>
                    {'\n'}
                    <span className="text-gray-300">{'  {'}</span>
                    {'\n'}
                    <span className="text-gray-300">{'    '}</span>
                    <span className="text-purple-400">"id"</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-green-400">"warr_8k2l1"</span>
                    <span className="text-gray-300">,</span>
                    {'\n'}
                    <span className="text-gray-300">{'    '}</span>
                    <span className="text-purple-400">"name"</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-green-400">"MacBook Pro M3"</span>
                    <span className="text-gray-300">,</span>
                    {'\n'}
                    <span className="text-gray-300">{'    '}</span>
                    <span className="text-purple-400">"expires_at"</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-green-400">"2024-12-15"</span>
                    <span className="text-gray-300">,</span>
                    {'\n'}
                    <span className="text-gray-300">{'    '}</span>
                    <span className="text-purple-400">"provider"</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-green-400">"AppleCare+"</span>
                    {'\n'}
                    <span className="text-gray-300">{'  }'}</span>
                    {'\n'}
                    <span className="text-gray-300">{']'}</span>
                  </code>
                </pre>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Next Steps</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="#encryption"
                  className="group bg-[#1a1d2e] border border-[#2a2d3e] rounded-lg p-5 flex items-center gap-4 hover:border-purple-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm">Setup Security</h3>
                    <p className="text-gray-500 text-xs">Configure biometrics and keys</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                </a>
                <a
                  href="#cloud-syncing"
                  className="group bg-[#1a1d2e] border border-[#2a2d3e] rounded-lg p-5 flex items-center gap-4 hover:border-purple-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm">Cloud Sync</h3>
                    <p className="text-gray-500 text-xs">Connect your providers</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                </a>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t border-[#1e2030] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
              <span>Last updated: Nov 14, 2023</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Edit this page
                </a>
                <a href="https://github.com" className="hover:text-gray-300 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Table of Contents (hidden on mobile/tablet) */}
        <aside className="hidden xl:block w-56 flex-shrink-0">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4 pt-12">
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-gray-500 tracking-wider mb-3 flex items-center gap-1">
                <span className="w-0.5 h-3 bg-purple-400 rounded-full"></span>
                ON THIS PAGE
              </h4>
              <ul className="space-y-1.5">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`text-sm transition-colors block py-0.5 ${
                        activeSection === item.id
                          ? 'text-purple-400'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Need Help */}
            <div className="bg-[#1a1d2e] border border-[#2a2d3e] rounded-lg p-4">
              <h4 className="text-orange-400 font-semibold text-xs mb-1">NEED HELP?</h4>
              <p className="text-gray-400 text-xs mb-2">
                Can't find what you're looking for?
              </p>
              <a
                href="/faq"
                className="text-purple-400 text-xs font-medium hover:text-purple-300 transition-colors flex items-center gap-1"
              >
                Join Community <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

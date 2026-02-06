import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  BookOpen,
  Info,
  ChevronRight,
  HardDrive,
  Layers,
  ScanLine,
  Shield,
  Cloud,
  ArrowRight,
  FileText,
  FolderTree,
  Tag,
  Lock,
  Fingerprint,
  Key,
  Globe,
  Webhook,
} from 'lucide-react';

// Sidebar navigation structure
const sidebarSections = [
  {
    title: 'GETTING STARTED',
    items: [
      { label: 'Introduction', slug: 'introduction' },
      { label: 'Quick Start Guide', slug: 'quick-start' },
      { label: 'Installation', slug: 'installation' },
    ],
  },
  {
    title: 'FILE MANAGEMENT',
    items: [
      { label: 'Smart Naming', slug: 'smart-naming' },
      { label: 'Vault Structure', slug: 'vault-structure' },
      { label: 'Cloud Syncing', slug: 'cloud-syncing' },
      { label: 'Tags & Metadata', slug: 'tags-metadata' },
    ],
  },
  {
    title: 'SECURITY',
    items: [
      { label: 'End-to-End Encryption', slug: 'encryption' },
      { label: 'Biometric Access', slug: 'biometric' },
      { label: 'Privacy Policy', slug: 'privacy-policy' },
    ],
  },
  {
    title: 'API REFERENCE',
    items: [
      { label: 'Authentication', slug: 'authentication' },
      { label: 'Endpoints', slug: 'endpoints' },
      { label: 'Webhooks', slug: 'webhooks' },
    ],
  },
];

// Page content definitions
const pageContent: Record<
  string,
  {
    title: string;
    subtitle: string;
    tocItems: { label: string; id: string }[];
  }
> = {
  introduction: {
    title: 'Introduction to LifeVault',
    subtitle:
      'Learn how to transform your cluttered digital life into a structured, secure, and searchable vault.',
    tocItems: [
      { label: 'What is LifeVault?', id: 'what-is-lifevault' },
      { label: 'Quick Start Guide', id: 'quick-start-guide' },
      { label: 'Developer API', id: 'developer-api' },
    ],
  },
  'smart-naming': {
    title: 'Smart Naming',
    subtitle:
      'Automatically rename and organize your files with intelligent naming conventions.',
    tocItems: [
      { label: 'Overview', id: 'overview' },
      { label: 'Naming Patterns', id: 'naming-patterns' },
      { label: 'Custom Rules', id: 'custom-rules' },
    ],
  },
  'vault-structure': {
    title: 'Vault Structure',
    subtitle:
      'Understand how LifeVault organizes your files into a logical folder hierarchy.',
    tocItems: [
      { label: 'Overview', id: 'overview' },
      { label: 'Folder Hierarchy', id: 'folder-hierarchy' },
      { label: 'Customization', id: 'customization' },
    ],
  },
  'cloud-syncing': {
    title: 'Cloud Syncing',
    subtitle:
      'Connect your cloud storage providers and keep everything in sync.',
    tocItems: [
      { label: 'Overview', id: 'overview' },
      { label: 'Supported Providers', id: 'supported-providers' },
      { label: 'Configuration', id: 'configuration' },
    ],
  },
  'tags-metadata': {
    title: 'Tags & Metadata',
    subtitle:
      'Add rich metadata and tags to your documents for powerful search and filtering.',
    tocItems: [
      { label: 'Overview', id: 'overview' },
      { label: 'Adding Tags', id: 'adding-tags' },
      { label: 'Metadata Fields', id: 'metadata-fields' },
    ],
  },
  encryption: {
    title: 'End-to-End Encryption',
    subtitle:
      'Protect your sensitive documents with military-grade encryption.',
    tocItems: [
      { label: 'Overview', id: 'overview' },
      { label: 'How It Works', id: 'how-it-works' },
      { label: 'Key Management', id: 'key-management' },
    ],
  },
};

// Content renderers per slug
function IntroductionContent() {
  return (
    <>
      <section id="what-is-lifevault" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What is LifeVault?</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          LifeVault is a file-system-first organizer designed for the modern individual. It
          doesn't replace your storage; it <strong>augments</strong> it. By layering a smart
          structure over your existing cloud and local folders, LifeVault helps you manage IDs,
          warranties, receipts, and critical documents with zero friction.
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-primary font-semibold text-sm mb-1">Privacy First</h4>
            <p className="text-base-content/60 text-sm">
              LifeVault never uploads your files to its own servers. Your data stays in your
              control, on your devices and your chosen cloud providers.
            </p>
          </div>
        </div>
      </section>

      <section id="quick-start-guide" className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Quick Start Guide</h2>
        <p className="text-base-content/60 mb-6">
          To get started with LifeVault, follow these three simple steps:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              step: 1,
              icon: HardDrive,
              title: 'Connect Storage',
              description: 'Link your local folders or cloud drives like iCloud or Drive.',
            },
            {
              step: 2,
              icon: Layers,
              title: 'Choose Presets',
              description: "Enable smart categories like 'Tax Documents' or 'Warranties'.",
            },
            {
              step: 3,
              icon: ScanLine,
              title: 'Start Scanning',
              description: 'LifeVault will automatically index and organize your files.',
            },
          ].map((item) => (
            <div key={item.step} className="bg-base-200 border border-base-300 rounded-lg p-5">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-base-content/60 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="developer-api" className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Developer API</h2>
        <p className="text-base-content/60 mb-6">
          LifeVault offers a local-first API to interact with your vault programmatically. Here
          is how you can fetch your expiring warranties via CLI:
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg overflow-hidden">
          <pre className="p-4 sm:p-6 text-sm overflow-x-auto">
            <code>
              <span className="text-base-content/50"># Fetch all expiring warranties in the next 30 days</span>
              {'\n'}
              <span className="text-base-content/80">lifevault list</span>
              <span className="text-base-content/50"> --type</span>{' '}
              <span className="text-success">"warranty"</span>
              <span className="text-base-content/50"> --expiring-in</span>{' '}
              <span className="text-primary">30d</span>
              <span className="text-base-content/50"> --format</span>{' '}
              <span className="text-success">json</span>
              {'\n'}
              <span className="text-base-content/50">// Output:</span>
              {'\n'}
              <span className="text-base-content/80">{'['}</span>
              {'\n'}
              <span className="text-base-content/80">{'  {'}</span>
              {'\n'}
              <span className="text-base-content/80">{'    '}</span>
              <span className="text-primary">"id"</span>
              <span className="text-base-content/80">: </span>
              <span className="text-success">"warr_8k2l1"</span>
              <span className="text-base-content/80">,</span>
              {'\n'}
              <span className="text-base-content/80">{'    '}</span>
              <span className="text-primary">"name"</span>
              <span className="text-base-content/80">: </span>
              <span className="text-success">"MacBook Pro M3"</span>
              <span className="text-base-content/80">,</span>
              {'\n'}
              <span className="text-base-content/80">{'    '}</span>
              <span className="text-primary">"expires_at"</span>
              <span className="text-base-content/80">: </span>
              <span className="text-success">"2024-12-15"</span>
              <span className="text-base-content/80">,</span>
              {'\n'}
              <span className="text-base-content/80">{'    '}</span>
              <span className="text-primary">"provider"</span>
              <span className="text-base-content/80">: </span>
              <span className="text-success">"AppleCare+"</span>
              {'\n'}
              <span className="text-base-content/80">{'  }'}</span>
              {'\n'}
              <span className="text-base-content/80">{']'}</span>
            </code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/docs/encryption"
            className="group bg-base-200 border border-base-300 rounded-lg p-5 flex items-center gap-4 hover:border-primary/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm">Setup Security</h3>
              <p className="text-base-content/50 text-xs">Configure biometrics and keys</p>
            </div>
            <ChevronRight className="w-5 h-5 text-base-content/30 group-hover:text-primary transition-colors flex-shrink-0" />
          </a>
          <a
            href="/docs/cloud-syncing"
            className="group bg-base-200 border border-base-300 rounded-lg p-5 flex items-center gap-4 hover:border-primary/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Cloud className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm">Cloud Sync</h3>
              <p className="text-base-content/50 text-xs">Connect your providers</p>
            </div>
            <ChevronRight className="w-5 h-5 text-base-content/30 group-hover:text-primary transition-colors flex-shrink-0" />
          </a>
        </div>
      </section>
    </>
  );
}

function SmartNamingContent() {
  return (
    <>
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          LifeVault's Smart Naming feature automatically renames your files using consistent,
          human-readable conventions. No more files named <code className="bg-base-200 px-1.5 py-0.5 rounded text-sm">IMG_20240315_142356.jpg</code> or{' '}
          <code className="bg-base-200 px-1.5 py-0.5 rounded text-sm">Document (3).pdf</code> — every file gets a
          descriptive, organized name.
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-primary font-semibold text-sm mb-1">Non-Destructive</h4>
            <p className="text-base-content/60 text-sm">
              Smart Naming creates renamed copies or symlinks — your original files are never
              modified or deleted.
            </p>
          </div>
        </div>
      </section>

      <section id="naming-patterns" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Naming Patterns</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          LifeVault supports several built-in naming patterns that you can apply per category:
        </p>
        <div className="space-y-3">
          {[
            { pattern: '{category}_{date}_{description}', example: 'warranty_2024-03-15_macbook-pro.pdf' },
            { pattern: '{year}/{month}/{description}', example: '2024/03/tax-return-federal.pdf' },
            { pattern: '{provider}_{type}_{date}', example: 'apple_warranty_2024-03-15.pdf' },
          ].map((item, i) => (
            <div key={i} className="bg-base-200 border border-base-300 rounded-lg p-4">
              <code className="text-primary text-sm">{item.pattern}</code>
              <p className="text-base-content/50 text-xs mt-1">Example: {item.example}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="custom-rules" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Custom Rules</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          You can define custom naming rules using LifeVault's rule engine. Rules are applied in
          priority order and can match by file type, category, tags, or metadata fields.
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg overflow-hidden">
          <pre className="p-4 sm:p-6 text-sm overflow-x-auto">
            <code>
              <span className="text-base-content/50"># lifevault.config.yaml</span>
              {'\n'}
              <span className="text-primary">naming_rules</span>
              <span className="text-base-content/80">:</span>
              {'\n'}
              <span className="text-base-content/80">{'  '}- </span>
              <span className="text-primary">match</span>
              <span className="text-base-content/80">: </span>
              <span className="text-success">"category:warranty"</span>
              {'\n'}
              <span className="text-base-content/80">{'    '}</span>
              <span className="text-primary">pattern</span>
              <span className="text-base-content/80">: </span>
              <span className="text-success">"{'{provider}_{item}_{expires}'}"</span>
              {'\n'}
              <span className="text-base-content/80">{'  '}- </span>
              <span className="text-primary">match</span>
              <span className="text-base-content/80">: </span>
              <span className="text-success">"category:receipt"</span>
              {'\n'}
              <span className="text-base-content/80">{'    '}</span>
              <span className="text-primary">pattern</span>
              <span className="text-base-content/80">: </span>
              <span className="text-success">"{'{date}_{vendor}_{amount}'}"</span>
            </code>
          </pre>
        </div>
      </section>
    </>
  );
}

function VaultStructureContent() {
  return (
    <>
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          LifeVault creates a logical folder hierarchy on top of your existing storage. It
          doesn't move your files — it layers structure through symlinks, metadata indexes, and
          virtual folders.
        </p>
      </section>

      <section id="folder-hierarchy" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Folder Hierarchy</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          The default vault structure organizes files by category and date:
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg overflow-hidden">
          <pre className="p-4 sm:p-6 text-sm overflow-x-auto">
            <code className="text-base-content/80">
              {`~/LifeVault/
├── IDs & Passports/
│   ├── drivers-license-2024.pdf
│   └── passport-scan.pdf
├── Warranties/
│   ├── apple_macbook-pro_2025-12-15.pdf
│   └── samsung_tv_2026-03-01.pdf
├── Receipts/
│   ├── 2024/
│   │   ├── 03/
│   │   └── 04/
│   └── 2025/
├── Tax Documents/
│   ├── 2023/
│   └── 2024/
└── .lifevault/
    ├── config.yaml
    ├── index.db
    └── metadata/`}
            </code>
          </pre>
        </div>
      </section>

      <section id="customization" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Customization</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          You can fully customize the folder hierarchy by editing your vault's configuration.
          Add new top-level categories, change nesting depth, or create entirely custom
          structures.
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-primary font-semibold text-sm mb-1">Presets Available</h4>
            <p className="text-base-content/60 text-sm">
              LifeVault ships with presets for common use cases: Personal Documents, Business,
              Medical Records, and Home Management.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function CloudSyncingContent() {
  return (
    <>
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          LifeVault integrates with your existing cloud storage providers. It doesn't create yet
          another cloud silo — it works with the services you already use and trust.
        </p>
      </section>

      <section id="supported-providers" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Supported Providers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { name: 'iCloud Drive', status: 'Fully Supported', icon: Cloud },
            { name: 'Google Drive', status: 'Fully Supported', icon: Cloud },
            { name: 'OneDrive', status: 'Fully Supported', icon: Cloud },
            { name: 'Dropbox', status: 'Beta', icon: Cloud },
          ].map((provider) => (
            <div
              key={provider.name}
              className="bg-base-200 border border-base-300 rounded-lg p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <provider.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{provider.name}</h3>
                <span
                  className={`text-xs ${
                    provider.status === 'Beta' ? 'text-warning' : 'text-success'
                  }`}
                >
                  {provider.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="configuration" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Configuration</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          To connect a cloud provider, open Settings and navigate to the Storage tab. Click "Add
          Provider" and follow the authorization flow.
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg overflow-hidden">
          <pre className="p-4 sm:p-6 text-sm overflow-x-auto">
            <code>
              <span className="text-base-content/50"># Connect via CLI</span>
              {'\n'}
              <span className="text-base-content/80">lifevault storage add</span>
              <span className="text-base-content/50"> --provider</span>{' '}
              <span className="text-success">"google-drive"</span>
              {'\n'}
              <span className="text-base-content/80">lifevault storage add</span>
              <span className="text-base-content/50"> --provider</span>{' '}
              <span className="text-success">"icloud"</span>
              <span className="text-base-content/50"> --path</span>{' '}
              <span className="text-success">"~/Library/Mobile Documents"</span>
            </code>
          </pre>
        </div>
      </section>
    </>
  );
}

function TagsMetadataContent() {
  return (
    <>
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          Tags and metadata let you add rich, searchable information to your documents beyond
          just file names and folders. Think of it as a personal database for your documents.
        </p>
      </section>

      <section id="adding-tags" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Adding Tags</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          Tags are flexible labels you can attach to any document. Use them for cross-category
          organization:
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {['urgent', 'tax-2024', 'shared', 'expiring-soon', 'archived', 'needs-review'].map(
            (tag) => (
              <span key={tag} className="badge badge-primary badge-outline">
                {tag}
              </span>
            )
          )}
        </div>
        <div className="bg-base-200 border border-base-300 rounded-lg overflow-hidden">
          <pre className="p-4 sm:p-6 text-sm overflow-x-auto">
            <code>
              <span className="text-base-content/50"># Add tags via CLI</span>
              {'\n'}
              <span className="text-base-content/80">lifevault tag add</span>
              <span className="text-base-content/50"> --file</span>{' '}
              <span className="text-success">"warranty_macbook.pdf"</span>
              <span className="text-base-content/50"> --tags</span>{' '}
              <span className="text-success">"expiring-soon,apple,electronics"</span>
            </code>
          </pre>
        </div>
      </section>

      <section id="metadata-fields" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Metadata Fields</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          Each document can have structured metadata fields. Some are auto-populated, others you
          can set manually:
        </p>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-base-300">
                <th className="text-base-content/60">Field</th>
                <th className="text-base-content/60">Type</th>
                <th className="text-base-content/60">Auto-populated</th>
              </tr>
            </thead>
            <tbody>
              {[
                { field: 'expires_at', type: 'Date', auto: 'No' },
                { field: 'provider', type: 'String', auto: 'No' },
                { field: 'file_size', type: 'Number', auto: 'Yes' },
                { field: 'created_at', type: 'Date', auto: 'Yes' },
                { field: 'checksum', type: 'String', auto: 'Yes' },
              ].map((row) => (
                <tr key={row.field} className="border-base-300">
                  <td>
                    <code className="text-primary text-sm">{row.field}</code>
                  </td>
                  <td className="text-base-content/70 text-sm">{row.type}</td>
                  <td className="text-base-content/70 text-sm">{row.auto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

function EncryptionContent() {
  return (
    <>
      <section id="overview" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          LifeVault provides end-to-end encryption for your most sensitive documents. Encryption
          happens locally on your device — your keys never leave your machine.
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-primary font-semibold text-sm mb-1">Zero-Knowledge</h4>
            <p className="text-base-content/60 text-sm">
              Even if you sync encrypted files to the cloud, your provider cannot read them.
              Only you hold the decryption keys.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">How It Works</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          LifeVault uses AES-256-GCM for file encryption and Argon2id for key derivation. The
          encryption flow is:
        </p>
        <div className="space-y-3">
          {[
            'Your master password is derived into an encryption key using Argon2id',
            'Each file gets a unique random nonce (IV)',
            'File contents are encrypted with AES-256-GCM',
            'Encrypted file + nonce are stored; original is securely deleted',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-base-content/70 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="key-management" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Key Management</h2>
        <p className="text-base-content/70 leading-relaxed mb-6">
          Your encryption keys are stored in your system's secure keychain (macOS Keychain,
          Windows Credential Store, or Linux Secret Service). You can also export a recovery key
          for backup.
        </p>
        <div className="bg-base-200 border border-base-300 rounded-lg overflow-hidden">
          <pre className="p-4 sm:p-6 text-sm overflow-x-auto">
            <code>
              <span className="text-base-content/50"># Export recovery key</span>
              {'\n'}
              <span className="text-base-content/80">lifevault keys export</span>
              <span className="text-base-content/50"> --format</span>{' '}
              <span className="text-success">"recovery"</span>
              <span className="text-base-content/50"> --output</span>{' '}
              <span className="text-success">"~/recovery-key.txt"</span>
            </code>
          </pre>
        </div>
      </section>
    </>
  );
}

const contentComponents: Record<string, () => JSX.Element> = {
  introduction: IntroductionContent,
  'smart-naming': SmartNamingContent,
  'vault-structure': VaultStructureContent,
  'cloud-syncing': CloudSyncingContent,
  'tags-metadata': TagsMetadataContent,
  encryption: EncryptionContent,
};

interface DocsProps {
  currentSlug?: string;
}

export default function Documentation({ currentSlug = 'introduction' }: DocsProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const page = pageContent[currentSlug] || pageContent['introduction'];
  const ContentComponent = contentComponents[currentSlug] || IntroductionContent;

  useEffect(() => {
    if (page.tocItems.length > 0) {
      setActiveSection(page.tocItems[0].id);
    }

    const handleScroll = () => {
      const sections = page.tocItems.map((item) => ({
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
  }, [currentSlug]);

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
    <div className="min-h-screen pt-16">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 p-2 rounded-lg bg-base-200 border border-base-300 text-base-content/70 hover:bg-base-300 transition-colors"
        aria-label="Toggle documentation sidebar"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="container mx-auto max-w-7xl">
        <div className="flex">
          {/* Left Sidebar */}
          <aside
            className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-base-100 border-r border-base-300 overflow-y-auto transition-transform duration-300 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 lg:relative lg:top-0 lg:flex-shrink-0`}
          >
            <div className="sticky top-0">
              <nav className="p-4 space-y-6">
                {sidebarSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-xs font-semibold text-base-content/40 tracking-wider mb-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-0.5">
                      {section.items.map((item) => {
                        const isActive = item.slug === currentSlug;
                        const href =
                          item.slug === 'introduction' ? '/docs' : `/docs/${item.slug}`;
                        return (
                          <li key={item.slug}>
                            <a
                              href={href}
                              onClick={() => setSidebarOpen(false)}
                              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                                isActive
                                  ? 'text-primary bg-primary/10 border-l-2 border-primary'
                                  : 'text-base-content/60 hover:text-base-content hover:bg-base-200'
                              }`}
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium uppercase tracking-wide text-xs">
                  Documentation
                </span>
              </div>

              {/* Page Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{page.title}</h1>
              <p className="text-lg text-base-content/60 mb-10 max-w-2xl">{page.subtitle}</p>

              {/* Page Content */}
              <ContentComponent />

              {/* Page Footer */}
              <div className="border-t border-base-300 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-base-content/40 gap-2">
                <span>Last updated: Nov 14, 2023</span>
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-base-content/70 transition-colors">
                    Edit this page
                  </a>
                  <a href="#" className="hover:text-base-content/70 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar - Table of Contents */}
          <aside className="hidden xl:block w-56 flex-shrink-0">
            <div className="sticky top-20 overflow-y-auto p-4 pt-12">
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-base-content/40 tracking-wider mb-3 flex items-center gap-1">
                  <span className="w-0.5 h-3 bg-primary rounded-full"></span>
                  ON THIS PAGE
                </h4>
                <ul className="space-y-1.5">
                  {page.tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={`text-sm transition-colors block py-0.5 ${
                          activeSection === item.id
                            ? 'text-primary'
                            : 'text-base-content/40 hover:text-base-content/70'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Help */}
              <div className="bg-base-200 border border-base-300 rounded-lg p-4">
                <h4 className="text-warning font-semibold text-xs mb-1">NEED HELP?</h4>
                <p className="text-base-content/50 text-xs mb-2">
                  Can't find what you're looking for?
                </p>
                <a
                  href="/faq"
                  className="text-primary text-xs font-medium hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  Join Community <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

import { Monitor, Apple, Terminal, Download, Clock } from 'lucide-react';

const platforms = [
  {
    name: 'Windows',
    icon: Monitor,
    description: 'For Windows 10/11',
    downloadUrl: '',
    requirements: 'Windows 10 or later, 64-bit',
    comingSoon: true,
  },
  {
    name: 'macOS',
    icon: Apple,
    description: 'For macOS 11+',
    downloadUrl: '',
    requirements: 'macOS 11 (Big Sur) or later',
    comingSoon: true,
  },
  {
    name: 'Linux',
    icon: Terminal,
    description: 'For Ubuntu, Fedora, etc.',
    downloadUrl: '',
    requirements: 'Ubuntu 20.04+, Fedora 34+, or equivalent',
    comingSoon: true,
  },
];

export default function DownloadSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-base-100 via-purple-50/20 to-base-100 dark:from-base-100 dark:via-purple-900/10 dark:to-base-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Download{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500">
              LifeVault
            </span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Choose your platform and start organizing your digital life today. 
            LifeVault is free to download and use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="card bg-base-100 shadow-xl border border-base-300 hover:border-primary/50 transition-all hover:shadow-2xl group"
            >
              <div className="card-body items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <platform.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="card-title text-2xl">{platform.name}</h2>
                <p className="text-base-content/70">{platform.description}</p>
                <p className="text-sm text-base-content/50 mt-2">{platform.requirements}</p>
                <div className="card-actions mt-6">
                  {platform.comingSoon ? (
                    <button 
                      className="btn btn-outline btn-lg gap-2 cursor-not-allowed opacity-70"
                      disabled
                    >
                      <Clock className="w-5 h-5" />
                      Coming Soon
                    </button>
                  ) : (
                    <a 
                      href={platform.downloadUrl}
                      className="btn btn-primary btn-lg gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Version Info */}
        <div className="text-center mt-16">
          <div className="badge badge-outline badge-lg">
            Coming Soon
          </div>
          <p className="text-sm text-base-content/50 mt-4">
            Sign up for our newsletter to be notified when LifeVault is available.
          </p>
        </div>
      </div>
    </section>
  );
}

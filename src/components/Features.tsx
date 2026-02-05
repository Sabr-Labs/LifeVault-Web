import { 
  FolderTree, 
  Bell, 
  Cloud, 
  FileText, 
  Shield, 
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: FolderTree,
    title: 'Smart Organization',
    description: 'Automatically structure your files with intelligent presets for IDs, warranties, receipts, and more.',
  },
  {
    icon: Bell,
    title: 'Expiry Reminders',
    description: 'Never miss a warranty expiration or document renewal with smart reminder notifications.',
  },
  {
    icon: Cloud,
    title: 'Works Everywhere',
    description: 'Seamlessly integrates with your existing cloud storage providers and local folders.',
  },
  {
    icon: FileText,
    title: 'Smart Naming',
    description: 'Consistent file naming conventions that make finding documents a breeze.',
  },
  {
    icon: Shield,
    title: '100% Private',
    description: 'Your files stay on your devices. No uploads to third-party servers required.',
  },
  {
    icon: Zap,
    title: 'Fast & Lightweight',
    description: 'Built with performance in mind. Quick to launch, easy on resources.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-base-200/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500">
              Stay Organized
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            LifeVault provides all the tools you need to transform your cluttered files into a well-organized vault.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow border border-base-300"
            >
              <div className="card-body">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="card-title text-lg">{feature.title}</h3>
                <p className="text-base-content/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

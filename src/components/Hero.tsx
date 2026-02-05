import { Shield, FolderOpen, Bell, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-base-100 via-purple-50/30 to-base-100 dark:from-base-100 dark:via-purple-900/10 dark:to-base-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="badge badge-primary badge-outline mb-4 gap-2">
              <Sparkles className="w-4 h-4" />
              File-System-First Organizer
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Organize Your Life with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500">
                LifeVault
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-base-content/70 mb-8 max-w-2xl">
              Turn your existing cloud and local storage into a structured vault for IDs, 
              warranties, receipts, and important documents—complete with presets, 
              smart naming, and reminders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/download" className="btn btn-primary btn-lg gap-2">
                <FolderOpen className="w-5 h-5" />
                Download Now
              </a>
              <a href="#features" className="btn btn-outline btn-lg">
                Learn More
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-base-content/60">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm">100% Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                <span className="text-sm">Smart Reminders</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - App Preview Placeholder */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl blur-3xl opacity-20"></div>
              
              {/* App Preview Card */}
              <div className="relative bg-base-200 rounded-3xl p-8 border border-base-300 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                
                {/* Placeholder File Structure */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
                    <FolderOpen className="w-5 h-5 text-primary" />
                    <span className="font-medium">Documents</span>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-base-100/50 rounded-lg text-sm">
                      <Shield className="w-4 h-4 text-purple-400" />
                      <span>IDs & Passports</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-base-100/50 rounded-lg text-sm">
                      <Bell className="w-4 h-4 text-violet-400" />
                      <span>Warranties (3 expiring)</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-base-100/50 rounded-lg text-sm">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>Receipts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

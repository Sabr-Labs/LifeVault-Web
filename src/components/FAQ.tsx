import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  // General Questions
  {
    category: 'General',
    question: 'What is LifeVault?',
    answer: 'LifeVault is a file-system-first organizer that helps you transform your existing cloud and local storage into a structured vault for important documents like IDs, warranties, receipts, and more. It works with your existing file system, so your data stays exactly where you want it.'
  },
  {
    category: 'General',
    question: 'Is LifeVault free to use?',
    answer: 'Yes! LifeVault is completely free to download and use. We believe everyone should have access to powerful organization tools without any cost barriers.'
  },
  {
    category: 'General',
    question: 'Which operating systems are supported?',
    answer: 'LifeVault is available for Windows (10 and 11, 64-bit), macOS (11+ Big Sur or later), and Linux (Ubuntu 20.04+, Fedora 34+). We\'re constantly working to expand our platform support.'
  },
  
  // Privacy & Security
  {
    category: 'Privacy & Security',
    question: 'Where is my data stored?',
    answer: 'Your files stay exactly where you put them - on your local drive or cloud storage. LifeVault never uploads your documents to our servers. We only store your preferences and organization metadata locally on your device.'
  },
  {
    category: 'Privacy & Security',
    question: 'Does LifeVault access my files?',
    answer: 'LifeVault only accesses the folders you explicitly grant permission to. It reads file names and metadata to help organize them, but your actual file contents remain private and are never transmitted anywhere.'
  },
  {
    category: 'Privacy & Security',
    question: 'Is my data encrypted?',
    answer: 'LifeVault respects whatever encryption your storage already uses. We don\'t add additional encryption layers, but we also don\'t interfere with existing security measures. Your files remain as secure as your chosen storage solution.'
  },

  // Features
  {
    category: 'Features',
    question: 'How do expiration reminders work?',
    answer: 'When you add a document with an expiration date (like a warranty, ID, or insurance policy), LifeVault will notify you before it expires. You can customize how far in advance you receive reminders and how you want to be notified.'
  },
  {
    category: 'Features',
    question: 'Can I use LifeVault with cloud storage?',
    answer: 'Absolutely! LifeVault works seamlessly with any cloud storage that syncs to your local file system, including Google Drive, Dropbox, OneDrive, and iCloud. Just point LifeVault to your synced folder.'
  },
  {
    category: 'Features',
    question: 'What are presets and how do I use them?',
    answer: 'Presets are pre-configured organization templates for common document types. For example, the "Warranty" preset includes fields for purchase date, expiration date, and product information. You can use built-in presets or create your own custom ones.'
  },
  {
    category: 'Features',
    question: 'Can I customize the file naming convention?',
    answer: 'Yes! LifeVault supports customizable naming patterns. You can include dates, categories, tags, and other metadata in your file names. This helps maintain consistency across all your documents.'
  },

  // Troubleshooting
  {
    category: 'Troubleshooting',
    question: 'LifeVault isn\'t detecting my files. What should I do?',
    answer: 'First, make sure you\'ve granted LifeVault permission to access the folder. Check that the folder path is correct in Settings. If using cloud storage, ensure your files are fully synced locally. Restart LifeVault if the issue persists.'
  },
  {
    category: 'Troubleshooting',
    question: 'How do I reset LifeVault to default settings?',
    answer: 'Go to Settings > Advanced > Reset to Defaults. This will clear your preferences but won\'t affect your actual files. You can also manually delete the LifeVault configuration folder in your user directory.'
  },
  {
    category: 'Troubleshooting',
    question: 'My reminders aren\'t working. How do I fix this?',
    answer: 'Check that notifications are enabled in both LifeVault settings and your operating system. Make sure LifeVault has permission to send notifications. Also verify that the document has a valid expiration date set.'
  },

  // Account & Support
  {
    category: 'Support',
    question: 'How do I report a bug or request a feature?',
    answer: 'We love feedback! You can report bugs or request features through our GitHub repository. Click on "Issues" and create a new issue with as much detail as possible. Screenshots and steps to reproduce are especially helpful.'
  },
  {
    category: 'Support',
    question: 'Is there a user community I can join?',
    answer: 'Yes! Join our community on Discord or follow us on Twitter for updates, tips, and to connect with other LifeVault users. Links are available on our website footer.'
  }
];

const categories = [...new Set(faqItems.map(item => item.category))];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredItems = activeCategory === 'All' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-violet-500">
        <div className="container mx-auto px-4 text-center text-white">
          <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about LifeVault
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory('All')}
              className={`btn btn-sm ${activeCategory === 'All' ? 'btn-primary' : 'btn-ghost'}`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn btn-sm ${activeCategory === category ? 'btn-primary' : 'btn-ghost'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredItems.map((item, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div 
                  key={index}
                  className="card bg-base-100 shadow-md border border-base-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-base-200/50 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="badge badge-ghost badge-sm mb-2">{item.category}</span>
                      <h3 className="text-lg font-semibold">{item.question}</h3>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-base-300 pt-4">
                        <p className="text-base-content/70">{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-base-content/70 mb-6 max-w-md mx-auto">
              Can't find what you're looking for? We're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/docs" className="btn btn-outline btn-primary">
                Read Documentation
              </a>
              <a href="mailto:support@lifevault.app" className="btn btn-primary">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

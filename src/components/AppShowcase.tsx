import { CheckCircle2, ArrowRight } from "lucide-react";

const tutorialSteps = [
  {
    id: 1,
    title: "Dashboard Overview",
    description:
      "The main dashboard gives you a quick overview of your vault. See your recent files, upcoming expirations, and quick actions all in one place.",
    screenshot: "/main-dashboard-screenshot.png",
    alt: "LifeVault Main Dashboard",
    tips: [
      "View statistics about your stored documents",
      "Quick access to recently added files",
      "See upcoming expiration reminders at a glance",
    ],
  },
  {
    id: 2,
    title: "Managing Your Files",
    description:
      "Browse and manage all your documents in the file list view. Use filters and search to quickly find what you need.",
    screenshot: "/main-file-list-page-screenshot.png",
    alt: "LifeVault File List",
    tips: [
      "Sort files by name, date, or category",
      "Use the search bar to find specific documents",
      "Click on any file to view details or edit",
    ],
  },
  {
    id: 3,
    title: "Organizing Categories",
    description:
      "Create and manage categories to keep your documents organized. Use presets for common document types like IDs, warranties, and receipts.",
    screenshot: "/manage-category-screenshot.png",
    alt: "LifeVault Category Management",
    tips: [
      "Create custom categories for your needs",
      "Use built-in presets for quick setup",
      "Assign colors and icons to categories",
    ],
  },
  {
    id: 4,
    title: "Never Miss an Expiration",
    description:
      "Set up smart notifications to remind you about document expirations, warranty deadlines, and renewal dates.",
    screenshot: "/notification-screenshot.png",
    alt: "LifeVault Notifications",
    tips: [
      "Configure reminder timing (days/weeks before)",
      "Choose notification methods",
      "View all upcoming expirations in one place",
    ],
  },
  {
    id: 5,
    title: "Personalize Your Experience",
    description:
      "Customize LifeVault to fit your workflow with profile settings, preferences, and storage configurations.",
    screenshot: "/profile-page-screenshot.png",
    alt: "LifeVault Profile Settings",
    tips: [
      "Connect your cloud storage providers",
      "Set default naming conventions",
      "Customize app appearance and behavior",
    ],
  },
];

export default function AppShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See LifeVault{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500">
              In Action
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Explore each feature with our comprehensive walkthrough
          </p>
        </div>

        <div className="space-y-20">
          {tutorialSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Screenshot */}
              <div className="w-full lg:w-1/2">
                <div className="card bg-base-100 shadow-xl border border-base-300 overflow-hidden">
                  <figure className="p-4 bg-base-200">
                    <img
                      src={step.screenshot}
                      alt={step.alt}
                      className="rounded-lg shadow-lg w-full"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="badge badge-primary badge-lg mb-4">
                  Step {step.id}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-base-content/70 mb-6">{step.description}</p>

                <div className="space-y-3">
                  {step.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base-content/80">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-base-content/70 mb-8 max-w-xl mx-auto">
            Download LifeVault now and start organizing your digital life today.
          </p>
          <a href="/download" className="btn btn-primary btn-lg gap-2">
            Download Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

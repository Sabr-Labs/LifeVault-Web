import { Shield, Lock, Eye, Database, Share2, Bell, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "February 1, 2026";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-violet-500">
        <div className="container mx-auto px-4 text-center text-white">
          <Shield className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/80">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-base-content/70 mb-4">
                  At LifeVault ("we," "our," or "us"), we are committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when
                  you use our desktop application and website.
                </p>
                <p className="text-base-content/70">
                  LifeVault is designed with a privacy-first approach. Your
                  files and documents remain on your devices and are never
                  uploaded to our servers. We believe you should have complete
                  control over your personal data.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                </div>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Information You Provide
                </h3>
                <ul className="list-disc list-inside text-base-content/70 space-y-2 mb-4">
                  <li>Email address (if you subscribe to our newsletter)</li>
                  <li>Feedback and support requests you submit</li>
                  <li>Survey responses (if you choose to participate)</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Information Stored Locally
                </h3>
                <ul className="list-disc list-inside text-base-content/70 space-y-2 mb-4">
                  <li>Your application preferences and settings</li>
                  <li>
                    File organization metadata (categories, tags, expiration
                    dates)
                  </li>
                  <li>Folder paths you grant access to</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">
                  Information We Do NOT Collect
                </h3>
                <ul className="list-disc list-inside text-base-content/70 space-y-2">
                  <li>Contents of your documents or files</li>
                  <li>Personal files, photos, or sensitive documents</li>
                  <li>Passwords or financial information</li>
                  <li>Browsing history or other tracking data</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">
                    How We Use Your Information
                  </h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  The limited information we collect is used to:
                </p>
                <ul className="list-disc list-inside text-base-content/70 space-y-2">
                  <li>
                    Send you product updates and newsletters (if subscribed)
                  </li>
                  <li>Respond to your support requests and feedback</li>
                  <li>
                    Improve our application based on anonymized usage patterns
                  </li>
                  <li>Ensure the security and functionality of our services</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Data Security</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect any information we process. However, no
                  electronic transmission over the internet or information
                  storage technology can be guaranteed to be 100% secure.
                </p>
                <p className="text-base-content/70">
                  Since LifeVault operates primarily offline and stores data
                  locally on your device, your documents benefit from whatever
                  security measures you have in place on your own computer or
                  cloud storage.
                </p>
              </div>
            </div>

            {/* Third-Party Sharing */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Share2 className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Third-Party Sharing</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties. We may share information only in
                  the following circumstances:
                </p>
                <ul className="list-disc list-inside text-base-content/70 space-y-2">
                  <li>With your consent or at your direction</li>
                  <li>
                    To comply with legal obligations or respond to lawful
                    requests
                  </li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>
                    In connection with a merger, acquisition, or sale of assets
                    (with notice)
                  </li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Your Rights</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  Depending on your location, you may have certain rights
                  regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-base-content/70 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>
                    Object to or restrict processing of your personal data
                  </li>
                  <li>
                    Data portability (receive your data in a structured format)
                  </li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                <p className="text-base-content/70">
                  LifeVault is not intended for use by children under the age of
                  13. We do not knowingly collect personal information from
                  children under 13. If we learn that we have collected personal
                  information from a child under 13, we will take steps to
                  delete that information promptly.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-base-content/70">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date. You are
                  advised to review this Privacy Policy periodically for any
                  changes.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us at:
                </p>
                <div className="bg-base-200 rounded-lg p-4">
                  <p className="font-semibold">LifeVault - Sabr Labs</p>
                  <p className="text-base-content/70">
                    Email: privacy@lifevault.app
                  </p>
                  <p className="text-base-content/70">
                    Website: lifevault.sabrlabs.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { FileText, Scale, AlertTriangle, Shield, Gavel, RefreshCw, Mail } from 'lucide-react';

export default function Terms() {
  const lastUpdated = 'February 1, 2026';

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-violet-500">
        <div className="container mx-auto px-4 text-center text-white">
          <Scale className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms and Conditions
          </h1>
          <p className="text-xl text-white/80">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-base-content/70 mb-4">
                  Welcome to LifeVault. These Terms and Conditions ("Terms") govern your use of the LifeVault desktop application and website (collectively, the "Service") operated by Sabr Labs ("we," "us," or "our").
                </p>
                <p className="text-base-content/70 mb-4">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.
                </p>
                <div className="alert alert-info">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Please read these Terms carefully before using LifeVault.</span>
                </div>
              </div>
            </div>

            {/* License */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">License to Use</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to use the LifeVault application for personal, non-commercial purposes.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-2">You may:</h3>
                <ul className="list-disc list-inside text-base-content/70 space-y-2 mb-4">
                  <li>Download and install LifeVault on devices you own or control</li>
                  <li>Use LifeVault to organize your personal files and documents</li>
                  <li>Create backups of the application for personal use</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-2">You may NOT:</h3>
                <ul className="list-disc list-inside text-base-content/70 space-y-2">
                  <li>Copy, modify, or distribute the application or its source code</li>
                  <li>Reverse engineer, decompile, or disassemble the application</li>
                  <li>Sell, rent, lease, or sublicense the application</li>
                  <li>Use the application for any illegal or unauthorized purpose</li>
                  <li>Remove any proprietary notices or labels on the application</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">User Responsibilities</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  As a user of LifeVault, you are responsible for:
                </p>
                <ul className="list-disc list-inside text-base-content/70 space-y-2">
                  <li>Maintaining the security of your device and any files you organize with LifeVault</li>
                  <li>Creating regular backups of your important documents</li>
                  <li>Ensuring you have the right to store and organize any files you use with the application</li>
                  <li>Complying with all applicable laws and regulations in your use of the Service</li>
                  <li>Not using the Service to store, organize, or manage illegal content</li>
                </ul>
              </div>
            </div>

            {/* Disclaimer of Warranties */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Disclaimer of Warranties</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-base-content/70 mb-4">
                  We do not warrant that:
                </p>
                <ul className="list-disc list-inside text-base-content/70 space-y-2">
                  <li>The Service will be uninterrupted, timely, secure, or error-free</li>
                  <li>The results obtained from the Service will be accurate or reliable</li>
                  <li>Any errors in the Service will be corrected</li>
                  <li>The Service will meet your specific requirements</li>
                </ul>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <Gavel className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SABR LABS, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
                </p>
                <ul className="list-disc list-inside text-base-content/70 space-y-2 mb-4">
                  <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                  <li>Damages resulting from unauthorized access to or alteration of your files</li>
                  <li>Damages resulting from any interruption or cessation of the Service</li>
                  <li>Damages resulting from any bugs, viruses, or other harmful code</li>
                </ul>
                <p className="text-base-content/70">
                  Our total liability for any claims arising from your use of the Service shall not exceed the amount you paid us, if any, for the Service during the twelve (12) months preceding the claim.
                </p>
              </div>
            </div>

            {/* Data and File Responsibility */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">Data and File Responsibility</h2>
                <p className="text-base-content/70 mb-4">
                  LifeVault is a local-first application that helps you organize files stored on your devices. You acknowledge and agree that:
                </p>
                <ul className="list-disc list-inside text-base-content/70 space-y-2">
                  <li>You are solely responsible for maintaining backups of your files</li>
                  <li>We are not responsible for any data loss, corruption, or accidental deletion</li>
                  <li>We do not have access to your files and cannot recover lost data</li>
                  <li>You should regularly verify that your organization settings are working as expected</li>
                </ul>
              </div>
            </div>

            {/* Modifications */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Modifications to Terms</h2>
                </div>
                <p className="text-base-content/70 mb-4">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any material changes by:
                </p>
                <ul className="list-disc list-inside text-base-content/70 space-y-2 mb-4">
                  <li>Posting the updated Terms on our website</li>
                  <li>Updating the "Last updated" date at the top of these Terms</li>
                  <li>Sending you a notification through the application (for significant changes)</li>
                </ul>
                <p className="text-base-content/70">
                  Your continued use of the Service after any changes to these Terms constitutes acceptance of those changes.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <p className="text-base-content/70 mb-4">
                  We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>
                <p className="text-base-content/70">
                  Upon termination, your right to use the Service will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-base-content/70">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sabr Labs operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Service shall be resolved exclusively in the courts of that jurisdiction.
                </p>
              </div>
            </div>

            {/* Severability */}
            <div className="card bg-base-100 shadow-lg border border-base-300 mb-8">
              <div className="card-body">
                <h2 className="text-2xl font-bold mb-4">Severability</h2>
                <p className="text-base-content/70">
                  If any provision of these Terms is held to be unenforceable or invalid, such provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.
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
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-base-200 rounded-lg p-4">
                  <p className="font-semibold">LifeVault - Sabr Labs</p>
                  <p className="text-base-content/70">Email: legal@lifevault.app</p>
                  <p className="text-base-content/70">Website: lifevault.sabrlabs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

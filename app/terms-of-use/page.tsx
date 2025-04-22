"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Navbar />
      
      <main className="flex-1 px-5 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-300 mb-8">
            Terms of Use
          </h1>
          
          <div className="space-y-8 text-neutral-500">
            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Levada's platform, you accept and agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">2. Platform Usage</h2>
              <p className="leading-relaxed">
                Levada provides a platform for connecting African tech talent with global opportunities. 
                Users must use the platform in accordance with these terms and all applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">3. User Responsibilities</h2>
              <p className="leading-relaxed">As a user of Levada, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security of your account</li>
                <li>Use the platform for lawful purposes only</li>
                <li>Respect the rights of other users</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">4. Platform Rules</h2>
              <p className="leading-relaxed">When using Levada, you must not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Impersonate others or misrepresent your identity</li>
                <li>Share false or misleading information</li>
                <li>Engage in any form of harassment or discrimination</li>
                <li>Attempt to gain unauthorized access to the platform</li>
                <li>Interfere with the proper functioning of the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">5. Content Guidelines</h2>
              <p className="leading-relaxed">
                All content posted on Levada must:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Be accurate and truthful</li>
                <li>Respect intellectual property rights</li>
                <li>Not contain harmful or malicious content</li>
                <li>Comply with our community standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">6. Account Termination</h2>
              <p className="leading-relaxed">
                Levada reserves the right to terminate or suspend accounts that violate these Terms of Use. 
                Users may also terminate their accounts at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">7. Dispute Resolution</h2>
              <p className="leading-relaxed">
                Any disputes arising from the use of Levada shall be resolved through negotiation, 
                mediation, or legal proceedings as appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">8. Updates to Terms</h2>
              <p className="leading-relaxed">
                We may update these Terms of Use from time to time. Users will be notified of significant 
                changes, and continued use of the platform constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">9. Contact Us</h2>
              <p className="leading-relaxed">
                For questions about these Terms of Use, please contact:
                <br />
                Email: support@levada.com
                <br />
                Address: 123 Tech Hub, Lagos, Nigeria
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
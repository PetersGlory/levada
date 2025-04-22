"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Navbar />
      
      <main className="flex-1 px-5 md:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-300 mb-8">
            Terms and Conditions
          </h1>
          
          <div className="space-y-8 text-neutral-500">
            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Levada. These Terms and Conditions govern your use of our platform and services. 
                By accessing or using Levada, you agree to be bound by these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>"Platform" refers to the Levada website and services</li>
                <li>"User" refers to any individual or entity using our platform</li>
                <li>"Content" refers to any information, data, or materials posted on the platform</li>
                <li>"Services" refers to all services provided by Levada</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">3. User Accounts</h2>
              <p className="leading-relaxed">
                To access certain features of the platform, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Maintaining the confidentiality of your account information</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">4. Content and Conduct</h2>
              <p className="leading-relaxed">
                Users are responsible for all content they post on the platform. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Post illegal, harmful, or inappropriate content</li>
                <li>Violate intellectual property rights</li>
                <li>Engage in fraudulent activities</li>
                <li>Harass or discriminate against others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">5. Privacy</h2>
              <p className="leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">6. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on the platform, including but not limited to text, graphics, logos, and software, 
                is the property of Levada or its licensors and is protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">7. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Levada shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of or inability to use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">8. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. We will notify users of 
                any material changes through the platform or via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-stone-300 mb-4">9. Contact Information</h2>
              <p className="leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
                <br />
                Email: legal@levada.com
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
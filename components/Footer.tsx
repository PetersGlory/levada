"use client"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Logo and About */}
        <div className="flex flex-col">
          <Link href="/" className="inline-block mb-6">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd1ee5b61e6a107717de971039c551d17eb4be3e?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
              className="h-12 w-auto object-contain"
              alt="Levada Logo"
            />
          </Link>
          <p className="text-neutral-400 text-sm mb-4">
            Connecting exceptional African talent with global opportunities.
          </p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <Link
                key={social}
                href={`https://${social.toLowerCase()}.com`}
                className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-violet-500 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{social}</span>
                {social.charAt(0)}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-stone-300 font-medium mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: "About Us", href: "/about" },
              { name: "For Talents", href: "/#for-talents" },
              { name: "For Clients", href: "/#for-clients" },
              { name: "Testimonials", href: "/#testimonials" },
              { name: "Blog", href: "/blog" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-violet-400 transition-colors py-1 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h3 className="text-stone-300 font-medium mb-4">Stay Updated</h3>
          <p className="text-neutral-400 text-sm mb-4">
            Subscribe to our newsletter for the latest updates and opportunities.
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-2 px-4 pr-12 text-sm bg-neutral-800 rounded-full text-stone-300 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 bg-violet-500 rounded-full text-neutral-900 hover:bg-violet-400 transition-colors">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-6 border-t border-neutral-800">
        <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
          <Link href="/privacy" className="hover:text-violet-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-violet-400 transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/cookies" className="hover:text-violet-400 transition-colors">
            Cookie Policy
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-neutral-500">© {new Date().getFullYear()} Levada. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="p-2 bg-neutral-800 rounded-full text-neutral-400 hover:bg-violet-500 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

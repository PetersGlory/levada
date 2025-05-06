"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-wrap gap-5 justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/16e010cd79117647275e2eec0ec3616c0a4b5483?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
            className="h-12 w-auto object-contain"
            alt="Levada Logo"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-neutral-400 hover:text-violet-400 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex relative py-2 px-6 bg-neutral-800 rounded-full border border-neutral-700">
        <nav className="flex gap-6 text-base font-medium text-neutral-400">
          <Link
            href="/#what-we-are"
            className={`hover:text-violet-400 transition-colors ${
              pathname === "/#what-we-are" ? "text-violet-400" : ""
            }`}
          >
            What We Are
          </Link>
          <Link
            href="/#for-clients"
            className={`hover:text-violet-400 transition-colors ${
              pathname === "/#for-clients" ? "text-violet-400" : ""
            }`}
          >
            For Clients
          </Link>
          <Link
            href="/#for-talents"
            className={`hover:text-violet-400 transition-colors ${
              pathname === "/#for-talents" ? "text-violet-400" : ""
            }`}
          >
            For Talents
          </Link>
          <Link
            href="/#testimonials"
            className={`hover:text-violet-400 transition-colors ${
              pathname === "/#testimonials" ? "text-violet-400" : ""
            }`}
          >
            Testimonials
          </Link>
        </nav>
      </div>

      {/* Get Started Button - Desktop */}
      <div className="hidden lg:block">
        <Link
          href="/register"
          className="px-6 py-2 text-base font-medium text-neutral-900 bg-violet-500 rounded-full hover:bg-violet-400 transition-colors"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-neutral-900 bg-opacity-95">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/16e010cd79117647275e2eec0ec3616c0a4b5483?placeholderIfAbsent=true&apiKey=9290ce17a2d047c99f04bce975019a52"
                  className="h-12 w-auto object-contain"
                  alt="Levada Logo"
                />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-neutral-400 hover:text-violet-400 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-xl font-medium text-neutral-400">
              <Link
                href="/#what-we-are"
                className={`hover:text-violet-400 transition-colors py-2 ${
                  pathname === "/#what-we-are" ? "text-violet-400" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                What We Are
              </Link>
              <Link
                href="/#for-clients"
                className={`hover:text-violet-400 transition-colors py-2 ${
                  pathname === "/#for-clients" ? "text-violet-400" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Clients
              </Link>
              <Link
                href="/#for-talents"
                className={`hover:text-violet-400 transition-colors py-2 ${
                  pathname === "/#for-talents" ? "text-violet-400" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Talents
              </Link>
              <Link
                href="/#testimonials"
                className={`hover:text-violet-400 transition-colors py-2 ${
                  pathname === "/#testimonials" ? "text-violet-400" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
            </nav>
            <div className="mt-auto">
              <Link
                href="/register"
                className="block w-full py-3 text-center text-base font-medium text-neutral-900 bg-violet-500 rounded-full hover:bg-violet-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

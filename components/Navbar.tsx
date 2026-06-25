"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl sm:text-2xl font-bold">
            <span className="text-rose-gold">Lacquer</span> Lounge
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">About</Link>
            <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Services</Link>
            <Link href="/gallery" className="text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Gallery</Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Pricing</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/booking" className="hidden sm:inline-flex rounded-full bg-rose-gold px-6 py-2 text-sm font-semibold text-black hover:bg-rose-gold/90 transition-colors">
              Book Now
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">About</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Services</Link>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Gallery</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Pricing</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-gray-300 hover:text-rose-gold transition-colors">Contact</Link>
            <Link href="/booking" onClick={() => setMobileMenuOpen(false)} className="inline-flex w-full justify-center rounded-full bg-rose-gold px-6 py-2 text-sm font-semibold text-black hover:bg-rose-gold/90 transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

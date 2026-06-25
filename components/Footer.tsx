import Link from "next/link";
import { Instagram, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-rose-gold">Lacquer</span> Lounge
            </h3>
            <p className="text-gray-400 mb-6">
              Luxury Nail Art & Beauty Experience
            </p>
            <div className="flex gap-4">
              <Instagram className="h-6 w-6 text-gray-400 hover:text-rose-gold cursor-pointer transition-colors" />
              <MessageCircle className="h-6 w-6 text-gray-400 hover:text-rose-gold cursor-pointer transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-rose-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-rose-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-rose-gold transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-rose-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services" className="hover:text-rose-gold transition-colors">Nail Extensions</Link></li>
              <li><Link href="/services" className="hover:text-rose-gold transition-colors">Nail Art</Link></li>
              <li><Link href="/services" className="hover:text-rose-gold transition-colors">Manicure</Link></li>
              <li><Link href="/services" className="hover:text-rose-gold transition-colors">Pedicure</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rose-gold flex-shrink-0" />
                <span>123 Luxury Street, Mumbai</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-rose-gold flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-rose-gold flex-shrink-0" />
                <span>hello@lacquerlounge.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-rose-gold flex-shrink-0" />
                <span>Mon - Sat: 10AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          © 2026 Lacquer Lounge by Sayani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

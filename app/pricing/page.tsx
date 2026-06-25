'use client';
import { motion } from "framer-motion";
import { Check, IndianRupee } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Basic",
    price: "₹1,999",
    description: "Perfect for regular maintenance",
    features: [
      "Classic Manicure",
      "Classic Pedicure",
      "Nail Polish",
      "Cuticle Care",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₹4,999",
    description: "Our most popular package",
    features: [
      "Gel Manicure",
      "Gel Pedicure",
      "Nail Art",
      "Hand & Foot Massage",
      "Spa Treatment",
      "Free Touch-up",
    ],
    highlighted: true,
  },
  {
    name: "Bridal",
    price: "₹15,999",
    description: "Complete bridal beauty package",
    features: [
      "Bridal Makeup",
      "Hairstyling",
      "Nail Extensions",
      "Nail Art",
      "Spa Day",
      "Trial Session",
      "Touch-up Kit",
    ],
    highlighted: false,
  },
];

const PricingCard = ({ pkg }: { pkg: any }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className={`relative rounded-2xl border p-6 sm:p-8 transition-all ${
      pkg.highlighted
        ? "border-rose-gold bg-gradient-to-br from-rose-gold/20 to-transparent shadow-2xl shadow-rose-gold/10"
        : "border-white/10 bg-gradient-to-br from-white/5 to-transparent"
    }`}
  >
    {pkg.highlighted && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-rose-gold px-4 py-1 text-xs font-semibold text-black">
        Most Popular
      </div>
    )}
    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
    <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
    <div className="mb-8">
      <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-gold to-soft-beige bg-clip-text text-transparent">{pkg.price}</span>
    </div>
    <ul className="space-y-4 mb-10">
      {pkg.features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center gap-3 text-gray-300">
          <Check className="h-5 w-5 text-rose-gold flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
    <Link
      href="/booking"
      className={`w-full inline-flex justify-center rounded-full py-3 font-semibold transition-all ${
        pkg.highlighted
          ? "bg-rose-gold text-black hover:bg-rose-gold/90"
          : "border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-black"
      }`}
    >
      Book Now
    </Link>
  </motion.div>
);

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect package for your beauty needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 items-center">
            {packages.map((pkg, index) => (
              <PricingCard key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-black via-rose-gold/5 to-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-rose-gold/20 via-rose-gold/10 to-transparent p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Custom Packages</h2>
            <p className="text-gray-300 mb-8">
              Need something specific? Contact us for a customized package tailored to your requirements.
            </p>
            <Link href="/contact" className="inline-flex rounded-full bg-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black hover:bg-soft-beige transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';
import { motion } from "framer-motion";
import { Sparkles, Clock, IndianRupee } from "lucide-react";
import Link from "next/link";

const nailServices = [
  { title: "Nail Extensions", desc: "Premium quality nail extensions for length and strength", benefits: ["Acrylic & Gel options", "Custom length & shape", "Long-lasting wear"], duration: "2-3 hours", price: "₹2,500" },
  { title: "Gel Nails", desc: "Beautiful gel manicure with a glossy finish", benefits: ["Chip-resistant", "High shine", "2-3 week wear"], duration: "1.5 hours", price: "₹1,800" },
  { title: "Acrylic Nails", desc: "Strong and durable acrylic nail enhancements", benefits: ["Maximum strength", "Versatile designs", "Perfect for active lifestyle"], duration: "2 hours", price: "₹2,200" },
  { title: "Nail Art", desc: "Creative and customized nail art designs", benefits: ["Hand-painted designs", "Custom themes", "Rhinestones & embellishments"], duration: "1-2 hours", price: "₹800+" },
];

const handFootServices = [
  { title: "Manicure", desc: "Classic and luxury manicure services", benefits: ["Cuticle care", "Hand massage", "Polish of choice"], duration: "45 minutes", price: "₹800" },
  { title: "Pedicure", desc: "Relaxing foot care and pampering", benefits: ["Foot soak", "Exfoliation", "Foot massage"], duration: "1 hour", price: "₹1,200" },
  { title: "Spa Treatments", desc: "Luxurious hand and foot spa experiences", benefits: ["Hot towel treatment", "Aromatherapy", "Deep hydration"], duration: "1.5 hours", price: "₹1,800" },
];

const beautyServices = [
  { title: "Bridal Makeup", desc: "Complete bridal beauty package for your special day", benefits: ["Trial session", "Airbrush makeup", "Hairstyling"], duration: "4-5 hours", price: "₹15,000" },
  { title: "Party Makeup", desc: "Glamorous makeup for parties and special occasions", benefits: ["Long-lasting", "HD finish", "False lashes"], duration: "2 hours", price: "₹3,500" },
  { title: "Grooming", desc: "Essential grooming and beauty services", benefits: ["Threading", "Waxing", "Facial"], duration: "1-2 hours", price: "₹1,000+" },
];

const ServiceCard = ({ service }: { service: any }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 backdrop-blur-sm hover:border-rose-gold/50 transition-all"
  >
    <div className="mb-6 flex items-start justify-between">
      <Sparkles className="h-10 w-10 text-rose-gold" />
      <div className="text-right">
        <div className="flex items-center gap-2 text-white font-semibold">
          <IndianRupee className="h-4 w-4" />
          {service.price}
        </div>
      </div>
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
    <p className="text-gray-400 text-sm mb-6">{service.desc}</p>
    <ul className="space-y-2 mb-6">
      {service.benefits.map((benefit: string, index: number) => (
        <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
          <div className="h-1.5 w-1.5 rounded-full bg-rose-gold" />
          {benefit}
        </li>
      ))}
    </ul>
    <div className="flex items-center justify-between pt-4 border-t border-white/10">
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <Clock className="h-4 w-4" />
        {service.duration}
      </div>
      <Link href="/booking" className="rounded-full bg-rose-gold px-6 py-2 text-sm font-semibold text-black hover:bg-rose-gold/90 transition-colors">
        Book Now
      </Link>
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Premium beauty services tailored to elevate your look
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12 text-center">
            <span className="text-rose-gold">Nail</span> Services
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {nailServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-black via-rose-gold/5 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12 text-center">
            <span className="text-rose-gold">Hand & Foot</span> Care
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {handFootServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12 text-center">
            <span className="text-rose-gold">Beauty</span> Services
          </h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {beautyServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

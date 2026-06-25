'use client';
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  { title: "Nail Extensions", desc: "Premium length & strength", icon: Sparkles },
  { title: "Nail Art", desc: "Custom creative designs", icon: Sparkles },
  { title: "Manicure", desc: "Classic & modern styles", icon: Sparkles },
  { title: "Pedicure", desc: "Relaxing foot care", icon: Sparkles },
  { title: "Gel Polish", desc: "Long-lasting shine", icon: Sparkles },
  { title: "Bridal Beauty", desc: "Complete bridal packages", icon: Sparkles },
];

const stats = [
  { label: "Happy Clients", value: "500+" },
  { label: "Services Delivered", value: "1200+" },
  { label: "Years Experience", value: "5+" },
  { label: "Positive Reviews", value: "450+" },
];

const testimonials = [
  { name: "Priya Sharma", text: "Absolutely stunning work! The attention to detail is impeccable.", role: "Regular Client" },
  { name: "Riya Patel", text: "Best nail art in the city! Sayani is a true artist.", role: "Bridal Client" },
  { name: "Ananya Desai", text: "Luxury experience from start to finish. Highly recommend!", role: "VIP Client" },
];

const FeatureCard = ({ title, desc, icon: Icon }: { title: string; desc: string; icon: any }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-rose-gold/50"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-rose-gold/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="relative">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-gold/20 to-rose-gold/5 text-rose-gold">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  </motion.div>
);

const StatCounter = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center p-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mb-2 text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-gold to-soft-beige bg-clip-text text-transparent"
    >
      {value}
    </motion.div>
    <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
  </div>
);

const TestimonialCard = ({ name, text, role }: { name: string; text: string; role: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 backdrop-blur-sm"
  >
    <div className="mb-6 text-5xl text-rose-gold">"</div>
    <p className="mb-6 text-gray-300 leading-relaxed">{text}</p>
    <div>
      <h4 className="font-semibold text-white">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-gold/5 via-transparent to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
              Luxury Nail Art & <br />
              <span className="bg-gradient-to-r from-rose-gold to-soft-beige bg-clip-text text-transparent">Beauty Experience</span>
            </h1>
            <p className="mb-10 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400">
              Where Elegance Meets Creativity
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/booking" className="rounded-full bg-rose-gold px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-black hover:bg-rose-gold/90 transition-all transform hover:scale-105">
                Book Appointment
              </Link>
              <Link href="/services" className="rounded-full border border-white/30 px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white hover:border-rose-gold hover:text-rose-gold transition-all">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
                Our <span className="text-rose-gold">Story</span>
              </h2>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Welcome to Lacquer Lounge by Sayani, where beauty becomes an art form. 
                Founded with a passion for creativity and excellence, we've transformed 
                nail care into a luxurious experience.
              </p>
              <p className="mb-8 text-gray-400 leading-relaxed">
                Our team of expert professionals is dedicated to making you look and feel 
                your absolute best. Using only premium products in a hygienic environment, 
                we create customized designs that reflect your unique style.
              </p>
              <Link href="/about" className="rounded-full border border-rose-gold px-8 py-3 text-sm font-semibold text-rose-gold hover:bg-rose-gold hover:text-black transition-all">
                Learn More
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
                <div className="h-full w-full bg-gradient-to-br from-rose-gold/20 to-soft-beige/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Sparkles className="h-20 w-20 sm:h-24 sm:w-24 text-rose-gold mx-auto mb-4" />
                    <p className="text-xl sm:text-2xl font-bold text-white">Premium Quality</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 sm:h-32 sm:w-32 rounded-2xl border border-rose-gold/30 bg-gradient-to-br from-rose-gold/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-black via-rose-gold/5 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="text-rose-gold">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our range of premium beauty services tailored to elevate your look
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FeatureCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <StatCounter key={index} {...stat} />
              ))}
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="text-rose-gold">Us</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Expert Professionals with years of experience",
                  "Premium Products from top beauty brands",
                  "Hygienic Environment with strict safety standards",
                  "Customized Designs tailored to your style",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-rose-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-black via-rose-gold/5 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Client <span className="text-rose-gold">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our happy clients have to say about their experience
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-r from-rose-gold/20 via-rose-gold/10 to-transparent p-8 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Book Your <span className="text-white">Transformation</span> Today
            </h2>
            <p className="mb-10 text-gray-300 max-w-2xl mx-auto">
              Ready to experience the Lacquer Lounge difference? Book your appointment now 
              and let us bring your beauty vision to life.
            </p>
            <Link href="/booking" className="rounded-full bg-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black hover:bg-soft-beige transition-all transform hover:scale-105">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';
import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";

const timeline = [
  { year: "2020", title: "The Beginning", desc: "Lacquer Lounge founded with a passion for beauty" },
  { year: "2022", title: "Growth & Expansion", desc: "Expanded services and team of expert professionals" },
  { year: "2024", title: "Award Winning", desc: "Recognized as top luxury beauty salon in the city" },
  { year: "2026", title: "Premium Experience", desc: "Continuing to deliver excellence and innovation" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the story behind Lacquer Lounge by Sayani
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="text-rose-gold">Brand Story</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Lacquer Lounge by Sayani was born from a simple idea: beauty should be 
                an experience, not just a service. Founded in 2020, our salon has 
                grown into a destination for those seeking premium quality and 
                exceptional service.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We believe that every client deserves to feel special, and our team 
                of expert professionals is dedicated to making that happen. From 
                luxurious nail art to complete bridal makeovers, we bring your 
                beauty vision to life.
              </p>
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
                    <p className="text-xl sm:text-2xl font-bold text-white">Our Story</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gradient-to-b from-black via-rose-gold/5 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet <span className="text-rose-gold">Sayani</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Founder & Creative Director
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10">
                <div className="h-full w-full bg-gradient-to-br from-rose-gold/20 to-soft-beige/10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Users className="h-20 w-20 sm:h-24 sm:w-24 text-rose-gold mx-auto mb-4" />
                    <p className="text-xl sm:text-2xl font-bold text-white">Sayani</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                With over 8 years of experience in the beauty industry, Sayani has 
                mastered the art of transforming looks and boosting confidence. 
                Her passion for creativity and attention to detail have made 
                Lacquer Lounge a trusted name in luxury beauty.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <Sparkles className="h-8 w-8 text-rose-gold mb-4" />
                  <h4 className="font-semibold text-white mb-2">8+ Years</h4>
                  <p className="text-sm text-gray-400">Experience</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <Users className="h-8 w-8 text-rose-gold mb-4" />
                  <h4 className="font-semibold text-white mb-2">500+</h4>
                  <p className="text-sm text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-rose-gold">Journey</span>
            </h2>
          </div>
          <div className="space-y-8 max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-rose-gold" />
                  {index < timeline.length - 1 && (
                    <div className="h-full w-px bg-white/20 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-12">
                  <span className="text-rose-gold font-semibold text-lg">{item.year}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

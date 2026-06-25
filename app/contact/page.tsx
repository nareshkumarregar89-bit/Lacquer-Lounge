'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Get in touch with us for any queries or appointments
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Address</h4>
                    <p className="text-gray-400">123 Luxury Street, Bandra West<br />Mumbai, Maharashtra 400050</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Phone</h4>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <p className="text-gray-400">hello@lacquerlounge.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-rose-gold/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Working Hours</h4>
                    <p className="text-gray-400">Monday - Saturday: 10:00 AM - 8:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button className="inline-flex items-center gap-3 rounded-full bg-green-500 px-6 sm:px-8 py-3 font-semibold text-white hover:bg-green-600 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </button>
              </div>

              <div className="mt-12 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p>Google Maps Location</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 backdrop-blur-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-20 w-20 sm:h-24 sm:w-24 text-rose-gold mx-auto mb-6" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-gold"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-gold resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-rose-gold py-3 sm:py-4 font-semibold text-black hover:bg-rose-gold/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

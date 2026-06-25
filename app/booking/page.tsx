'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  "Nail Extensions",
  "Gel Nails",
  "Acrylic Nails",
  "Nail Art",
  "Manicure",
  "Pedicure",
  "Spa Treatment",
  "Bridal Makeup",
  "Party Makeup",
];

// Replace this with your actual WhatsApp number (include country code without +)
const WHATSAPP_NUMBER = "919547422388";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateWhatsAppMessage = () => {
    const message = `Hello Lacquer Lounge! I'd like to book an appointment:

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Notes: ${formData.notes || "None"}

Thank you!`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppBooking = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // After showing confirmation, open WhatsApp after a short delay
    setTimeout(() => {
      handleWhatsAppBooking();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md px-4"
        >
          <CheckCircle className="h-20 w-20 sm:h-24 sm:w-24 text-rose-gold mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Booking Confirmed!</h1>
          <p className="text-gray-400 mb-8">
            Redirecting you to WhatsApp to complete your booking...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  service: "",
                  date: "",
                  time: "",
                  notes: "",
                });
              }}
              className="rounded-full bg-rose-gold px-8 py-3 font-semibold text-black hover:bg-rose-gold/90 transition-colors"
            >
              Book Another
            </button>
            <Link href="/" className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white hover:border-rose-gold hover:text-rose-gold transition-colors">
              Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Book Appointment</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Schedule your beauty transformation today
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-gold"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-gold"
                    placeholder="+91 98765 43210"
                  />
                </div>
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-rose-gold"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-black">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-rose-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-rose-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-rose-gold resize-none"
                  placeholder="Any special requests or notes..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-rose-gold py-3 sm:py-4 font-semibold text-black hover:bg-rose-gold/90 transition-colors"
              >
                Confirm Booking
              </button>
            </form>

            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 mb-4">Or book via WhatsApp</p>
              <button 
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center gap-3 rounded-full bg-green-500 px-6 sm:px-8 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Bridal", "Nail Art", "Extensions", "Makeup", "Spa"];

const galleryImages = [
  { category: "Nail Art", image: "https://images.unsplash.com/photo-1519368358672-25b03afee397?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Extensions", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Bridal", image: "https://images.unsplash.com/photo-1570192580117-9a1c2d55c08f?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Spa", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Nail Art", image: "https://images.unsplash.com/photo-1519368358672-25b03afee397?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Extensions", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Bridal", image: "https://images.unsplash.com/photo-1570192580117-9a1c2d55c08f?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Makeup", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Spa", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Nail Art", image: "https://images.unsplash.com/photo-1519368358672-25b03afee397?auto=format&fit=crop&q=80&w=600&h=400" },
  { category: "Extensions", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600&h=400" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our stunning collection of beauty transformations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-rose-gold text-black"
                    : "border border-white/20 text-gray-300 hover:border-rose-gold hover:text-rose-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {filteredImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid group"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="aspect-[4/3] bg-gradient-to-br from-rose-gold/20 to-soft-beige/10 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-xl font-bold text-white">{item.category}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-rose-gold font-semibold">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

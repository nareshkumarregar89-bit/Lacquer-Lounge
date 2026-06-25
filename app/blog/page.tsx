'use client';
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    category: "Nail Care",
    title: "10 Tips for Maintaining Beautiful Nails",
    excerpt: "Learn how to keep your nails healthy and beautiful with these expert tips.",
    date: "June 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519368358672-25b03afee397?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    category: "Beauty Tips",
    title: "The Ultimate Guide to Bridal Makeup",
    excerpt: "Everything you need to know about perfect bridal makeup for your special day.",
    date: "June 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1570192580117-9a1c2d55c08f?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    category: "Bridal Care",
    title: "Pre-Wedding Beauty Routine Timeline",
    excerpt: "Plan your pre-wedding beauty routine with our comprehensive timeline.",
    date: "June 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    category: "Fashion Trends",
    title: "Summer 2026 Nail Art Trends",
    excerpt: "Discover the hottest nail art trends for this summer season.",
    date: "May 28, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    category: "Nail Care",
    title: "Gel Nails vs Acrylic Nails: Which is Right for You?",
    excerpt: "Compare the pros and cons of gel and acrylic nails to make the best choice.",
    date: "May 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    category: "Beauty Tips",
    title: "How to Choose the Perfect Nail Shape",
    excerpt: "Find the nail shape that complements your hands and style perfectly.",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519368358672-25b03afee397?auto=format&fit=crop&q=80&w=600&h=400",
  },
];

const BlogCard = ({ post }: { post: any }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden hover:border-rose-gold/50 transition-all"
  >
    <div className="aspect-[4/3] bg-gradient-to-br from-rose-gold/20 to-soft-beige/10 flex items-center justify-center">
      <div className="text-center p-4">
        <p className="text-xl font-bold text-white">{post.category}</p>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <span className="text-rose-gold text-sm font-semibold">{post.category}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-gold transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {post.date}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          {post.readTime}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Beauty tips, trends, and inspiration from our experts
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

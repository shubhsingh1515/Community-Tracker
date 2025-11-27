"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      title: "How to start a 100k creative agency in 2025",
      excerpt: "Learn how to kickstart your journey into agency ownership with our comprehensive guide.",
      category: "Must Read",
      author: "Dhyna Phils",
      role: "Head of Marketing",
      featured: true,
      image: "/creative-agency.jpg",
    },
    {
      title: "Top 10 digital agency software",
      category: "Tools",
      author: "Sarah Johnson",
      role: "Content Creator",
      featured: false,
      image: "/agency-software.jpg",
    },
    {
      title: "A complete guide to project success in 2026",
      category: "Insight",
      author: "Mike Chen",
      role: "Project Manager",
      featured: false,
      image: "/project-success.jpg",
    },
    {
      title: "What Are Billable Hours",
      category: "Management",
      author: "Emma Davis",
      role: "Finance Director",
      featured: false,
      image: "/billable-hours.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Ideas to level-up your <br className="hidden md:block" />
          freelance game
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg cursor-pointer ${
              post.featured ? "md:col-span-2 md:row-span-2" : ""
            }`}
            whileHover={{ y: -5 }}
          >
            <div
              className={`bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden ${
                post.featured ? "h-96" : "h-48"
              }`}
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">{post.category}</p>
              <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              {post.excerpt && <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>}
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-muted-foreground text-xs">{post.role}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

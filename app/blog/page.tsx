"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const allBlogPosts = [
  {
    id: "100k-creative-agency",
    title: "How to start a 100k creative agency in 2025",
    excerpt: "Learn how to kickstart your journey into agency ownership with our comprehensive guide.",
    category: "Must Read",
    author: "Dhyna Phils",
    role: "Head of Marketing",
    date: "Jan 15, 2025",
    featured: true,
    image: "/creative-agency-workspace.jpg",
    readTime: "8 min read",
  },
  {
    id: "top-10-agency-software",
    title: "Top 10 digital agency software",
    category: "Tools",
    author: "Sarah Johnson",
    date: "Jan 10, 2025",
    image: "/digital-agency-software.jpg",
    readTime: "5 min read",
  },
  {
    id: "project-success-2026",
    title: "A complete guide to project success in 2026",
    category: "Insight",
    author: "Mike Chen",
    date: "Jan 8, 2025",
    image: "/project-management-success.jpg",
    readTime: "10 min read",
  },
  {
    id: "billable-hours",
    title: "What Are Billable Hours",
    category: "Management",
    author: "Emma Davis",
    date: "Jan 5, 2025",
    image: "/billable-hours-tracking.jpg",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  const featuredPost = allBlogPosts[0]
  const otherPosts = allBlogPosts.slice(1)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      {/* Blog Hero Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-6">
              BLOG
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Ideas to level-up your <br />
            freelance game
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore expert tips, strategies, and data-driven insights to improve customer retention and engagement.
          </motion.p>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden border-2 border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
          >
            {/* Featured Post Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-64 md:h-full min-h-96 bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden"
            >
              <img
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Featured Post Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 md:p-12"
            >
              <span className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold mb-4 tracking-wide">
                MUST READ
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight line-clamp-3">
                {featuredPost.title}
              </h2>

              <p className="text-muted-foreground mb-8 line-clamp-3">
                {featuredPost.excerpt ||
                  "Learn how to kickstart your journey into agency ownership with our comprehensive guide."}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-300 to-blue-500" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{featuredPost.author}</p>
                  <p className="text-muted-foreground text-xs">{featuredPost.role || "Head of Marketing"}</p>
                </div>
                <span className="ml-auto inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  FEATURED
                </span>
              </div>

              <motion.a
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Read Article <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Blog Posts Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {otherPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-all bg-white cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Ready to get started</h2>
          <p className="text-muted-foreground mb-8">Download Dreelio for free. No credit card required.</p>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
            Try Freelio free
          </Button>
        </motion.div>
      </section>

      <FooterSection />
    </div>
  )
}

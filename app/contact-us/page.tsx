"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Button } from "@/components/ui/button"
import { Twitter, Youtube, Send } from "lucide-react"

export default function ContactUsPage() {
  const formRef = useRef<HTMLDivElement>(null)
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    customer: "select",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "", customer: "select" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-6">
              CONTACT US
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Let's connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Have questions about Dreelio? Contact us and we'll be happy to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-12 md:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isFormInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl border-2 border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-lg transition-shadow"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email side by side on desktop */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Eg. Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="jane@framer.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Enter your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  rows={6}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Are you an existing customer?
                </label>
                <select
                  value={formData.customer}
                  onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="select">Select...</option>
                  <option value="yes">Yes, I'm an existing customer</option>
                  <option value="no">No, I'm new to Dreelio</option>
                </select>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-foreground text-white hover:bg-gray-800 px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-5 h-5" />
                Send a message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-transparent to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-4">
              COMMUNITY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Stay in the loop</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Twitter Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border-2 border-gray-100 p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4 mx-auto">
                <Twitter className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">X/Twitter</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">15.2K</p>
              <p className="text-muted-foreground text-sm mb-6">FOLLOWERS</p>
              <p className="text-muted-foreground mb-6">
                Stay updated on new features and discover how others are using Dreelio.
              </p>
              <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full font-semibold">
                Follow us
              </Button>
            </motion.div>

            {/* YouTube Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border-2 border-gray-100 p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4 mx-auto">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">YouTube</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">32K</p>
              <p className="text-muted-foreground text-sm mb-6">SUBSCRIBERS</p>
              <p className="text-muted-foreground mb-6">
                Tips, tutorials, and in-depth feature guides to inspire and enhance your Dreelio workflow.
              </p>
              <Button className="w-full bg-red-600 text-white hover:bg-red-700 rounded-full font-semibold">
                Subscribe
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              "Dreelio is by far the best agency tool I have ever used"
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto mb-4" />
            <p className="font-semibold text-foreground text-lg">Martha Pistla</p>
            <p className="text-muted-foreground text-sm">VP Marketing, Meta</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                quote:
                  "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, just works clean, fast, and beautifully built.",
                author: "Kimbra Faulkner",
                role: "CEO Lead, Teamwork",
              },
              {
                quote:
                  "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, just works clean, fast, and beautifully built.",
                author: "Sergio Walker",
                role: "Agency Owner",
              },
              {
                quote:
                  "We used to duct-tape tools to manage our workflow. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs.",
                author: "Frank Jay Sky",
                role: "Project Manager, Google",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl border-2 border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <p className="text-muted-foreground text-sm mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-500" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
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

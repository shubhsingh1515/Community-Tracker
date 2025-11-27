"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Moon, Sun, Droplet, Speaker } from "lucide-react"

export function FeaturesGridSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const integrationsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Transform scroll progress into horizontal movement (left to right and back)
  const integrationsX = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

  // Integration icons with their colors
  const integrations = [
    { name: "Google Meet", color: "bg-blue-400" },
    { name: "Dash", color: "bg-purple-500" },
    { name: "DaVinci", color: "bg-pink-400" },
    { name: "Linear", color: "bg-blue-600" },
    { name: "Figma", color: "bg-yellow-500" },
    { name: "Slack", color: "bg-orange-400" },
    { name: "Notion", color: "bg-purple-400" },
    { name: "Zapier", color: "bg-purple-600" },
    { name: "GitHub", color: "bg-gray-800" },
    { name: "Stripe", color: "bg-blue-500" },
  ]

  const brandColors = ["#8B5A3C", "#9CA3AF", "#FBBF24", "#F97316", "#22C55E", "#3B82F6", "#6366F1", "#EC4899"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const featureBottomItems = [
    {
      icon: "👥",
      title: "Collaborate in realtime",
      description:
        "Keep every conversation in sync use comments, messages, and project chats to stay on the same page.",
    },
    {
      icon: "🌐",
      title: "Speaks your language",
      description:
        "Set your language, currency, time, and date preferences for a seamless experience that feels truly local.",
    },
    {
      icon: "📊",
      title: "View things your way",
      description: "Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.",
    },
  ]

  return (
    <section ref={containerRef} id="features" className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Built for freelancers,
          <br className="hidden md:block" />
          powered by simplicity
        </h2>
      </motion.div>

      {/* Top Two Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Left Card - Personalization */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Smart, flexible, and built around your business workflow
          </h3>

          <motion.div className="bg-gray-100 rounded-2xl p-6 mb-6" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center gap-3 mb-4">
              {brandColors.map((color, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                <Droplet size={20} className="text-gray-400" />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                <Speaker size={20} className="text-gray-400" />
              </div>
            </div>
          </motion.div>

          {/* Toggle and Theme */}
          <div className="flex items-center gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-12 h-7 bg-green-500 rounded-full p-1 flex items-center justify-between">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-foreground">Hide Dreelio branding</span>
            </label>
            <div className="flex gap-2 ml-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <Moon size={18} className="text-gray-700" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center hover:bg-yellow-200 transition"
              >
                <Sun size={18} className="text-yellow-600" />
              </motion.button>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Personalize every detail. From branding and interface layout to colors and menus, so Dreelio feels like an
            extension of your brand.
          </p>
        </motion.div>

        {/* Right Card - Integrations with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Integrates seamlessly with the tools you already use
          </h3>

          <motion.div ref={integrationsRef} style={{ x: integrationsX }} className="grid grid-cols-5 gap-4 mb-6">
            {integrations.map((tool, i) => (
              <motion.div key={i} className="flex items-center justify-center" whileHover={{ scale: 1.1, y: -5 }}>
                <div
                  className={`w-16 h-16 rounded-xl ${tool.color} flex items-center justify-center text-white shadow-md hover:shadow-lg transition cursor-pointer`}
                >
                  <span className="text-2xl">
                    {i === 0 && "📹"}
                    {i === 1 && "📊"}
                    {i === 2 && "🎬"}
                    {i === 3 && "📝"}
                    {i === 4 && "🎨"}
                    {i === 5 && "💬"}
                    {i === 6 && "🧠"}
                    {i === 7 && "⚡"}
                    {i === 8 && "🐙"}
                    {i === 9 && "💳"}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-muted-foreground leading-relaxed">
            Seamless integrations. Plug Dreelio into the tools you love. Set up automations, sync your data, and make
            your systems work smarter together.
          </p>
        </motion.div>
      </div>

      {/* Bottom Three Feature Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-3 gap-6"
      >
        {featureBottomItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

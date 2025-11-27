"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const communities = [
    {
      platform: "X/Twitter",
      followers: "15.2K followers",
      description: "Stay updated on new features and discover how others are using Dreelio.",
      buttonText: "Follow us",
      bgColor: "from-blue-50 to-blue-100",
      link: "https://x.com",
    },
    {
      platform: "YouTube",
      followers: "32k subscribers",
      description: "Tips, tutorials, and in-depth feature guides to inspire and enhance your Dreelio workflow.",
      buttonText: "Subscribe",
      bgColor: "from-red-50 to-red-100",
      link: "https://youtube.com",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">Stay in the loop</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-2 gap-8"
      >
        {communities.map((community, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`bg-gradient-to-br ${community.bgColor} rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-lg group`}
            whileHover={{ y: -5 }}
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-muted-foreground mb-2">{community.followers}</p>
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                {community.platform}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{community.description}</p>
            </div>

            <motion.button
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              {community.buttonText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

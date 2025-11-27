"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { useEffect } from "react"

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView || !ref.current) return

    const cards = ref.current.querySelectorAll(".feature-card")
    gsap.from(cards, {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.15,
      ease: "power3.out",
    })
  }, [isInView])

  const features = [
    {
      title: "Work from anywhere, stay in sync",
      description: "Seamless across devices - Mobile and Web",
      gradient: "from-blue-100 to-blue-50",
    },
    {
      title: "Keep every project moving forward",
      description: "Plan, assign, and deliver all in one place",
      gradient: "from-blue-50 to-purple-50",
    },
    {
      title: "Track income, get paid, stress less",
      description: "Create invoices, log expenses, automate payments",
      gradient: "from-purple-50 to-pink-50",
    },
  ]

  return (
    <section ref={ref} id="features" className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Built for freelancers, powered by simplicity
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to manage your freelance business in one beautiful interface
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl"
            whileHover={{ y: -5 }}
          >
            <div className={`w-full h-48 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6`} />
            <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function TrustedBySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const companies = [
    { name: "Amsterdam" },
    { name: "Savannah" },
    { name: "Milano" },
    { name: "Luminous" },
    { name: "Theador" },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="py-12 md:py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <p className="text-muted-foreground text-sm font-medium mb-8">
          Trusted by 7,000+ top startups, freelancers and studios
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-muted-foreground font-semibold text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              {company.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

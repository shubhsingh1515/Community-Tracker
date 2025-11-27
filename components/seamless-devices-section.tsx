"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function SeamlessDevicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-blue-600 font-semibold text-sm mb-4 uppercase tracking-widest">Seamless across devices</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Work from anywhere, <br className="hidden md:block" />
          stay in sync
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-xl"
      >
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          <div className="flex flex-col justify-center">
            <div className="space-y-4 mb-8">
              <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-medium w-fit">
                Mobile App
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Access your entire business on the go. Full functionality, optimized for mobile.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-medium w-fit">
                Web App
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Desktop power with all your tools and features available in one place.
              </p>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-80 flex items-center justify-center"
          >
            <img src="/mobile-and-web-app-interface.jpg" alt="Mobile and Web App" className="max-w-full h-auto" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

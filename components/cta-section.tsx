"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-32 px-4 relative flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col justify-center items-center gap-8 max-w-3xl mx-auto text-center"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">Ready to get started?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of freelancers and agencies already managing their business with Pointer. Start your free
            trial today—no credit card required.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/signup">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
              Try for Free
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-white px-8 py-6 text-lg rounded-full font-semibold bg-transparent"
            >
              See All Features
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

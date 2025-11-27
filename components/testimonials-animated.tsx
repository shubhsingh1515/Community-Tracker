"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TestimonialsAnimated() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote:
        "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
      author: "Leah Daniel",
      role: "Design Ops Lead, teamwork",
      initials: "LD",
    },
    {
      quote:
        "We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.",
      author: "Jane Jay Jay",
      role: "Project Manager, Google",
      initials: "JJ",
    },
    {
      quote:
        "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
      author: "Amos Chen",
      role: "Art Director, Pentagram",
      initials: "AC",
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          &ldquo;Dreelio is by far the best agency tool I have ever used&rdquo;
        </h2>
        <p className="text-lg text-muted-foreground">From early-stage founders to established agencies</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
            whileHover={{ y: -5 }}
          >
            <p className="text-muted-foreground mb-6 leading-relaxed italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarFallback className="bg-blue-200 text-foreground font-semibold">
                  {testimonial.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

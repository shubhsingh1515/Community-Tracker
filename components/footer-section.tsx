"use client"

import { Twitter, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function FooterSection() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="w-full bg-white border-t-2 border-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-start gap-12 py-16 md:py-20"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <div>
            <h1 className="text-foreground text-2xl font-bold">Pointer</h1>
            <p className="text-muted-foreground text-sm font-medium mt-2">Freelance business made simple</p>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold">Product</h3>
            <div className="flex flex-col gap-2">
              <a href="#features" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Integrations
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold">Company</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Team
              </a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Careers
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <h3 className="text-foreground font-semibold">Resources</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Docs
              </a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Support
              </a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 md:px-6 py-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
      >
        <p className="text-muted-foreground text-sm">© 2025 Pointer. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
            Terms
          </a>
        </div>
      </motion.div>
    </footer>
  )
}

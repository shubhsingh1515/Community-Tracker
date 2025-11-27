"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function PricingSectionDreelio() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isAnnual, setIsAnnual] = useState(true)

  const pricingPlans = [
    {
      name: "Basic",
      tier: "Free",
      monthlyPrice: "0",
      annualPrice: "0",
      description: "For solo use with light needs.",
      features: ["Unlimited projects", "Unlimited clients", "Time tracking", "CRM", "iOS & Android app"],
      buttonText: "Try Dreelio free",
      featured: false,
    },
    {
      name: "Premium",
      tier: "Save 20%",
      monthlyPrice: "189",
      annualPrice: "87",
      description: "For pro use with light needs.",
      features: ["Everything in Basic", "Invoices & payments", "Expense tracking", "Income tracking", "Scheduling"],
      buttonText: "Get started",
      featured: true,
    },
    {
      name: "Enterprise",
      tier: "Flexible",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      description: "For team use with light needs.",
      features: [
        "Everything in Premium",
        "Custom data import",
        "Advanced onboarding",
        "Hubspot integration",
        "Timesheets",
      ],
      buttonText: "Contact sales",
      featured: false,
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} id="pricing" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Simple plans <br className="hidden md:block" />
            for serious work
          </h2>
        </motion.div>

        {/* Toggle for Annual/Monthly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-muted rounded-full p-1">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                isAnnual ? "bg-white text-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annually
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isAnnual ? "bg-white text-foreground shadow-md" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-8 rounded-2xl border-2 transition-all ${
                plan.featured
                  ? "border-blue-300 bg-blue-50 shadow-xl"
                  : "border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg"
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  {plan.monthlyPrice !== "Custom" ? (
                    <>
                      <span className="text-4xl font-bold text-foreground">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-foreground">Custom pricing</span>
                  )}
                </div>
                {plan.tier !== "Flexible" && <p className="text-sm font-semibold text-blue-600 mb-2">{plan.tier}</p>}
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <Button
                className={`w-full py-2 rounded-full font-semibold mb-8 transition-all ${
                  plan.featured
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                }`}
              >
                {plan.buttonText}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

"use client";

import { useState, useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";

export function PricingSectionDreelio() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      name: "Professional",
      monthlyPrice: "39",
      quarterlyPrice: "35",
      annualPrice: "29",
      mailboxes: 10,
      additionalPrice: "3.5",
      popular: false,
    },
    {
      name: "Agency",
      monthlyPrice: "99",
      quarterlyPrice: "89",
      annualPrice: "79",
      mailboxes: 30,
      additionalPrice: "3.25",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: "299",
      quarterlyPrice: "269",
      annualPrice: "249",
      mailboxes: 100,
      additionalPrice: "2.99",
      popular: false,
    },
  ];

  const allPlansFeatures = [
    "Google Workspace & Microsoft 365",
    "DNS security (DKIM, SPF, DMARC)",
    "API access with webhooks",
    "Full admin control per domain",
    "Works with all email tools",
    "95% inbox delivery rate",
    "10-minute automated setup",
    "Unlimited workspaces",
    "24/7 priority support",
  ];

  const getPrice = (plan: (typeof pricingPlans)[0]) => {
    if (billingCycle === "monthly") return plan.monthlyPrice;
    if (billingCycle === "quarterly") return plan.quarterlyPrice;
    return plan.annualPrice;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="pricing"
      className="py-20 md:py-32 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Simple pricing that scales with you
          </h2>
          <p className="text-lg text-muted-foreground">
            All the power of Google Workspace. None of the complexity.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1.5 shadow-sm">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2.5 rounded-full font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`px-8 py-2.5 rounded-full font-medium transition-all ${
                billingCycle === "quarterly"
                  ? "bg-white text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Quarterly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-8 py-2.5 rounded-full font-medium transition-all ${
                billingCycle === "annual"
                  ? "bg-white text-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-8 rounded-3xl transition-all ${
                plan.popular
                  ? "bg-white border-3 border-black shadow-2xl scale-105"
                  : "bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl"
              }`}
              whileHover={{ y: -8 }}
            >
              {plan.popular && (
                <div className="absolute top-2 right-4 bg-black text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                  POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-foreground">
                    ${getPrice(plan)}
                  </span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>

                <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Included mailbox licenses
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      {plan.mailboxes}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Additional mailboxes
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      ${plan.additionalPrice}/mailbox
                    </span>
                  </div>
                </div>

                <Button
                  className={`w-full py-6 rounded-full font-semibold text-base transition-all ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 border-2 text-white shadow-lg"
                      : "bg-black hover:bg-white hover:border-black text-white hover:text-black border-2"
                  }`}
                >
                  Get started →
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Plans Include Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-12">
            ALL PLANS INCLUDE
          </h3>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-6 max-w-5xl mx-auto">
            {allPlansFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

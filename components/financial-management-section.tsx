"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts"

export function FinancialManagementSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  // Chart data for the analytics graph
  const chartData = [
    { month: "Jan", used: 2000, forecast: 2400 },
    { month: "Feb", used: 3000, forecast: 3200 },
    { month: "Mar", used: 4500, forecast: 4100 },
    { month: "Apr", used: 6200, forecast: 6500 },
    { month: "May", used: 7800, forecast: 8200 },
    { month: "Jun", used: 8500, forecast: 9000 },
    { month: "Jul", used: 9200, forecast: 9800 },
  ]

  const features = [
    { label: "Invoicing", icon: "💼" },
    { label: "Budgets", icon: "⚙️" },
    { label: "Forecasting", icon: "📈" },
    { label: "Integrations", icon: "🔗" },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-slate-500 font-semibold text-xs mb-6 uppercase tracking-widest">Financial Management</p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Track income, get paid, stress less
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Create branded invoices, log expenses, and keep tabs on your earnings. Whether you bill hourly or per
            project, everything's automated and tax-friendly.
          </p>

          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold mb-12 hover:bg-gray-800 transition-colors">
            Try Dreelio free
          </button>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span className="text-2xl">{feature.icon}</span>
                <p className="font-semibold text-foreground">{feature.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-1"
        >
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">Project budget</h3>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💰</span>
                  <span className="text-3xl font-bold text-foreground">$18,090</span>
                </div>
                <p className="text-sm text-slate-500">Billable total</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📊</span>
                  <span className="text-3xl font-bold text-foreground">$22,090</span>
                </div>
                <p className="text-sm text-slate-500">Expected profit</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💵</span>
                  <span className="text-3xl font-bold text-foreground">$2,325</span>
                </div>
                <p className="text-sm text-slate-500">Project costs</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">⏱️</span>
                  <span className="text-3xl font-bold text-foreground">89.3</span>
                </div>
                <p className="text-sm text-slate-500">Margin</p>
              </motion.div>
            </div>

            <hr className="my-6" />

            {/* Analytics Section */}
            <h4 className="font-bold text-foreground mb-4">Analytics</h4>
            <div className="flex gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Budget used</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-1 bg-green-400 rounded-full" style={{ borderStyle: "dashed" }}></div>
                <span className="text-sm text-slate-600">Forecast</span>
              </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorUsed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#86efac" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#86efac" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#d1d5db" style={{ fontSize: "12px" }} />
                <YAxis hide />
                <Area
                  type="monotone"
                  dataKey="used"
                  stroke="#22c55e"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorUsed)"
                />
                <Area
                  type="monotone"
                  dataKey="forecast"
                  stroke="#86efac"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  fillOpacity={1}
                  fill="url(#colorForecast)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

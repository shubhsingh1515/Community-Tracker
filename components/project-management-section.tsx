"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ProjectManagementSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      name: "Asana website audit",
      priority: "High",
      clients: ["client1", "client2"],
      assigned: ["user1", "user2", "user3"],
    },
    {
      name: "Marketing workshop",
      priority: "Medium",
      clients: ["client3"],
      assigned: ["user1", "user2"],
    },
    {
      name: "KYC verification app",
      priority: "Low",
      clients: ["client4"],
      assigned: ["user3", "user4"],
    },
    {
      name: "Summer sales strate...",
      priority: "Medium",
      clients: ["client5"],
      assigned: ["user1", "user2", "user3"],
    },
    {
      name: "Setup A/B testing for...",
      priority: "High",
      clients: ["client6"],
      assigned: ["user2", "user4"],
    },
  ]

  const features = [
    { label: "Tasks", icon: "≡" },
    { label: "Time tracking", icon: "⏱" },
    { label: "Timesheets", icon: "≡" },
    { label: "Reports", icon: "📊" },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-green-600"
      case "Medium":
        return "text-yellow-600"
      case "Low":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const rowVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-blue-600 font-semibold text-sm mb-4 uppercase tracking-widest">Project Management</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
          Keep every project moving forward
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Plan, assign, and deliver your work - all in one place. With smart task tracking, deadlines, and real-time
          progress, you stay organized and clients stay confident.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Project Table Card */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -40, scale: 0.95 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl p-6 shadow-2xl"
        >
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Projects</h3>
              <button className="text-gray-400 hover:text-gray-600">⊕</button>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Find a project..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 font-medium text-sm">
                Filter
              </button>
            </div>

            <div className="space-y-2 max-h-80 overflow-y-auto">
              <div className="pb-3 border-b border-gray-200">
                <div className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span>▼</span> Ongoing <span className="text-gray-400">5</span>
                </div>
              </div>

              <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-2">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={rowVariants}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-yellow-400"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{project.name}</p>
                    </div>
                    <span className={`text-xs font-semibold ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-6 bg-blue-200 rounded-full text-xs flex items-center justify-center text-blue-700 font-semibold">
                        In
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="pt-3 border-t border-gray-200">
                <div className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span>▼</span> In Review <span className="text-gray-400">8</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <div className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <span>▼</span> Completed <span className="text-gray-400">12</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Content and Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <p className="text-blue-600 font-semibold text-sm mb-4 uppercase tracking-widest">Project Management</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Keep every project moving forward
            </h2>
            <p className="text-lg text-muted-foreground">
              Plan, assign, and deliver your work - all in one place. With smart task tracking, deadlines, and real-time
              progress, you stay organized and clients stay confident.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Try Dreelio free
          </motion.button>

          <motion.div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
                className="p-4 border-2 border-gray-100 rounded-xl hover:border-blue-200 transition-all cursor-pointer bg-white"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <p className="font-semibold text-foreground text-sm">{feature.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

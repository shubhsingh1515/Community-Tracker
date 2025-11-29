"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Moon, Sun, Droplet, Speaker } from "lucide-react";

export function FeaturesGridSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const integrationsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: integrationsRef,
    offset: ["start end", "end start"],
  });

  // Row 1: Move left to right (0% to 15%)
  const row1X = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Row 2: Move right to left (0% to -15%)
  const row2X = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Integration icons with their colors - Split into two rows
  const integrationsRow1 = [
    { name: "Google Meet", color: "bg-blue-400", emoji: "📹" },
    { name: "Dash", color: "bg-purple-500", emoji: "📊" },
    { name: "DaVinci", color: "bg-pink-400", emoji: "🎬" },
    { name: "Linear", color: "bg-blue-600", emoji: "📝" },
    { name: "Figma", color: "bg-yellow-500", emoji: "🎨" },
  ];

  const integrationsRow2 = [
    { name: "Slack", color: "bg-orange-400", emoji: "💬" },
    { name: "Notion", color: "bg-purple-400", emoji: "🧠" },
    { name: "Zapier", color: "bg-purple-600", emoji: "⚡" },
    { name: "GitHub", color: "bg-gray-800", emoji: "🐙" },
    { name: "Stripe", color: "bg-blue-500", emoji: "💳" },
  ];

  const brandColors = [
    "#8B5A3C",
    "#9CA3AF",
    "#FBBF24",
    "#F97316",
    "#22C55E",
    "#3B82F6",
    "#6366F1",
    "#EC4899",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const featureBottomItems = [
    {
      icon: "👥",
      title: "Collaborate in realtime",
      description:
        "Keep every conversation in sync use comments, messages, and project chats to stay on the same page.",
    },
    {
      icon: "🌐",
      title: "Speaks your language",
      description:
        "Set your language, currency, time, and date preferences for a seamless experience that feels truly local.",
    },
    {
      icon: "📊",
      title: "View things your way",
      description:
        "Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="features"
      className="py-12 md:py-20 lg:py-32 px-4 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-12 lg:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight px-4">
          Built for freelancers,
          <br className="hidden sm:block" />
          powered by simplicity
        </h2>
      </motion.div>

      {/* Top Two Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
        {/* Left Card - Personalization */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
            Smart, flexible, and built around your business workflow
          </h3>

          <motion.div
            className="bg-gray-100 rounded-2xl p-4 md:p-6 mb-4 md:mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
              {brandColors.map((color, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-300 cursor-pointer"
                  style={{ backgroundColor: color }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                <Droplet size={16} className="text-gray-400 md:w-5 md:h-5" />
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                <Speaker size={16} className="text-gray-400 md:w-5 md:h-5" />
              </div>
            </div>
          </motion.div>

          {/* Toggle and Theme */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="w-12 h-7 bg-green-500 rounded-full p-1 flex items-center justify-between">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                Hide Dreelio branding
              </span>
            </label>
            <div className="flex gap-2 sm:ml-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
              >
                <Moon
                  size={16}
                  className="text-gray-700 md:w-[18px] md:h-[18px]"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-yellow-100 flex items-center justify-center hover:bg-yellow-200 transition"
              >
                <Sun
                  size={16}
                  className="text-yellow-600 md:w-[18px] md:h-[18px]"
                />
              </motion.button>
            </div>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Personalize every detail. From branding and interface layout to
            colors and menus, so Dreelio feels like an extension of your brand.
          </p>
        </motion.div>

        {/* Right Card - Integrations with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 overflow-hidden"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6">
            Integrates seamlessly with the tools you already use
          </h3>

          <div
            ref={integrationsRef}
            className="mb-4 md:mb-6 space-y-3 md:space-y-4 overflow-hidden"
          >
            {/* Row 1 - Moves Left to Right */}
            <motion.div style={{ x: row1X }} className="flex gap-3 md:gap-4">
              {integrationsRow1.map((tool, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl ${tool.color} flex items-center justify-center text-white shadow-md hover:shadow-lg transition cursor-pointer`}
                  >
                    <span className="text-xl md:text-2xl">{tool.emoji}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Row 2 - Moves Right to Left */}
            <motion.div style={{ x: row2X }} className="flex gap-3 md:gap-4">
              {integrationsRow2.map((tool, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl ${tool.color} flex items-center justify-center text-white shadow-md hover:shadow-lg transition cursor-pointer`}
                  >
                    <span className="text-xl md:text-2xl">{tool.emoji}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Seamless integrations. Plug Dreelio into the tools you love. Set up
            automations, sync your data, and make your systems work smarter
            together.
          </p>
        </motion.div>
      </div>

      {/* Bottom Three Feature Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
      >
        {featureBottomItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

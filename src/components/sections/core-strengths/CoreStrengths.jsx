"use client";

import { motion } from "framer-motion";
import { Lightbulb, Globe, ShieldCheck, DollarSign } from "lucide-react";
import Tilt from "react-parallax-tilt";

const strengths = [
  {
    title: "End-to-end import management",
    icon: Lightbulb,
  },
  {
    title: "Global sourcing partnerships",
    icon: Globe,
  },
  {
    title: "Quality assurance and logistics support",
    icon: ShieldCheck,
  },
  {
    title: "Competitive pricing with consistent supply",
    icon: DollarSign,
  },
];

export default function CoreStrengths() {
  return (
    <section className="py-20 bg-[#f7f1ec]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0b1b2b]"
        >
          Our Core Strengths
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {strengths.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Tilt
                  glareEnable={false}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  className="rounded-3xl"
                >
                  <div className="p-[2px] rounded-3xl bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 animate-border">
                    <div className="p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex items-center gap-5">
                      <div className="p-4 rounded-2xl bg-[#f6f8fa] shadow-inner">
                        <Icon className="h-7 w-7 text-[#0b1b2b]" />
                      </div>
                      <p className="text-lg font-semibold text-[#0b1b2b] leading-snug">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center text-lg md:text-xl text-[#435262] leading-relaxed"
        >
          Whether you’re a wholesaler, food manufacturer, or distributor, Visa
          International ensures you get the best — on time, every time.
        </motion.p>
      </div>
    </section>
  );
}

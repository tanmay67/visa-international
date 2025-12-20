"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="w-full py-30 px-6 md:px-16 overflow-hidden">
      {/* Hero Box */}
      <div className="max-w-7xl mx-auto mt-10 bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="bg-[#7C474A] text-white p-10 md:p-16 w-full md:w-1/2"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm tracking-wide mb-4 opacity-80"
          >
            Visa International
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Import and Distribution of Premium Food Grains and Pulses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg opacity-90 mb-8 max-w-md"
          >
            We specialize in importing and distributing the finest grains,
            pulses, spices, and seeds across India.
          </motion.p>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#f4f1ec] text-black hover:bg-amber-950 hover:text-white transition px-6 py-3 rounded-lg  text-lg font-medium inline-block"
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="relative w-full md:w-1/2 h-80 md:h-auto"
        >
          <Image
            src="/images/hero-grains-2.avif"
            alt="Premium grains"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

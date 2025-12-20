import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="pt-30 py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Founded in 2015,{" "}
          <span className="font-semibold text-green-700">
            Visa International
          </span>{" "}
          is a trusted name in the import and distribution of premium food
          grains and pulses across India. What began as a small trading venture
          has today evolved into a dynamic global network — built on trust,
          consistency, and a deep understanding of agricultural markets.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We source only the finest quality grains and pulses from certified
          international suppliers, ensuring every product meets our strict
          standards for freshness, nutrition, and sustainability. Our commitment
          to ethical business, transparent processes, and long-term partnerships
          has made Visa International a preferred choice for distributors,
          retailers, and food manufacturers alike.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed mt-6 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          At Visa International, we believe that food is more than just a
          commodity — it is a promise of nourishment, quality, and care.
        </motion.p>
      </div>
    </section>
  );
}

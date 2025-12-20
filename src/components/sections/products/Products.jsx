"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const cards = [
  // Spices
  {
    category: "Spices",
    title: "Stone Flower",
    image: "/images/stone-flower.webp",
  },
  {
    category: "Spices",
    title: "Caraway Seeds",
    image: "/images/caraway.jpg",
  },

  // Seeds
  {
    category: "Seeds",
    title: "Pumpkin Seeds",
    image: "/images/pumpkin-seeds.jpg",
  },
  {
    category: "Seeds",
    title: "Sunflower Seeds",
    image: "/images/sunflower-seeds.jpg",
  },
  {
    category: "Seeds",
    title: "Redcow Pea Beans",
    image: "/images/red-cow-pea-beans.webp",
  },
  {
    category: "Seeds",
    title: "Butter Beans",
    image: "/images/butter-beans.webp",
  },
  {
    category: "Seeds",
    title: "Popcorn",
    image: "/images/popcorn.webp",
  },

  // Pulses
  {
    category: "Pulses",
    title: "Black Eye Beans",
    image: "/images/back-eye-beans.jpg",
  },
  {
    category: "Pulses",
    title: "White Kidney Beans",
    image: "/images/white-kidney-beans.webp",
  },
  {
    category: "Pulses",
    title: "Red Kidney Beans",
    image: "/images/red-kidney-beans.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="pt-30 py-24 bg-[#f7f1ec]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#0b1b2b]"
        >
          Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-5 text-center text-lg md:text-xl text-[#435262] max-w-3xl mx-auto"
        >
          We source, import, and distribute premium spices, seeds, and pulses —
          each selected with exceptional quality control.
        </motion.p>

        {/* Responsive Grid (perfect alignment for 10 items) */}
        <div
          className="grid gap-10 mt-16
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5"
        >
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div
                  className="group bg-white p-5 rounded-3xl shadow-md hover:shadow-xl 
                  transition-all duration-300 border border-transparent hover:border-[#e0ddd8]
                  flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl mb-4">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-44 object-cover rounded-2xl group-hover:scale-105 
                      transition-transform duration-500"
                      whileHover={{ scale: 1.03 }}
                    />
                  </div>

                  {/* Text content with equal height */}
                  <div className="grow">
                    <div className="text-sm text-[#8a8a8a]">
                      {item.category}
                    </div>

                    <h3 className="text-lg font-semibold text-[#0b1b2b]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 text-center text-lg md:text-xl text-[#435262] max-w-4xl mx-auto"
        >
          From farm to port to doorstep — we ensure a seamless, quality-assured
          supply chain for every product we deliver.
        </motion.p>
      </div>
    </section>
  );
}

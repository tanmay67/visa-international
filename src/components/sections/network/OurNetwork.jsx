import React from "react";
import { motion } from "framer-motion";

const locations = [
  { name: "China", img: "/images/locations/china.svg" },
  { name: "Finland", img: "/images/locations/finland.svg" },
  { name: "Egypt", img: "/images/locations/egypt.svg" },
  { name: "Nigeria", img: "/images/locations/nigeria.svg" },
  { name: "Madagascar", img: "/images/locations/madagascar.png" },
  { name: "Brazil", img: "/images/locations/brazil.svg" },
  { name: "South Africa", img: "/images/locations/south-africa.svg" },
  { name: "Kenya", img: "/images/locations/kenya.svg" },
  { name: "Sri Lanka", img: "/images/locations/sri-lanka.svg" },
  { name: "Indonesia", img: "/images/locations/indonesia.svg" },
  { name: "Vietnam", img: "/images/locations/vietnam.png" },
  { name: "Myanmar", img: "/images/locations/myanmar.svg" },
];

export default function OurNetwork() {
  return (
    <section id="networks" className="py-20  text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-wide mb-4">Our Network</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We proudly operate across major global regions with a strong
            sourcing and supply network.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
          {locations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="w-28 h-28 rounded-xl overflow-hidden bg-white shadow-lg p-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-4 text-lg font-medium">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

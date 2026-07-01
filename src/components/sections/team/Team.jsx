import React from "react";
import { motion } from "framer-motion";

export default function Team() {
  const team = [
    {
      name: "Anuj Gupta",
      role: "Founder & Director",
      phone: "+91 94440 42100",
      email: "anujgupta210@gmail.com",
      image: "/images/anuj.jpeg",
    }
  ];

  return (
    <section id="team" className="pt-30 py-20 px-4 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-gray-900 mb-4"
      >
        Meet Our Team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center max-w-2xl mx-auto text-gray-600 mb-14 text-lg"
      >
        The passionate people behind Visa International
      </motion.p>

      <div className="flex justify-center items-center margin-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500 w-full max-w-sm"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white hover:border-blue-300 transition-all duration-500"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Name & Role */}
            <h3 className="mt-6 text-2xl font-bold text-gray-800">
              {member.name}
            </h3>
            <p className="text-yellow-600 font-semibold mb-3 text-lg">
              {member.role}
            </p>

            {/* Contact Info */}
            <div className="text-gray-700 text-sm space-y-1">
              <p className="flex items-center justify-center gap-2">
                📞 {member.phone}
              </p>
              {/* <p className="text-blue-600 hover:underline">{member.email}</p> */}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Head Office Section */}
      <div className="mt-16 w-full flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1911293176818!2d80.23312407518733!3d13.087070212335936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52658d498eb09b%3A0xba0ad88b4f8b2ede!2sAyodhya%20kilpauk!5e0!3m2!1sen!2sin!4v1764058904834!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl shadow-lg max-w-4xl"
        ></iframe>
      </div>
    </section>
  );
}

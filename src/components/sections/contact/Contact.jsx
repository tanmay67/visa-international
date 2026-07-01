"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

let phoneNumber = "+919444042100";
let emailId = "team@visainternational.org";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMail = () => {
    const subject = `New Query from ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;

    window.location.href = `mailto:team@visainternational.org?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="w-full pt-30 py-24  flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-4xl font-bold text-center mb-10 text-[#030303]"
      >
        ☕ And A <span className="text-amber-800">Conversation</span> Won't Be A
        Bad Idea
      </motion.h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="bg-[#ffecec]  rounded-xl shadow-sm"
        >
          <a
            href={`mailto:${emailId}`}
            className="flex items-center gap-3 w-full h-full py-4 px-6"
          >
            <Image
              src="/images/email.svg"
              width={300}
              height={300}
              className="w-8"
              alt="email"
            />
            <p className="text-gray-700 font-medium">{emailId}</p>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="bg-[#f0f7ff] rounded-xl shadow-sm"
        >
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-3 w-full h-full py-4 px-6"
          >
            <Image
              src="/images/phone.png"
              width={300}
              height={300}
              className="w-8"
              alt="phone"
            />
            <p className="text-gray-700 font-medium">{phoneNumber}</p>
          </a>
        </motion.div>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="w-full max-w-3xl flex flex-col gap-4 text-[#6b7688]"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          className="px-5 py-3 rounded-lg border border-gray-200 focus:outline-none shadow-sm "
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="px-5 py-3 rounded-lg border border-gray-200 focus:outline-none shadow-sm"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          onChange={handleChange}
          className="px-5 py-3 rounded-lg border border-gray-200 focus:outline-none shadow-sm"
        ></textarea>

        <button
          onClick={sendMail}
          className="bg-amber-800 text-white py-3 rounded-lg font-medium hover:bg-amber-950 transition w-40 mx-auto"
        >
          Send Message
        </button>
      </motion.div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Later you can integrate EmailJS, Nodemailer, Formspree, etc.
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0d1117] text-gray-300 px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-blue-600 opacity-20 blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-blue-400 opacity-20 blur-[120px] -z-10"></div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-4 max-w-xl mx-auto"
        >
          Have a question or want to work together? Feel free to reach out.
        </motion.p>

        {/* Contact Form */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-left mb-2 text-gray-300">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-left mb-2 text-gray-300">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-left mb-2 text-gray-300">
                Message
              </label>
              <textarea
                required
                className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-gray-700 text-white focus:border-blue-500 focus:outline-none transition"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-500 transition text-white py-3 rounded-lg text-lg font-medium shadow-lg shadow-blue-600/20"
            >
              Send Message
            </motion.button>
          </motion.form>
        ) : (
          /* Submitted message */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-green-400 text-lg font-semibold"
          >
            Thank you! ✔️<br />
            Your message has been sent successfully.
          </motion.div>
        )}
      </div>

      {/* Floating interactive dots */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-32 right-24 w-6 h-6 bg-blue-500 rounded-full opacity-25 blur-sm"
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-28 left-32 w-8 h-8 bg-blue-400 rounded-full opacity-20 blur-md"
      />
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  // Typewriter Effect
  const words = [
    "performant and modern web experiences.",
    "clean UI and responsive layouts.",
    "solutions powered by Next.js and Tailwind.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[#0d1117] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600 blur-[150px] opacity-20 rounded-full -z-10 top-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Hi, Im <span className="text-blue-500">John Jerick Agapito</span>
        </motion.h1>

        {/* Typewriter text */}
        <motion.p
          key={index} // re-animate when text changes
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 mt-4 max-w-xl mx-auto text-lg"
        >
          A web developer crafting{" "}
          <span className="text-blue-400">{words[index]}</span>
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8"
        >
          <a
            href="#projects"
            className="relative inline-block px-10 py-3 text-lg font-medium text-white 
                       rounded-full bg-blue-600 hover:bg-blue-500 transition overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>

            {/* Button glow animation */}
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-blue-400 blur-xl opacity-0"
            />
          </a>
        </motion.div>
      </motion.div>

      {/* Floating shapes for interaction */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-32 left-20 w-6 h-6 bg-blue-500 rounded-full opacity-40 blur-sm"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-32 right-24 w-8 h-8 bg-blue-400 rounded-full opacity-30 blur-md"
      />
    </section>
  );
}

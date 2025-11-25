"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#0d1117] text-gray-300 px-6 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-600 opacity-20 blur-[160px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-400 opacity-10 blur-[150px] -z-10"></div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-white"
        >
          About Me
        </motion.h2>

        {/* Profile Picture (optional) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex justify-center mt-8"
        >
          {/* Replace /me.jpg with your image */}
          {/* Remove this block if you don't want an image */}
          <Image
            src="/me.png"
            alt="Profile"
            className="w-36 h-36 object-cover rounded-full border border-gray-700 shadow-lg shadow-blue-500/20"
          />
        </motion.div>

        {/* Animated Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-lg leading-relaxed text-gray-400 max-w-3xl mx-auto"
        >
          Im a passionate web developer who enjoys building modern, scalable
          and user-friendly digital experiences. I specialize in
          <span className="text-blue-400 font-semibold">
            {" "}
            JavaScript, React, Next.js,
          </span>
          and creating refined UI using
          <span className="text-blue-400 font-semibold"> Tailwind CSS</span>.
          <br />
          <br />I love solving problems, crafting interfaces with strong visual
          impact, and bringing creative ideas to life. Outside of coding, I
          explore <span className="text-blue-400">design</span>,{" "}
          <span className="text-blue-400">gaming</span>, and{" "}
          <span className="text-blue-400">AI-powered technologies</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-white text-lg shadow-lg shadow-blue-600/20"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-gray-700 hover:border-blue-500 transition text-gray-300 text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Floating ambient animation */}
      <motion.div
        className="absolute top-24 right-32 w-8 h-8 bg-blue-400 rounded-full opacity-30 blur-md"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <motion.div
        className="absolute bottom-20 left-24 w-6 h-6 bg-blue-500 rounded-full opacity-20 blur-md"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
    </section>
  );
}

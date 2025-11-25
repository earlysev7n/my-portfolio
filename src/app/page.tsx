"use client"; // Needed for interactivity like buttons

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600">John Jerick</h1>
          <div className="hidden md:flex space-x-6 font-medium">
            <a href="#hero" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col px-4 py-4 bg-white shadow-lg">
            <a href="#hero" className="py-2 hover:text-blue-500 transition">Home</a>
            <a href="#about" className="py-2 hover:text-blue-500 transition">About</a>
            <a href="#skills" className="py-2 hover:text-blue-500 transition">Skills</a>
            <a href="#projects" className="py-2 hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="py-2 hover:text-blue-500 transition">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 via-white to-gray-100">
        <h2 className="text-xl md:text-2xl mb-4 text-gray-600">Hi, my name is</h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-blue-600">John Jerick</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-xl">
          I am a Full-Stack Developer creating modern web experiences with Next.js, React, and Tailwind CSS.
        </p>
        <a
          href="#projects"
          className="px-8 py-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:-translate-y-1 hover:scale-105"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg md:text-xl mb-4 text-gray-700 text-center">
          I am a passionate developer with experience in building modern web applications. I love learning new technologies and turning ideas into reality.
        </p>
        <p className="text-lg md:text-xl text-gray-700 text-center">
          My journey started with HTML, CSS, and JavaScript, and I’ve grown into full-stack development using Next.js, Tailwind, and modern tools.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB", "Git"].map(skill => (
              <div key={skill} className="p-6 bg-white rounded-xl shadow-lg text-center font-medium hover:shadow-xl transition transform hover:-translate-y-1">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2">Project One</h3>
            <p className="mb-4 text-gray-700">Description of project one. Technologies: Next.js, Tailwind CSS.</p>
            <a href="#" className="text-blue-500 hover:underline">View Code</a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2">Project Two</h3>
            <p className="mb-4 text-gray-700">Description of project two. Technologies: React, Node.js, MongoDB.</p>
            <a href="#" className="text-blue-500 hover:underline">View Code</a>
          </div>
          {/* Add more projects here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h2>
          <p className="mb-8 text-gray-700">
            Email me at <a href="mailto:johnjerickagapito@gmail.com" className="text-blue-500 hover:underline">johnjerickagapito@gmail.com</a>
          </p>
          <form 
            action="mailto:johnjerickagapito@gmail.com" 
            method="POST" 
            encType="text/plain"
            className="flex flex-col space-y-4"
          >
            <input type="text" name="Name" placeholder="Name" className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
            <input type="email" name="Email" placeholder="Email" className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
            <textarea name="Message" placeholder="Message" className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
            <button type="submit" className="px-8 py-4 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:-translate-y-1 hover:scale-105">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center border-t text-gray-600">
        <p>© 2025 John Jerick. All rights reserved.</p>
      </footer>
    </main>
  );
}

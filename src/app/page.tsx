"use client"; // Needed for interactivity like buttons

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="font-sans text-gray-800 bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col px-4 py-2 bg-white shadow-md">
            <a href="#hero" className="py-1">Home</a>
            <a href="#about" className="py-1">About</a>
            <a href="#skills" className="py-1">Skills</a>
            <a href="#projects" className="py-1">Projects</a>
            <a href="#contact" className="py-1">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50">
        <h2 className="text-xl mb-4 text-gray-600">Hi, my name is</h2>
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl mb-8">I am a Full-Stack Developer creating modern web experiences.</p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          {/* Add your story here */}
          I am a passionate developer with experience in building modern web applications. I love learning new technologies and turning ideas into reality.
        </p>
        <p className="text-lg">
          {/* More about you */}
          My journey started with HTML, CSS, and JavaScript, and I’ve grown into full-stack development using Next.js, Tailwind, and modern tools.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white rounded shadow text-center">React</div>
            <div className="p-4 bg-white rounded shadow text-center">Next.js</div>
            <div className="p-4 bg-white rounded shadow text-center">Tailwind CSS</div>
            <div className="p-4 bg-white rounded shadow text-center">TypeScript</div>
            <div className="p-4 bg-white rounded shadow text-center">Node.js</div>
            <div className="p-4 bg-white rounded shadow text-center">Express</div>
            <div className="p-4 bg-white rounded shadow text-center">MongoDB</div>
            <div className="p-4 bg-white rounded shadow text-center">Git</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Example project card */}
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold mb-2">Project One</h3>
            <p className="mb-4">Description of project one. Technologies: Next.js, Tailwind CSS.</p>
            <a href="#" className="text-blue-500 hover:underline">View Code</a>
          </div>
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-bold mb-2">Project Two</h3>
            <p className="mb-4">Description of project two. Technologies: React, Node.js, MongoDB.</p>
            <a href="#" className="text-blue-500 hover:underline">View Code</a>
          </div>
          {/* Add more projects */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <p className="mb-8">Email me at <a href="mailto:youremail@example.com" className="text-blue-500">youremail@example.com</a></p>
          {/* Simple contact form placeholder */}
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Name" className="p-3 rounded border"/>
            <input type="email" placeholder="Email" className="p-3 rounded border"/>
            <textarea placeholder="Message" className="p-3 rounded border"></textarea>
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center border-t">
        <p>© 2025 Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}

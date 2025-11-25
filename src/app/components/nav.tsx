// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d1117]/80 backdrop-blur-md z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-white tracking-wide">
          Uhmhm
        </h1>

        <div className="space-x-6 text-gray-300">
          <Link href="#skills" className="hover:text-white transition">Skills</Link>
          <Link href="#projects" className="hover:text-white transition">Projects</Link>
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

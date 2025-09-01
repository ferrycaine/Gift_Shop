import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 py-4 px-8 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          GiftStore
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          <li><a href="#home" className="hover:text-yellow-400 transition px-2">Home</a></li>
          <li><a href="#exciting" className="hover:text-green-400 transition px-2">Exciting</a></li>
          <li><a href="#exclusive" className="hover:text-blue-400 transition px-2">Exclusive</a></li>
          <li><a href="#outstanding" className="hover:text-pink-400 transition px-2">Outstanding</a></li>
        </ul>

        {/* Desktop Buy Now */}
        <a
          href="#buynow"
          className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(255,255,0,0.7)] transition"
        >
          Claim Now!
        </a>

        {/* Hamburger Button - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Icon */}
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center w-full bg-slate-900 py-4 space-y-4 absolute top-full left-0 z-20 shadow-md">
          <li><a href="#home" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400 px-2 transition">Home</a></li>
          <li><a href="#exciting" onClick={() => setIsOpen(false)} className="text-white hover:text-green-400 px-2 transition">Exciting</a></li>
          <li><a href="#exclusive" onClick={() => setIsOpen(false)} className="text-white hover:text-blue-400 px-2 transition">Exclusive</a></li>
          <li><a href="#outstanding" onClick={() => setIsOpen(false)} className="text-white hover:text-pink-400 px-2 transition">Outstanding</a></li>
          <a
            href="#buynow"
            onClick={() => setIsOpen(false)}
            className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(255,255,0,0.7)] transition"
          >
            Claim Now!
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

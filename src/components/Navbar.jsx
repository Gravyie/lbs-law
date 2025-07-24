import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LEFT: Logo + Title */} 
        <Link to="/">
          <img
            src="/logo.png" // replace with actual logo
            alt="L.B.S. Logo"
            className="h-12 w-12 object-contain"
          />
        </Link>

        {/* RIGHT: Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#101935] font-medium border-b-[2px] border-[#E4B062] pb-1"
                    : "text-[#1e1e1e] hover:text-[#101935] hover:border-b-[2px] hover:border-[#E4B062] pb-1 transition"
                }
              >
                {link.name}
              </NavLink>
            </motion.div>
          ))}

          {/* Apply Button */}
          <Link
            to="/apply"
            className="ml-6 bg-[#4B3F72] text-white px-4 py-2 text-sm rounded-full font-medium shadow hover:bg-[#d9a852] transition"
          >
            Apply Now
          </Link>
        </nav>
      </div>

      {/* Optional: Mobile menu goes here (on next step) */}
    </header>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAVITEMS } from "../libs/Nav-related";
import { AnimatedGradientText } from "@/components/modern-ui/animated-gradient-text";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import CustomBtn from "@/components/custom/CustomBtn";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full px-6 sm:px-6 lg:px-24 py-3  mt-2">
      <div className="mx-auto flex items-center justify-between py-2 border border-m-accent rounded-full backdrop-blur-3xl px-6">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <AnimatedGradientText className="text-[1.8rem]  font-bold tracking-widest">
            Travis Ai
          </AnimatedGradientText>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14 flex-1 justify-center">
          {NAVITEMS.map((navlink) => (
            <NavLink
              key={navlink.path}
              to={navlink.path}
              className={({ isActive }) =>
                `text-[1rem] font-medium transition-color ${
                  isActive ? "text-m-accent" : "text-gray-700"
                }`
              }
            >
              <motion.p whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {navlink.title}
              </motion.p>
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <CustomBtn
            text="Try It now"
            startIcon="Sparkles"
            linkpath={`auth/login`}
            isSolid={true}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute left-0 backdrop-blur-3xl right-0 mx-4 mt-2   border border-gray-200 rounded-3xl shadow-xl overflow-hidden z-50"
          >
            <div className="p-6 space-y-4">
              {NAVITEMS.map((navlink) => (
                <NavLink
                  key={navlink.path}
                  to={navlink.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block text-lg font-medium transition-colors py-2 ${
                      isActive ? "text-m-accent" : "text-gray-700"
                    }`
                  }
                >
                  <motion.div whileHover={{ x: 8 }} whileTap={{ scale: 0.98 }}>
                    {navlink.title}
                  </motion.div>
                </NavLink>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <CustomBtn
                  isSolid
                  text="Try It now"
                  startIcon="Sparkles"
                  linkpath={`auth/login`}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NAVITEMS } from "../libs/nav";
import { AnimatedGradientText } from "@/components/custom/animated-gradient";
import { motion, AnimatePresence } from "motion/react";
import CustomBtn from "@/components/custom/CustomBtn";
import IconButton from "@/components/custom/iconbutton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const navigate = useNavigate()

  return (
    <nav className="w-full px-2 lg:px-24 p-2  sticky mt-2">
      <div className="mx-auto flex items-center justify-between py-2 border border-border rounded-full px-6">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <AnimatedGradientText className="text-[1.5rem]  font-bold tracking-widest">
            Travis Ai
          </AnimatedGradientText>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">
          {NAVITEMS.map((navlink) => (
            <NavLink
              key={navlink.path}
              to={navlink.path}
              className="relative px-6 py-2"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        duration: 1
                      }}
                    />
                  )}

                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 ${isActive ? "text-primary-foreground" : ""
                      }`}
                  >
                    {navlink.title}
                  </motion.span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <CustomBtn
            startIcon="Sparkles"
            text="Try it out"
            onClick={() => navigate(`login`)}
            variant={`outline`}

          />

        </div>

        {/* Mobile Menu Button */}
        <span className="block lg:hidden">
          <IconButton icon={isOpen ? "X" : "Menu"} onClick={toggleMenu} />
        </span>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden block left-0 backdrop-blur-3xl right-0  mt-2  border border-gray-200 rounded-3xl overflow-hidden z-50"
          >
            <div className="p-2 space-y-2">
              {NAVITEMS.map((navlink) => (
                <NavLink
                  key={navlink.path}
                  to={navlink.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex transition-colors  p-2 px-6  ${isActive
                    && "w-full rounded-full  bg-muted"}`
                  }
                >
                  <motion.div whileHover={{ x: 8 }} whileTap={{ scale: 0.98 }}>
                    {navlink.title}
                  </motion.div>
                </NavLink>
              ))}

              <div className="pt-4">
                <CustomBtn
                  text="Try It now"
                  startIcon="Sparkles"
                  variant={`outline`}
                  onClick={() => navigate(`login`)}

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

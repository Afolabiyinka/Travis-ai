import IconButton from "@/components/custom/iconbutton";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Icon from "@/components/custom/Icon";
import { AnimatePresence, motion } from "motion/react";

const AccountNav = () => {
  const { theme, setTheme } = useTheme();
  const [menu, setOpenMenu] = React.useState(false);

  const handleClick = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    setOpenMenu(false);
  };

  return (
    <div className="shadow rounded-full gap-3 p-3 w-full h-full flex justify-end relative">
      {/* User Profile */}
      <IconButton icon="UserCircle" onClick={() => setOpenMenu(!menu)} />

      {/* Theme Toggle */}
      <IconButton
        icon={theme === "dark" ? "Moon" : "Sun"}
        onClick={() => setOpenMenu(true)}
      />

      {/* Dropdown */}
      <AnimatePresence>
        {menu && (
          <motion.span
            initial={{ opacity: 0, y: -40 }} // start higher
            animate={{ opacity: 1, y: 0 }} // slide down
            exit={{ opacity: 0, y: -40 }} // slide up on close
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
            className="border flex flex-col gap-3 justify-center items-center
      fixed top-[70px] right-5 z-50 p-3 rounded-lg bg-white dark:bg-neutral-900
      shadow-xl"
          >
            <span
              className="flex justify-between cursor-pointer p-2 gap-2 w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition"
              onClick={() => handleClick("light")}
            >
              Light <Icon icon="Sun" />
            </span>

            <span
              className="flex justify-between cursor-pointer p-2 gap-2 w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition"
              onClick={() => handleClick("dark")}
            >
              Dark <Icon icon="Moon" />
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccountNav;

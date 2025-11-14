import IconButton from "@/components/custom/iconbutton";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import Icon from "@/components/custom/Icon";
import { AnimatePresence, motion } from "motion/react";

const AccountNav = () => {
  const { theme, setTheme } = useTheme();
  const [menu, setOpenMenu] = React.useState<boolean>(false);

  // const categories = [
  //   { id: "all", label: "All", icon: Layers, color: "#A06CD5" },
  //   { id: "lifestyle", label: "Lifestyle", icon: Shirt, color: "#FF6B6B" },
  //   { id: "desk", label: "Desk", icon: Briefcase, color: "#4ECDC4" },
  //   { id: "tech", label: "Tech", icon: Smartphone, color: "#45B7D1" },
  //   { id: "home", label: "Home", icon: Home, color: "#F9C74F" },
  // ];

  function handleClick(theme: any) {
    setTheme(theme);
    setOpenMenu(false);
  }
  return (
    <div className="shadow rounded-full gap-3  p-3 w-full h-full flex justify-end relative ">
      <IconButton icon="UserCircle" onClick={() => setOpenMenu(!open)} />
      <IconButton
        icon={`${theme === "dark" ? "Moon" : "Sun"}`}
        onClick={() => setOpenMenu(true)}
      />

      <AnimatePresence>
        {menu && (
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="border flex flex-col gap-3 justify-center items-center fixed top-22 z-50
         p-3 rounded-lg"
          >
            <span
              className="flex justify-between cursor-pointer p-2 gap-2"
              onClick={() => handleClick("light")}
            >
              Light <Icon icon="Sun" />
            </span>

            <span
              className="flex justify-between cursor-pointer  p-2 rounded-lg gap-2"
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

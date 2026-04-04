import Icon from "@/components/custom/Icon";
import { useThemeStore } from "@/modules/main/settings/store/theme/themeStore";
import { motion } from "motion/react";
import { useDialogDesc } from "../store/useDialogDesc";
import { useEffect } from "react";

const themetoggle = () => {
  const { setTheme } = useThemeStore();
  const { setTitle, title } = useDialogDesc();
  useEffect(() => {
    setTitle("Change the apperance of the app");
  }, [title]);

  return (
    <motion.span
      className="flex flex-col gap-3 justify-center items-center
       p-2 rounded-lg w-full"
    >
      <span
        className="flex justify-between cursor-pointer backdrop-blur-lg p-3 gap-11 w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition"
        onClick={() => setTheme("light")}
      >
        Light <Icon icon="Sun" />
      </span>

      <span
        className="flex justify-between cursor-pointer p-3 gap-2 w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition"
        onClick={() => setTheme("dark")}
      >
        Dark <Icon icon="Moon" />
      </span>
      <span
        className="flex justify-between cursor-pointer p-3 gap-2 w-full hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition"
        onClick={() => setTheme("system")}
      >
        System <Icon icon="Laptop" />
      </span>
    </motion.span>
  );
};

export default themetoggle;

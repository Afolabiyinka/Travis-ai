import React from "react";
import { TypewriterEffect } from "@/components/modern-ui/typewriter-effect";
import { motion } from "framer-motion";
import CustomBtn from "@/components/custom/CustomBtn";
import { AnimatedGradientText } from "@/components/modern-ui/animated-gradient-text";
import darkscreenshot from "@/assets/screenshots/Dark screenshot.png";
import lightScreenShot from "@/assets/screenshots/Light screenshot.png";
import { useThemeStore } from "@/modules/main/settings/store/theme/themeStore";

const Home: React.FC = () => {
  const { theme } = useThemeStore();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col w-full items-center min-h-screen justify-center text-center px-4 p-6 md:p-16"
    >
      <div className="flex flex-col items-center  text-center lg:text-left justify-center gap-4 sm:gap-6 w-full h-full  lg:px-8 xl:px-16">
        <motion.h1 className="text-5xl md:text-5xl lg:text-6xl font-bold">
          Meet <AnimatedGradientText>Travis Ai</AnimatedGradientText>
        </motion.h1>

        <TypewriterEffect
          words={[
            {
              text: "Ai",
              className: "text-3xl  md:text-4xl lg:text-4xl font-semibold",
            },
            {
              text: "Powered",
              className: "text-3xl smd:text-4xl lg:text-4xl font-semibold",
            },
            {
              text: "Excuse",
              className: "text-3xl  md:text-4xl lg:text-4xl font-semibold",
            },
            {
              text: "Generator ✨",
              className:
                "text-3xl md:text-4xl lg:text-4xl font-bold text-blue-500",
            },
          ]}
          className="leading-tight"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-[Roboto slab] text-center tracking-wider"
        >
          Excuses? Solved. Instantly. Your AI wingman for <br /> epic comebacks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-2"
        >
          <CustomBtn
            text="Generate Your Excuse ⚡"
            startIcon="Sparkles"
            linkpath={`auth/login`}
            isSolid={true}
          />
        </motion.div>
      </div>

      <motion.div
        className="w-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10 mt-8 lg:mt-0"
        initial={{ y: -10 }}
        animate={{ y: 1 }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          delay: 0.4,
        }}
      >
        <img
          src={theme === "light" ? lightScreenShot : darkscreenshot}
          className="w-full max-w-4xl rounded-lg shadow-lg overflow-hidden"
          alt="Travis AI Screenshot"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;

import React from "react";
import { TypewriterEffect } from "@/components/modern-ui/typewriter-effect";
import { motion } from "framer-motion";
import CustomBtn from "@/components/custom/CustomBtn";
import { AnimatedGradientText } from "@/components/modern-ui/animated-gradient-text";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-8xl mx-auto space-y-6 sm:space-y-8"
      >
        <div className="flex flex-col items-center w-full">
          <motion.h1 className="text-5xl md:text-7xl mb-4">
            Meet <AnimatedGradientText>Travis Ai</AnimatedGradientText>
          </motion.h1>

          <TypewriterEffect
            words={[
              {
                text: "Ai",
                className:
                  "text-4xl sm:text-5xl md:text-5xl font-bold text-gray-700",
              },
              {
                text: "Powered",
                className:
                  "text-4xl sm:text-5xl md:text-5xl font-bold text-gray-700",
              },
              {
                text: "Excuse",
                className:
                  "text-4xl sm:text-5xl md:text-5xl font-bold text-gray-700",
              },
              {
                text: "Generator ✨",
                className:
                  "text-4xl sm:text-5xl md:text-5xl font-bold text-gray-700 text-blue-500",
              },
            ]}
            className="leading-tight"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-3xl  text-gray-700 font-[Roboto slab]"
        >
          Never be speechless again.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="mt-2"
        >
          <CustomBtn
            text="Try It Now"
            startIcon="Sparkles"
            linkpath={`auth/login`}
            isSolid={true}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

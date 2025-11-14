import { useEffect, useState } from "react";
import { AnimatedGradientText } from "@/components/modern-ui/animated-gradient-text";
import { motion, AnimatePresence } from "framer-motion";
import { excuseSuggestions } from "@/lib/Random";
import { ExcuseGrid } from "@/components/custom/ExcuseCard";

const AiHome = () => {
  const phrases = [
    "Caught slippin’ again?",
    "What’s your excuse this time?",
    // "Didn’t see that one comin’, huh?",
    "Back at it again, I see.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4000); // 🔥 rotate every 4s for flow
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-3xl flex h-full w-full p-6 flex-col justify-center items-center relative">
      <div className="flex flex-col gap-10 w-full max-w-4xl items-center justify-center">
        {/* Animated Greeting */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={phrases[index]}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center"
          >
            <AnimatedGradientText className="text-4xl md:text-6xl font-[Lexend] mb-3 leading-tight">
              Hi Olayinka, <br /> {phrases[index]}
            </AnimatedGradientText>
          </motion.h1>
        </AnimatePresence>

        {/* Suggestions */}
        <ExcuseGrid />
      </div>
    </div>
  );
};

export default AiHome;

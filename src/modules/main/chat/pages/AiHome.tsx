import { useEffect, useState } from "react";
import { AnimatedGradientText } from "@/components/custom/animated-gradient";
import { motion, AnimatePresence } from "framer-motion";
import { ExcuseGrid } from "@/components/custom/ExcuseCard";
import { useAuthStore } from "@/store/auth/authStore";

const PHRASES = [
  "Caught slippin' again?",
  "What's your excuse this time?",
  "Back at it again, I see.",
];

const ROTATION_INTERVAL = 6000;

const AiHome = () => {
  const { user } = useAuthStore();
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-full w-full items-center justify-center rounded-3xl p-6">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={phraseIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center"
          >
            <AnimatedGradientText className="mb-3 text-4xl leading-tight md:text-5xl">
              Hi {user?.username}, <br /> {PHRASES[phraseIndex]}
            </AnimatedGradientText>
          </motion.div>
        </AnimatePresence>

        <ExcuseGrid />
      </div>
    </div>
  );
};

export default AiHome;
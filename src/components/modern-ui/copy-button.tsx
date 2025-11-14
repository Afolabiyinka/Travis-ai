"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import useToastMessage from "@/hooks/useToastMsg";

interface CopyButtonProps {
  value: string;
  className?: string;
}

export function CopyButton({ value }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false);

  const { toastSuccess } = useToastMessage();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setHasCopied(true);
    toastSuccess("Copied to clipboard");
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      className="group relative shadow backdrop-blur-3xl hover:bg-m-accent
             h-10 w-10 stroke-2  rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer p-3"
    >
      <AnimatePresence mode="wait">
        {hasCopied ? (
          <motion.div
            key="check"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Check className="h-4 w-4" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="cursor-pointer"
          >
            <Copy className="h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

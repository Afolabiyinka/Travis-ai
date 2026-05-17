import { motion } from "framer-motion";
import { excuseSuggestions } from "@/lib/Random";

interface Props {
  onSelect?: (value: string) => void;
}

export const ExcuseGrid = ({ onSelect }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
      {excuseSuggestions.map((suggestion) => {
        return (
          <motion.button
            key={suggestion}
            type="button"
            aria-label={`Select excuse: ${suggestion}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250 }}
            onClick={() => onSelect?.(suggestion)}
            className="
              p-5 text-sm text-center rounded-full
              border border-border
              hover:bg-m-accent hover:text-white
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m-accent
              transition-colors duration-200
              shadow-sm
              whitespace-nowrap overflow-hidden text-ellipsis
            "
          >
            {suggestion}
          </motion.button>
        );
      })}
    </div>
  );
};
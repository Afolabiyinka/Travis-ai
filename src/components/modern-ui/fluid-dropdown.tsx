"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/modern-ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useClickAway } from "./hooks/useClickaway";

export interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
}

interface FluidDropdownProps {
  categories: Category[];
  defaultCategoryId?: string;
  className?: string;
}

export const FluidDropdown = ({
  categories,
  defaultCategoryId,
  className,
}: FluidDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<Category>(
    categories.find((c) => c.id === defaultCategoryId) || categories[0]
  );
  const [hovered, setHovered] = React.useState<string | null>(null);

  const dropdownRef = React.useRef<HTMLDivElement>(null);
  useClickAway(dropdownRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  const activeId = hovered || selectedCategory.id;

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {/* Trigger */}
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full justify-between bg-background text-muted-foreground",
          "hover:bg-accent hover:text-accent-foreground",
          "transition-all duration-200 border",
          isOpen && "bg-accent text-accent-foreground"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="flex items-center">
          <selectedCategory.icon className="w-4 h-4 mr-2" />
          {selectedCategory.label}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </Button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 top-full mt-2 z-50"
          >
            <div
              className="rounded-lg border bg-popover shadow-lg p-1"
              role="menu"
            >
              <motion.div layout className="relative space-y-1">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    className={cn(
                      "flex items-center w-full px-3 py-2 rounded-md text-sm relative",
                      activeId === cat.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                    onMouseEnter={() => setHovered(cat.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsOpen(false);
                    }}
                    layout
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* highlight */}
                    {activeId === cat.id && (
                      <motion.div
                        layoutId="highlight"
                        className="absolute inset-0 rounded-md bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <cat.icon className="w-4 h-4 mr-2 relative z-2" />
                    <span className="relative z-2">{cat.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

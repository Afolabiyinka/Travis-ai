import { FluidDropdown } from "@/components/modern-ui/fluid-dropdown";
import { Layers, Shirt, Briefcase, Smartphone, Home } from "lucide-react";

export function BasicFluidDropdownDemo() {
  const categories = [
    { id: "all", label: "All", icon: Layers, color: "#A06CD5" },
    { id: "lifestyle", label: "Lifestyle", icon: Shirt, color: "#FF6B6B" },
    { id: "desk", label: "Desk", icon: Briefcase, color: "#4ECDC4" },
    { id: "tech", label: "Tech", icon: Smartphone, color: "#45B7D1" },
    { id: "home", label: "Home", icon: Home, color: "#F9C74F" },
  ];

  return (
    <FluidDropdown
      categories={categories}
      defaultCategoryId="all"
      className="max-w-xs"
    />
  );
}

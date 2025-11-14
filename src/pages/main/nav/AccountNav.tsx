import IconButton from "@/components/custom/iconbutton";
import React from "react";
import { Layers, Shirt, Briefcase, Smartphone, Home } from "lucide-react";
import { FluidDropdown } from "@/components/modern-ui/fluid-dropdown";

const AccountNav = () => {
  const categories = [
    { id: "all", label: "All", icon: Layers, color: "#A06CD5" },
    { id: "lifestyle", label: "Lifestyle", icon: Shirt, color: "#FF6B6B" },
    { id: "desk", label: "Desk", icon: Briefcase, color: "#4ECDC4" },
    { id: "tech", label: "Tech", icon: Smartphone, color: "#45B7D1" },
    { id: "home", label: "Home", icon: Home, color: "#F9C74F" },
  ];

  const [menu, setOpenMenu] = React.useState<boolean>(false);
  return (
    <div className="shadow rounded-full p-3 w-full h-full flex justify-end ">
      <IconButton icon="UserCircle" onClick={() => setOpenMenu(!open)} />

      {/* <FluidDropdown
        categories={categories}
        defaultCategoryId="all"
        className=""
      /> */}
    </div>
  );
};

export default AccountNav;

import { Outlet } from "react-router-dom";
import SideBar from "./nav/SideBar";
import { motion } from "motion/react";
import TextArea from "@/components/custom/TextArea";
import AccountNav from "./nav/AccountNav";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full gap-3 p-4 overflow-hidden">
      {/* Left Sidebar */}
      <SideBar />

      {/* Right Side */}
      <div className="flex flex-col w-full h-full overflow-hidden">
        {/* Top Nav */}
        <div className="">
          <AccountNav />
        </div>

        {/* Main Page Content */}
        <div className="flex-1 overflow-y-auto px-2">
          <Outlet />
        </div>

        {/* Bottom Input */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.4 }}
          className="w-full max-w-[600px] mx-auto pb-4"
        >
          <TextArea text="Generate Excuse" />
        </motion.div>
      </div>
    </div>
  );
};

export default MainLayout;

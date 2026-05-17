import { Outlet } from "react-router-dom";
import SideBar from "./nav/SideBar";
import { motion } from "motion/react";
import TextArea from "@/components/custom/TextArea";

import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">

        {/* Sidebar */}
        <SideBar />

        <SidebarInset className="flex flex-col w-full h-full">

          <div className="p-2">
            <SidebarTrigger className="md:hidden" />
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-4">
            <Outlet />
          </div>

          {/* Input area */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="w-full max-w-[650px] mx-auto px-3 pb-4"
          >
            <TextArea />
          </motion.div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
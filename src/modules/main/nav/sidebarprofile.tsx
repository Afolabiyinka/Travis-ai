import React from "react";
import { AnimatePresence, motion } from "motion/react";
import IconButton from "@/components/custom/iconbutton";
import CustomBtn from "@/components/custom/CustomBtn";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Settings from "../settings/pages/settings";
import { useAuthStore } from "@/store/auth/authStore";
import { AnimatedGradientText } from "@/components/custom/animated-gradient";

const Sidebarprofile = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { user, logout } = useAuthStore();
  return (
    <div
      className={`w-full  flex gap-1 transition-all duration-500 flex-col justify-between items-center`}
    >
      <div className="w-full flex gap-3 transition-all duration-500 flex-col  items-center p-1 rounded-3xl">
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full flex flex-col  gap-2 rounded-xl  p-3"
            >
              <Settings />
              <CustomBtn
                text="Log Out"
                isSolid
                endIcon="LogOut"
                variant={`destructive`}
                onClick={() => logout()}

              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOTER PROFILE */}
        <div className="flex  items-center justify-between gap-1 w-full rounded-full p-2">
          <div className="text-left flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src="https://i.pinimg.com/736x/ce/21/07/ce21071acfd1e9deb34850f70285a5f0.jpg"
                alt="Robinn"
              />
              <AvatarFallback>{user?.username.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <AnimatedGradientText className="font-inter text-lg font-medium">{user?.username}</AnimatedGradientText>
          </div>

          <IconButton
            icon={open ? "ChevronDown" : "ChevronUp"}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebarprofile;

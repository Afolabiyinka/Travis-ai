import React from "react";
import { AnimatePresence, motion } from "motion/react";
import IconButton from "./iconbutton";
import CustomBtn from "./CustomBtn";
import { HelpCircle } from "lucide-react";
import Icon from "./Icon";

const Sidebarprofile = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div
      className={`w-full shadow  flex gap-1 transition-all duration-500 flex-col justify-between items-center rounded-4xl `}
    >
      <div className="w-full flex gap-3 transition-all duration-500 flex-col justify-between items-center p-2 rounded-3xl">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full  flex flex-col items-center gap-3 rounded-full p-3 cursor-pointer"
            >
              <div className="flex items-center justify-start w-full gap-2">
                <HelpCircle className="h-9 w-9 text-gray-800 stroke-[1px] " />
                <p>Help</p>
              </div>
              <div
                className="flex gap-2
               justify-start items-center w-full"
              >
                <IconButton icon="Settings" />

                <p className="font-inter text-lg font-medium text-gray-800">
                  Settings
                </p>
              </div>
              <CustomBtn text="Log Out" isSolid endIcon="LogOut" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center justify-between gap-1  w-full rounded-full p-2 cursor-pointer">
          <div className="text-left flex justify-center items-center gap-3">
            <Icon icon="User" />

            <p className="font-inter text-lg font-medium text-gray-700">
              Olayinka Afolabi
            </p>
          </div>
          <IconButton
            icon={`${open ? "ChevronDown" : "ChevronUp"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebarprofile;

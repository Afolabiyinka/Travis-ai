import React from "react";
import { AnimatedGradientText } from "@/components/custom/animated-gradient";
import { titles } from "@/modules/main/libs/Random";
import Sidebarprofile from "./sidebarprofile";
import { AnimatePresence, motion } from "motion/react";
import Icon from "@/components/custom/Icon";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
} from "@/components/ui/sidebar";


import CustomInput from "@/components/custom/custom-input";
import CustomBtn from "@/components/custom/CustomBtn";
import IconButton from "@/components/custom/iconbutton";

const SideBar = () => {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] =
    React.useState<typeof titles>(titles);

  React.useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(titles);
      return;
    }

    setSearchResults(
      titles.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <Sidebar className="w-80 lg:w-72">
      {/* Header */}
      <SidebarHeader className="p-4">
        <AnimatedGradientText className="text-3xl">
          Travis Ai
        </AnimatedGradientText>

        <span className="mt-2 space-x-3">
          <CustomBtn
            startIcon="PenBox"
            text="New Chat"
            isSolid
          />
          <IconButton icon="Search" onClick={() => setSearchOpen((p) => !p)}
          />
        </span>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3"
            >
              <CustomInput
                startIcon="Search"
                placeholder="Search Chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="p-2 space-y-3 no-scrollbar">
        <SidebarGroup className="space-y-2 no-scrollbar">
          {searchResults.map((title, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-muted text-sm"
            >
              <Icon icon="MessageCircle" className="h-5 w-5" />
              <span className="truncate">{title}</span>
            </motion.button>
          ))}
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-1">
        <Sidebarprofile />
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBar;
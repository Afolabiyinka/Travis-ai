import React from "react";
import { MessageCircleMore } from "lucide-react";
import CustomBtn from "@/components/custom/CustomBtn";
import { AnimatedGradientText } from "@/components/modern-ui/animated-gradient-text";
import IconButton from "@/components/custom/iconbutton";
import { titles } from "@/lib/Random";
import Sidebarprofile from "@/components/custom/Sidebarprofile";

const SideBar = () => {
  const [asideOpen, setAsideOpen] = React.useState(false);
  // const [searchOpen, setSearchOpen] = React.useState<string>("");
  const sidebarRef = React.useRef(null);

  // Prevent body scroll when mobile sidebar is open
  React.useEffect(() => {
    if (asideOpen && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [asideOpen]);

  // const handleSearch = (query: string) => {
  //   titles.filter(() => )
  // };

  return (
    <>
      {/* Mobile toggle button */}

      <span
        className={`block lg:hidden fixed top-7 left-6 z-40 ${
          asideOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <IconButton onClick={() => setAsideOpen(true)} icon="Sidebar" />
      </span>

      {/* Mobile Overlay */}
      {asideOpen && (
        <div
          onClick={() => setAsideOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`
          fixed lg:static top-0 left-0 z-50 lg:z-auto
          h-full lg:h-full w-80 lg:w-96
       lg:rounded-2xl lg:m-2
          flex flex-col
          shadow-2xl lg:shadow-none
          transition-transform duration-300 ease-out
          ${asideOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 p-4 border-b border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <AnimatedGradientText className="text-5xl font-[inter]">
              Travis Ai
            </AnimatedGradientText>
          </div>
          <div className="flex w-full gap-3 items-center  py-4">
            <CustomBtn text="New Chat" endIcon="Pen" isSolid={true} />
            <IconButton icon="Search" tooltip="Search through your chats" />
          </div>
        </div>

        {/* Titles List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider mb-2 px-2">
            Recent Chats
          </div>
          {titles.map((title, i) => (
            <button
              key={i}
              className="w-full text-left hover:bg-gray-500  p-3 rounded-lg cursor-pointer text-sm transition-colors focus:outline-none  flex gap-2"
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setAsideOpen(false);
                }
              }}
            >
              <MessageCircleMore />
              <div className="truncate">{title}</div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <Sidebarprofile />
      </aside>
    </>
  );
};

export default SideBar;

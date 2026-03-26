import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/modern-ui/dialog";
import { UnderlineTabs } from "@/components/modern-ui/underline-tabs";
import Profile from "./profile";
import Themetoggle from "../components/themetoggle";
import { useThemeStore } from "@/modules/main/settings/store/theme/themeStore";
import Icon from "@/components/custom/Icon";
import SecuritySettings from "./security";
import { DialogTrigger } from "@radix-ui/react-dialog";
import IconButton from "@/components/custom/iconbutton";

const Settings = () => {
  const { theme } = useThemeStore();

  const tabs = [
    {
      id: "theme",
      label: "Theme",
      icon: <Icon icon={theme === "light" ? "Sun" : "Moon"} />,
      content: (
        <div className="p-5">
          <Themetoggle />
        </div>
      ),
    },
    {
      id: "profile",
      label: "Profile",
      icon: <Icon icon="User" />,
      content: (
        <div className="p-5">
          <Profile />
        </div>
      ),
    },

    {
      id: "auth",
      label: "Security",
      icon: <Icon icon="Lock" />,
      content: (
        <div className="p-5">
          <SecuritySettings />
        </div>
      ),
    },
  ];

  return (
    <Dialog>
      <DialogTrigger className="flex w-full items-center gap-2">
        <IconButton icon="Settings" />
        <p className="font-inter text-lg font-medium">Settings</p>
      </DialogTrigger>
      <DialogContent className=" w-full rounded-2xl p-2 space-y-5 flex justify-center items-center flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold tracking-tight">
            Settings
          </DialogTitle>
        </DialogHeader>
        <UnderlineTabs tabs={tabs} className="w-full" />
      </DialogContent>
    </Dialog>
  );
};

export default Settings;

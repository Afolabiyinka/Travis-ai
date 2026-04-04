import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { useDialogDesc } from "../store/useDialogDesc";

const Settings = () => {
  const { theme } = useThemeStore();
  const { title } = useDialogDesc();

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
    // {
    //   id: "customise",
    //   label: "Customise",
    //   icon: <Icon icon="Brush" />,
    //   content: <div className="p-5">customise</div>,
    // },
  ];

  return (
    <Dialog modal>
      <DialogTrigger className="w-full" asChild>
        <span className="flex w-full items-center gap-2 cursor-pointer">
          <Icon icon="Settings" />
          <p className="font-inter text-lg font-medium">Settings</p>
        </span>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader className="mb-3 text-center flex justify-center items-center">
          <DialogTitle className="text-2xl ">Settings</DialogTitle>
          <DialogDescription>{title}</DialogDescription>
        </DialogHeader>

        <UnderlineTabs tabs={tabs} className="w-full" />
      </DialogContent>
    </Dialog>
  );
};

export default Settings;

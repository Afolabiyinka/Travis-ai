import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Profile from "./profile";
import { useThemeStore } from "@/modules/main/settings/store/theme/themeStore";
import Icon from "@/components/custom/Icon";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useDialogDesc } from "../store/useDialogDesc";
import DeleteAccount from "../components/delete-account";
// import ChangePassword from "../components/change-password";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Themetoggle from "../components/themetoggle";

const Settings = () => {
  const { theme } = useThemeStore();
  const { title } = useDialogDesc();

  const tabs = [
    {
      id: "theme",
      label: "Theme",
      icon: <Icon icon={theme === "light" ? "Sun" : "Moon"} />,
      content: <Themetoggle />,
    },
    {
      id: "profile",
      label: "Profile",
      icon: <Icon icon="UserPen" />,
      content: <Profile />,
    },
    {
      id: "danger zone",
      label: "Danger Zone",
      icon: <Icon icon="AlertTriangle" />,
      content: <DeleteAccount />,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <span className="flex w-full items-center gap-2 cursor-pointer hover:bg-muted rounded-full p-2">
          <Icon icon="Settings" />
          <p className="text-lg font-medium">Settings</p>
        </span>
      </DialogTrigger>
      <DialogContent className="md:max-w-xl w-full max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription>{title}</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="theme" className="flex-1 overflow-hidden">
          <TabsList className="w-full grid grid-cols-3 h-auto">
            {tabs.map(({ icon, id, label }, i) => (
              <TabsTrigger
                value={id}
                key={i}
                className="flex items-center gap-2"
              >
                {icon}
                <span className="hidden sm:inline">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map(({ content, id }, i) => (
            <TabsContent
              value={id}
              key={i}
              className="mt-2  overflow-auto max-h-[60vh]"
            >
              {content}
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
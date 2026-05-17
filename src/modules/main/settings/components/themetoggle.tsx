import Icon, { type IconType } from "@/components/custom/Icon";
import { type Theme, useThemeStore } from "@/modules/main/settings/store/theme/themeStore";
import { useDialogDesc } from "../store/useDialogDesc";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cardStyle } from "@/css-variables/css-variables";

const Themetoggle = () => {
  const { setTheme, theme } = useThemeStore();
  const { setTitle } = useDialogDesc();

  useEffect(() => {
    setTitle("Change the appearance of the app");
  }, [setTitle]);

  const options = [
    { label: "Light", value: "light", icon: "Sun" },
    { label: "Dark", value: "dark", icon: "Moon" },
    { label: "System", value: "system", icon: "Laptop" },
  ];

  return (
    <Card className={cardStyle}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg font-semibold">Theme</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {/* Choose how the app looks and feels */}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        {options.map((opt) => {
          const active = theme === opt.value;

          return (
            <button
              key={opt.value}
              onClick={() => setTheme(opt.value as Theme)}
              className={`
                w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl
                transition-all duration-200
                border
                ${active
                  ? "bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700"
                  : "bg-transparent border-transparent hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon icon={opt.icon as IconType} />
                <span className="text-sm font-medium">{opt.label}</span>
              </div>

              {active && (
                <span className="text-xs px-2 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black">
                  Active
                </span>
              )}
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Themetoggle;
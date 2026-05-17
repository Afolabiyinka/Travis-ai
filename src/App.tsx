import React from "react";
import RoutesConfig from "./routes/routes-config";
import { useThemeStore } from "./modules/main/settings/store/theme/themeStore";
import { Toaster } from "sonner";
import { Loader2 } from "lucide-react";

function App() {
  const { theme } = useThemeStore();
  React.useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.body.classList.add(systemTheme);

      return;
    }
  }, [theme]);
  return (
    <div className="min-h-screen">
      <RoutesConfig />
      <Toaster
        position="top-right"
        richColors
        theme={theme}
        icons={{
          loading: <Loader2 className="animate-spin h-4 w-4" />
        }}
        toastOptions={{ style: { borderRadius: "100px" } }}
      />
    </div>
  );
}

export default App;

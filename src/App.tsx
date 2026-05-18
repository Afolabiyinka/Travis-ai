import React from "react";
import RoutesConfig from "./shared/routes/routes-config";
import { useThemeStore } from "./modules/main/settings/store/theme/themeStore";
import { Toaster } from "sonner";
import { Loader2 } from "lucide-react";
import { useGetUser } from "./modules/main/settings/hooks/useGetUser";
import { useUser } from "./modules/main/settings/store/authStore";

function App() {
  const { theme } = useThemeStore();


  const { fetchedUser, userLoading } = useGetUser();
  const { setUser, setAuthResolved } = useUser();

  React.useEffect(() => {
    if (!userLoading && fetchedUser) {
      setUser(fetchedUser || null);
      setAuthResolved(true);
    }
  }, [fetchedUser, userLoading, setUser, setAuthResolved]);
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

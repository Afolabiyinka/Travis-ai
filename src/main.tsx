import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesConfig from "./config/routes-config.tsx";
import { ThemeFather } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeFather>
      <RoutesConfig />
    </ThemeFather>
  </StrictMode>
);

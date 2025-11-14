import { routes } from "./Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const RoutesConfig = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default RoutesConfig;

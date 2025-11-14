import { Outlet } from "react-router-dom";
import NavBar from "./nav/NavBar";

const LandingLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default LandingLayout;

import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/auth/authStore";

const AuthLayout = () => {
  const { user } = useAuthStore();

  if (user) {
    return <Navigate to="/ai/home" replace />;
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      {/* <div className="lg:w-[50%] h-full lg:block hidden shadow p-6">
        <img src={authImage} className="h-full w-full rounded-4xl" />
      </div> */}
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

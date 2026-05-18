import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../main/settings/store/authStore";
import { useGetUser } from "../main/settings/hooks/useGetUser";
import LoadingContainer from "@/components/custom/loader";

const AuthLayout = () => {
  const { user } = useUser();
  const { userLoading } = useGetUser()

  if (user) {
    return <Navigate to="/ai/home" replace />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-muted/10">
      {userLoading ? <LoadingContainer /> : <Outlet />}
    </div>
  );
};

export default AuthLayout;
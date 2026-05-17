import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/auth/authStore";

const AuthLayout = () => {
  const { user } = useAuthStore();

  // redirect logged-in users away from auth pages
  if (user) {
    return <Navigate to="/ai/home" replace />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-muted/10">
      <div className="w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
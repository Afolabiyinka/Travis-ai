import CustomBtn from "@/components/custom/CustomBtn";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useLogin from "../hooks/useLogin";
import Loader from "@/components/custom/secondaryloader";
import { Checkbox } from "@/components/ui/checkbox";
import CustomInput from "@/components/custom/custom-input";
import { useState } from "react";

const Login = () => {
  const { handlelogin, loginData, setLoginData, isLoading } = useLogin();
  const [remember, setRemember] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <motion.form
        onSubmit={handlelogin}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md space-y-6 text-center"
      >
        <h1 className="text-3xl font-bold">
          Sign in to your account
        </h1>

        <div className="space-y-4 text-left">
          <CustomInput
            value={loginData.email}
            startIcon="Mail"
            placeholder="Email"
            type="email"
            onChange={(val) =>
              setLoginData({ ...loginData, email: val })
            }
          />

          <CustomInput
            value={loginData.password}
            startIcon="Lock"
            placeholder="Password"
            type="password"
            onChange={(val) =>
              setLoginData({ ...loginData, password: val })
            }
          />

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(val) => setRemember(!!val)}
              />
              <label htmlFor="remember" className="text-sm">
                Remember me
              </label>
            </span>

            <Link
              to="/forgot-password"
              className="text-sm font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="w-full">
          {isLoading ? (
            <span className="flex justify-center items-center h-12 rounded-full bg-primary text-background">
              <Loader />
            </span>
          ) : (
            <CustomBtn
              className="w-full"
              text="Log in"
              isSolid
              type="submit"
              endIcon="ArrowRight"
            />
          )}
        </div>

        <p className="text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
import React from "react";
import CustomBtn from "@/components/custom/CustomBtn";
import Input from "@/components/custom/Input";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import type { LoginPayload } from "./libs/types";
import useToastMessage from "@/hooks/useToastMsg";
import { Toaster } from "sonner";

const Login = () => {
  const [loginData, setLoginData] = React.useState<LoginPayload>({
    email: "",
    password: "",
  });
  const { toastError } = useToastMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginData.email) {
      toastError("Email is required");
      return;
    }

    if (!loginData.password) {
      toastError("Password is required");
      return;
    }

    // validate password strength
    if (loginData.password.length < 6) {
      toastError("Password must be at least 6 characters");
      return;
    }

    if (loginData.password.toLowerCase() === loginData.password) {
      toastError("Password must contain at least one uppercase letter");
      return;
    }
  };
  return (
    <div className="min-h-screen w-screen md:w-screen  bg-patterened flex flex-col justify-center items-center">
      <motion.form
        onSubmit={handleSubmit}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl px-4 py-24 space-y-2 flex flex-col justify-center items-center gap-3 "
      >
        <h1 className="text-[1.6rem] md:text-4xl tracking-normal font-bold">
          Sign in to your account
        </h1>
        <div className="w-full  flex flex-col md:justify-center md:items-center justify-start items-start ">
          <Input
            value={loginData.email}
            startIcon={`Mail`}
            placeholder="Email"
            type="email"
            onChange={(val) =>
              setLoginData({
                ...loginData,
                email: val,
              })
            }
          />
          <Input
            value={loginData.password}
            startIcon="Lock"
            placeholder="Password"
            type="password"
            onChange={(val) =>
              setLoginData({
                ...loginData,
                password: val,
              })
            }
          />

          <div className="flex mt-2 justify-between w-full">
            <span className="flex gap-2  mt-3 w-fit items-center  justify-start">
              <input type="checkbox" id="checkbox" className="w-4 h-4" />
              <label htmlFor="checkbox" className="font-semibold text-lg">
                Remember me{" "}
              </label>
            </span>
            <span>
              <a className="flex gap-2  mt-3  p-2 w-full items-center md:justify-center justify-start">
                Forgot passsword?
              </a>
            </span>
          </div>
        </div>
        <span className="w-full mt-3">
          <CustomBtn text="Login" isSolid={true} type="submit" />
        </span>
        <p className="mt-3 text-lg md:text-xl">
          Don't have an account?{" "}
          <Link to={`/auth/signup`} className="text-m-accent">
            Create One
          </Link>
        </p>
      </motion.form>
      <Toaster position="top-right" />
    </div>
  );
};

export default Login;

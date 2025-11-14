import CustomBtn from "@/components/custom/CustomBtn";
import Input from "@/components/custom/Input";
import { Link } from "react-router-dom";
import { easeIn, motion } from "motion/react";
import { User } from "lucide-react";
import type { SignupPayload } from "./libs/types";
import useToastMessage from "@/hooks/useToastMsg";

import { Toaster } from "sonner";
import React from "react";
const SignUp = () => {
  const { toastError } = useToastMessage();
  const [signUpData, setSignUpData] = React.useState<SignupPayload>({
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!signUpData.email) {
      toastError("Email is required");
    }
    if (!signUpData.password) {
      toastError("Password is required");
    }
    if (!signUpData.username) {
      toastError("Username is required");
    }

    if (signUpData.password.length < 6) {
      toastError("Password must be at least 6 characters");
      return;
    }

    if (signUpData.password.toLowerCase() === signUpData.password) {
      toastError("Password must contain at least one uppercase letter");
      return;
    }
  };

  return (
    <motion.div className="min-h-screen  from-blue-500 to-red-100 min-w-screen flex flex-col justify-center items-center">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeIn }}
        className="rounded-xl px-4 py-24 space-y-2 flex flex-col justify-center items-center  gap-3 "
      >
        <h1 className="text-[1.7rem] md:text-4xl  font-[inter]  text-m-accent  tracking-normal font-semibold flex gap-3 items-center">
          Create a new account <User size={40} className="stroke-[2px]" />
        </h1>
        <motion.div
          className="w-full flex flex-col justify-center items-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 1, opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
          viewport={{ once: true }}
        >
          <Input
            startIcon={`User`}
            placeholder="Username"
            type="text"
            value={signUpData.username}
            onChange={(val) => setSignUpData({ ...signUpData, username: val })}
          />
          <Input
            startIcon={`Mail`}
            placeholder="Email"
            type="email"
            value={signUpData.email}
            onChange={(val) => setSignUpData({ ...signUpData, email: val })}
          />
          <Input
            startIcon="Lock"
            placeholder="Password"
            type="password"
            value={signUpData.password}
            onChange={(val) => setSignUpData({ ...signUpData, password: val })}
          />
          <span className="w-full  mt-6">
            <CustomBtn
              text="Create Account"
              // endIcon="ArrowRight"
              isSolid={true}
              type="submit"
            />
          </span>
        </motion.div>

        <p className="mt-3 text-lg md:text-xl">
          Already have an account?{" "}
          <Link to={`/auth/login`} className="text-m-accent">
            Sign In
          </Link>
        </p>
      </motion.form>
      <Toaster position="top-right" />
    </motion.div>
  );
};

export default SignUp;

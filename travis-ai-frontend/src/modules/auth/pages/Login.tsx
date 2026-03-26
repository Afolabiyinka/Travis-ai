import CustomBtn from "@/components/custom/CustomBtn";
import Input from "@/modules/auth/components/Input";
import { Link } from "react-router-dom";
import { easeIn, motion } from "motion/react";
import useLogin from "../hooks/useLogin";
import Loader from "@/components/custom/secondaryloader";

const Login = () => {
  const { handlelogin, loginData, setLoginData, isLoading } = useLogin();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <motion.form
        onSubmit={handlelogin}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ x: -30 }}
        transition={{ duration: 0.5, ease: easeIn }}
        className="rounded-xl px-2  space-y-6 text-center md:w-md w-full"
      >
        <h1 className=" tracking-normal text-3xl font-bold">
          Sign in to your account
        </h1>
        <div className="w-full space-y-4">
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

          <div className="flex justify-between items-center w-full">
            <span className="flex gap-1  w-fit items-center  justify-start">
              <input type="checkbox" id="checkbox" className="w-4 h-4" />
              <label htmlFor="checkbox" className="text-lg">
                Remember me
              </label>
            </span>
            <span>
              <a className="flex gap-2 p-2 w-full items-center md:justify-center font-semibold justify-start">
                Forgot passsword?
              </a>
            </span>
          </div>
        </div>
        <span className="w-full h-full">
          {isLoading ? (
            <span className="flex w-full rounded-full justify-center items-center h-14 p-3 bg-m-accent text-white">
              <Loader />
            </span>
          ) : (
            <CustomBtn
              text={`Log in`}
              isSolid={true}
              type="submit"
              endIcon="ArrowRight"
            />
          )}
        </span>
        <p className="mt-3 text-lg md:text-xl">
          Don't have an account?{" "}
          <Link
            to={`/auth/signup`}
            className="hover:underline underline-offset-4"
          >
            Create One
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;

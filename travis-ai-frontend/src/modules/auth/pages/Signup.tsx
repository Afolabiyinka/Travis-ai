import CustomBtn from "@/components/custom/CustomBtn";
import Input from "@/modules/auth/components/Input";
import { Link } from "react-router-dom";
import { easeIn, motion } from "motion/react";
import useSignUp from "../hooks/useSignup";
import Loader from "@/components/custom/secondaryloader";
import Icon from "@/components/custom/Icon";

const SignUp = () => {
  const { handleSubmit, setSignUpData, signUpData, isLoading } = useSignUp();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <motion.form
        onSubmit={handleSubmit}
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ x: -30 }}
        transition={{ duration: 0.5, ease: easeIn }}
        className="rounded-xl px-4  space-y-4 md:w-md w-full text-center"
      >
        <h1 className="text-[1.7rem] md:text-3xl tracking-normal font-semibold flex gap-3 items-center justify-center">
          Create a new account <Icon icon="UserPlus" />
        </h1>

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
        <Input
          startIcon="Lock"
          placeholder="Confirm Password"
          type="password"
          value={signUpData.confirmedPassword}
          onChange={(val) =>
            setSignUpData({ ...signUpData, confirmedPassword: val })
          }
        />
        <span className="w-full">
          {isLoading ? (
            <span className="flex w-full rounded-full justify-center items-center h-full p-3 bg-m-accent">
              <Loader />
            </span>
          ) : (
            <CustomBtn text={`Create Account`} isSolid={true} type="submit" />
          )}{" "}
        </span>

        <p className="mt-3 text-lg md:text-xl">
          Already have an account?
          <Link to={`/login`} className="text-m-accent">
            Sign In
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default SignUp;

import CustomBtn from "@/components/custom/CustomBtn";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import useSignUp from "../hooks/useSignup";
import Loader from "@/components/custom/secondaryloader";
import Icon from "@/components/custom/Icon";
import CustomInput from "@/components/custom/custom-input";

const SignUp = () => {
  const { handleSubmit, setSignUpData, signUpData, isLoading } =
    useSignUp();

  const passwordsMatch =
    signUpData.password === signUpData.confirmedPassword;

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md space-y-4 text-center"
      >
        <h1 className="text-2xl md:text-3xl font-semibold flex items-center justify-center gap-2">
          Create account <Icon icon="UserPlus" />
        </h1>

        <div className="space-y-3 text-left">
          <CustomInput
            startIcon="User"
            placeholder="Username"
            type="text"
            value={signUpData.username}
            onChange={(val) =>
              setSignUpData({ ...signUpData, username: val })
            }
          />

          <CustomInput
            startIcon="Mail"
            placeholder="Email"
            type="email"
            value={signUpData.email}
            onChange={(val) =>
              setSignUpData({ ...signUpData, email: val })
            }
          />

          <CustomInput
            startIcon="Lock"
            placeholder="Password"
            type="password"
            value={signUpData.password}
            onChange={(val) =>
              setSignUpData({ ...signUpData, password: val })
            }
          />

          {/* <CustomInput
            startIcon="Lock"
            placeholder="Confirm Password"
            type="password"
            value={signUpData.confirmedPassword}
            onChange={(val) =>
              setSignUpData({
                ...signUpData,
                confirmedPassword: val,
              })
            }
          /> */}

          {!passwordsMatch && signUpData.confirmedPassword && (
            <p className="text-sm text-red-500">
              Passwords do not match
            </p>
          )}
        </div>

        <div>
          {isLoading ? (
            <span className="flex w-full justify-center items-center p-3 rounded-full bg-m-accent text-white">
              <Loader />
            </span>
          ) : (
            <CustomBtn
              text="Create Account"
              isSolid
              type="submit"
              disabled={!passwordsMatch}
            />
          )}
        </div>

        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-m-accent">
            Sign in
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default SignUp;  
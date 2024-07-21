import { Button } from "@/components/ui/button";
import FormInput from "@/components/ValidationInput";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router-dom";

const SignupCard = ({ handleBackToLogin }) => {
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formValues) => {
    setLoading(true);
    console.log("Formvalues", formValues);

    //api call and success then
    naviagte("/");
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, x: "100%" }}
        className="registration-form"
      >
        <div className="text-2xl font-bold">Register</div>
        <div className="text-md text-neutral-500 mb-6">
          Create your account?
        </div>
        <div className="space-y-3 mb-4">
          <FormInput
            control={control}
            name="username"
            type="text"
            placeholder="Enter your Username"
            rules={{
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            }}
          />
          <FormInput
            control={control}
            name="email"
            type="email"
            placeholder="Enter your email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            }}
          />
          <FormInput
            control={control}
            name="password"
            type="password"
            placeholder="Enter your password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
          />
        </div>
        <div className="flex justify-center">
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? <Loader /> : "Register"}
          </Button>
        </div>
        <div className="text-sm mt-4">
          Already have an account?{" "}
          <span
            className="cursor-pointer hover:underline hover:text-blue-500"
            onClick={() => handleBackToLogin()}
          >
            Login
          </span>
        </div>
        <Button
          title="coming soon"
          className="w-full mt-4 bg-transparent text-black hover:bg-slate-50 cursor-not-allowed "
        >
          Continue with google
        </Button>
        <Button
          title="coming soon"
          className="w-full mt-4 bg-transparent text-black hover:bg-slate-50 cursor-not-allowed"
        >
          Continue with facebook
        </Button>
      </motion.div>
    </form>
  );
};
export default SignupCard;

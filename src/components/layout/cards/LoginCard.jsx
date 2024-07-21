import { Button } from "@/components/ui/button";
import FormInput from "@/components/ValidationInput";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/Loader";
import { useToast } from "@/components/ui/use-toast";

const LoginCard = ({ handleSignupClick }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (formValues) => {
    setLoading(true);
    console.log("Formvalues", formValues);
    navigate("/");
    toast({
      title: "Login Successfully",
      variant:"destructive"
      // description: "Friday, February 10, 2023 at 5:57 PM",
    });
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
        <div className="text-2xl font-bold">Login</div>
        <div className="text-md text-neutral-500 mb-6">
          Welcome to the chatapp
        </div>
        <div className="space-y-3 mb-4">
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
          <Button className="w-full" type="submit">
            {loading ? <Loader /> : "Login"}
          </Button>
        </div>
        <div className="text-sm mt-4">
          Do not have an account?{" "}
          <span
            className="cursor-pointer hover:underline hover:text-blue-500"
            onClick={() => handleSignupClick()}
          >
            Signup
          </span>
        </div>
        <Button
          title="coming soon"
          className="w-full mt-4 text-black  cursor-not-allowed"
          variant="secondary"
        >
          Continue with google
        </Button>
        <Button
          title="coming soon"
          className="w-full mt-4 text-black  cursor-not-allowed"
          variant="secondary"
        >
          Continue with facebook
        </Button>
      </motion.div>
    </form>
  );
};

export default LoginCard;

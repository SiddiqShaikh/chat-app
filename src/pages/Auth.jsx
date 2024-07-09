import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Auth = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleSignupClick = () => {
    setShowRegistration(true);
  };

  const handleBackToLogin = () => {
    setShowRegistration(false);
  };
  return (
    <div className="min-h-screen">
      <div className="w-full h-16 flex items-center px-6 shadow-sm">
        <div className="text-lg font-bold">
          Chat<span className="font-normal">app</span>
        </div>
      </div>
      <div className="flex min-h-[calc(100vh_-_64px)]">
        <div className="flex-1 relative hidden md:block">
          <div className="absolute border border-black top-12 right-16">
            Hello
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full h-full px-2 flex justify-center items-center">
            <div className="bg-white w-full shadow-lg px-4 py-4 rounded-md max-w-[700px] mx-auto ">
              {!showRegistration ? (
                <>
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
                      <Input placeholder="Enter your email.." />
                      <Input placeholder="Enter your password.." />
                    </div>
                    <div className="flex justify-center">
                      <Button className="w-full">Login</Button>
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
                </>
              ) : (
                <>
                  {" "}
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
                      <Input placeholder="Enter your email.." />
                      <Input placeholder="Enter your password.." />
                    </div>
                    <div className="flex justify-center">
                      <Button className="w-full">Register</Button>
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

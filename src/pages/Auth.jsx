import LoginCard from "@/components/layout/cards/LoginCard";
import SignupCard from "@/components/layout/cards/SignupCard";
import React, { useState } from "react";

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
          <div className="px-4 min-h-[calc(100vh_-_64px)] flex justify-center flex-col">
            <div className="text-xl md:text:2xl lg:text-4xl font-bold">
              Welcome to the chat app
            </div>
            <div className="text-sm lg:text-lg text-neutral-400">
              Ready to laugh, love, and explore with the right person
            </div>
          </div>
          {/* <div className="absolute  top-12 right-0 lg:right-16">
            <div className="border border-black" >Seeking someone to share sunsets, laughter, and new experiences</div>
          </div> */}
        </div>
        <div className="flex-1">
          <div className="w-full h-full px-2 flex justify-center items-center">
            <div className="bg-white w-full shadow-lg px-4 py-4 rounded-md max-w-[700px] mx-auto ">
              {!showRegistration ? (
                <>
                  <LoginCard handleSignupClick={handleSignupClick} />
                </>
              ) : (
                <>
                  <SignupCard handleBackToLogin={handleBackToLogin} />
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




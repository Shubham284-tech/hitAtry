import EntireLayout from "@/components/layoutStructuring/EntireLayout";
import React from "react";

const SignIn = () => {
  return (
    <EntireLayout
      page="email"
      heading="Welcome Back"
      btnTxt="Continue"
      routingTo="SignUp"
      routingText="Don’t have an account?"
      redirect="/password"
    />
  );
};

export default SignIn;

import EntireLayout from "@/components/layoutStructuring/EntireLayout";
import React from "react";

const SignUp = () => {
  return (
    <EntireLayout
      page="email"
      heading="Create an Account"
      btnTxt="Continue"
      redirect="/create-password"
      routingTo="Login"
      routingText="Already have an account?"
    />
  );
};

export default SignUp;
